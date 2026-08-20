import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebrityalaskacruises.css'
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
    Binoculars,
    Snowflake,
    Fish,
    Backpack,
    Footprints
} from 'lucide-react'

const iconMap = {
    Ship, Anchor, Compass, Wine, UtensilsCrossed, Wind, Sun, BedDouble, Sparkles,
    Crown, DoorOpen, Waves, Wifi, Utensils, ConciergeBell, GlassWater, Music,
    Landmark, TreeDeciduous, Mountain, Calendar, Plane, FileSearch, BadgePercent,
    Sliders, HeartHandshake, Users, MapPin, Globe, ShieldCheck, Coffee, Home,
    Star, Castle, Building2, Sunrise, ChefHat, Leaf, Droplet, Camera, Clock, ThumbsUp,
    Binoculars, Snowflake, Fish, Backpack, Footprints
}

/* ============================================================
   INLINE SVG ICONS (no lucide-react dependency for these — plain inline)
   ============================================================ */
function CakIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CakIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CakIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CakIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CakIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CakIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CakIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CakIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CakIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CakPlaceholder({ label, className = '' }) {
    return (
        <div className={`cakc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CakIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityAlaskaCruises() {
    const [cakActiveFaq, setCakActiveFaq] = useState(null)
    const [cakActiveStateroom, setCakActiveStateroom] = useState('interior')
    const cakToggleFaq = (index) => {
        setCakActiveFaq(cakActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const cakGlance = [
        { feature: 'Destination', detail: 'Alaska' },
        { feature: 'Main Region', detail: 'Southeast Alaska & Inside Passage' },
        { feature: 'Cruise Season', detail: 'May–September' },
        { feature: 'Popular Cruise Length', detail: '7 nights' },
        { feature: 'Departure Ports', detail: 'Vancouver, Seattle & Seward' },
        { feature: 'Popular Ports', detail: 'Juneau, Skagway, Ketchikan, Sitka & Icy Strait Point' },
        { feature: 'Glacier Experiences', detail: 'Hubbard Glacier, Dawes Glacier & other scenic areas on selected itineraries' },
        { feature: 'Cruise Style', detail: 'Premium' },
        { feature: 'Cruisetours', detail: 'Available' },
        { feature: 'Land Destinations', detail: 'Denali, Anchorage, Talkeetna & other Alaska destinations' },
        { feature: 'Wildlife', detail: 'Whales, eagles, bears, seals & other Alaska wildlife' },
        { feature: 'Shore Excursions', detail: 'Available in Alaska ports' },
        { feature: 'Inside Passage', detail: 'Featured on selected itineraries' },
        { feature: 'One-Way Cruises', detail: 'Available' },
        { feature: 'Round-Trip Cruises', detail: 'Available on selected itineraries' }
    ]

    const cakWhyChoose = [
        { label: 'Cruise through the Inside Passage', icon: 'Waves' },
        { label: 'View massive glaciers', icon: 'Mountain' },
        { label: 'Watch for whales and marine wildlife', icon: 'Fish' },
        { label: 'Explore Alaska ports', icon: 'Anchor' },
        { label: 'Visit historic communities', icon: 'Landmark' },
        { label: 'Experience Alaska Native culture', icon: 'Star' },
        { label: 'Take glacier and wildlife excursions', icon: 'Binoculars' },
        { label: 'Explore Denali on selected Cruisetours', icon: 'TreeDeciduous' },
        { label: 'Combine a cruise with an Alaska land vacation', icon: 'Compass' },
        { label: 'Relax onboard while traveling between destinations', icon: 'Ship' }
    ]

    const cakShipFactors = [
        { label: 'Ship', icon: 'Ship' },
        { label: 'Departure port', icon: 'MapPin' },
        { label: 'Cruise length', icon: 'Clock' },
        { label: 'Glacier destination', icon: 'Mountain' },
        { label: 'Alaska ports', icon: 'Anchor' },
        { label: 'Scenic cruising', icon: 'Camera' },
        { label: 'Stateroom category', icon: 'BedDouble' },
        { label: 'Suite options', icon: 'Crown' },
        { label: 'Sailing date', icon: 'Calendar' },
    ]

    const cakNorthboundStops = [
        { label: 'Vancouver', icon: 'MapPin' },
        { label: 'Inside Passage', icon: 'Waves' },
        { label: 'Ketchikan', icon: 'MapPin' },
        { label: 'Sitka', icon: 'MapPin' },
        { label: 'Icy Strait Point', icon: 'MapPin' },
        { label: 'Juneau', icon: 'MapPin' },
        { label: 'Hubbard Glacier', icon: 'Mountain' },
        { label: 'Seward', icon: 'MapPin' }
    ]

    const cakNorthboundBestFor = [
        'Glacier viewing', 'Inside Passage scenery', 'Southeast Alaska ports',
        'One-way travel', 'Alaska land extensions', 'Denali Cruisetours'
    ]

    const cakSouthboundStops = [
        { label: 'Seward', icon: 'MapPin' },
        { label: 'Hubbard Glacier', icon: 'Mountain' },
        { label: 'Juneau', icon: 'MapPin' },
        { label: 'Skagway', icon: 'MapPin' },
        { label: 'Icy Strait Point', icon: 'MapPin' },
        { label: 'Ketchikan', icon: 'MapPin' },
        { label: 'Inside Passage', icon: 'Waves' },
        { label: 'Vancouver', icon: 'MapPin' }
    ]

    const cakSouthboundBestFor = [
        'Denali or inland Alaska before cruising', 'Hubbard Glacier', 'Southeast Alaska',
        'Vancouver', 'Cruise-and-land vacations'
    ]

    const cakGlacierPairs = [
        { northbound: 'Vancouver', southbound: 'Seward' },
        { northbound: 'Inside Passage', southbound: 'Hubbard Glacier' },
        { northbound: 'Ketchikan', southbound: 'Juneau' },
        { northbound: 'Sitka', southbound: 'Skagway' },
        { northbound: 'Icy Strait Point', southbound: 'Icy Strait Point' },
        { northbound: 'Juneau', southbound: 'Ketchikan' },
        { northbound: 'Hubbard Glacier', southbound: 'Inside Passage' },
        { northbound: 'Seward', southbound: 'Vancouver' }
    ]

    const cakHubbardStops = [
        { label: 'Vancouver', icon: 'MapPin' },
        { label: 'Inside Passage', icon: 'Waves' },
        { label: 'Icy Strait Point', icon: 'MapPin' },
        { label: 'Hubbard Glacier', icon: 'Mountain' },
        { label: 'Juneau', icon: 'MapPin' },
        { label: 'Ketchikan', icon: 'MapPin' },
        { label: 'Inside Passage', icon: 'Waves' },
        { label: 'Vancouver', icon: 'MapPin' }
    ]

    const cakDawesBestFor = [
        { label: 'Glacier scenery', icon: 'Mountain' },
        { label: 'Inside Passage cruising', icon: 'Waves' },
        { label: 'Ketchikan', icon: 'MapPin' },
        { label: 'Southeast Alaska', icon: 'Anchor' },
        { label: 'Scenic photography', icon: 'Camera' },
        { label: 'Wildlife', icon: 'Fish' }
    ]

    const cakInsidePassageFeatures = [
        { label: 'Forested islands', icon: 'TreeDeciduous' },
        { label: 'Snow-covered mountains', icon: 'Mountain' },
        { label: 'Glaciers', icon: 'Snowflake' },
        { label: 'Fjords', icon: 'Waves' },
        { label: 'Waterfalls', icon: 'Droplet' },
        { label: 'Wildlife habitats', icon: 'Fish' }
    ]

    const cakWildlifeSpotInsidePassage = [
        'Humpback whales', 'Orcas', 'Bald eagles', 'Seals', 'Sea otters', 'Other marine wildlife'
    ]

    const cakPorts = [
        {
            name: 'Juneau',
            intro: "Juneau is Alaska's capital and one of the most popular stops on an Alaska cruise. Travelers can explore:",
            bullets: ['Glacier experiences', 'Whale watching', 'Hiking', 'Scenic tours', 'Wildlife', 'Local history'],
            highlight: 'Celebrity highlights Juneau for hiking and whale-watching opportunities.'
        },
        {
            name: 'Skagway',
            intro: "Skagway is closely connected to Alaska's Gold Rush history. Popular experiences include:",
            bullets: ['White Pass & Yukon Route Railway', 'Gold Rush history', 'Scenic tours', 'Hiking', 'Wilderness excursions', 'Adventure activities'],
            highlight: 'Skagway provides a combination of historical and mountain scenery.'
        },
        {
            name: 'Ketchikan',
            intro: 'Ketchikan is known for its connection to Alaska Native heritage, fishing and rainforest scenery. Travelers can experience:',
            bullets: ['Totem poles', 'Native heritage', 'Fishing', 'Wildlife', 'Rainforest excursions', 'Scenic tours'],
            highlight: "Celebrity highlights Ketchikan's Haida and Tlingit heritage and its collection of Native American totem poles."
        },
        {
            name: 'Sitka',
            intro: 'Sitka offers a combination of coastal scenery, Alaska Native heritage and Russian-era history. Popular experiences include:',
            bullets: ['Wildlife', 'Cultural attractions', 'Hiking', 'Scenic sightseeing', 'Historic sites'],
            highlight: 'Sitka appears on selected Celebrity Alaska itineraries.'
        },
        {
            name: 'Icy Strait Point',
            intro: 'Icy Strait Point provides opportunities for wildlife and outdoor experiences. Travelers can look for:',
            bullets: ['Humpback whales', 'Orcas', 'Wildlife', 'Scenic landscapes', 'Adventure activities'],
            highlight: 'Icy Strait Point appears on selected Celebrity glacier itineraries.'
        },
        {
            name: 'Inside Passage',
            intro: 'The Inside Passage is one of the defining experiences of an Alaska cruise. The route passes through waterways surrounded by:',
            bullets: ['Rainforests', 'Mountains', 'Glaciers', 'Wildlife'],
            highlight: "Celebrity's Alaska itineraries include Inside Passage scenic cruising on selected routes."
        }
    ]

    const cakWildlifeList = [
        { label: 'Humpback whales', icon: 'Fish' },
        { label: 'Orcas', icon: 'Fish' },
        { label: 'Bald eagles', icon: 'Star' },
        { label: 'Bears', icon: 'TreeDeciduous' },
        { label: 'Sea otters', icon: 'Waves' },
        { label: 'Harbor seals', icon: 'Waves' },
        { label: 'Sea lions', icon: 'Waves' },
        { label: 'Mountain wildlife', icon: 'Mountain' },
        { label: 'Arctic birds', icon: 'Star' }
    ]

    const cakExcursionCategories = [
        { title: 'Glacier Excursions', icon: 'Mountain', items: ['Glacier sightseeing', 'Helicopter tours', 'Glacier walks', 'Scenic flights'] },
        { title: 'Wildlife Excursions', icon: 'Binoculars', items: ['Whale watching', 'Bear viewing', 'Wildlife tours', 'Eagle viewing'] },
        { title: 'Adventure Excursions', icon: 'Compass', items: ['Hiking', 'Kayaking', 'Ziplining', 'Dog sledding', 'Rafting'] },
        { title: 'Cultural Excursions', icon: 'Landmark', items: ['Alaska Native heritage', 'Gold Rush history', 'Totem poles', 'Historic tours', 'Local cultural experiences'] }
    ]

    const cakCruisetourDestinations = [
        { label: 'Denali', icon: 'Mountain' },
        { label: 'Anchorage', icon: 'Building2' },
        { label: 'Talkeetna', icon: 'MapPin' },
        { label: 'Seward', icon: 'MapPin' },
        { label: 'Alaska Wildlife Conservation Center', icon: 'Fish' },
        { label: 'Other interior Alaska destinations', icon: 'Compass' }
    ]

    const cakDenaliExperience = [
        { label: 'Denali National Park', icon: 'Mountain' },
        { label: 'Anchorage', icon: 'Building2' },
        { label: 'Talkeetna', icon: 'MapPin' },
        { label: 'Scenic rail travel', icon: 'Ship' },
        { label: 'Wildlife', icon: 'Fish' },
        { label: 'Alaska wilderness', icon: 'TreeDeciduous' }
    ]

    const cakDeparturePorts = [
        { name: 'Celebrity Alaska Cruise From Vancouver', desc: "Vancouver is one of Celebrity's major Alaska departure points. Vancouver can be especially convenient for Northbound Glacier cruises, Southbound Glacier cruises, round-trip Alaska cruises, Inside Passage itineraries and Alaska Cruisetours. A pre-cruise stay in Vancouver can also turn the departure city into part of the vacation.", icon: 'MapPin' },
        { name: 'Celebrity Alaska Cruise From Seattle', desc: "Selected Celebrity Alaska itineraries depart from Seattle. Celebrity's Alaska route information lists Seattle among its departure ports, and selected Dawes Glacier itineraries operate round trip from Seattle. Seattle can be a convenient option for travelers who prefer a U.S. departure.", icon: 'Anchor' },
        { name: 'Celebrity Alaska Cruise From Seward', desc: 'Seward is an important gateway for one-way Alaska cruises. Northbound itineraries can finish in Seward, while Southbound itineraries can begin there. Seward can also serve as the connection point between a Celebrity cruise and an Alaska land experience.', icon: 'Ship' },
        { name: 'One-Way & Round-Trip Choices', desc: 'One-way cruises between Vancouver and Seward are useful for combining with land tours. Round-trip sailings from Vancouver or Seattle are convenient for travelers who prefer to begin and end in the same departure city.', icon: 'Compass' }
    ]

    const cakSeasonTable = [
        { feature: 'May', detail: 'Early-season travel' },
        { feature: 'June', detail: 'Long daylight & summer activities' },
        { feature: 'July', detail: 'Peak Alaska season' },
        { feature: 'August', detail: 'Summer wildlife & scenery' },
        { feature: 'September', detail: 'Fall scenery, fewer crowds & possible Northern Lights' }
    ]

    const cakBestTime = [
        { name: 'May', desc: 'May begins the main Alaska cruise season and can appeal to travelers who prefer early-season travel.', icon: 'Sun' },
        { name: 'June', desc: 'June offers very long daylight hours and is excellent for outdoor sightseeing.', icon: 'Sunrise' },
        { name: 'July', desc: "July is one of the most popular months because it falls within Alaska's peak summer season.", icon: 'Star' },
        { name: 'August', desc: 'August continues the peak summer period and offers strong opportunities for outdoor activities and wildlife viewing.', icon: 'Fish' },
        { name: 'September', desc: 'September is the end of the main cruise season and can bring fall colors, fewer crowds and the possibility of seeing the Northern Lights as darkness returns earlier.', icon: 'Snowflake' }
    ]

    const cakInclusions = ['Food and drink', 'Accommodations', 'Service', 'Live entertainment']

    const cakNotIncluded = [
        'Shore excursions', 'Airfare', 'Pre-cruise hotels', 'Post-cruise hotels', 'Specialty dining',
        'Spa services', 'Shopping', 'Travel insurance', 'Some transportation', 'Other personal expenses'
    ]

    const cakVerandaViews = ['Glaciers', 'Mountains', 'Wildlife', 'Waterways', 'Scenic cruising']

    const cakAccommodationsCompared = [
        { name: 'Interior Staterooms', bestFor: 'Travelers focused on ports & public areas', feature: 'A practical choice for time ashore' },
        { name: 'Ocean View Staterooms', bestFor: 'Travelers wanting natural light', feature: 'A window to the scenery' },
        { name: 'Veranda Staterooms', bestFor: 'Travelers wanting private outdoor space', feature: 'Views of glaciers, mountains & wildlife' },
        { name: 'Suites', bestFor: 'Travelers wanting more space', feature: 'Additional space & premium amenities' }
    ]

    const cakOneWayBestFor = ['Denali', 'Interior Alaska', 'Longer vacations', 'Cruise-and-land combinations']
    const cakRoundTripBestFor = ['Easier flight planning', 'Shorter vacations', 'First-time Alaska cruisers', 'Travelers who do not want a land extension']

    const cakCruiseVsLand = [
        { cruise: 'Multiple coastal destinations', land: 'More time in individual areas' },
        { cruise: 'Glacier scenic cruising', land: 'More land-based glacier access' },
        { cruise: 'Convenient transportation', land: 'Greater flexibility' },
        { cruise: 'Alaska ports', land: 'Deeper inland exploration' },
        { cruise: 'Ship accommodations', land: 'Hotels/lodges' },
        { cruise: 'Optional excursions', land: 'Independent touring' },
        { cruise: 'Cruisetours combine both', land: 'Land-focused experience' }
    ]

    const cakWorthIt = [
        { label: 'Glacier scenery', icon: 'Mountain' },
        { label: 'Inside Passage cruising', icon: 'Waves' },
        { label: 'Multiple Alaska ports', icon: 'Anchor' },
        { label: 'Wildlife opportunities', icon: 'Fish' },
        { label: 'Shore excursions', icon: 'Compass' },
        { label: 'Premium onboard experience', icon: 'Crown' },
        { label: 'Vancouver and Seattle departures', icon: 'MapPin' },
        { label: 'One-way itineraries', icon: 'Ship' },
        { label: 'Cruisetour options', icon: 'TreeDeciduous' },
        { label: 'Denali extensions', icon: 'Mountain' }
    ]

    const cakWhoShould = [
        { feature: 'Wildlife Travelers', detail: 'Alaska provides opportunities to see whales, eagles, bears, seals and other wildlife.' },
        { feature: 'Couples', detail: "Scenic cruising, veranda staterooms and Alaska excursions can create a memorable couple's vacation." },
        { feature: 'Families', detail: 'Alaska combines wildlife, history and outdoor experiences that can appeal across generations.' },
        { feature: 'First-Time Alaska Travelers', detail: 'A cruise provides an easy way to experience several destinations in one vacation.' },
        { feature: 'Luxury Cruise Travelers', detail: 'Celebrity combines Alaska exploration with a premium onboard environment.' },
        { feature: 'Travelers Wanting Denali', detail: 'A Celebrity Cruisetour can combine the cruise with interior Alaska and Denali.' }
    ]

    const cakWhoPreferLand = [
        'Want extensive inland travel', 'Prefer independent exploration', 'Want more time in one destination',
        'Want remote wilderness experiences', 'Prefer flexible transportation', 'Are not interested in cruising'
    ]

    const cakPros = [
        'Spectacular glacier scenery', 'Inside Passage cruising', 'Multiple Alaska ports', 'Wildlife opportunities',
        'Wide range of excursions', 'Vancouver departures', 'Seattle departures on selected itineraries',
        'One-way cruise options', 'Round-trip options', 'Denali Cruisetours', 'Premium onboard experience',
        'Cruise-and-land vacation options'
    ]

    const cakCons = [
        'Alaska cruising is seasonal', 'Excursions can add significantly to the total vacation cost',
        'Weather can change quickly', 'Wildlife sightings are not guaranteed', 'Popular summer sailings can have higher demand',
        'One-way cruises require additional flight and transfer planning', 'Land extensions increase the length and cost of the trip'
    ]

    const cakSteps = [
        { title: 'Choose Your Departure Port', desc: 'Compare:', tags: ['Vancouver', 'Seattle', 'Seward'] },
        { title: 'Choose Your Route', desc: 'Consider:', tags: ['Northbound Glacier', 'Southbound Glacier', 'Hubbard Glacier', 'Dawes Glacier', 'Alaska Experience', 'Round-trip itineraries'] },
        { title: 'Choose Your Glacier Experience', desc: 'If glaciers are your priority, compare the specific glacier and scenic cruising included in each itinerary.', tags: [] },
        { title: 'Compare the Ports', desc: 'Decide which destinations matter most:', tags: ['Juneau', 'Skagway', 'Ketchikan', 'Sitka', 'Icy Strait Point'] },
        { title: 'Decide on a Veranda', desc: 'For travelers who value scenery, consider whether a veranda fits your budget.', tags: [] },
        { title: 'Plan Your Excursions', desc: 'Prioritize:', tags: ['Glacier experiences', 'Whale watching', 'Wildlife', 'Hiking', 'Cultural experiences', 'Adventure'] },
        { title: 'Consider a Cruisetour', desc: 'If you have additional time, add Denali or another inland Alaska experience.', tags: [] }
    ]

    const cakPacking = [
        { label: 'Waterproof jacket', icon: 'Wind' },
        { label: 'Warm layers', icon: 'Sun' },
        { label: 'Fleece', icon: 'Sparkles' },
        { label: 'Comfortable walking shoes', icon: 'Footprints' },
        { label: 'Waterproof footwear', icon: 'Droplet' },
        { label: 'Hat', icon: 'Sun' },
        { label: 'Gloves', icon: 'Snowflake' },
        { label: 'Sunglasses', icon: 'Sun' },
        { label: 'Camera', icon: 'Camera' },
        { label: 'Binoculars', icon: 'Binoculars' },
        { label: 'Small backpack', icon: 'Backpack' },
        { label: 'Sunscreen', icon: 'Droplet' },
        { label: 'Reusable water bottle', icon: 'GlassWater' }
    ]

    const cakWhyPlan = [
        { title: 'Compare Celebrity Alaska Ships', icon: 'Ship' },
        { title: 'Compare Northbound and Southbound Itineraries', icon: 'Compass' },
        { title: 'Choose Between Vancouver and Seattle', icon: 'MapPin' },
        { title: 'Compare Hubbard and Dawes Glacier Routes', icon: 'Mountain' },
        { title: 'Select the Right Stateroom', icon: 'BedDouble' },
        { title: 'Plan Alaska Shore Excursions', icon: 'Binoculars' },
        { title: 'Arrange Pre- and Post-Cruise Stays', icon: 'Calendar' },
        { title: 'Add Denali', icon: 'TreeDeciduous' },
        { title: 'Compare Cruisetour Options', icon: 'Globe' },
        { title: 'Coordinate Flights and Transfers', icon: 'Plane' },
        { title: 'Build a Customized Alaska Vacation', icon: 'Sliders' }
    ]

    const cakFaqs = [
        { question: '1. What are Celebrity Alaska Cruises?', answer: 'Celebrity Alaska Cruises are seasonal voyages through Alaska and the Inside Passage featuring glacier viewing, wildlife, Alaska ports, scenic cruising and shore excursions.' },
        { question: '2. What ships does Celebrity use for Alaska cruises?', answer: "Celebrity's Alaska ships vary by sailing and season. Current and recent itineraries include Celebrity Solstice, Celebrity Summit and Celebrity Edge." },
        { question: '3. When is the Celebrity Alaska cruise season?', answer: 'The main Celebrity Alaska cruise season runs from approximately May through September, with June, July and August generally considered the peak months.' },
        { question: '4. What is the best month for a Celebrity Alaska cruise?', answer: 'July is one of the most popular months for Alaska cruising. September can appeal to travelers seeking fall scenery, fewer crowds and possible Northern Lights viewing.' },
        { question: '5. Which Alaska ports does Celebrity visit?', answer: 'Depending on the itinerary, Celebrity can visit Juneau, Skagway, Ketchikan, Sitka and Icy Strait Point, along with scenic destinations such as Hubbard Glacier and the Inside Passage.' },
        { question: '6. Does Celebrity offer Alaska glacier cruises?', answer: 'Yes. Celebrity offers glacier-focused itineraries featuring destinations such as Hubbard Glacier and Dawes Glacier.' },
        { question: '7. Does Celebrity cruise the Inside Passage?', answer: 'Yes. Inside Passage scenic cruising is included on selected Celebrity Alaska itineraries.' },
        { question: '8. What are the best Celebrity Alaska shore excursions?', answer: 'Popular options include glacier experiences, whale watching, wildlife tours, helicopter excursions, hiking, kayaking, cultural experiences and Gold Rush history tours.' },
        { question: '9. Are Celebrity Alaska excursions included?', answer: 'Shore excursions are generally an additional cost on Celebrity Alaska cruises. Travelers can choose excursions based on their sailing and port.' },
        { question: '10. Is a balcony worth it on a Celebrity Alaska cruise?', answer: 'For many travelers, yes. A veranda provides private outdoor space for viewing glaciers, mountains, wildlife and scenic waterways.' },
        { question: '11. Does Celebrity offer Alaska Cruisetours?', answer: 'Yes. Celebrity Cruisetours combine a seven-night Alaska cruise with a multi-night land tour, with selected itineraries including Denali, Anchorage and Talkeetna.' },
        { question: '12. Can I visit Denali on a Celebrity Alaska vacation?', answer: 'Yes. Selected Celebrity Cruisetours combine Alaska cruises with Denali and other inland destinations.' },
        { question: '13. Is Vancouver or Seattle better for a Celebrity Alaska cruise?', answer: 'Both can be good options. Vancouver offers a wide range of Alaska itineraries, while selected Celebrity Dawes Glacier cruises operate round trip from Seattle.' },
        { question: '14. What wildlife can I see on a Celebrity Alaska cruise?', answer: 'Travelers may encounter humpback whales, orcas, bald eagles, bears, seals, sea otters and other Alaska wildlife depending on the itinerary and excursions.' },
        { question: '15. Are Celebrity Alaska Cruises worth it?', answer: "They can be an excellent choice for travelers who want to combine Alaska's glaciers, wildlife and Inside Passage scenery with a premium cruise experience and the option to add an Alaska land tour." }
    ]

    const cakRelated = [
        { title: 'Celebrity Edge Cruise Ship Guide', desc: "Deck plans, staterooms, dining and The Retreat aboard Celebrity's Edge Series ship.", icon: 'Ship', link: '/celebrity-cruises/ships/celebrity-edge' },
        { title: 'Celebrity Beyond Cruise Ship Guide', desc: "Explore Celebrity's award-winning Edge Series ocean ship, deck plans, The Retreat and dining.", icon: 'Anchor', link: '/celebrity-cruises/ships/celebrity-beyond' },
        { title: 'Celebrity Cruises Overview', desc: 'Compare Caribbean, Mediterranean, European and Alaska itineraries across the Celebrity fleet.', icon: 'Globe', link: '/celebrity-cruises/' },
        { title: 'Denali & Alaska Cruisetour Planning Guide', desc: 'How to combine a Celebrity Alaska cruise with Denali, Anchorage and Talkeetna.', icon: 'Mountain', link: '/guides/denali-alaska-cruisetour' },
        { title: 'Alaska Cruise Packing Guide', desc: 'What to pack for glaciers, wildlife excursions and changeable Alaska weather.', icon: 'FileSearch', link: '/guides/alaska-cruise-packing' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const cakSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/alaska/",
                "name": "Celebrity Alaska Cruises: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/alaska/",
                "description": "Explore Celebrity Alaska Cruises, including ships, glacier itineraries, Inside Passage sailing, Alaska ports, excursions, Cruisetours, sailing seasons and planning tips.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsandships.com/celebrity-cruises/alaska/#article" }
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/alaska/#article",
                "headline": "Celebrity Alaska Cruises: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/alaska/",
                "description": "Explore Celebrity Alaska Cruises, including ships, glacier itineraries, Inside Passage sailing, Alaska ports, excursions, Cruisetours, sailing seasons and planning tips.",
                "image": "https://www.tripsandships.com/images/celebrity-alaska-cruises.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/alaska/" }
            },
            {
                "@type": "Service",
                "name": "Celebrity Alaska Cruise Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Alaska Cruise Consulting",
                "description": "Expert Celebrity Alaska cruise planning services helping travelers compare ships, glacier itineraries, Inside Passage routes, excursions, Cruisetours, cabins and pre- or post-cruise stays."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Alaska Cruises", "item": "https://www.tripsandships.com/celebrity-cruises/alaska/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": cakFaqs.map(f => ({
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
                <title>Celebrity Alaska Cruises: Complete Guide</title>
                <meta name="title" content="Celebrity Alaska Cruises | Ships, Itineraries & Glaciers" />
                <meta
                    name="description"
                    content="Explore Celebrity Alaska Cruises, including ships, glacier itineraries, Inside Passage sailing, Alaska ports, excursions, Cruisetours, sailing seasons and planning tips."
                />
                <script type="application/ld+json">
                    {JSON.stringify(cakSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="cakc-page-wrapper">

                {/* HERO SECTION */}
                <section className="cakc-hero-section">
                    <div className="cakc-hero-overlay"></div>
                    <div className="cakc-hero-content">
                        <div className="cakc-hero-tag">
                            <CakIconSparkle size={16} />
                            <span>Celebrity Alaska Cruises</span>
                        </div>
                        <h1 className="cakc-hero-title">Celebrity Alaska Cruises <br /> Complete Guide</h1>
                        <p className="cakc-hero-subtitle">
                            Ships, Glacier Itineraries, Alaska Ports & Cruisetours
                        </p>
                        <div className="cakc-hero-btn-row">
                            <Link to='/contact' className="cakc-btn-primary">
                                <CakIconPhone size={18} />
                                Plan My Celebrity Alaska Cruise
                            </Link>
                            <button className="cakc-btn-outline">
                                <CakIconList size={18} />
                                Speak With a Luxury Alaska Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="cakc-intro-section">
                    <div className="cakc-intro-container">
                        <div className="cakc-intro-grid">
                            <div className="cakc-intro-copy">
                                <span className="cakc-eyebrow-label">EXPERIENCE ALASKA WITH CELEBRITY</span>
                                <h2 className="cakc-section-heading">Celebrity Alaska Cruises</h2>
                                <div className="cakc-heading-bar"></div>
                                <p className="cakc-lead-paragraph">
                                    Celebrity Alaska Cruises combine dramatic glaciers, wildlife, scenic waterways and historic Alaska ports with the elevated onboard experience of Celebrity Cruises.
                                </p>
                                <p className="cakc-lead-paragraph">
                                    Celebrity's Alaska program includes 7-night glacier itineraries, Inside Passage sailings and one-way routes between Vancouver and Seward, along with selected round-trip cruises from Vancouver and Seattle. Current Celebrity itineraries include glacier-focused journeys featuring destinations such as Hubbard Glacier, Dawes Glacier, Juneau, Skagway, Ketchikan, Sitka and Icy Strait Point.
                                </p>
                                <p className="cakc-lead-paragraph">
                                    Celebrity also offers Cruisetours that combine a cruise with multi-night land experiences in Alaska, including destinations such as Denali, Anchorage and Talkeetna. For travelers planning an Alaska cruise, the key decisions are the ship, itinerary, glacier experience, departure port, excursions, sailing season and whether to add a pre- or post-cruise land tour.
                                </p>
                            </div>
                            <div className="cakc-intro-image-frame">
                                <CakPlaceholder label="Celebrity Alaska Cruises" />
                                <div className="cakc-intro-badge-float">
                                    <CakIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Alaska Season: May–September</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="cakc-quick-answer-section">
                    <div className="cakc-quick-answer-container">
                        <div className="cakc-quick-answer-card">
                            <h3 className="cakc-quick-answer-title">What Are Celebrity Alaska Cruises?</h3>
                            <p className="cakc-quick-answer-text">
                                Celebrity Alaska Cruises are seasonal voyages through Alaska and the Inside Passage, combining glacier viewing, wildlife, scenic cruising, Alaska ports and shore excursions with Celebrity's premium onboard experience. Current Celebrity Alaska routes include Northbound Glacier, Southbound Glacier and Dawes or Hubbard Glacier itineraries, with selected sailings operating between Vancouver and Seward or round trip from Vancouver or Seattle.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="cakc-inline-cta-section">
                    <div className="cakc-inline-cta-container">
                        <span className="cakc-inline-cta-tag">Expert Planning</span>
                        <p className="cakc-inline-cta-text">Ready to experience Alaska with Celebrity?</p>
                        <div className="cakc-inline-cta-btn-row">
                            <Link to="/contact" className="cakc-btn-primary">
                                <CakIconPhone size={18} />
                                Plan My Celebrity Alaska Cruise
                            </Link>
                            <Link to="/contact" className="cakc-btn-outline1">
                                <CakIconList size={18} />
                                Speak With a Luxury Alaska Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="cakc-glance-section">
                    <div className="cakc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">PROGRAM OVERVIEW</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska Cruises at a Glance</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                        </div>
                        <div className="cakc-glance-table">
                            {cakGlance.map((row, idx) => (
                                <div key={idx} className="cakc-glance-row">
                                    <div className="cakc-glance-feature">{row.feature}</div>
                                    <div className="cakc-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cakc-included-note">
                            Celebrity's Alaska program currently includes a variety of cruise routes and Cruisetours, with exact ships, dates and destinations varying by sailing.
                        </p>
                    </div>
                </section>

                {/* WHY CHOOSE CELEBRITY ALASKA CRUISES */}
                <section className="cakc-why-choose-section">
                    <div className="cakc-why-choose-container">
                        <div className="cakc-why-choose-split-grid">
                            {/* Left column: Content */}
                            <div className="cakc-why-choose-content-col">
                                <span className="cakc-eyebrow-label">THE ALASKA DIFFERENCE</span>
                                <h2 className="cakc-section-heading">Why Choose Celebrity Alaska Cruises?</h2>
                                <div className="cakc-heading-bar"></div>
                                <p className="cakc-lead-paragraph">
                                    Alaska is different from a conventional cruise destination. The scenery is a major part of the journey, with ships sailing through waters surrounded by mountains, forests, glaciers and wildlife habitats. Celebrity Alaska Cruises give travelers opportunities to:
                                </p>
                                <div className="cakc-why-choose-footer-note">
                                    <p className="cakc-why-choose-note">
                                        The experience can combine scenic cruising, adventure and luxury in one Alaska vacation.
                                    </p>
                                </div>
                            </div>

                            {/* Right column: Keypoints */}
                            <div className="cakc-why-choose-keypoints-col">
                                <div className="cakc-why-choose-keypoints-grid">
                                    {cakWhyChoose.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-why-choose-card">
                                                <div className="cakc-why-choose-icon-wrapper">
                                                    {IconComponent ? (
                                                        <IconComponent size={20} className="cakc-why-choose-icon" />
                                                    ) : (
                                                        <CakIconCheck size={20} className="cakc-why-choose-icon" />
                                                    )}
                                                </div>
                                                <span className="cakc-why-choose-card-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY ALASKA CRUISE SHIPS */}
                <section className="cakc-feature-section cakc-bg-white">
                    <div className="cakc-feature-container">
                        <div className="cakc-feature-grid">
                            <div className="cakc-feature-image-col">
                                <div className="cakc-badge-overlay">
                                    <CakIconSparkle size={14} />
                                    <span>Alaska Fleet</span>
                                </div>
                                <CakPlaceholder label="Celebrity Alaska Cruise Ships" />
                            </div>
                            <div className="cakc-feature-copy-col">
                                <span className="cakc-eyebrow-label">THE FLEET</span>
                                <h2 className="cakc-feature-title">Celebrity Alaska Cruise Ships</h2>
                                <p className="cakc-lead-paragraph">
                                    Celebrity's Alaska fleet varies by season and itinerary. Current and recent Alaska itineraries include ships such as Celebrity Solstice, Celebrity Summit and Celebrity Edge, with specific ship assignments changing according to the sailing. When comparing Celebrity Alaska cruises, travelers should look at the ship and itinerary together. Important factors include:
                                </p>
                                <div className="cakc-feature-list">
                                    {cakShipFactors.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-feature-item-card">
                                                <div className="cakc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CakIconCheck size={18} />}
                                                </div>
                                                <span className="cakc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cakc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    For Alaska, the itinerary can be just as important as the ship because much of the vacation experience happens while viewing the landscape from the water.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NORTHBOUND GLACIER */}
                <section className="cakc-feature-section cakc-dark-section">
                    <div className="cakc-feature-container">
                        <div className="cakc-feature-grid cakc-reverse">
                            <div className="cakc-feature-copy-col">
                                <span className="cakc-eyebrow-label">GLACIER ITINERARY</span>
                                <h2 className="cakc-feature-title" style={{ textAlign: 'left' }}>Celebrity Alaska Northbound Glacier</h2>
                                <p className="cakc-lead-paragraph">
                                    A Northbound Glacier itinerary typically travels from Vancouver to Seward. A current Celebrity Solstice sailing includes:
                                </p>
                                <div className="cakc-feature-list">
                                    {cakNorthboundStops.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-feature-item-card">
                                                <div className="cakc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CakIconCheck size={18} />}
                                                </div>
                                                <span className="cakc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cakc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    This type of itinerary can work particularly well for travelers who want to continue into an Alaska land vacation after the cruise. Best For: {cakNorthboundBestFor.join(', ')}.
                                </p>
                            </div>
                            <div className="cakc-feature-image-col">
                                <div className="cakc-badge-overlay">
                                    <CakIconSparkle size={14} />
                                    <span>Northbound Glacier</span>
                                </div>
                                <CakPlaceholder label="Celebrity Solstice — Northbound Glacier" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOUTHBOUND GLACIER */}
                <section className="cakc-feature-section cakc-bg-white">
                    <div className="cakc-feature-container">
                        <div className="cakc-feature-grid">
                            <div className="cakc-feature-image-col">
                                <div className="cakc-badge-overlay">
                                    <CakIconSparkle size={14} />
                                    <span>Southbound Glacier</span>
                                </div>
                                <CakPlaceholder label="Celebrity Summit — Southbound Glacier" />
                            </div>
                            <div className="cakc-feature-copy-col">
                                <span className="cakc-eyebrow-label">GLACIER ITINERARY</span>
                                <h2 className="cakc-feature-title">Celebrity Alaska Southbound Glacier</h2>
                                <p className="cakc-lead-paragraph">
                                    A Southbound Glacier itinerary travels from Seward to Vancouver. A current Celebrity Summit itinerary includes:
                                </p>
                                <div className="cakc-feature-list">
                                    {cakSouthboundStops.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-feature-item-card">
                                                <div className="cakc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CakIconCheck size={18} />}
                                                </div>
                                                <span className="cakc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cakc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    This route can be especially useful when beginning with an Alaska land experience and finishing with a cruise south through the Inside Passage. Best For: {cakSouthboundBestFor.join(', ')}.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NORTHBOUND VS SOUTHBOUND (compare pair-table) */}
                <section className="cakc-compare-section cakc-dark-section">
                    <div className="cakc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">ITINERARY COMPARISON</span>
                            <h2 className="cakc-section-heading">Northbound vs. Southbound Glacier Itineraries</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                        </div>
                        <div className="cakc-pair-table">
                            <div className="cakc-pair-row cakc-pair-header">
                                <div className="cakc-pair-cell">Northbound (Vancouver → Seward)</div>
                                <div className="cakc-pair-cell">Southbound (Seward → Vancouver)</div>
                            </div>
                            {cakGlacierPairs.map((row, idx) => (
                                <div key={idx} className="cakc-pair-row">
                                    <div className="cakc-pair-cell">{row.northbound}</div>
                                    <div className="cakc-pair-cell">{row.southbound}</div>
                                </div>
                            ))}
                        </div>
                        <div className="cakc-choice-board cakc-choice-board-inline">
                            <div className="cakc-choice-panel">
                                <h3 className="cakc-choice-title">
                                    <CakIconCheck size={22} />
                                    Choose Northbound if you want:
                                </h3>
                                <div className="cakc-choice-list">
                                    {cakNorthboundBestFor.map((item, idx) => (
                                        <div key={idx} className="cakc-choice-item">
                                            <div className="cakc-choice-icon-wrap">
                                                <CakIconCheck size={16} />
                                            </div>
                                            <div className="cakc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cakc-choice-panel">
                                <h3 className="cakc-choice-title">
                                    <CakIconCheck size={22} />
                                    Choose Southbound if you want:
                                </h3>
                                <div className="cakc-choice-list">
                                    {cakSouthboundBestFor.map((item, idx) => (
                                        <div key={idx} className="cakc-choice-item">
                                            <div className="cakc-choice-icon-wrap">
                                                <CakIconCheck size={16} />
                                            </div>
                                            <div className="cakc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HUBBARD GLACIER */}
                <section className="cakc-feature-section cakc-bg-white">
                    <div className="cakc-feature-container">
                        <div className="cakc-feature-grid">
                            <div className="cakc-feature-image-col">
                                <div className="cakc-badge-overlay">
                                    <CakIconDot size={14} />
                                    <span>Hubbard Glacier</span>
                                </div>
                                <CakPlaceholder label="Hubbard Glacier" />
                            </div>
                            <div className="cakc-feature-copy-col">
                                <span className="cakc-eyebrow-label">SIGNATURE GLACIER</span>
                                <h2 className="cakc-feature-title">Celebrity Alaska Hubbard Glacier Cruises</h2>
                                <p className="cakc-lead-paragraph">
                                    Hubbard Glacier is one of the signature glacier experiences available on selected Celebrity Alaska itineraries. The glacier is located near Yakutat and is known for its immense scale and dramatic ice formations. On a Hubbard Glacier sailing, travelers can view the glacier from the ship while sailing through the surrounding waters. Celebrity describes Hubbard Glacier as the longest tidewater glacier in the world.
                                </p>
                                <p className="cakc-lead-paragraph" style={{ marginTop: '16px' }}>
                                    A current 7-night Hubbard Glacier itinerary from Vancouver includes:
                                </p>
                                <div className="cakc-feature-list">
                                    {cakHubbardStops.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-feature-item-card">
                                                <div className="cakc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CakIconCheck size={18} />}
                                                </div>
                                                <span className="cakc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DAWES GLACIER */}
                <section className="cakc-feature-section cakc-bg-soft">
                    <div className="cakc-feature-container">
                        <div className="cakc-feature-grid cakc-reverse">
                            <div className="cakc-feature-copy-col">
                                <span className="cakc-eyebrow-label">SIGNATURE GLACIER</span>
                                <h2 className="cakc-feature-title" style={{ textAlign: 'left' }}>Celebrity Alaska Dawes Glacier Cruises</h2>
                                <p className="cakc-lead-paragraph">
                                    Dawes Glacier is another glacier experience featured on selected Celebrity Alaska itineraries. Dawes Glacier cruises can operate round trip from Vancouver and, on selected routes, from Seattle or between Vancouver and Seattle.
                                </p>
                                <p className="cakc-lead-paragraph" style={{ marginTop: '12px' }}>Best For:</p>
                                <div className="cakc-feature-list">
                                    {cakDawesBestFor.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-feature-item-card">
                                                <div className="cakc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CakIconCheck size={18} />}
                                                </div>
                                                <span className="cakc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="cakc-feature-image-col">
                                <div className="cakc-badge-overlay">
                                    <CakIconDot size={14} />
                                    <span>Dawes Glacier</span>
                                </div>
                                <CakPlaceholder label="Dawes Glacier" />
                            </div>
                        </div>
                    </div>
                </section>

           

                {/* INSIDE PASSAGE */}
                <section className="cakc-feature-section cakc-dark-section">
                    <div className="cakc-feature-container">
                        <div className="cakc-feature-grid">
                            <div className="cakc-feature-image-col">
                                <div className="cakc-badge-overlay">
                                    <CakIconDot size={14} />
                                    <span>Inside Passage</span>
                                </div>
                                <CakPlaceholder label="Inside Passage Scenic Cruising" />
                            </div>
                            <div className="cakc-feature-copy-col">
                                <span className="cakc-eyebrow-label">SCENIC CRUISING</span>
                                <h2 className="cakc-feature-title">Celebrity Alaska Inside Passage Cruises</h2>
                                <p className="cakc-lead-paragraph">
                                    The Inside Passage is one of the defining experiences of an Alaska cruise. The route passes through a network of waterways surrounded by:
                                </p>
                                <div className="cakc-feature-list">
                                    {cakInsidePassageFeatures.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-feature-item-card">
                                                <div className="cakc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CakIconCheck size={18} />}
                                                </div>
                                                <span className="cakc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cakc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's Alaska itineraries include Inside Passage scenic cruising on selected routes. Wildlife You May Spot: {cakWildlifeSpotInsidePassage.join(', ')}.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ALASKA CRUISE PORTS */}
                <section className="cakc-itinerary-section cakc-bg-white">
                    <div className="cakc-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">SHORE DESTINATIONS</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska Cruise Ports</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Alaska program includes a wide selection of ports and destinations.
                            </p>
                        </div>
                        <div className="cakc-itinerary-grid">
                            {cakPorts.map((port, idx) => (
                                <div key={idx} className="cakc-itinerary-card" style={{ position: 'relative' }}>
                                    <div style={{ height: '4px', background: idx % 2 === 0 ? 'var(--cakc-green)' : 'var(--cakc-navy)', width: '100%', position: 'absolute', top: 0, left: 0, borderTopLeftRadius: '20px', borderTopRightRadius: '20px', zIndex: 10 }}></div>
                                    <h3 className="cakc-itinerary-region">
                                        <MapPin size={20} />
                                        {port.name}
                                    </h3>
                                    <p className="cakc-lead-paragraph" style={{ marginBottom: '18px' }}>{port.intro}</p>
                                    <ul className="cakc-itinerary-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', padding: '18px 30px 24px', flexGrow: 1 }}>
                                        {port.bullets.map((b, bIdx) => (
                                            <li key={bIdx} style={{ width: 'fit-content', margin: 0 }}><CakIconCheck size={16} className="cakc-included-icon" />{b}</li>
                                        ))}
                                    </ul>
                                    <p className="cakc-itinerary-note">{port.highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WILDLIFE */}
                <section className="cakc-included-section cakc-bg-soft">
                    <div className="cakc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">NATURE & WILDLIFE</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska Wildlife</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Wildlife is one of the major reasons travelers choose Alaska. Depending on the destination, excursion and season, travelers may encounter:
                            </p>
                        </div>
                        <div className="cakc-included-grid">
                            {cakWildlifeList.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cakc-included-item">
                                        {IconComponent ? <IconComponent size={18} className="cakc-included-icon" /> : <CakIconCheck size={18} className="cakc-included-icon" />}
                                        <span>{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cakc-included-note">
                            Celebrity's Alaska itineraries highlight wildlife encounters throughout the Inside Passage and Alaska ports. Whale watching is one of the most popular Alaska excursions — Juneau and Icy Strait Point can provide opportunities to look for humpback whales, orcas and other marine wildlife.
                        </p>
                    </div>
                </section>

                {/* SHORE EXCURSIONS */}
                <section className="cakc-feature-section cakc-bg-white">
                    <div className="cakc-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <span className="cakc-eyebrow-label">ON SHORE</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska Shore Excursions</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity offers a broad range of Alaska shore excursions.
                            </p>
                        </div>
                        <div className="cakc-feature-desc-list">
                            {cakExcursionCategories.map((cat, idx) => {
                                const IconComponent = iconMap[cat.icon];
                                return (
                                    <div key={idx} className="cakc-feature-desc-card">
                                        <div className="cakc-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="cakc-feature-card-icon-inline" />}
                                            <h4 className="cakc-feature-desc-title">{cat.title}</h4>
                                        </div>
                                        <p className="cakc-feature-desc-text">{cat.items.join(', ')}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cakc-included-note">
                            Celebrity's Alaska excursion program includes activities ranging from kayaking and guided walks to glacier and helicopter experiences.
                        </p>
                    </div>
                </section>

                {/* ARE EXCURSIONS INCLUDED */}
                <section className="cakc-worth-section cakc-bg-soft">
                    <div className="cakc-worth-container">
                        <span className="cakc-eyebrow-label">BUDGETING</span>
                        <h2 className="cakc-section-heading">Are Celebrity Alaska Excursions Included?</h2>
                        <div className="cakc-heading-bar cakc-bar-center"></div>
                        <p className="cakc-lead-paragraph">
                            Celebrity Alaska shore excursions are generally not automatically included in the standard cruise fare. Travelers can select and purchase excursions based on their sailing and destination. This is different from Celebrity's Galápagos program, where expedition excursions form part of the included experience. When budgeting for an Alaska cruise, travelers should therefore consider excursion costs separately.
                        </p>
                    </div>
                </section>

                {/* CRUISETOURS */}
                <section className="cakc-feature-section cakc-dark-section">
                    <div className="cakc-feature-container">
                        <div className="cakc-feature-grid cakc-reverse">
                            <div className="cakc-feature-copy-col">
                                <span className="cakc-eyebrow-label">CRUISE + LAND</span>
                                <h2 className="cakc-feature-title" style={{ textAlign: 'left' }}>Celebrity Alaska Cruisetours</h2>
                                <p className="cakc-lead-paragraph">
                                    Celebrity Cruisetours combine a seven-night Alaska cruise with a multi-night land tour. This allows travelers to experience both the southeastern coastline and Alaska's interior. Celebrity's Cruisetour program can include destinations such as:
                                </p>
                                <div className="cakc-feature-list">
                                    {cakCruisetourDestinations.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-feature-item-card">
                                                <div className="cakc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CakIconCheck size={18} />}
                                                </div>
                                                <span className="cakc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cakc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity describes Cruisetours as a way to combine a seven-night sailing with multi-night land travel through Alaska.
                                </p>
                            </div>
                            <div className="cakc-feature-image-col">
                                <div className="cakc-badge-overlay">
                                    <CakIconSparkle size={14} />
                                    <span>Cruisetours</span>
                                </div>
                                <CakPlaceholder label="Celebrity Alaska Cruisetours" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* DENALI */}
                <section className="cakc-feature-section cakc-bg-soft">
                    <div className="cakc-feature-container">
                        <div className="cakc-feature-grid">
                            <div className="cakc-feature-image-col">
                                <div className="cakc-badge-overlay">
                                    <CakIconSparkle size={14} />
                                    <span>Denali</span>
                                </div>
                                <CakPlaceholder label="Celebrity Alaska + Denali" />
                            </div>
                            <div className="cakc-feature-copy-col">
                                <span className="cakc-eyebrow-label">MOST POPULAR ADDITION</span>
                                <h2 className="cakc-feature-title">Celebrity Alaska + Denali</h2>
                                <p className="cakc-lead-paragraph">
                                    Denali is one of the most popular additions to a Celebrity Alaska vacation. A Cruisetour can combine an Alaska Cruise + Denali + Interior Alaska. Depending on the itinerary, travelers may experience:
                                </p>
                                <div className="cakc-feature-list">
                                    {cakDenaliExperience.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-feature-item-card">
                                                <div className="cakc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CakIconCheck size={18} />}
                                                </div>
                                                <span className="cakc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cakc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Current Celebrity Cruisetour options include itineraries combining a cruise with Denali and other inland destinations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DEPARTURE PORTS */}
                <section className="cakc-feature-section cakc-bg-white">
                    <div className="cakc-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <span className="cakc-eyebrow-label">GATEWAY CITIES</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska Departure Ports</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                        </div>
                        <div className="cakc-feature-desc-list">
                            {cakDeparturePorts.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cakc-feature-desc-card">
                                        <div className="cakc-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="cakc-feature-card-icon-inline" />}
                                            <h4 className="cakc-feature-desc-title">{item.name}</h4>
                                        </div>
                                        <p className="cakc-feature-desc-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CRUISE SEASON */}
                <section className="cakc-glance-section cakc-bg-soft">
                    <div className="cakc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">WHEN TO SAIL</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska Cruise Season</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Alaska cruise season is concentrated in the warmer months. Celebrity describes June, July and August as peak months, with May and September representing lower-season periods. Alaska cruises generally do not operate during the winter because of the extreme cold and limited daylight.
                            </p>
                        </div>
                        <div className="cakc-glance-table">
                            {cakSeasonTable.map((row, idx) => (
                                <div key={idx} className="cakc-glance-row">
                                    <div className="cakc-glance-feature">{row.feature}</div>
                                    <div className="cakc-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BEST TIME */}
                <section className="cakc-feature-section cakc-bg-white">
                    <div className="cakc-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <span className="cakc-eyebrow-label">MONTH BY MONTH</span>
                            <h2 className="cakc-section-heading">Best Time for a Celebrity Alaska Cruise</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                There is no single best month for everyone.
                            </p>
                        </div>
                        <div className="cakc-feature-desc-list cakc-best-time-list">
                            {cakBestTime.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cakc-feature-desc-card">
                                        <div className="cakc-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="cakc-feature-card-icon-inline" />}
                                            <h4 className="cakc-feature-desc-title">{item.name}</h4>
                                        </div>
                                        <p className="cakc-feature-desc-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CRUISE INCLUSIONS */}
                <section className="cakc-included-section cakc-dark-section cakc-cruise-inclusions-section">
                    <div className="cakc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">CRUISE FARE</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska Cruise Inclusions</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's standard Alaska cruise experience includes the core onboard vacation. Celebrity states that its vacations include:
                            </p>
                        </div>
                        <div className="cakc-included-grid">
                            {cakInclusions.map((item, idx) => (
                                <div key={idx} className="cakc-included-item">
                                    <CakIconCheck size={18} className="cakc-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cakc-included-note">
                            Exact inclusions depend on the fare, package and applicable terms. Travelers should distinguish between cruise inclusions and optional costs such as shore excursions, specialty dining, spa services and other purchases.
                        </p>
                    </div>
                </section>

                {/* WHAT'S NOT INCLUDED */}
                <section className="cakc-audience-section">
                    <div className="cakc-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">WHAT'S NOT INCLUDED?</span>
                            <h2 className="cakc-section-heading">What's Not Included?</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Depending on the fare and package, travelers may need to budget separately for:
                            </p>
                        </div>
                        <div className="cakc-audience-column cakc-audience-negative">
                            <ul className="cakc-audience-list">
                                {cakNotIncluded.map((item, idx) => (
                                    <li key={idx} className="cakc-audience-item">
                                        <CakIconX size={18} className="cakc-audience-check cakc-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="cakc-itinerary-note" style={{ marginTop: '24px' }}>
                            Always check the specific booking terms for the sailing selected.
                        </p>
                    </div>
                </section>

                {/* ACCOMMODATIONS INTRO & TABBED SHOWCASE */}
                <section className="cakc-accommodations-section">
                    <div className="cakc-accommodations-container">

                        <div className="cakc-accommodations-header">
                            <span className="cakc-eyebrow-label">STATEROOMS & SUITES</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska Cruise Accommodations</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph">
                                Celebrity offers several stateroom and suite categories. For Alaska, the view can be particularly important.
                            </p>
                        </div>

                        {/* Segmented Tab Switcher */}
                        <div className="cakc-accommodations-tabs">
                            {[
                                { id: 'interior', label: 'Interior' },
                                { id: 'oceanview', label: 'Ocean View' },
                                { id: 'veranda', label: 'Veranda' },
                                { id: 'suites', label: 'Suites' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`cakc-accommodation-tab-btn ${cakActiveStateroom === tab.id ? 'active' : ''}`}
                                    onClick={() => setCakActiveStateroom(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Active Panel Content */}
                        <div className="cakc-accommodation-panel">
                            {cakActiveStateroom === 'interior' && (
                                <div className="cakc-accommodation-panel-grid animate-fade-in">
                                    <div className="cakc-accommodation-image-col">
                                        <div className="cakc-badge-overlay">
                                            <CakIconSparkle size={14} />
                                            <span>Interior</span>
                                        </div>
                                        <CakPlaceholder label="Interior Stateroom" />
                                    </div>
                                    <div className="cakc-accommodation-info-col">
                                        <span className="cakc-eyebrow-label">ACCOMMODATIONS</span>
                                        <h3 className="cakc-accommodation-title">Interior Staterooms</h3>
                                        <p className="cakc-accommodation-description">
                                            A practical choice for travelers who expect to spend most of their time exploring ports and public areas.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {cakActiveStateroom === 'oceanview' && (
                                <div className="cakc-accommodation-panel-grid animate-fade-in">
                                    <div className="cakc-accommodation-image-col">
                                        <div className="cakc-badge-overlay">
                                            <CakIconSparkle size={14} />
                                            <span>Ocean View</span>
                                        </div>
                                        <CakPlaceholder label="Ocean View Stateroom" />
                                    </div>
                                    <div className="cakc-accommodation-info-col">
                                        <span className="cakc-eyebrow-label">ACCOMMODATIONS</span>
                                        <h3 className="cakc-accommodation-title">Ocean View Staterooms</h3>
                                        <p className="cakc-accommodation-description">
                                            An ocean-view stateroom provides natural light and a window to the scenery.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {cakActiveStateroom === 'veranda' && (
                                <div className="cakc-accommodation-panel-grid animate-fade-in">
                                    <div className="cakc-accommodation-image-col">
                                        <div className="cakc-badge-overlay">
                                            <CakIconSparkle size={14} />
                                            <span>Veranda</span>
                                        </div>
                                        <CakPlaceholder label="Veranda Stateroom" />
                                    </div>
                                    <div className="cakc-accommodation-info-col">
                                        <span className="cakc-eyebrow-label">MOST REQUESTED FOR ALASKA</span>
                                        <h3 className="cakc-accommodation-title text-gold">Veranda Staterooms</h3>
                                        <p className="cakc-accommodation-description">
                                            A veranda can be especially appealing in Alaska because it provides private outdoor space for viewing:
                                        </p>
                                        <div className="cakc-veranda-checklist">
                                            {cakVerandaViews.map((item, idx) => (
                                                <div key={idx} className="cakc-veranda-check-item">
                                                    <div className="cakc-veranda-check-icon">
                                                        <CakIconCheck size={16} />
                                                    </div>
                                                    <span className="cakc-veranda-check-text">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {cakActiveStateroom === 'suites' && (
                                <div className="cakc-accommodation-panel-grid animate-fade-in">
                                    <div className="cakc-accommodation-image-col">
                                        <div className="cakc-badge-overlay">
                                            <CakIconSparkle size={14} />
                                            <span>Suite</span>
                                        </div>
                                        <CakPlaceholder label="Suite" />
                                    </div>
                                    <div className="cakc-accommodation-info-col">
                                        <span className="cakc-eyebrow-label">ACCOMMODATIONS</span>
                                        <h3 className="cakc-accommodation-title">Suites</h3>
                                        <p className="cakc-accommodation-description">
                                            Suites offer additional space and premium amenities for travelers who want a more elevated onboard experience.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </section>

                {/* IS A BALCONY WORTH IT */}
                <section className="cakc-worth-section cakc-dark-section">
                    <div className="cakc-worth-container">
                        <span className="cakc-eyebrow-label">DECISION POINT</span>
                        <h2 className="cakc-section-heading">Is a Balcony Worth It on a Celebrity Alaska Cruise?</h2>
                        <div className="cakc-heading-bar cakc-bar-center"></div>
                        <p className="cakc-lead-paragraph">
                            For many Alaska travelers, yes. A veranda provides a private space to watch mountains, glaciers and wildlife as the ship moves through scenic waters. However, Alaska weather can be cool and wet, so travelers should also make use of the ship's public observation areas.
                        </p>
                    </div>
                </section>

             

                {/* ONE-WAY VS ROUND-TRIP */}
                <section className="cakc-compare-section cakc-bg-soft">
                    <div className="cakc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">ROUTE STYLE</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska One-Way vs. Round-Trip Cruises</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                        </div>
                        <div className="cakc-choice-board cakc-choice-board-inline">
                            <div className="cakc-choice-panel">
                                <h3 className="cakc-choice-title">
                                    <CakIconCheck size={22} />
                                    One-Way Alaska Cruises
                                </h3>
                                <p className="cakc-lead-paragraph">
                                    One-way cruises between Vancouver and Seward can be particularly useful for travelers who want to combine their cruise with an Alaska land vacation.
                                </p>
                                <div className="cakc-choice-list">
                                    {cakOneWayBestFor.map((item, idx) => (
                                        <div key={idx} className="cakc-choice-item">
                                            <div className="cakc-choice-icon-wrap">
                                                <CakIconCheck size={16} />
                                            </div>
                                            <div className="cakc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cakc-choice-panel">
                                <h3 className="cakc-choice-title">
                                    <CakIconCheck size={22} />
                                    Round-Trip Alaska Cruises
                                </h3>
                                <p className="cakc-lead-paragraph">
                                    Round-trip sailings can be simpler for travelers who want the cruise to begin and end in the same city.
                                </p>
                                <div className="cakc-choice-list">
                                    {cakRoundTripBestFor.map((item, idx) => (
                                        <div key={idx} className="cakc-choice-item">
                                            <div className="cakc-choice-icon-wrap">
                                                <CakIconCheck size={16} />
                                            </div>
                                            <div className="cakc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY ALASKA CRUISE VS ALASKA LAND VACATION */}
                <section className="cakc-compare-section cakc-dark-section">
                    <div className="cakc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">CRUISE VS LAND</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska vs. Alaska Land Vacation</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                        </div>
                        <div className="cakc-pair-table">
                            <div className="cakc-pair-row cakc-pair-header">
                                <div className="cakc-pair-cell">Celebrity Alaska Cruise</div>
                                <div className="cakc-pair-cell">Alaska Land Vacation</div>
                            </div>
                            {cakCruiseVsLand.map((row, idx) => (
                                <div key={idx} className="cakc-pair-row">
                                    <div className="cakc-pair-cell">{row.cruise}</div>
                                    <div className="cakc-pair-cell">{row.land}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cakc-included-note">
                            For travelers who want the broadest experience, combining a Celebrity cruise with a Cruisetour can offer both coastal and inland Alaska.
                        </p>
                    </div>
                </section>

                {/* ARE THEY WORTH IT */}
                <section className="cakc-tag-section cakc-bg-white">
                    <div className="cakc-worth-container-split">
                        <div className="cakc-worth-split-grid">

                            {/* Left Side: Content info */}
                            <div className="cakc-worth-info-col">
                                <span className="cakc-eyebrow-label">INVESTMENT & VALUE</span>
                                <h2 className="cakc-section-heading">Are Celebrity Alaska Cruises Worth It?</h2>
                                <div className="cakc-heading-bar"></div>
                                <p className="cakc-lead-paragraph">
                                    Celebrity Alaska Cruises can be an excellent choice for travelers who want to experience several Alaska destinations without repeatedly changing hotels. The biggest advantages are:
                                </p>
                                <div className="cakc-worth-footer-note">
                                    <p className="cakc-worth-note">
                                        The right itinerary is more important than simply choosing the most attractive ship.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Advantages Stack */}
                            <div className="cakc-worth-advantages-col">
                                <div className="cakc-worth-advantages-list">
                                    {cakWorthIt.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cakc-worth-item-row">
                                                <div className="cakc-worth-item-icon-box">
                                                    {IconComponent ? <IconComponent size={18} /> : <CakIconDot size={18} />}
                                                </div>
                                                <span className="cakc-worth-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="cakc-glance-section">
                    <div className="cakc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="cakc-section-heading">Who Should Choose a Celebrity Alaska Cruise?</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                        </div>
                        <div className="cakc-glance-table">
                            {cakWhoShould.map((row, idx) => (
                                <div key={idx} className="cakc-glance-row">
                                    <div className="cakc-glance-feature">{row.feature}</div>
                                    <div className="cakc-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO MAY PREFER LAND VACATION */}
                <section className="cakc-audience-section cakc-bg-white">
                    <div className="cakc-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">WORTH CONSIDERING</span>
                            <h2 className="cakc-section-heading">Who May Prefer an Alaska Land Vacation?</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                A land-focused Alaska trip may be better for travelers who:
                            </p>
                        </div>
                        <div className="cakc-audience-column cakc-audience-negative">
                            <ul className="cakc-audience-list">
                                {cakWhoPreferLand.map((item, idx) => (
                                    <li key={idx} className="cakc-audience-item">
                                        <CakIconX size={18} className="cakc-audience-check cakc-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="cakc-itinerary-note" style={{ marginTop: '24px' }}>
                            For many travelers, the ideal answer is a combination of both.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="cakc-pros-section cakc-dark-section">
                    <div className="cakc-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="cakc-eyebrow-label cakc-eyebrow-white">PROS & CONS</span>
                            <h2 className="cakc-section-heading">Celebrity Alaska Cruises Pros & Cons</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                        </div>

                        <div className="cakc-comparison-board">
                            <div className="cakc-pros-panel">
                                <h3 className="cakc-panel-title cakc-pros-title">
                                    <CakIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="cakc-panel-list">
                                    {cakPros.map((pro, idx) => (
                                        <div key={idx} className="cakc-list-item">
                                            <div className="cakc-item-icon-wrap cakc-pro-icon">
                                                <CakIconCheck size={16} />
                                            </div>
                                            <div className="cakc-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cakc-cons-panel">
                                <h3 className="cakc-panel-title cakc-cons-title">
                                    <CakIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="cakc-panel-list">
                                    {cakCons.map((con, idx) => (
                                        <div key={idx} className="cakc-list-item">
                                            <div className="cakc-item-icon-wrap cakc-con-icon">
                                                <CakIconX size={16} />
                                            </div>
                                            <div className="cakc-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW TO CHOOSE */}
                <section className="cakc-steps-section">
                    <div className="cakc-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">PLANNING WALKTHROUGH</span>
                            <h2 className="cakc-section-heading">How to Choose the Best Celebrity Alaska Cruise</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                        </div>
                        <div className="cakc-steps-list">
                            {cakSteps.map((step, idx) => (
                                <div key={idx} className="cakc-step-item">
                                    <div className="cakc-step-number">{idx + 1}</div>
                                    <div className="cakc-step-body">
                                        <h4 className="cakc-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="cakc-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="cakc-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="cakc-step-tag">{tag}</span>
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
                <section className="cakc-packing-section">
                    <div className="cakc-packing-container">
                        <div className="cakc-packing-header">
                            <span className="cakc-eyebrow-label">PACKING GUIDE</span>
                            <h2 className="cakc-section-heading">What to Pack for a Celebrity Alaska Cruise</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph">
                                Alaska weather can change quickly, so layering is essential.
                            </p>
                        </div>
                        <div className="cakc-packing-checklist-board">
                            <div className="cakc-packing-checklist-grid">
                                {cakPacking.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <div key={idx} className="cakc-packing-item-row">
                                            <div className="cakc-packing-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CakIconDot size={18} />}
                                            </div>
                                            <span className="cakc-packing-item-text">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <p className="cakc-packing-footer-note">
                            A flexible layering system makes it easier to adapt to changing temperatures between the ship and shore.
                        </p>
                    </div>
                </section>

                {/* EXPERT INSIGHT */}
                <section id="celebrity-alaska-cruises-insight" className="cakc-editorial-section">
                    <div className="cakc-editorial-container">
                        <div className="cakc-editorial-split-grid">

                            {/* Profile Sidebar */}
                            <div className="cakc-editorial-profile-sidebar">
                                <div className="cakc-editorial-avatar-wrap">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="cakc-editorial-avatar" />
                                </div>

                                <div className="cakc-editorial-bio">
                                    <h4 className="cakc-editorial-bio-name">Angela Hughes</h4>
                                    <p className="cakc-editorial-bio-title">Founder & CEO, Trips & Ships Luxury Travel</p>
                                </div>

                                <div className="cakc-editorial-stats-row">
                                    <div className="cakc-editorial-stat-badge">
                                        <strong>40+</strong> Years Experience
                                    </div>
                                    <div className="cakc-editorial-stat-badge">
                                        <strong>120+</strong> Countries Visited
                                    </div>
                                </div>

                                <div className="cakc-editorial-expertise-box">
                                    <span className="cakc-editorial-expertise-label">Her expertise spans:</span>
                                    <div className="cakc-editorial-expertise-list">
                                        {[
                                            'Premium & luxury cruising',
                                            'Alaska glacier & wilderness cruising',
                                            'Celebrity ship & itinerary planning',
                                            'Suite & stateroom selection',
                                            'Cruisetour & land-extension planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="cakc-editorial-expertise-item">
                                                <CakIconDot size={10} className="cakc-editorial-dot" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Main Insight Content */}
                            <div className="cakc-editorial-main-content">
                                <div className="cakc-editorial-header">
                                    <div className="cakc-editorial-eyebrow-container">
                                        <CakIconAward size={16} className="cakc-editorial-icon-badge" />
                                        <span className="cakc-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="cakc-editorial-heading">
                                        Why Choose Celebrity for Alaska?
                                    </h2>
                                    <div className="cakc-editorial-heading-line"></div>
                                </div>

                                <p className="cakc-editorial-lead-para">
                                    Alaska rewards travelers who choose their itinerary carefully.
                                </p>

                                <div className="cakc-editorial-quote-box">
                                    <p className="cakc-editorial-quote-text">
                                        The most important question is not simply which ship you want. It is what you want to see from that ship. For first-time Alaska travelers, I recommend prioritizing the glacier experience, Inside Passage sailing and ports that match your interests before comparing onboard features. If you have additional vacation time, adding a Celebrity Cruisetour and Denali experience can transform a coastal Alaska cruise into a much more comprehensive journey through the state.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY PLAN WITH TRIPS & SHIPS */}
                <section className="cakc-why-book-section cakc-why-book-dark">
                    <div className="cakc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cakc-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="cakc-section-heading">Why Plan Your Celebrity Alaska Cruise With <br /> Trips & Ships Luxury Travel?</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                            <p className="cakc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Planning Alaska involves more than selecting a cruise date. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="cakc-why-book-grid">
                            {cakWhyPlan.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cakc-why-book-card">
                                        <div className="cakc-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CakIconDot size={20} />}
                                        </div>
                                        <h4 className="cakc-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cakc-lead-paragraph" style={{ textAlign: 'center', marginTop: '20px', color: '#cbd5e1' }}>
                            The goal is to match the cruise itinerary with how you actually want to experience Alaska.
                        </p>
                    </div>
                </section>

             

                {/* FAQ SECTION */}
                <section className="cakc-faq-section">
                    <div className="cakc-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="cakc-section-heading">Frequently Asked Questions</h2>
                            <div className="cakc-heading-bar cakc-bar-center"></div>
                        </div>
                        <div className="cakc-faq-list">
                            {cakFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="cakc-faq-item"
                                    onClick={() => cakToggleFaq(index)}
                                >
                                    <div className="cakc-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="cakc-faq-toggle">
                                            {cakActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {cakActiveFaq === index && (
                                        <p className="cakc-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

             

                {/* CTA SECTION */}
                <section className="cakc-cta-section">
                    <div className="cakc-cta-bg-pattern"></div>
                    <div className="cakc-cta-inner">
                        <h2 className="cakc-cta-heading">Plan Your Celebrity Alaska Cruise</h2>
                        <div className="cakc-cta-separator"></div>
                        <p className="cakc-cta-text">
                            Ready to experience Alaska with Celebrity? Trips & Ships Luxury Travel can help you compare Celebrity Alaska ships, glacier itineraries, Inside Passage routes, excursions, Cruisetours, cabins and pre- or post-cruise stays.
                        </p>
                        <div className="cakc-cta-btn-row">
                            <Link to="/contact" className="cakc-btn-primary">
                                <CakIconPhone size={18} />
                                Plan My Celebrity Alaska Cruise
                            </Link>
                            <button className="cakc-btn-outline">
                                <CakIconList size={18} />
                                Speak With a Luxury Alaska Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default CelebrityAlaskaCruises