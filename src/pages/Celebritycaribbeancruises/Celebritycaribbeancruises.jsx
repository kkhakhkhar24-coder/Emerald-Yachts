import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebritycaribbeancruises.css'
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
    Fish,
    Palmtree,
    Umbrella,
    ShoppingBag,
    Footprints,
    CloudRain
} from 'lucide-react'

const iconMap = {
    Ship, Anchor, Compass, Wine, UtensilsCrossed, Wind, Sun, BedDouble, Sparkles,
    Crown, DoorOpen, Waves, Wifi, Utensils, ConciergeBell, GlassWater, Music,
    Landmark, TreeDeciduous, Mountain, Calendar, Plane, FileSearch, BadgePercent,
    Sliders, HeartHandshake, Users, MapPin, Globe, ShieldCheck, Coffee, Home,
    Star, Castle, Building2, Sunrise, ChefHat, Leaf, Droplet, Camera, Clock, ThumbsUp,
    Fish, Palmtree, Umbrella, ShoppingBag, Footprints, CloudRain
}


function CcrIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CcrIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CcrIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CcrIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CcrIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CcrIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CcrIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CcrIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CcrIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CcrPlaceholder({ label, className = '' }) {
    return (
        <div className={`ccrb-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CcrIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityCaribbeanCruises() {
    const [ccrActiveFaq, setCcrActiveFaq] = useState(null)
    const [ccrActiveStateroom, setCcrActiveStateroom] = useState('interior')
    const ccrToggleFaq = (index) => {
        setCcrActiveFaq(ccrActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const ccrGlance = [
        { feature: 'Region', detail: 'Caribbean' },
        { feature: 'Main Itinerary Types', detail: 'Eastern, Western & Southern Caribbean' },
        { feature: 'Cruise Length', detail: 'Short getaways to longer voyages' },
        { feature: 'Cruise Style', detail: 'Premium' },
        { feature: 'Popular Departure Ports', detail: 'Fort Lauderdale, Miami & San Juan' },
        { feature: 'Eastern Caribbean', detail: 'St. Thomas, St. Maarten, Puerto Rico & Bahamas' },
        { feature: 'Western Caribbean', detail: 'Jamaica, Grand Cayman, Mexico & Belize' },
        { feature: 'Southern Caribbean', detail: 'Aruba, Curaçao, Bonaire & other southern islands' },
        { feature: 'Main Activities', detail: 'Beaches, snorkeling, diving, sightseeing & excursions' },
        { feature: 'Cruise Season', detail: 'Year-round' },
        { feature: 'Peak Winter Season', detail: 'December–April' },
        { feature: 'Summer Season', detail: 'May–August' },
        { feature: 'Hurricane Season', detail: 'June–November' },
        { feature: 'Pre-Cruise Stays', detail: 'Available' },
        { feature: 'Post-Cruise Stays', detail: 'Available' }
    ]

    const ccrWhyChoose = [
        { label: 'Relax on tropical beaches', icon: 'Palmtree' },
        { label: 'Snorkel in clear water', icon: 'Waves' },
        { label: 'Explore coral reefs', icon: 'Fish' },
        { label: 'Visit historic towns', icon: 'Landmark' },
        { label: 'Experience local cuisine', icon: 'ChefHat' },
        { label: 'Shop in Caribbean ports', icon: 'ShoppingBag' },
        { label: 'Enjoy watersports', icon: 'Umbrella' },
        { label: 'Explore national parks', icon: 'TreeDeciduous' },
        { label: 'Take scenic island tours', icon: 'Compass' },
        { label: 'Combine several islands in one vacation', icon: 'Ship' }
    ]

    const ccrShipFactors = [
        { label: 'Ship size', icon: 'Ship' },
        { label: 'Stateroom category', icon: 'BedDouble' },
        { label: 'Suite options', icon: 'Crown' },
        { label: 'Dining', icon: 'Utensils' },
        { label: 'Pools', icon: 'Waves' },
        { label: 'Outdoor spaces', icon: 'Sun' },
        { label: 'Entertainment', icon: 'Music' },
        { label: 'Departure port', icon: 'MapPin' },
        { label: 'Number of sea days', icon: 'Calendar' },
        { label: 'Port duration', icon: 'Clock' },
        { label: 'Itinerary', icon: 'Compass' }
    ]

    const ccrEasternStops = [
        { label: 'St. Thomas', icon: 'MapPin' },
        { label: 'St. Maarten', icon: 'MapPin' },
        { label: 'Puerto Rico', icon: 'MapPin' },
        { label: 'Bahamas', icon: 'MapPin' },
        { label: 'Tortola', icon: 'MapPin' },
        { label: 'St. Kitts', icon: 'MapPin' },
        { label: 'Antigua', icon: 'MapPin' },
        { label: 'Dominican Republic', icon: 'MapPin' },
        { label: 'Other eastern Caribbean destinations', icon: 'Compass' }
    ]

    const ccrEasternBestFor = ['Beautiful beaches', 'Snorkeling', 'Shopping', 'Island sightseeing', 'Historic towns', 'Scenic coastal experiences']

    const ccrWesternStops = [
        { label: 'Cozumel', icon: 'MapPin' },
        { label: 'Grand Cayman', icon: 'MapPin' },
        { label: 'Jamaica', icon: 'MapPin' },
        { label: 'Belize', icon: 'MapPin' },
        { label: 'Costa Maya', icon: 'MapPin' },
        { label: 'Roatán', icon: 'MapPin' },
        { label: 'Key West', icon: 'MapPin' },
        { label: 'Other Caribbean and Central American destinations', icon: 'Compass' }
    ]

    const ccrWesternBestFor = ['Mayan history', 'Diving', 'Snorkeling', 'Beaches', 'Cenotes', 'Adventure excursions', 'Wildlife', 'Local culture']

    const ccrSouthernStops = [
        { label: 'Aruba', icon: 'MapPin' },
        { label: 'Curaçao', icon: 'MapPin' },
        { label: 'Bonaire', icon: 'MapPin' },
        { label: 'Barbados', icon: 'MapPin' },
        { label: 'St. Lucia', icon: 'MapPin' },
        { label: 'Grenada', icon: 'MapPin' },
        { label: 'Martinique', icon: 'MapPin' },
        { label: 'Antigua', icon: 'MapPin' }
    ]

    const ccrSouthernBestFor = ['Longer island itineraries', 'Distinctive Caribbean cultures', 'Beaches', 'Diving', 'Snorkeling', 'Scenic landscapes', 'Less-repeated Caribbean destinations']

    const ccrRegionCompare = [
        { feature: 'Main Focus', eastern: 'Beaches & island culture', western: 'Adventure & history', southern: 'Islands & scenery' },
        { feature: 'Popular Ports', eastern: 'St. Thomas, St. Maarten', western: 'Jamaica, Grand Cayman, Cozumel', southern: 'Aruba, Curaçao, Barbados' },
        { feature: 'Beaches', eastern: 'Excellent', western: 'Excellent', southern: 'Excellent' },
        { feature: 'Snorkeling', eastern: 'Excellent', western: 'Excellent', southern: 'Excellent' },
        { feature: 'Diving', eastern: 'Excellent', western: 'Excellent', southern: 'Excellent' },
        { feature: 'History', eastern: 'Strong', western: 'Strong', southern: 'Strong' },
        { feature: 'Adventure', eastern: 'Moderate–High', western: 'High', southern: 'Moderate–High' },
        { feature: 'Best For', eastern: 'First-time visitors', western: 'Adventure travelers', southern: 'Repeat Caribbean travelers' }
    ]

    const ccrChooseEastern = ['Classic Caribbean islands', 'Beaches', 'Shopping', 'Snorkeling', 'Island sightseeing']
    const ccrChooseWestern = ['Adventure', 'Mayan culture', 'Diving', 'Snorkeling', 'Jamaica', 'Mexico']
    const ccrChooseSouthern = ['Distinctive islands', 'Aruba and Curaçao', 'Longer island-focused routes', 'Diving', 'Scenic landscapes']

    const ccrIslands = [
        {
            name: 'St. Thomas',
            intro: 'St. Thomas is known for:',
            bullets: ['Beaches', 'Shopping', 'Scenic overlooks', 'Snorkeling', 'Island tours'],
            highlight: 'It can also serve as a gateway to nearby destinations.'
        },
        {
            name: 'St. Maarten',
            intro: 'St. Maarten combines:',
            bullets: ['Beaches', 'Shopping', 'French and Dutch influences', 'Scenic viewpoints', 'Local dining'],
            highlight: ''
        },
        {
            name: 'Puerto Rico',
            intro: 'San Juan offers a different Caribbean experience, combining tropical scenery with Spanish colonial history. Travelers can explore:',
            bullets: ['Old San Juan', 'Historic forts', 'Local cuisine', 'Architecture', 'Beaches'],
            highlight: ''
        },
        {
            name: 'St. Lucia',
            intro: 'St. Lucia is particularly known for dramatic scenery, tropical landscapes and the Pitons.',
            bullets: [],
            highlight: ''
        },
        {
            name: 'Barbados',
            intro: 'Barbados combines:',
            bullets: ['Beaches', 'British-Caribbean history', 'Local food', 'Rum culture', 'Coastal scenery'],
            highlight: ''
        },
        {
            name: 'Aruba',
            intro: 'Aruba is known for its:',
            bullets: ['Dry tropical climate', 'Beaches', 'Watersports', 'Desert-like landscapes', 'Clear water'],
            highlight: ''
        },
        {
            name: 'Curaçao',
            intro: 'Curaçao offers:',
            bullets: ['Dutch-Caribbean architecture', 'Colorful waterfronts', 'Beaches', 'Snorkeling', 'Diving', 'Local culture'],
            highlight: ''
        },
        {
            name: 'Jamaica',
            intro: 'Jamaica offers opportunities for:',
            bullets: ['Beaches', 'Waterfalls', 'Music', 'Local cuisine', 'Adventure', 'Cultural experiences'],
            highlight: ''
        }
    ]

    const ccrPortsTable = [
        { feature: 'Eastern Caribbean', detail: 'St. Thomas, St. Maarten, Tortola, Puerto Rico' },
        { feature: 'Western Caribbean', detail: 'Jamaica, Grand Cayman, Cozumel, Belize' },
        { feature: 'Southern Caribbean', detail: 'Aruba, Curaçao, Bonaire, Barbados' },
        { feature: 'Central Caribbean', detail: 'Bahamas and selected destinations' },
        { feature: 'Puerto Rico', detail: 'San Juan' },
        { feature: 'Mexico', detail: 'Cozumel, Costa Maya and selected ports' },
        { feature: 'Dominican Republic', detail: 'Selected itineraries' },
        { feature: 'British Virgin Islands', detail: 'Tortola and selected destinations' }
    ]

    const ccrExcursionCategories = [
        { title: 'Beach Excursions', icon: 'Umbrella', items: ['Resort day passes', 'Private beaches', 'Catamaran trips', 'Beach clubs', 'Snorkeling beaches'] },
        { title: 'Snorkeling & Diving', icon: 'Fish', items: ['Reef snorkeling', 'Scuba diving', 'Turtle encounters', 'Coral reef exploration', 'Underwater photography'] },
        { title: 'Adventure Excursions', icon: 'Compass', items: ['Ziplining', 'Waterfalls', 'ATV experiences', 'Jungle tours', 'Kayaking', 'Paddleboarding', 'Hiking'] },
        { title: 'Cultural Excursions', icon: 'Landmark', items: ['Historic districts', 'Local markets', 'Colonial architecture', 'Museums', 'Food tours', 'Cultural performances'] }
    ]

    const ccrDeparturePorts = [
        { name: 'Fort Lauderdale', desc: 'Fort Lauderdale is one of the most convenient gateways for Caribbean cruising. It works particularly well for travelers who want to combine a cruise with South Florida, Miami, Palm Beach and beach stays.', icon: 'Anchor' },
        { name: 'Miami', desc: 'Miami is another major Florida gateway for Caribbean vacations. A pre-cruise stay can add South Beach, Art Deco architecture, restaurants, shopping and nightlife.', icon: 'Building2' },
        { name: 'San Juan', desc: 'San Juan is particularly useful for Southern and Eastern Caribbean itineraries. One major advantage is the opportunity to begin the vacation in Puerto Rico rather than adding a separate international destination. A pre-cruise stay can include Old San Juan, historic forts, Puerto Rican cuisine, beaches and local culture.', icon: 'Ship' }
    ]

    const ccrPrePostStays = [
        { name: 'Celebrity Caribbean Cruise + Pre-Cruise Stay', desc: 'A pre-cruise stay can make the trip more relaxing. In Miami, consider South Beach, the Art Deco District, restaurants, shopping and local nightlife. In Fort Lauderdale, consider beach time, waterways, restaurants and shopping. In San Juan, consider Old San Juan, historic forts, Puerto Rican cuisine, local neighborhoods and beaches. Arriving early also provides a buffer against flight delays before embarkation.', icon: 'Calendar' },
        { name: 'Celebrity Caribbean Cruise + Post-Cruise Stay', desc: 'A post-cruise stay allows travelers to extend their Caribbean vacation. Depending on the disembarkation port, consider Miami, Fort Lauderdale or San Juan, Puerto Rico. A few extra nights can turn a short cruise into a more relaxed vacation.', icon: 'Plane' }
    ]

    const ccrSeasonTable = [
        { feature: 'December–April', detail: 'Warm weather & winter escapes' },
        { feature: 'May–June', detail: 'Shoulder season & tropical travel' },
        { feature: 'July–August', detail: 'Summer vacations' },
        { feature: 'September–October', detail: 'Lower-season travel' },
        { feature: 'November', detail: 'Transition into winter season' }
    ]

    const ccrBestTime = [
        { name: 'December–April', desc: 'This is one of the most popular periods for Caribbean cruising. Best For: escaping cold weather, beach vacations, families, couples and winter travel. Because demand can be high, pricing can also be higher around holidays and peak winter dates.', icon: 'Sun' },
        { name: 'May–June', desc: 'Late spring and early summer can offer a balance between warm weather and lower-season demand. Best For: couples, flexible travelers, tropical vacations and travelers looking for value.', icon: 'Sunrise' },
        { name: 'July–August', desc: 'Summer is popular with families because of school holidays. Best For: family vacations, beach trips, watersports and island exploration.', icon: 'Umbrella' },
        { name: 'September–October', desc: 'These months can offer lower-season pricing, but they also fall within the Atlantic hurricane season. Travelers should consider weather flexibility when choosing a sailing.', icon: 'CloudRain' },
        { name: 'November', desc: 'November can be an attractive transition period before the busiest winter season. Best For: warm-weather escapes, couples, lower-season travel and Caribbean sightseeing.', icon: 'Star' }
    ]

    const ccrWeatherConsiderations = [
        { label: 'Temperature', icon: 'Sun' },
        { label: 'Rainfall', icon: 'CloudRain' },
        { label: 'Sea conditions', icon: 'Waves' },
        { label: 'Hurricane season', icon: 'Wind' },
        { label: 'Humidity', icon: 'Droplet' },
        { label: 'Itinerary flexibility', icon: 'Compass' }
    ]

    const ccrInclusions = ['Stateroom accommodations', 'Main dining', 'Select beverages', 'Entertainment', 'Shipboard activities', 'Pools', 'Fitness facilities', 'Service']

    const ccrNotIncluded = [
        'Shore excursions', 'Airfare', 'Pre-cruise hotels', 'Post-cruise hotels', 'Specialty dining',
        'Spa services', 'Premium purchases', 'Travel insurance', 'Personal expenses', 'Some transportation'
    ]

    const ccrVerandaViews = ['Watch sunrise', 'Enjoy tropical scenery', 'Relax after excursions', 'Watch the ship arrive at a port', 'Enjoy an evening drink']

    const ccrTravelerTypes = [
        { name: 'Celebrity Caribbean Cruises for Families', desc: 'The Caribbean is one of the most popular cruise destinations for families. A Celebrity Caribbean itinerary can provide a mix of beach days, snorkeling, island tours, swimming, cultural activities and relaxation. Families should compare excursion activity levels carefully, especially when traveling with younger children or multiple generations.', icon: 'Users' },
        { name: 'Celebrity Caribbean Cruises for Couples', desc: 'The Caribbean can be particularly appealing for couples. A cruise can combine tropical beaches, sunset views, dining, island excursions, snorkeling, private balcony time and pre- or post-cruise stays. Couples may want to consider Southern Caribbean itineraries when they want a longer island-focused vacation.', icon: 'HeartHandshake' },
        { name: 'Celebrity Caribbean Cruises for Multi-Generational Travel', desc: 'One benefit of cruising is that everyone can share the same vacation while choosing different activities. For example, one group can visit the beach, another can take a historical tour, others can snorkel, and some travelers can remain onboard. This flexibility can make Caribbean cruising a strong option for extended families.', icon: 'Home' }
    ]

    const ccrCruiseVsLand = [
        { cruise: 'Multiple islands in one trip', land: 'Deeper stay on one island' },
        { cruise: 'Same accommodation', land: 'Hotel changes may be needed' },
        { cruise: 'Transportation between ports included', land: 'Flights/ferries may be required' },
        { cruise: 'Organized excursions', land: 'More independent flexibility' },
        { cruise: 'Multiple destinations', land: 'More time at each destination' },
        { cruise: 'Scenic sailing', land: 'More time ashore' },
        { cruise: 'Easy multi-island logistics', land: 'Greater control' }
    ]

    const ccrWorthWithout = ['Packing and unpacking repeatedly', 'Booking multiple hotels', 'Arranging inter-island flights', 'Coordinating multiple transfers']

    const ccrWhoShould = [
        { feature: 'First-Time Caribbean Travelers', detail: 'A cruise offers an easy introduction to multiple islands.' },
        { feature: 'Couples', detail: 'Beach destinations, dining and tropical scenery make Caribbean cruises a popular choice for romantic vacations.' },
        { feature: 'Families', detail: 'The combination of beaches, activities and flexible excursions can work well for families.' },
        { feature: 'Multi-Generational Groups', detail: 'Different travelers can choose different activities while sharing the same ship and itinerary.' },
        { feature: 'Repeat Caribbean Travelers', detail: 'Southern Caribbean itineraries can provide access to destinations beyond the most common Eastern and Western routes.' },
        { feature: 'Winter Travelers', detail: 'The Caribbean provides a convenient warm-weather escape from North America and Europe during the winter months.' }
    ]

    const ccrWhoPreferLand = [
        'Want to stay on one island', 'Prefer several nights in one resort', 'Want a slower pace',
        'Prefer independent exploration', 'Want more control over daily schedules', 'Do not enjoy cruise travel'
    ]

    const ccrPros = [
        'Eastern, Western and Southern Caribbean itineraries', 'Multiple departure ports', 'Year-round cruising',
        'Tropical beaches', 'Snorkeling and diving', 'Large selection of excursions', 'Multiple islands in one vacation',
        'Premium Celebrity experience', 'Couples-friendly', 'Family-friendly', 'Multi-generational friendly',
        'Pre-cruise extensions', 'Post-cruise extensions', 'Multiple stateroom categories'
    ]

    const ccrCons = [
        'Shore excursions can increase total cost', 'Port visits may be shorter than land-based stays',
        'Peak winter sailings can be more expensive', 'Hurricane season can affect itineraries',
        'Some ports require longer transfers to major attractions', 'Airfare and hotels may be additional',
        'Itineraries can change because of weather or operational conditions'
    ]

    const ccrSteps = [
        { title: 'Choose Eastern, Western or Southern Caribbean', desc: 'Start with the type of islands you most want to visit.', tags: [] },
        { title: 'Choose Your Departure Port', desc: 'Compare:', tags: ['Miami', 'Fort Lauderdale', 'San Juan', 'Other available departure cities'] },
        { title: 'Decide How Long You Want to Travel', desc: 'Compare shorter Caribbean escapes with weeklong or longer itineraries.', tags: [] },
        { title: 'Compare the Ports', desc: 'Prioritize destinations that match your interests:', tags: ['Beaches: Aruba, St. Thomas, St. Maarten', 'Diving: Curaçao, Bonaire', 'Adventure: Jamaica, Belize, Mexico', 'History: San Juan, St. Thomas'] },
        { title: 'Compare Port Times', desc: 'Two cruises may visit the same island but provide different amounts of time ashore.', tags: [] },
        { title: 'Choose Your Stateroom', desc: 'Consider:', tags: ['Interior', 'Ocean View', 'Veranda', 'Suite'] },
        { title: 'Choose the Right Season', desc: 'Compare winter, summer and shoulder-season travel based on weather, budget and flexibility.', tags: [] },
        { title: 'Add Pre- or Post-Cruise Time', desc: 'Consider arriving one or two days early, particularly when international flights are involved.', tags: [] }
    ]

    const ccrPacking = [
        { label: 'Lightweight clothing', icon: 'Sun' },
        { label: 'Swimwear', icon: 'Waves' },
        { label: 'Comfortable walking shoes', icon: 'Footprints' },
        { label: 'Sandals', icon: 'Footprints' },
        { label: 'Sun protection', icon: 'Sun' },
        { label: 'Sunglasses', icon: 'Sun' },
        { label: 'Hat', icon: 'Umbrella' },
        { label: 'Lightweight rain jacket', icon: 'CloudRain' },
        { label: 'Small daypack', icon: 'ShoppingBag' },
        { label: 'Reusable water bottle', icon: 'GlassWater' },
        { label: 'Waterproof phone case', icon: 'Droplet' },
        { label: 'Camera', icon: 'Camera' },
        { label: 'Travel adapter', icon: 'Sliders' },
        { label: 'Smart-casual evening clothing', icon: 'Sparkles' }
    ]

    const ccrWhyPlan = [
        { title: 'Compare Celebrity Caribbean Ships', icon: 'Ship' },
        { title: 'Compare Eastern, Western and Southern Itineraries', icon: 'Compass' },
        { title: 'Choose the Right Departure Port', icon: 'MapPin' },
        { title: 'Compare Caribbean Islands', icon: 'Palmtree' },
        { title: 'Select the Right Stateroom', icon: 'BedDouble' },
        { title: 'Review Shore Excursion Options', icon: 'Umbrella' },
        { title: 'Compare Sailing Seasons', icon: 'Calendar' },
        { title: 'Plan Pre-Cruise Hotel Stays', icon: 'Building2' },
        { title: 'Plan Post-Cruise Hotel Stays', icon: 'Plane' },
        { title: 'Coordinate Flights and Transfers', icon: 'Plane' },
        { title: 'Build Multi-Generational Vacations', icon: 'Users' },
        { title: 'Plan Romantic Caribbean Getaways', icon: 'HeartHandshake' },
      
    ]

    const ccrFaqs = [
        { question: '1. What are Celebrity Caribbean Cruises?', answer: 'Celebrity Caribbean Cruises are premium cruises visiting destinations throughout the Eastern, Western and Southern Caribbean, with itineraries focused on beaches, islands, culture, nature and water activities.' },
        { question: '2. What are the main types of Celebrity Caribbean Cruises?', answer: 'Celebrity Caribbean itineraries can be broadly divided into Eastern Caribbean, Western Caribbean and Southern Caribbean cruises.' },
        { question: '3. What is the difference between Eastern and Western Caribbean cruises?', answer: 'Eastern Caribbean cruises generally focus on islands such as St. Thomas, St. Maarten and Puerto Rico, while Western Caribbean cruises can feature Jamaica, Grand Cayman, Mexico and Belize.' },
        { question: '4. What are Southern Caribbean cruises?', answer: 'Southern Caribbean cruises travel farther south and can include destinations such as Aruba, Curaçao, Bonaire, Barbados, St. Lucia and Grenada.' },
        { question: '5. Where do Celebrity Caribbean cruises depart from?', answer: 'Depending on the itinerary, Celebrity Caribbean cruises can depart from ports including Fort Lauderdale, Miami and San Juan, along with other departure points on selected sailings.' },
        { question: '6. How long are Celebrity Caribbean cruises?', answer: 'Celebrity offers Caribbean cruises ranging from shorter getaways to weeklong and longer itineraries. The exact duration depends on the ship and sailing.' },
        { question: '7. What is the best month for a Celebrity Caribbean cruise?', answer: 'December through April is popular for warm-weather Caribbean vacations. May and June can provide a shoulder-season option, while September and October offer lower-season opportunities but fall within hurricane season.' },
        { question: '8. Are Celebrity Caribbean shore excursions included?', answer: "Shore excursions are generally an additional cost and are selected according to the traveler's interests and itinerary." },
        { question: '9. Is a balcony worth it on a Celebrity Caribbean cruise?', answer: 'A veranda can be worthwhile for travelers who enjoy private outdoor space, tropical scenery, sunsets and watching the ship approach Caribbean ports.' },
        { question: '10. Does Celebrity offer Caribbean cruises for families?', answer: 'Yes. Caribbean cruises can work well for families because travelers can combine beach visits, excursions, onboard activities and different activity levels within one vacation.' },
        { question: '11. Are Celebrity Caribbean cruises good for couples?', answer: 'Yes. Couples can combine tropical beaches, dining, scenic sailing, island excursions and pre- or post-cruise stays for a romantic Caribbean vacation.' },
        { question: '12. What wildlife can I see on a Celebrity Caribbean cruise?', answer: 'Depending on the destination and excursion, travelers may encounter tropical birds, sea turtles, dolphins, reef fish and other marine or island wildlife.' },
        { question: '13. Can I add a hotel stay before my Celebrity Caribbean cruise?', answer: 'Yes. A pre-cruise hotel stay can be arranged as part of a broader vacation plan and can be particularly useful when flying into Miami, Fort Lauderdale or San Juan.' },
        { question: '14. Can I combine a Celebrity Caribbean cruise with a post-cruise stay?', answer: 'Yes. A post-cruise extension can provide additional time in destinations such as Miami, Fort Lauderdale or Puerto Rico, depending on the itinerary.' },
        { question: '15. Are Celebrity Caribbean Cruises worth it?', answer: 'They can be an excellent choice for travelers who want to experience multiple Caribbean islands while enjoying the convenience and premium onboard experience of a Celebrity cruise.' }
    ]

    const ccrRelated = [
        { title: 'Celebrity Alaska Cruises Guide', desc: 'Glacier itineraries, Alaska ports, wildlife and Cruisetours aboard Celebrity.', icon: 'Mountain', link: '/celebrity-cruises/alaska/' },
        { title: 'Celebrity Edge Cruise Ship Guide', desc: "Deck plans, staterooms, dining and The Retreat aboard Celebrity's Edge Series ship.", icon: 'Ship', link: '/celebrity-cruises/ships/celebrity-edge' },
        { title: 'Celebrity Beyond Cruise Ship Guide', desc: "Explore Celebrity's award-winning Edge Series ocean ship, deck plans, The Retreat and dining.", icon: 'Anchor', link: '/celebrity-cruises/ships/celebrity-beyond' },
        { title: 'Celebrity Cruises Overview', desc: 'Compare Caribbean, Mediterranean, European and Alaska itineraries across the Celebrity fleet.', icon: 'Globe', link: '/celebrity-cruises/' },
        { title: 'Caribbean Cruise Packing Guide', desc: 'What to pack for beaches, snorkeling excursions and warm Caribbean weather.', icon: 'FileSearch', link: '/guides/caribbean-cruise-packing' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const ccrSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/caribbean/",
                "name": "Celebrity Caribbean Cruises: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/caribbean/",
                "description": "Explore Celebrity Caribbean Cruises, including Eastern, Western and Southern Caribbean itineraries, ships, departure ports, islands, excursions, sailing seasons and planning tips.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsandships.com/celebrity-cruises/caribbean/#article" }
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/caribbean/#article",
                "headline": "Celebrity Caribbean Cruises: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/caribbean/",
                "description": "Explore Celebrity Caribbean Cruises, including Eastern, Western and Southern Caribbean itineraries, ships, departure ports, islands, excursions, sailing seasons and planning tips.",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/caribbean/" }
            },
            {
                "@type": "Service",
                "name": "Celebrity Caribbean Cruise Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Caribbean Cruise Planning",
                "description": "Expert Celebrity Caribbean cruise planning services helping travelers compare ships, Eastern, Western and Southern Caribbean itineraries, departure ports, islands, excursions, staterooms and pre- or post-cruise stays."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Caribbean Cruises", "item": "https://www.tripsandships.com/celebrity-cruises/caribbean/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": ccrFaqs.map(f => ({
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
                <title>Celebrity Caribbean Cruises: Complete Guide</title>
                <meta name="title" content="Celebrity Caribbean Cruises | Ships, Itineraries & Ports" />
                <meta
                    name="description"
                    content="Explore Celebrity Caribbean Cruises, including Eastern, Western and Southern Caribbean itineraries, ships, departure ports, islands, excursions, sailing seasons and planning tips."
                />
                <script type="application/ld+json">
                    {JSON.stringify(ccrSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="ccrb-page-wrapper">

                {/* HERO SECTION */}
                <section className="ccrb-hero-section">
                    <div className="ccrb-hero-overlay"></div>
                    <div className="ccrb-hero-content">
                        <div className="ccrb-hero-tag">
                            <CcrIconSparkle size={16} />
                            <span>Celebrity Caribbean Cruises</span>
                        </div>
                        <h1 className="ccrb-hero-title">Celebrity Caribbean Cruises <br /> Complete Guide</h1>
                        <p className="ccrb-hero-subtitle">
                            Ships, Island Itineraries, Departure Ports & Excursions
                        </p>
                        <div className="ccrb-hero-btn-row">
                            <Link to='/contact' className="ccrb-btn-primary">
                                <CcrIconPhone size={18} />
                                Plan My Celebrity Caribbean Cruise
                            </Link>
                            <button className="ccrb-btn-outline">
                                <CcrIconList size={18} />
                                Speak With a Luxury Caribbean Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="ccrb-intro-section">
                    <div className="ccrb-intro-container">
                        <div className="ccrb-intro-grid">
                            <div className="ccrb-intro-copy">
                                <span className="ccrb-eyebrow-label">EXPERIENCE THE CARIBBEAN WITH CELEBRITY</span>
                                <h2 className="ccrb-section-heading">Celebrity Caribbean Cruises</h2>
                                <div className="ccrb-heading-bar"></div>
                                <p className="ccrb-lead-paragraph">
                                    Celebrity Caribbean Cruises combine tropical islands, turquoise waters, beaches, local culture and premium cruising aboard Celebrity's modern fleet.
                                </p>
                                <p className="ccrb-lead-paragraph">
                                    Celebrity's Caribbean program includes Eastern, Western and Southern Caribbean itineraries, with routes visiting destinations such as the Bahamas, St. Thomas, St. Maarten, Puerto Rico, Jamaica, Grand Cayman, Aruba, Curaçao and other Caribbean islands depending on the sailing.
                                </p>
                                <p className="ccrb-lead-paragraph">
                                    The Caribbean is also one of the most flexible cruise regions. Travelers can choose shorter escapes, weeklong vacations or longer itineraries that combine several islands and countries. For travelers planning a Celebrity Caribbean cruise, the most important decisions are the ship, itinerary region, departure port, cruise length, sailing season, port time, excursions and whether to add pre- or post-cruise stays.
                                </p>
                            </div>
                            <div className="ccrb-intro-image-frame">
                                <CcrPlaceholder label="Celebrity Caribbean Cruises" />
                                <div className="ccrb-intro-badge-float">
                                    <CcrIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Caribbean Season: Year-Round</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="ccrb-quick-answer-section">
                    <div className="ccrb-quick-answer-container">
                        <div className="ccrb-quick-answer-card">
                            <h3 className="ccrb-quick-answer-title">What Are Celebrity Caribbean Cruises?</h3>
                            <p className="ccrb-quick-answer-text">
                                Celebrity Caribbean Cruises are premium cruises visiting islands and coastal destinations throughout the Eastern, Western and Southern Caribbean, with itineraries designed around beaches, snorkeling, watersports, culture, nature and island exploration. Popular departure options can include Fort Lauderdale, Miami and San Juan, with departure availability depending on the ship and sailing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="ccrb-inline-cta-section">
                    <div className="ccrb-inline-cta-container">
                        <span className="ccrb-inline-cta-tag">Expert Planning</span>
                        <p className="ccrb-inline-cta-text">Ready to explore the Caribbean with Celebrity?</p>
                        <div className="ccrb-inline-cta-btn-row">
                            <Link to="/contact" className="ccrb-btn-primary">
                                <CcrIconPhone size={18} />
                                Plan My Celebrity Caribbean Cruise
                            </Link>
                            <Link to="/contact" className="ccrb-btn-outline1">
                                <CcrIconList size={18} />
                                Speak With a Luxury Caribbean Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="ccrb-glance-section">
                    <div className="ccrb-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">PROGRAM OVERVIEW</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruises at a Glance</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-glance-table">
                            {ccrGlance.map((row, idx) => (
                                <div key={idx} className="ccrb-glance-row">
                                    <div className="ccrb-glance-feature">{row.feature}</div>
                                    <div className="ccrb-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccrb-included-note">
                            Exact ships, ports, departure cities and itineraries vary by sailing date.
                        </p>
                    </div>
                </section>

                {/* WHY CHOOSE CELEBRITY CARIBBEAN CRUISES */}
                <section className="ccrb-why-choose-section">
                    <div className="ccrb-why-choose-container">
                        <div className="ccrb-why-choose-split-grid">
                            <div className="ccrb-why-choose-content-col">
                                <span className="ccrb-eyebrow-label">THE CARIBBEAN DIFFERENCE</span>
                                <h2 className="ccrb-section-heading">Why Choose Celebrity Caribbean Cruises?</h2>
                                <div className="ccrb-heading-bar"></div>
                                <p className="ccrb-lead-paragraph">
                                    The Caribbean works particularly well for travelers who want a combination of relaxation and exploration. A Celebrity Caribbean cruise can provide opportunities to:
                                </p>
                                <div className="ccrb-why-choose-footer-note">
                                    <p className="ccrb-why-choose-note">
                                        Instead of choosing one Caribbean island and staying there for a week, a cruise allows travelers to experience several destinations while keeping the same accommodation throughout the trip.
                                    </p>
                                </div>
                            </div>
                            <div className="ccrb-why-choose-keypoints-col">
                                <div className="ccrb-why-choose-keypoints-grid">
                                    {ccrWhyChoose.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccrb-why-choose-card">
                                                <div className="ccrb-why-choose-icon-wrapper">
                                                    {IconComponent ? (
                                                        <IconComponent size={20} className="ccrb-why-choose-icon" />
                                                    ) : (
                                                        <CcrIconCheck size={20} className="ccrb-why-choose-icon" />
                                                    )}
                                                </div>
                                                <span className="ccrb-why-choose-card-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY CARIBBEAN CRUISE SHIPS */}
                <section className="ccrb-feature-section ccrb-bg-white">
                    <div className="ccrb-feature-container">
                        <div className="ccrb-feature-grid">
                            <div className="ccrb-feature-image-col">
                                <div className="ccrb-badge-overlay">
                                    <CcrIconSparkle size={14} />
                                    <span>Caribbean Fleet</span>
                                </div>
                                <CcrPlaceholder label="Celebrity Caribbean Cruise Ships" />
                            </div>
                            <div className="ccrb-feature-copy-col">
                                <span className="ccrb-eyebrow-label">THE FLEET</span>
                                <h2 className="ccrb-feature-title">Celebrity Caribbean Cruise Ships</h2>
                                <p className="ccrb-lead-paragraph">
                                    Celebrity's Caribbean fleet varies according to season and itinerary. Depending on the sailing, travelers may find newer Edge Series ships as well as other Celebrity vessels operating Caribbean routes. When comparing ships, consider:
                                </p>
                                <div className="ccrb-feature-list">
                                    {ccrShipFactors.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccrb-feature-item-card">
                                                <div className="ccrb-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcrIconCheck size={18} />}
                                                </div>
                                                <span className="ccrb-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccrb-lead-paragraph" style={{ marginTop: '20px' }}>
                                    For a Caribbean vacation, the route and islands can be just as important as the ship itself.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EASTERN CARIBBEAN */}
                <section className="ccrb-feature-section ccrb-dark-section">
                    <div className="ccrb-feature-container">
                        <div className="ccrb-feature-grid ccrb-reverse">
                            <div className="ccrb-feature-copy-col">
                                <span className="ccrb-eyebrow-label">REGION</span>
                                <h2 className="ccrb-feature-title" style={{ textAlign: 'left' }}>Celebrity Eastern Caribbean Cruises</h2>
                                <p className="ccrb-lead-paragraph">
                                    Eastern Caribbean itineraries generally emphasize destinations in the eastern portion of the region. Depending on the sailing, destinations can include:
                                </p>
                                <div className="ccrb-feature-list">
                                    {ccrEasternStops.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccrb-feature-item-card">
                                                <div className="ccrb-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcrIconCheck size={18} />}
                                                </div>
                                                <span className="ccrb-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccrb-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Eastern Caribbean cruises are particularly appealing to travelers interested in: {ccrEasternBestFor.join(', ')}.
                                </p>
                            </div>
                            <div className="ccrb-feature-image-col">
                                <div className="ccrb-badge-overlay">
                                    <CcrIconSparkle size={14} />
                                    <span>Eastern Caribbean</span>
                                </div>
                                <CcrPlaceholder label="Eastern Caribbean" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* WESTERN CARIBBEAN */}
                <section className="ccrb-feature-section ccrb-bg-white">
                    <div className="ccrb-feature-container">
                        <div className="ccrb-feature-grid">
                            <div className="ccrb-feature-image-col">
                                <div className="ccrb-badge-overlay">
                                    <CcrIconSparkle size={14} />
                                    <span>Western Caribbean</span>
                                </div>
                                <CcrPlaceholder label="Western Caribbean" />
                            </div>
                            <div className="ccrb-feature-copy-col">
                                <span className="ccrb-eyebrow-label">REGION</span>
                                <h2 className="ccrb-feature-title">Celebrity Western Caribbean Cruises</h2>
                                <p className="ccrb-lead-paragraph">
                                    Western Caribbean itineraries typically combine destinations around the western Caribbean basin. Depending on the sailing, ports can include:
                                </p>
                                <div className="ccrb-feature-list">
                                    {ccrWesternStops.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccrb-feature-item-card">
                                                <div className="ccrb-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcrIconCheck size={18} />}
                                                </div>
                                                <span className="ccrb-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccrb-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Western Caribbean cruises can be ideal for travelers interested in: {ccrWesternBestFor.join(', ')}.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOUTHERN CARIBBEAN */}
                <section className="ccrb-feature-section ccrb-dark-section">
                    <div className="ccrb-feature-container">
                        <div className="ccrb-feature-grid ccrb-reverse">
                            <div className="ccrb-feature-copy-col">
                                <span className="ccrb-eyebrow-label">REGION</span>
                                <h2 className="ccrb-feature-title" style={{ textAlign: 'left' }}>Celebrity Southern Caribbean Cruises</h2>
                                <p className="ccrb-lead-paragraph">
                                    Southern Caribbean itineraries generally reach farther south and can include some of the region's most distinctive islands. Popular destinations can include:
                                </p>
                                <div className="ccrb-feature-list">
                                    {ccrSouthernStops.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccrb-feature-item-card">
                                                <div className="ccrb-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcrIconCheck size={18} />}
                                                </div>
                                                <span className="ccrb-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccrb-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Southern Caribbean cruises are particularly attractive to travelers who want: {ccrSouthernBestFor.join(', ')}.
                                </p>
                            </div>
                            <div className="ccrb-feature-image-col">
                                <div className="ccrb-badge-overlay">
                                    <CcrIconSparkle size={14} />
                                    <span>Southern Caribbean</span>
                                </div>
                                <CcrPlaceholder label="Southern Caribbean" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* EASTERN VS WESTERN VS SOUTHERN */}
                <section className="ccrb-compare-section">
                    <div className="ccrb-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">REGION COMPARISON</span>
                            <h2 className="ccrb-section-heading">Eastern vs. Western vs. Southern Caribbean</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-compare-table-4col">
                            <div className="ccrb-compare-row-4col ccrb-compare-header">
                                <div className="ccrb-compare-cell ccrb-compare-label">Feature</div>
                                <div className="ccrb-compare-cell">Eastern Caribbean</div>
                                <div className="ccrb-compare-cell">Western Caribbean</div>
                                <div className="ccrb-compare-cell">Southern Caribbean</div>
                            </div>
                            {ccrRegionCompare.map((row, idx) => (
                                <div key={idx} className="ccrb-compare-row-4col">
                                    <div className="ccrb-compare-cell ccrb-compare-label">{row.feature}</div>
                                    <div className="ccrb-compare-cell">{row.eastern}</div>
                                    <div className="ccrb-compare-cell">{row.western}</div>
                                    <div className="ccrb-compare-cell">{row.southern}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHICH IS BEST */}
                <section className="ccrb-compare-section ccrb-dark-section">
                    <div className="ccrb-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">DECISION GUIDE</span>
                            <h2 className="ccrb-section-heading">Which Celebrity Caribbean Cruise Is Best?</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                There is no single best itinerary for every traveler.
                            </p>
                        </div>
                        <div className="ccrb-choice-board ccrb-choice-board-inline ccrb-choice-board-triple">
                            <div className="ccrb-choice-panel">
                                <h3 className="ccrb-choice-title">
                                    <CcrIconCheck size={22} />
                                    Choose Eastern if you want:
                                </h3>
                                <div className="ccrb-choice-list">
                                    {ccrChooseEastern.map((item, idx) => (
                                        <div key={idx} className="ccrb-choice-item">
                                            <div className="ccrb-choice-icon-wrap">
                                                <CcrIconCheck size={16} />
                                            </div>
                                            <div className="ccrb-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="ccrb-choice-panel">
                                <h3 className="ccrb-choice-title">
                                    <CcrIconCheck size={22} />
                                    Choose Western if you want:
                                </h3>
                                <div className="ccrb-choice-list">
                                    {ccrChooseWestern.map((item, idx) => (
                                        <div key={idx} className="ccrb-choice-item">
                                            <div className="ccrb-choice-icon-wrap">
                                                <CcrIconCheck size={16} />
                                            </div>
                                            <div className="ccrb-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="ccrb-choice-panel">
                                <h3 className="ccrb-choice-title">
                                    <CcrIconCheck size={22} />
                                    Choose Southern if you want:
                                </h3>
                                <div className="ccrb-choice-list">
                                    {ccrChooseSouthern.map((item, idx) => (
                                        <div key={idx} className="ccrb-choice-item">
                                            <div className="ccrb-choice-icon-wrap">
                                                <CcrIconCheck size={16} />
                                            </div>
                                            <div className="ccrb-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CARIBBEAN ISLANDS */}
                <section className="ccrb-itinerary-section ccrb-bg-white">
                    <div className="ccrb-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">ISLANDS</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Islands</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Caribbean network can include a broad selection of islands and coastal destinations.
                            </p>
                        </div>
                        <div className="ccrb-itinerary-grid">
                            {ccrIslands.map((island, idx) => (
                                <div key={idx} className="ccrb-itinerary-card" style={{ position: 'relative' }}>
                                    <div style={{ height: '4px', background: idx % 2 === 0 ? 'var(--ccrb-green)' : 'var(--ccrb-navy)', width: '100%', position: 'absolute', top: 0, left: 0, borderTopLeftRadius: '20px', borderTopRightRadius: '20px', zIndex: 10 }}></div>
                                    <h3 className="ccrb-itinerary-region">
                                        <MapPin size={20} />
                                        {island.name}
                                    </h3>
                                    <p className="ccrb-lead-paragraph" style={{ marginBottom: '18px' }}>{island.intro}</p>
                                    {island.bullets.length > 0 && (
                                        <ul className="ccrb-itinerary-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', padding: '18px 30px 24px', flexGrow: 1 }}>
                                            {island.bullets.map((b, bIdx) => (
                                                <li key={bIdx} style={{ width: 'fit-content', margin: 0 }}><CcrIconCheck size={16} className="ccrb-included-icon" />{b}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {island.highlight && <p className="ccrb-itinerary-note">{island.highlight}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CARIBBEAN CRUISE PORTS TABLE */}
                <section className="ccrb-glance-section ccrb-bg-soft">
                    <div className="ccrb-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">PORT REGIONS</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruise Ports</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-glance-table">
                            {ccrPortsTable.map((row, idx) => (
                                <div key={idx} className="ccrb-glance-row">
                                    <div className="ccrb-glance-feature">{row.feature}</div>
                                    <div className="ccrb-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccrb-included-note">
                            The exact ports depend on the ship, itinerary and departure date.
                        </p>
                    </div>
                </section>

                {/* SHORE EXCURSIONS */}
                <section className="ccrb-feature-section ccrb-bg-white">
                    <div className="ccrb-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <span className="ccrb-eyebrow-label">ON SHORE</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruise Excursions</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Shore excursions are one of the main reasons travelers choose a Caribbean cruise.
                            </p>
                        </div>
                        <div className="ccrb-feature-desc-list">
                            {ccrExcursionCategories.map((cat, idx) => {
                                const IconComponent = iconMap[cat.icon];
                                return (
                                    <div key={idx} className="ccrb-feature-desc-card">
                                        <div className="ccrb-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="ccrb-feature-card-icon-inline" />}
                                            <h4 className="ccrb-feature-desc-title">{cat.title}</h4>
                                        </div>
                                        <p className="ccrb-feature-desc-text">{cat.items.join(', ')}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ARE EXCURSIONS INCLUDED */}
                <section className="ccrb-worth-section ccrb-bg-soft">
                    <div className="ccrb-worth-container">
                        <span className="ccrb-eyebrow-label">BUDGETING</span>
                        <h2 className="ccrb-section-heading">Are Celebrity Caribbean Excursions Included?</h2>
                        <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        <p className="ccrb-lead-paragraph">
                            Celebrity Caribbean shore excursions are generally not automatically included in the standard cruise fare. Travelers can choose excursions based on their interests and purchase them separately. When planning your total Caribbean vacation budget, include excursion costs if you want guided experiences at multiple ports.
                        </p>
                    </div>
                </section>

                {/* DEPARTURE PORTS */}
                <section className="ccrb-feature-section ccrb-bg-white">
                    <div className="ccrb-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <span className="ccrb-eyebrow-label">GATEWAY CITIES</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruise Departure Ports</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                The departure city is an important part of the overall vacation.
                            </p>
                        </div>
                        <div className="ccrb-feature-desc-list">
                            {ccrDeparturePorts.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccrb-feature-desc-card">
                                        <div className="ccrb-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="ccrb-feature-card-icon-inline" />}
                                            <h4 className="ccrb-feature-desc-title">{item.name}</h4>
                                        </div>
                                        <p className="ccrb-feature-desc-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* PRE- AND POST-CRUISE STAYS */}
                <section className="ccrb-feature-section ccrb-bg-soft">
                    <div className="ccrb-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <span className="ccrb-eyebrow-label">EXTEND YOUR TRIP</span>
                            <h2 className="ccrb-section-heading">Pre- & Post-Cruise Stays</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-feature-desc-list">
                            {ccrPrePostStays.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccrb-feature-desc-card">
                                        <div className="ccrb-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="ccrb-feature-card-icon-inline" />}
                                            <h4 className="ccrb-feature-desc-title">{item.name}</h4>
                                        </div>
                                        <p className="ccrb-feature-desc-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CRUISE SEASON */}
                <section className="ccrb-glance-section ccrb-bg-soft">
                    <div className="ccrb-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">WHEN TO SAIL</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruise Season</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                One of the biggest advantages of Caribbean cruising is that the region can be visited year-round. The Caribbean is warm throughout the year, although weather, rainfall, sea conditions and hurricane activity vary by month and island.
                            </p>
                        </div>
                        <div className="ccrb-glance-table">
                            {ccrSeasonTable.map((row, idx) => (
                                <div key={idx} className="ccrb-glance-row">
                                    <div className="ccrb-glance-feature">{row.feature}</div>
                                    <div className="ccrb-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BEST TIME */}
                <section className="ccrb-feature-section ccrb-bg-white">
                    <div className="ccrb-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <span className="ccrb-eyebrow-label">MONTH BY MONTH</span>
                            <h2 className="ccrb-section-heading">Best Time for a Celebrity Caribbean Cruise</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-feature-desc-list ccrb-best-time-list">
                            {ccrBestTime.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccrb-feature-desc-card">
                                        <div className="ccrb-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="ccrb-feature-card-icon-inline" />}
                                            <h4 className="ccrb-feature-desc-title">{item.name}</h4>
                                        </div>
                                        <p className="ccrb-feature-desc-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CARIBBEAN WEATHER */}
                <section className="ccrb-included-section ccrb-bg-soft">
                    <div className="ccrb-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">WEATHER</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruise Weather</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Caribbean weather is generally warm throughout the year. However, conditions can differ significantly between islands. Travelers should consider:
                            </p>
                        </div>
                        <div className="ccrb-included-grid">
                            {ccrWeatherConsiderations.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccrb-included-item">
                                        {IconComponent ? <IconComponent size={18} className="ccrb-included-icon" /> : <CcrIconCheck size={18} className="ccrb-included-icon" />}
                                        <span>{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ccrb-included-note">
                            Cruise itineraries can occasionally be adjusted because of weather or operational conditions.
                        </p>
                    </div>
                </section>

                {/* CRUISE INCLUSIONS */}
                <section className="ccrb-included-section ccrb-dark-section ccrb-cruise-inclusions-section">
                    <div className="ccrb-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">CRUISE FARE</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruise Inclusions</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                The standard Celebrity cruise experience includes the core onboard vacation. Depending on the fare and package, travelers can have access to:
                            </p>
                        </div>
                        <div className="ccrb-included-grid">
                            {ccrInclusions.map((item, idx) => (
                                <div key={idx} className="ccrb-included-item">
                                    <CcrIconCheck size={18} className="ccrb-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="ccrb-included-note">
                            Exact inclusions depend on the booking and applicable fare.
                        </p>
                    </div>
                </section>

                {/* WHAT'S NOT INCLUDED */}
                <section className="ccrb-audience-section">
                    <div className="ccrb-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">WHAT'S NOT INCLUDED?</span>
                            <h2 className="ccrb-section-heading">What's Not Included?</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Travelers may need to budget separately for:
                            </p>
                        </div>
                        <div className="ccrb-audience-column ccrb-audience-negative">
                            <ul className="ccrb-audience-list">
                                {ccrNotIncluded.map((item, idx) => (
                                    <li key={idx} className="ccrb-audience-item">
                                        <CcrIconX size={18} className="ccrb-audience-check ccrb-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="ccrb-itinerary-note" style={{ marginTop: '24px' }}>
                            A complete Caribbean vacation budget should include these additional costs.
                        </p>
                    </div>
                </section>

                {/* ACCOMMODATIONS INTRO & TABBED SHOWCASE */}
                <section className="ccrb-accommodations-section">
                    <div className="ccrb-accommodations-container">

                        <div className="ccrb-accommodations-header">
                            <span className="ccrb-eyebrow-label">STATEROOMS & SUITES</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruise Accommodations</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph">
                                Celebrity offers several accommodation categories.
                            </p>
                        </div>

                        {/* Segmented Tab Switcher */}
                        <div className="ccrb-accommodations-tabs">
                            {[
                                { id: 'interior', label: 'Interior' },
                                { id: 'oceanview', label: 'Ocean View' },
                                { id: 'veranda', label: 'Veranda' },
                                { id: 'suites', label: 'Suites' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`ccrb-accommodation-tab-btn ${ccrActiveStateroom === tab.id ? 'active' : ''}`}
                                    onClick={() => setCcrActiveStateroom(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Active Panel Content */}
                        <div className="ccrb-accommodation-panel">
                            {ccrActiveStateroom === 'interior' && (
                                <div className="ccrb-accommodation-panel-grid animate-fade-in">
                                    <div className="ccrb-accommodation-image-col">
                                        <div className="ccrb-badge-overlay">
                                            <CcrIconSparkle size={14} />
                                            <span>Interior</span>
                                        </div>
                                        <CcrPlaceholder label="Interior Stateroom" />
                                    </div>
                                    <div className="ccrb-accommodation-info-col">
                                        <span className="ccrb-eyebrow-label">ACCOMMODATIONS</span>
                                        <h3 className="ccrb-accommodation-title">Interior Staterooms</h3>
                                        <p className="ccrb-accommodation-description">
                                            A practical choice for travelers who plan to spend most of their vacation exploring Caribbean ports.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {ccrActiveStateroom === 'oceanview' && (
                                <div className="ccrb-accommodation-panel-grid animate-fade-in">
                                    <div className="ccrb-accommodation-image-col">
                                        <div className="ccrb-badge-overlay">
                                            <CcrIconSparkle size={14} />
                                            <span>Ocean View</span>
                                        </div>
                                        <CcrPlaceholder label="Ocean View Stateroom" />
                                    </div>
                                    <div className="ccrb-accommodation-info-col">
                                        <span className="ccrb-eyebrow-label">ACCOMMODATIONS</span>
                                        <h3 className="ccrb-accommodation-title">Ocean View Staterooms</h3>
                                        <p className="ccrb-accommodation-description">
                                            These accommodations provide a window and natural light.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {ccrActiveStateroom === 'veranda' && (
                                <div className="ccrb-accommodation-panel-grid animate-fade-in">
                                    <div className="ccrb-accommodation-image-col">
                                        <div className="ccrb-badge-overlay">
                                            <CcrIconSparkle size={14} />
                                            <span>Veranda</span>
                                        </div>
                                        <CcrPlaceholder label="Veranda Stateroom" />
                                    </div>
                                    <div className="ccrb-accommodation-info-col">
                                        <span className="ccrb-eyebrow-label">MOST REQUESTED FOR THE CARIBBEAN</span>
                                        <h3 className="ccrb-accommodation-title text-gold">Veranda Staterooms</h3>
                                        <p className="ccrb-accommodation-description">
                                            A private veranda can be especially enjoyable in the Caribbean. Travelers can use the space to:
                                        </p>
                                        <div className="ccrb-veranda-checklist">
                                            {ccrVerandaViews.map((item, idx) => (
                                                <div key={idx} className="ccrb-veranda-check-item">
                                                    <div className="ccrb-veranda-check-icon">
                                                        <CcrIconCheck size={16} />
                                                    </div>
                                                    <span className="ccrb-veranda-check-text">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {ccrActiveStateroom === 'suites' && (
                                <div className="ccrb-accommodation-panel-grid animate-fade-in">
                                    <div className="ccrb-accommodation-image-col">
                                        <div className="ccrb-badge-overlay">
                                            <CcrIconSparkle size={14} />
                                            <span>Suite</span>
                                        </div>
                                        <CcrPlaceholder label="Suite" />
                                    </div>
                                    <div className="ccrb-accommodation-info-col">
                                        <span className="ccrb-eyebrow-label">ACCOMMODATIONS</span>
                                        <h3 className="ccrb-accommodation-title">Suites</h3>
                                        <p className="ccrb-accommodation-description">
                                            Suites provide more space and premium amenities for travelers looking for a higher level of comfort.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </section>

                {/* IS A BALCONY WORTH IT */}
                <section className="ccrb-worth-section ccrb-dark-section">
                    <div className="ccrb-worth-container">
                        <span className="ccrb-eyebrow-label">DECISION POINT</span>
                        <h2 className="ccrb-section-heading">Is a Balcony Worth It on a Celebrity Caribbean Cruise?</h2>
                        <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        <p className="ccrb-lead-paragraph">
                            For many travelers, yes. The Caribbean is a destination where the scenery continues beyond the ports. A veranda can provide private outdoor space for sunrise, sunset, ocean views, island approaches, scenic cruising and quiet relaxation. However, travelers who spend most of their days ashore may prefer to use that budget for excursions or a longer pre- or post-cruise stay.
                        </p>
                    </div>
                </section>

                {/* TRAVELER TYPES: FAMILIES / COUPLES / MULTI-GEN */}
                <section className="ccrb-feature-section ccrb-bg-white">
                    <div className="ccrb-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <span className="ccrb-eyebrow-label">WHO IT SUITS</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruises by Travel Style</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-feature-desc-list">
                            {ccrTravelerTypes.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccrb-feature-desc-card">
                                        <div className="ccrb-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="ccrb-feature-card-icon-inline" />}
                                            <h4 className="ccrb-feature-desc-title">{item.name}</h4>
                                        </div>
                                        <p className="ccrb-feature-desc-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CELEBRITY CARIBBEAN VS LAND-BASED VACATION */}
                <section className="ccrb-compare-section ccrb-dark-section">
                    <div className="ccrb-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">CRUISE VS LAND</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean vs. Land-Based Caribbean Vacation</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-pair-table">
                            <div className="ccrb-pair-row ccrb-pair-header">
                                <div className="ccrb-pair-cell">Celebrity Caribbean Cruise</div>
                                <div className="ccrb-pair-cell">Land-Based Caribbean Vacation</div>
                            </div>
                            {ccrCruiseVsLand.map((row, idx) => (
                                <div key={idx} className="ccrb-pair-row">
                                    <div className="ccrb-pair-cell">{row.cruise}</div>
                                    <div className="ccrb-pair-cell">{row.land}</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccrb-included-note">
                            A cruise is particularly useful for travelers who want to sample several Caribbean destinations before deciding where they would like to return for a longer land vacation.
                        </p>
                    </div>
                </section>

                {/* ARE THEY WORTH IT */}
                <section className="ccrb-tag-section ccrb-bg-white">
                    <div className="ccrb-worth-container-split">
                        <div className="ccrb-worth-split-grid">

                            <div className="ccrb-worth-info-col">
                                <span className="ccrb-eyebrow-label">INVESTMENT & VALUE</span>
                                <h2 className="ccrb-section-heading">Are Celebrity Caribbean Cruises Worth It?</h2>
                                <div className="ccrb-heading-bar"></div>
                                <p className="ccrb-lead-paragraph">
                                    Celebrity Caribbean Cruises can be an excellent choice for travelers who want to combine premium cruising with tropical beaches, multiple islands and easy vacation logistics. The biggest advantage is destination variety. One sailing can allow travelers to experience several islands without:
                                </p>
                                <div className="ccrb-worth-footer-note">
                                    <p className="ccrb-worth-note">
                                        For first-time Caribbean travelers, this makes cruising particularly attractive.
                                    </p>
                                </div>
                            </div>

                            <div className="ccrb-worth-advantages-col">
                                <div className="ccrb-worth-advantages-list">
                                    {ccrWorthWithout.map((item, idx) => (
                                        <div key={idx} className="ccrb-worth-item-row">
                                            <div className="ccrb-worth-item-icon-box">
                                                <CcrIconX size={18} />
                                            </div>
                                            <span className="ccrb-worth-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="ccrb-glance-section">
                    <div className="ccrb-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="ccrb-section-heading">Who Should Choose a Celebrity Caribbean Cruise?</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-glance-table">
                            {ccrWhoShould.map((row, idx) => (
                                <div key={idx} className="ccrb-glance-row">
                                    <div className="ccrb-glance-feature">{row.feature}</div>
                                    <div className="ccrb-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO MAY PREFER LAND-BASED VACATION */}
                <section className="ccrb-audience-section ccrb-bg-white">
                    <div className="ccrb-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">WORTH CONSIDERING</span>
                            <h2 className="ccrb-section-heading">Who May Prefer a Land-Based Caribbean Vacation?</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                A land-based vacation may be better for travelers who:
                            </p>
                        </div>
                        <div className="ccrb-audience-column ccrb-audience-negative">
                            <ul className="ccrb-audience-list">
                                {ccrWhoPreferLand.map((item, idx) => (
                                    <li key={idx} className="ccrb-audience-item">
                                        <CcrIconX size={18} className="ccrb-audience-check ccrb-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="ccrb-itinerary-note" style={{ marginTop: '24px' }}>
                            A Celebrity cruise plus a pre- or post-cruise hotel stay can provide a useful combination of both approaches.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="ccrb-pros-section ccrb-dark-section">
                    <div className="ccrb-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="ccrb-eyebrow-label ccrb-eyebrow-white">PROS & CONS</span>
                            <h2 className="ccrb-section-heading">Celebrity Caribbean Cruises Pros & Cons</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>

                        <div className="ccrb-comparison-board">
                            <div className="ccrb-pros-panel">
                                <h3 className="ccrb-panel-title ccrb-pros-title">
                                    <CcrIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="ccrb-panel-list">
                                    {ccrPros.map((pro, idx) => (
                                        <div key={idx} className="ccrb-list-item">
                                            <div className="ccrb-item-icon-wrap ccrb-pro-icon">
                                                <CcrIconCheck size={16} />
                                            </div>
                                            <div className="ccrb-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="ccrb-cons-panel">
                                <h3 className="ccrb-panel-title ccrb-cons-title">
                                    <CcrIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="ccrb-panel-list">
                                    {ccrCons.map((con, idx) => (
                                        <div key={idx} className="ccrb-list-item">
                                            <div className="ccrb-item-icon-wrap ccrb-con-icon">
                                                <CcrIconX size={16} />
                                            </div>
                                            <div className="ccrb-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW TO CHOOSE */}
                <section className="ccrb-steps-section">
                    <div className="ccrb-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">PLANNING WALKTHROUGH</span>
                            <h2 className="ccrb-section-heading">How to Choose the Best Celebrity Caribbean Cruise</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-steps-list">
                            {ccrSteps.map((step, idx) => (
                                <div key={idx} className="ccrb-step-item">
                                    <div className="ccrb-step-number">{idx + 1}</div>
                                    <div className="ccrb-step-body">
                                        <h4 className="ccrb-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="ccrb-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="ccrb-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="ccrb-step-tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT TO PACK */}
                <section className="ccrb-packing-section">
                    <div className="ccrb-packing-container">
                        <div className="ccrb-packing-header">
                            <span className="ccrb-eyebrow-label">PACKING GUIDE</span>
                            <h2 className="ccrb-section-heading">What to Pack for a Celebrity Caribbean Cruise</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph">
                                For snorkeling or beach days, a waterproof bag can also be useful.
                            </p>
                        </div>
                        <div className="ccrb-packing-checklist-board">
                            <div className="ccrb-packing-checklist-grid">
                                {ccrPacking.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <div key={idx} className="ccrb-packing-item-row">
                                            <div className="ccrb-packing-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CcrIconDot size={18} />}
                                            </div>
                                            <span className="ccrb-packing-item-text">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERT INSIGHT */}
                <section id="celebrity-caribbean-cruises-insight" className="ccrb-editorial-section">
                    <div className="ccrb-editorial-container">
                        <div className="ccrb-editorial-split-grid">

                            {/* Profile Sidebar */}
                            <div className="ccrb-editorial-profile-sidebar">
                                <div className="ccrb-editorial-avatar-wrap">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="ccrb-editorial-avatar" />
                                </div>

                                <div className="ccrb-editorial-bio">
                                    <h4 className="ccrb-editorial-bio-name">Angela Hughes</h4>
                                    <p className="ccrb-editorial-bio-title">Founder & CEO, Trips & Ships Luxury Travel</p>
                                </div>

                                <div className="ccrb-editorial-stats-row">
                                    <div className="ccrb-editorial-stat-badge">
                                        <strong>40+</strong> Years Experience
                                    </div>
                                    <div className="ccrb-editorial-stat-badge">
                                        <strong>120+</strong> Countries Visited
                                    </div>
                                </div>

                                <div className="ccrb-editorial-expertise-box">
                                    <span className="ccrb-editorial-expertise-label">Her expertise spans:</span>
                                    <div className="ccrb-editorial-expertise-list">
                                        {[
                                            'Premium & luxury cruising',
                                            'Caribbean island & itinerary planning',
                                            'Celebrity ship & stateroom selection',
                                            'Family & multi-generational cruise planning',
                                            'Pre- and post-cruise stay planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="ccrb-editorial-expertise-item">
                                                <CcrIconDot size={10} className="ccrb-editorial-dot" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Main Insight Content */}
                            <div className="ccrb-editorial-main-content">
                                <div className="ccrb-editorial-header">
                                    <div className="ccrb-editorial-eyebrow-container">
                                        <CcrIconAward size={16} className="ccrb-editorial-icon-badge" />
                                        <span className="ccrb-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="ccrb-editorial-heading">
                                        Why Choose Celebrity for the Caribbean?
                                    </h2>
                                    <div className="ccrb-editorial-heading-line"></div>
                                </div>

                                <p className="ccrb-editorial-lead-para">
                                    The Caribbean has hundreds of islands, so choosing the right itinerary matters more than simply choosing a cruise date.
                                </p>

                                <div className="ccrb-editorial-quote-box">
                                    <p className="ccrb-editorial-quote-text">
                                        For a first Caribbean cruise, I recommend deciding whether your priority is classic Eastern Caribbean beaches, Western Caribbean adventure or the more distinctive islands of the Southern Caribbean. Then compare the ship, departure port, port duration and excursion options. For travelers flying into Florida or Puerto Rico, adding a short pre-cruise stay can also make the overall vacation more comfortable and reduce the stress of same-day flight connections.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY PLAN WITH TRIPS & SHIPS */}
                <section className="ccrb-why-book-section ccrb-why-book-dark">
                    <div className="ccrb-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccrb-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="ccrb-section-heading">Why Plan Your Celebrity Caribbean Cruise With <br /> Trips & Ships Luxury Travel?</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                            <p className="ccrb-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Planning a Caribbean cruise involves more than selecting a ship. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="ccrb-why-book-grid">
                            {ccrWhyPlan.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccrb-why-book-card">
                                        <div className="ccrb-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CcrIconDot size={20} />}
                                        </div>
                                        <h4 className="ccrb-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ccrb-lead-paragraph" style={{ textAlign: 'center', marginTop: '20px', color: '#cbd5e1' }}>
                            The goal is to match the itinerary with how you want to experience the Caribbean.
                        </p>
                    </div>
                </section>

           

                {/* FAQ SECTION */}
                <section className="ccrb-faq-section">
                    <div className="ccrb-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="ccrb-section-heading">Frequently Asked Questions</h2>
                            <div className="ccrb-heading-bar ccrb-bar-center"></div>
                        </div>
                        <div className="ccrb-faq-list">
                            {ccrFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="ccrb-faq-item"
                                    onClick={() => ccrToggleFaq(index)}
                                >
                                    <div className="ccrb-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="ccrb-faq-toggle">
                                            {ccrActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {ccrActiveFaq === index && (
                                        <p className="ccrb-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            

                {/* CTA SECTION */}
                <section className="ccrb-cta-section">
                    <div className="ccrb-cta-bg-pattern"></div>
                    <div className="ccrb-cta-inner">
                        <h2 className="ccrb-cta-heading">Plan Your Celebrity Caribbean Cruise</h2>
                        <div className="ccrb-cta-separator"></div>
                        <p className="ccrb-cta-text">
                            Ready to explore the Caribbean with Celebrity? Trips & Ships Luxury Travel can help you compare Eastern, Western and Southern Caribbean itineraries, select the right Celebrity ship and stateroom, evaluate departure ports and excursions, and build a complete pre- or post-cruise vacation.
                        </p>
                        <div className="ccrb-cta-btn-row">
                            <Link to="/contact" className="ccrb-btn-primary">
                                <CcrIconPhone size={18} />
                                Plan My Celebrity Caribbean Cruise
                            </Link>
                            <button className="ccrb-btn-outline">
                                <CcrIconList size={18} />
                                Speak With a Luxury Caribbean Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default CelebrityCaribbeanCruises