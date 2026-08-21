import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebritymediterraneancruises.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Ship,
    Compass,
    Wine,
    Sun,
    BedDouble,
    Sparkles,
    DoorOpen,
    Waves,
    Utensils,
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
    Camera,
    Music,
    Anchor,
    BadgePercent,
    Palette,
    ShoppingBag,
    Sunset,
    Umbrella,
    Backpack,
    Shirt,
    Glasses,
    Droplets,
    Luggage,
    Plug,
    HeartHandshake,
    TreePalm,
    Church,
    Crown,
    Map,
    Moon,
    Clock
} from 'lucide-react'

const cmedIconMap = {
    Ship, Compass, Wine, Sun, BedDouble, Sparkles, DoorOpen, Waves, Utensils,
    Landmark, Mountain, Calendar, Plane, FileSearch, Sliders, Users, MapPin,
    Globe, Coffee, Home, Castle, Building2, ChefHat, Camera, Music, Anchor,
    BadgePercent, Palette, ShoppingBag, Sunset, Umbrella, Backpack, Shirt,
    Glasses, Droplets, Luggage, Plug, HeartHandshake, TreePalm, Church,
    Crown, Map, Moon, Clock
}

/* ============================================================
   INLINE SVG ICONS
   ============================================================ */
function CmedIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CmedIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CmedIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CmedIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CmedIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CmedIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CmedIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CmedIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CmedPlaceholder({ label, className = '' }) {
    return (
        <div className={`cmeds-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CmedIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityMediterraneanCruises() {
    const [cmedActiveFaq, setCmedActiveFaq] = useState(null)
    const [cmedActiveDestTab, setCmedActiveDestTab] = useState('malta')
    const [cmedActivePortTab, setCmedActivePortTab] = useState(0)
    const cmedToggleFaq = (index) => {
        setCmedActiveFaq(cmedActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const cmedGlance = [
        { feature: 'Region', detail: 'Mediterranean & Southern Europe' },
        { feature: 'Main Countries', detail: 'Greece, Italy, Spain, France, Croatia, Malta, Turkey & Montenegro' },
        { feature: 'Popular Cruise Length', detail: '7–12 nights' },
        { feature: 'Cruise Season', detail: 'April–November' },
        { feature: 'Peak Season', detail: 'June–September' },
        { feature: 'Main Departure Ports', detail: 'Barcelona, Rome, Athens & Ravenna' },
        { feature: 'Other European Departures', detail: 'Available on selected sailings' },
        { feature: 'Cruise Style', detail: 'Premium' },
        { feature: 'Popular Regions', detail: 'Western & Eastern Mediterranean' },
        { feature: 'Greek Islands', detail: 'Available on selected itineraries' },
        { feature: 'Shore Excursions', detail: 'Available' },
        { feature: 'Overnight Stays', detail: 'Available on selected itineraries' },
        { feature: 'Pre-Cruise Stays', detail: 'Available' },
        { feature: 'Post-Cruise Stays', detail: 'Available' },
        { feature: 'Land Extensions', detail: 'Can be arranged separately' }
    ]

    const cmedWhyChoose = [
        { label: 'Ancient ruins', icon: 'Landmark' },
        { label: 'Historic cities', icon: 'Castle' },
        { label: 'Mediterranean beaches', icon: 'Umbrella' },
        { label: 'Island villages', icon: 'TreePalm' },
        { label: 'Art and architecture', icon: 'Palette' },
        { label: 'Local cuisine', icon: 'ChefHat' },
        { label: 'Wine regions', icon: 'Wine' },
        { label: 'UNESCO sites', icon: 'Building2' },
        { label: 'Coastal scenery', icon: 'Waves' },
        { label: 'Shopping', icon: 'ShoppingBag' },
        { label: 'Cultural experiences', icon: 'Music' }
    ]

    const cmedShips = [
        { label: 'Celebrity Xcel', icon: 'Ship' },
        { label: 'Celebrity Ascent', icon: 'Ship' },
        { label: 'Celebrity Constellation', icon: 'Anchor' },
        { label: 'Celebrity Infinity', icon: 'Anchor' },
        { label: 'Celebrity Equinox', icon: 'Ship' },
        { label: 'Celebrity Apex on selected European itineraries', icon: 'Compass' },
        { label: 'Other ships depending on the sailing season', icon: 'Globe' }
    ]

    const cmedShipConsider = [
        { label: 'Ship size', icon: 'Ship' },
        { label: 'Stateroom category', icon: 'BedDouble' },
        { label: 'Suite options', icon: 'Crown' },
        { label: 'Dining', icon: 'Utensils' },
        { label: 'Outdoor spaces', icon: 'Sun' },
        { label: 'Itinerary', icon: 'Map' },
        { label: 'Departure port', icon: 'Anchor' },
        { label: 'Overnight stays', icon: 'Moon' },
        { label: 'Number of sea days', icon: 'Calendar' },
        { label: 'Port duration', icon: 'Clock' }
    ]

    const cmedItineraryStyles = [
        { label: 'Greece and Greek Islands', icon: 'Landmark' },
        { label: 'Italy', icon: 'Castle' },
        { label: 'Spain', icon: 'Sun' },
        { label: 'France and Italy', icon: 'Wine' },
        { label: 'Italy and Croatia', icon: 'Waves' },
        { label: 'Eastern Mediterranean', icon: 'Compass' },
        { label: 'Western Mediterranean', icon: 'Compass' },
        { label: 'Multi-country Mediterranean', icon: 'Globe' },
        { label: 'Longer Mediterranean voyages', icon: 'Ship' },
        { label: 'Europe combination itineraries', icon: 'MapPin' }
    ]

    const cmedGreeceList = ['Santorini', 'Mykonos', 'Corfu', 'Rhodes', 'Chania', 'Kefalonia', 'Katakolon', 'Athens', 'Thessaloniki']
    const cmedGreeceBestFor = ['Ancient history', 'Greek mythology', 'Island scenery', 'Beaches', 'Mediterranean cuisine', 'Photography', 'Village experiences']

    const cmedItalyList = ['Rome', 'Florence/Pisa', 'Naples', 'Sicily', 'Cagliari', 'Portofino', 'Amalfi Coast', 'Venice/Ravenna', 'Taranto']
    const cmedItalyBestFor = ['Art', 'Architecture', 'Ancient history', 'Italian cuisine', 'Wine', 'Coastal villages', 'Shopping']

    const cmedSpainList = ['Barcelona', 'Palma de Mallorca', 'Valencia', 'Alicante', 'Cartagena', 'Malaga', 'Seville/Cadiz', 'Ibiza']
    const cmedSpainBestFor = ['Tapas', 'Architecture', 'Beaches', 'Flamenco', 'Art', 'Wine', 'Mediterranean culture']

    const cmedCroatiaList = ['Split', 'Dubrovnik', 'Zadar', 'Rijeka', 'Kotor and nearby Adriatic destinations on selected itineraries']
    const cmedCroatiaBestFor = ['Adriatic scenery', 'Historic cities', 'Coastal landscapes', 'Architecture', 'Local cuisine', 'Island experiences']

    const cmedFranceList = ['Cannes', 'Nice/Villefranche', 'Provence', 'Marseille', 'Toulon', 'Sete']
    const cmedFranceBestFor = ['French Riviera', 'Wine', 'Cuisine', 'Art', 'Shopping', 'Scenic coastal towns']

    const cmedMaltaList = ['Historic Valletta', 'Fortifications', 'Mediterranean architecture', 'Churches', 'Local culture', 'Coastal scenery']
    const cmedTurkeyList = ['Istanbul', 'Ephesus/Kusadasi']
    const cmedMontenegroList = ['Adriatic scenery', 'Medieval architecture', 'Mountain landscapes', 'Historic streets', 'Cultural sightseeing']

    const cmedDeparturePorts = [
        { title: 'Barcelona', desc: "Barcelona is one of Celebrity's major Mediterranean departure ports. It is especially useful for travelers interested in Spain, France, Italy, the Western Mediterranean and pre-cruise Barcelona stays.", icon: 'Building2' },
        { title: 'Rome', desc: 'Celebrity uses Rome/Civitavecchia as a Mediterranean departure port. This can work particularly well for travelers who want to add several days in Rome before the cruise, with potential pre-cruise experiences including the Colosseum, Vatican City, Roman Forum, Italian cuisine and historic neighborhoods.', icon: 'Landmark' },
        { title: 'Athens', desc: 'Athens/Piraeus is an important departure point for Greek-focused Mediterranean itineraries. It can be ideal for travelers who want to combine Athens, the Greek Islands and a Mediterranean cruise.', icon: 'Castle' },
        { title: 'Ravenna', desc: 'Ravenna is another Celebrity departure point for selected Mediterranean itineraries. It can provide access to northern Italy and Adriatic destinations.', icon: 'Anchor' }
    ]

    const cmedPortsTable = [
        { region: 'Greece', ports: 'Athens, Santorini, Mykonos, Corfu, Rhodes' },
        { region: 'Italy', ports: 'Rome, Naples, Florence/Pisa, Portofino, Sicily' },
        { region: 'Spain', ports: 'Barcelona, Palma, Valencia, Malaga, Seville' },
        { region: 'France', ports: 'Cannes, Nice, Provence' },
        { region: 'Croatia', ports: 'Split, Dubrovnik, Zadar' },
        { region: 'Malta', ports: 'Valletta' },
        { region: 'Turkey', ports: 'Istanbul, Kusadasi' },
        { region: 'Montenegro', ports: 'Kotor' },
        { region: 'Portugal', ports: 'Lisbon, Madeira on selected itineraries' },
        { region: 'Morocco', ports: 'Tangier on selected itineraries' }
    ]

    const cmedExcursionCategories = [
        { name: 'Historical Excursions', desc: 'Ancient ruins, museums, cathedrals, archaeological sites and historic city tours.', icon: 'Landmark' },
        { name: 'Food & Wine', desc: 'Cooking classes, wine tastings, local food tours, market visits and culinary experiences.', icon: 'ChefHat' },
        { name: 'Scenic Experiences', desc: 'Coastal drives, island tours, countryside excursions, mountain villages and panoramic viewpoints.', icon: 'Mountain' },
        { name: 'Beach Experiences', desc: 'Greek island beaches, Mediterranean coves, Riviera beaches and island resorts.', icon: 'Umbrella' },
        { name: 'Cultural Experiences', desc: 'Local villages, art, architecture, music and regional traditions.', icon: 'Music' }
    ]

    const cmedSeasonTable = [
        { season: 'April–May', bestFor: 'Spring weather & fewer peak-season crowds' },
        { season: 'June', bestFor: 'Warm weather & long sightseeing days' },
        { season: 'July–August', bestFor: 'Peak summer & beach experiences' },
        { season: 'September', bestFor: 'Warm weather with late-summer atmosphere' },
        { season: 'October–November', bestFor: 'Cooler temperatures & lower-season travel' }
    ]

    const cmedBestTime = [
        { title: 'April–May', desc: 'Spring can be attractive for travelers who want comfortable sightseeing conditions and a less intense summer atmosphere. Best for city sightseeing, history, architecture, walking tours and cultural travel.', icon: 'Sun' },
        { title: 'June', desc: 'June brings warmer weather and long days. Best for island visits, beaches, outdoor dining and sightseeing.', icon: 'Sunset' },
        { title: 'July–August', desc: 'These are peak Mediterranean summer months. Best for beach vacations, Greek Islands, long daylight and summer atmosphere. However, popular destinations can be busier during peak season.', icon: 'Umbrella' },
        { title: 'September', desc: 'September can offer a balance between summer warmth and the approach of the shoulder season. Best for beaches, island travel, cultural sightseeing and couples.', icon: 'HeartHandshake' },
        { title: 'October–November', desc: "The late-season period can appeal to travelers prioritizing culture and sightseeing over peak beach weather. Celebrity's Mediterranean season generally continues into November.", icon: 'Calendar' }
    ]

    const cmedIncluded = ['Accommodations', 'Meals', 'Select beverages', 'Entertainment', 'Service', 'Shipboard activities']
    const cmedNotIncluded = ['Shore excursions', 'Airfare', 'Pre-cruise hotels', 'Post-cruise hotels', 'Specialty dining', 'Spa services', 'Shopping', 'Travel insurance', 'Some transportation', 'Personal expenses']

    const cmedAccommodations = [
        { label: 'Interior Staterooms', icon: 'Home' },
        { label: 'Ocean View Staterooms', icon: 'Waves' },
        { label: 'Veranda Staterooms', icon: 'DoorOpen' },
        { label: 'Suites', icon: 'Sparkles' }
    ]

    const cmedBalconyList = ['Watch the coastline', 'Enjoy sunrise', 'Watch the ship approach a port', 'Relax after an excursion', 'Enjoy Mediterranean sunsets']

    const cmedWesternRoute = ['Barcelona', 'Provence', 'Florence/Pisa', 'Rome', 'Naples', 'Barcelona']
    const cmedWesternBestFor = ['First-time Mediterranean travelers', 'Italy and Spain', 'French Riviera', 'Art and architecture', 'Food and wine']

    const cmedEasternDestinations = ['Athens', 'Santorini', 'Mykonos', 'Rhodes', 'Corfu', 'Istanbul', 'Kusadasi', 'Dubrovnik', 'Split', 'Kotor']
    const cmedEasternBestFor = ['Greek Islands', 'Ancient history', 'Adriatic scenery', 'Turkey', 'Cultural exploration']

    const cmedVsLandBased = [
        { cruise: 'Multiple countries in one trip', land: 'Deeper stay in fewer destinations' },
        { cruise: 'Ship accommodation', land: 'Hotels' },
        { cruise: 'Transportation between ports included', land: 'Flights/trains/transfers required' },
        { cruise: 'Daily destination changes', land: 'More flexibility' },
        { cruise: 'Scenic coastal sailing', land: 'More inland exploration' },
        { cruise: 'Organized shore excursions', land: 'Independent touring' },
        { cruise: 'Easy multi-country logistics', land: 'Greater itinerary control' }
    ]

    const cmedPreCruiseStays = [
        { title: 'Barcelona', desc: 'Add two or three nights to explore the Sagrada Família, Gothic Quarter, Park Güell, tapas and Catalan culture.', icon: 'Building2' },
        { title: 'Rome', desc: 'Add several nights for the Colosseum, Vatican City, Roman Forum and Italian dining.', icon: 'Landmark' },
        { title: 'Athens', desc: 'Add time for the Acropolis, Parthenon, Plaka, Ancient Agora and Greek cuisine.', icon: 'Castle' }
    ]

    const cmedPostCruiseCities = [
        { label: 'Rome', icon: 'Landmark' },
        { label: 'Barcelona', icon: 'Building2' },
        { label: 'Athens', icon: 'Castle' },
        { label: 'Venice/Ravenna', icon: 'Waves' },
        { label: 'Lisbon', icon: 'MapPin' }
    ]

    const cmedWhoShould = [
        { feature: 'First-Time Europe Travelers', detail: 'A cruise makes it possible to experience several European countries in one vacation.' },
        { feature: 'Couples', detail: 'Mediterranean scenery, dining, historic cities and longer port days can create a romantic European vacation.' },
        { feature: 'Food & Wine Travelers', detail: 'Italy, Spain, France and Greece provide extensive culinary opportunities.' },
        { feature: 'History Travelers', detail: "The Mediterranean connects some of Europe's most important ancient and historic destinations." },
        { feature: 'Beach Travelers', detail: 'Greek Islands, Spain, Croatia, Malta and southern France offer numerous coastal experiences.' },
        { feature: 'Multi-Generational Travelers', detail: 'A cruise allows different generations to explore at their own pace while sharing the same ship.' }
    ]

    const cmedLandBasedPreference = [
        'Want several nights in one city',
        'Prefer independent travel',
        'Want extensive inland exploration',
        'Prefer flexible schedules',
        'Want to focus on one country',
        'Do not enjoy cruise travel'
    ]

    const cmedPros = [
        'Multiple European countries in one vacation', 'Greece, Italy and Spain itineraries', 'Extensive Mediterranean port network',
        'Multiple departure cities', '7–12-night options', 'Longer itineraries available', 'Greek Island itineraries',
        'Western and Eastern Mediterranean options', 'Wide range of shore excursions', 'Premium onboard experience',
        'Pre- and post-cruise planning opportunities', 'Selected overnight stays', 'Newer ships sailing the region'
    ]

    const cmedCons = [
        'Port visits can be shorter than land-based stays', 'Shore excursions can increase trip cost', 'Peak summer months can be busy',
        'Weather varies by region', 'Some historic sites are located far from the cruise port', 'Airfare and hotels may be additional', 'Itineraries can change'
    ]

    const cmedSteps = [
        { title: 'Choose Your Region', desc: 'Decide between Western Mediterranean, Eastern Mediterranean, Greece and Greek Islands, Italy-focused, Spain-focused, or multi-country Mediterranean.', tags: ['Western Mediterranean', 'Eastern Mediterranean', 'Greece & Greek Islands', 'Italy-focused', 'Spain-focused', 'Multi-country'] },
        { title: 'Choose Your Departure City', desc: 'Compare Barcelona, Rome, Athens, Ravenna and other available European departure ports.', tags: ['Barcelona', 'Rome', 'Athens', 'Ravenna'] },
        { title: 'Decide How Long You Want to Travel', desc: 'Celebrity offers many 7- to 12-night Mediterranean options, with longer voyages available on selected itineraries.', tags: [] },
        { title: 'Compare the Ports', desc: 'Prioritize destinations that matter most to you. For example, history: Rome, Athens, Ephesus. Beaches: Santorini, Mykonos, Mallorca. Food: Italy, France, Spain. Adriatic: Croatia, Montenegro.', tags: ['History', 'Beaches', 'Food', 'Adriatic'] },
        { title: 'Compare Port Times', desc: "Two cruises visiting the same destination can provide different amounts of time ashore. Look for overnight stays when a destination is especially important to you. Celebrity's 2026/2027 program includes more overnight opportunities, while selected 2027/2028 itineraries include overnights in destinations such as Athens, Florence, Istanbul, Lisbon, Madeira and Thessaloniki.", tags: [] },
        { title: 'Decide on a Veranda', desc: 'If scenic sailing matters to you, consider a balcony or veranda stateroom.', tags: [] },
        { title: 'Add Pre- or Post-Cruise Time', desc: 'Consider adding two or more nights in the embarkation or disembarkation city.', tags: [] }
    ]

    const cmedPackingList = [
        { label: 'Comfortable walking shoes', icon: 'Backpack' },
        { label: 'Lightweight clothing', icon: 'Shirt' },
        { label: 'Smart-casual evening outfits', icon: 'Shirt' },
        { label: 'Sun protection', icon: 'Sun' },
        { label: 'Sunglasses', icon: 'Glasses' },
        { label: 'Hat', icon: 'Sun' },
        { label: 'Swimwear', icon: 'Waves' },
        { label: 'Light jacket', icon: 'Shirt' },
        { label: 'Small daypack', icon: 'Backpack' },
        { label: 'Reusable water bottle', icon: 'Droplets' },
        { label: 'Camera', icon: 'Camera' },
        { label: 'Travel adapter', icon: 'Plug' },
    ]

    const cmedWhyPlan = [
        { title: 'Compare Celebrity Mediterranean Ships', icon: 'Ship' },
        { title: 'Compare Eastern and Western Mediterranean Itineraries', icon: 'Compass' },
        { title: 'Choose Greece-Focused Itineraries', icon: 'Landmark' },
        { title: 'Compare Italy and Spain Routes', icon: 'Castle' },
        { title: 'Select the Best Departure City', icon: 'Building2' },
        { title: 'Compare Port Times', icon: 'MapPin' },
        { title: 'Choose the Right Stateroom', icon: 'BedDouble' },
        { title: 'Plan Shore Excursions', icon: 'FileSearch' },
        { title: 'Arrange Pre-Cruise Hotels', icon: 'Home' },
        { title: 'Arrange Post-Cruise Hotels', icon: 'Home' },
        { title: 'Coordinate Flights and Transfers', icon: 'Plane' },
        { title: 'Build Custom European Land Extensions', icon: 'Globe' },
        { title: 'Compare Different Celebrity Itineraries', icon: 'BadgePercent' },
        { title: 'Plan a Multi-Generational Mediterranean Vacation', icon: 'Users' }
    ]

    const cmedFaqs = [
        { question: '1. What are Celebrity Mediterranean Cruises?', answer: 'Celebrity Mediterranean Cruises are premium cruises visiting destinations throughout Greece, Italy, Spain, France, Croatia, Malta, Turkey, Montenegro and other Mediterranean regions.' },
        { question: '2. How long are Celebrity Mediterranean Cruises?', answer: 'Celebrity offers Mediterranean sailings commonly ranging from 7 to 12 nights, while the broader program includes selected voyages outside that range.' },
        { question: '3. What are the main Celebrity Mediterranean departure ports?', answer: 'Current major departure ports include Barcelona, Rome/Civitavecchia, Athens/Piraeus and Ravenna, with other European departure options available on selected itineraries.' },
        { question: '4. What countries can I visit on a Celebrity Mediterranean cruise?', answer: 'Depending on the itinerary, you can visit Greece, Italy, Spain, France, Croatia, Malta, Turkey, Montenegro and other Mediterranean destinations.' },
        { question: '5. Does Celebrity offer Greek Island cruises?', answer: 'Yes. Selected Celebrity Mediterranean itineraries visit Greek Islands and destinations including Santorini, Mykonos, Corfu, Rhodes and other Greek ports.' },
        { question: '6. Does Celebrity offer Italy Mediterranean cruises?', answer: "Yes. Celebrity's Mediterranean network includes Rome, Florence/Pisa, Naples, Portofino, the Amalfi Coast and destinations in Sicily and Sardinia." },
        { question: '7. Does Celebrity offer Mediterranean cruises from Barcelona?', answer: "Yes. Barcelona is one of Celebrity's major Mediterranean departure ports, with itineraries covering destinations across Spain, France, Italy and other regions." },
        { question: '8. Does Celebrity offer Mediterranean cruises from Athens?', answer: 'Yes. Athens/Piraeus is a major Celebrity departure port and is particularly useful for Greek Island and Eastern Mediterranean itineraries.' },
        { question: '9. What is the best month for a Celebrity Mediterranean cruise?', answer: 'The main Mediterranean cruise season runs from April through November, while June through September are generally the peak months. The best month depends on whether you prioritize warm weather, beaches, sightseeing or fewer crowds.' },
        { question: '10. Are Celebrity Mediterranean shore excursions included?', answer: 'Shore excursions are generally an additional cost rather than automatically included in the standard cruise fare.' },
        { question: '11. Is a balcony worth it on a Celebrity Mediterranean cruise?', answer: 'For many travelers, yes. A veranda provides private outdoor space for watching Mediterranean coastlines, islands, sunsets and port arrivals.' },
        { question: '12. Does Celebrity offer overnight stays in Mediterranean ports?', answer: "Yes. Selected itineraries include overnight stays, and Celebrity has highlighted expanded overnight opportunities in its current Mediterranean programs." },
        { question: '13. Should I stay in Barcelona, Rome or Athens before my Celebrity cruise?', answer: 'A pre-cruise stay can be worthwhile in any of these cities. The best choice depends on your itinerary, flight plans and the destinations you want to explore before boarding.' },
        { question: '14. What is the difference between Western and Eastern Mediterranean cruises?', answer: 'Western Mediterranean cruises generally emphasize Spain, France and Italy, while Eastern Mediterranean itineraries can focus more heavily on Greece, the Greek Islands, Turkey, Croatia and Montenegro.' },
        { question: '15. Are Celebrity Mediterranean Cruises worth it?', answer: 'They can be an excellent choice for travelers who want to combine multiple European destinations, cultural experiences, Mediterranean scenery and premium cruising in one vacation.' }
    ]

    const cmedRelated = [
        { title: 'Celebrity River Cruises Overview', desc: 'Explore Celebrity River Cruises on the Rhine and Danube, including ships, itineraries and inclusions.', icon: 'Ship', link: '/celebrity-cruises/river-cruises/' },
        { title: 'Celebrity Danube River Cruises', desc: 'Sail Budapest, Vienna, Bratislava and the Wachau Valley on a premium Danube river itinerary.', icon: 'Landmark', link: '/celebrity-cruises/river-cruises/danube/' },
        { title: 'Best Time to Cruise the Mediterranean', desc: 'A deeper look at Mediterranean sailing seasons, from spring sightseeing to peak summer beach weather.', icon: 'Calendar', link: '/guides/best-time-mediterranean-cruise' },
        { title: 'Barcelona Pre-Cruise Guide', desc: 'Make the most of a pre-cruise stay in Barcelona before your Mediterranean sailing.', icon: 'Building2', link: '/guides/barcelona-pre-cruise-guide' },
        { title: 'Mediterranean Cruise Packing List', desc: 'A complete packing guide for Mediterranean shore excursions, beach days and evenings onboard.', icon: 'Luggage', link: '/guides/mediterranean-cruise-packing-list' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const cmedSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/mediterranean/",
                "name": "Celebrity Mediterranean Cruises: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/mediterranean/",
                "description": "Explore Celebrity Mediterranean Cruises, including ships, Greece, Italy, Spain and Croatia itineraries, ports, sailing seasons, shore excursions and pre- or post-cruise planning.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/celebrity-cruises/mediterranean/#article" }
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/mediterranean/#article",
                "headline": "Celebrity Mediterranean Cruises: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/mediterranean/",
                "description": "Explore Celebrity Mediterranean Cruises, including ships, Greece, Italy, Spain and Croatia itineraries, ports, sailing seasons, shore excursions and pre- or post-cruise planning.",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/mediterranean/" }
            },
            {
                "@type": "Service",
                "name": "Celebrity Mediterranean Cruise Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Mediterranean Cruise Planning",
                "description": "Expert Celebrity Mediterranean cruise planning services helping travelers compare ships, itineraries, departure cities, ports, shore excursions, staterooms and pre- or post-cruise stays."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Mediterranean Cruises", "item": "https://www.tripsandships.com/celebrity-cruises/mediterranean/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": cmedFaqs.map(f => ({
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
                <title>Celebrity Mediterranean Cruises: Complete Guide</title>
                <meta name="title" content="Celebrity Mediterranean Cruises | Ships, Ports & Itineraries" />
                <meta
                    name="description"
                    content="Explore Celebrity Mediterranean Cruises, including ships, Greece, Italy, Spain and Croatia itineraries, ports, sailing seasons, shore excursions and pre- or post-cruise planning."
                />
                <script type="application/ld+json">
                    {JSON.stringify(cmedSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="cmedc-page-wrapper">

                {/* HERO SECTION */}
                <section className="cmedc-hero-section">
                    <div className="cmedc-hero-overlay"></div>
                    <div className="cmedc-hero-content">
                        <div className="cmedc-hero-tag">
                            <CmedIconSparkle size={16} />
                            <span>Celebrity Mediterranean Cruises</span>
                        </div>
                        <h1 className="cmedc-hero-title">Celebrity Mediterranean Cruises <br /> Complete Guide</h1>
                        <p className="cmedc-hero-subtitle">
                            Ships, Ports & Itineraries
                        </p>
                        <div className="cmedc-hero-btn-row">
                            <Link to='/contact' className="cmedc-btn-primary">
                                <CmedIconPhone size={18} />
                                Plan My Celebrity Mediterranean Cruise
                            </Link>
                            <button className="cmedc-btn-outline">
                                <CmedIconList size={18} />
                                Speak With a Luxury Mediterranean Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="cmedc-intro-section">
                    <div className="cmedc-intro-container">
                        <div className="cmedc-intro-grid">
                            <div className="cmedc-intro-copy">
                                <span className="cmedc-eyebrow-label">EXPERIENCE THE MEDITERRANEAN WITH CELEBRITY</span>
                                <h2 className="cmedc-section-heading">Celebrity Mediterranean Cruises</h2>
                                <div className="cmedc-heading-bar"></div>
                                <p className="cmedc-lead-paragraph">
                                    Celebrity Mediterranean Cruises combine iconic European cities, ancient history, Mediterranean beaches, local cuisine and scenic coastal destinations with the premium cruise experience of Celebrity Cruises.
                                </p>
                                <p className="cmedc-lead-paragraph">
                                    Celebrity's Mediterranean program includes itineraries visiting Greece, Italy, Spain, France, Croatia, Malta, Turkey, Montenegro and other Mediterranean destinations, depending on the sailing. Current 2026 and 2027 programs feature destinations such as Santorini, Mykonos, Corfu, Florence, Rome, Portofino, Provence, Palma de Mallorca, Split and Valletta.
                                </p>
                                <p className="cmedc-lead-paragraph">
                                    Celebrity's current Mediterranean program includes 7- to 12-night sailings on many itineraries, while other Celebrity Mediterranean voyages can range from approximately six to 12 nights depending on the route and season. For travelers planning a Mediterranean cruise, the key decisions are the ship, departure city, itinerary region, ports, sailing season, excursions and whether to add pre- or post-cruise time in Europe.
                                </p>
                            </div>
                            <div className="cmedc-intro-image-frame">
                                <CmedPlaceholder label="Celebrity Mediterranean Cruises" />
                                <div className="cmedc-intro-badge-float">
                                    <CmedIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Mediterranean 2026–2027</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="cmeds-quick-answer-section">
                    <div className="cmeds-quick-answer-container">
                        <div className="cmeds-quick-answer-card">
                            <h3 className="cmeds-quick-answer-title">What Are Celebrity Mediterranean Cruises?</h3>
                            <p className="cmeds-quick-answer-text">
                                Celebrity Mediterranean Cruises are premium European cruises visiting destinations across Greece, Italy, Spain, France, Croatia, Malta and other Mediterranean countries, with itineraries ranging from shorter regional sailings to longer voyages covering multiple countries. Current Celebrity departure ports include Barcelona, Rome, Athens and Ravenna, with additional European departure options appearing on selected itineraries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="cmeds-inline-cta-section">
                    <div className="cmeds-inline-cta-container">
                        <span className="cmeds-inline-cta-tag">Expert Planning</span>
                        <p className="cmeds-inline-cta-text">Ready to experience the Mediterranean with Celebrity?</p>
                        <div className="cmeds-inline-cta-btn-row">
                            <Link to="/contact" className="cmeds-btn-primary">
                                <CmedIconPhone size={18} />
                                Plan My Celebrity Mediterranean Cruise
                            </Link>
                            <Link to="/contact" className="cmeds-btn-outline">
                                <CmedIconList size={18} />
                                Speak With a Luxury Mediterranean Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="cmeds-glance-section">
                    <div className="cmeds-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">PROGRAM OVERVIEW</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Cruises at a Glance</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        </div>
                        <div className="cmeds-glance-table">
                            {cmedGlance.map((row, idx) => (
                                <div key={idx} className="cmeds-glance-row">
                                    <div className="cmeds-glance-feature">{row.feature}</div>
                                    <div className="cmeds-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cmeds-included-note">
                            Celebrity's current Mediterranean program includes seven ships in the region during the 2026/2027 season, including Celebrity Xcel, Celebrity Ascent, Celebrity Constellation, Celebrity Infinity and Celebrity Equinox, with the fleet varying by season and itinerary.
                        </p>
                    </div>
                </section>

                {/* WHY CHOOSE CELEBRITY MEDITERRANEAN CRUISES */}
                <section className="cmeds-why-choose-section cmeds-bg-white">
                    <div className="cmeds-why-choose-container">
                        <div className="cmeds-why-choose-split-grid">

                            {/* Left Column: Content */}
                            <div className="cmeds-why-choose-info-col">
                                <span className="cmedc-eyebrow-label">WHY THE MEDITERRANEAN</span>
                                <h2 className="cmedc-section-heading">Why Choose Celebrity Mediterranean Cruises?</h2>
                                <div className="cmedc-heading-bar"></div>
                                <p className="cmedc-lead-paragraph">
                                    The Mediterranean is one of the world's most diverse cruise regions. A single itinerary can combine:
                                </p>
                                <div className="cmeds-why-choose-footer-note">
                                    <p className="cmeds-why-choose-note">
                                        Celebrity Mediterranean Cruises allow travelers to experience multiple countries without repeatedly changing hotels or arranging transportation between cities. Celebrity's current Mediterranean destination highlights include Valletta, Tangier, Split, Provence, Palma de Mallorca, Florence, Corfu and Portofino.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: List Stack */}
                            <div className="cmeds-why-choose-list-col">
                                <div className="cmeds-why-choose-list-stack">
                                    {cmedWhyChoose.map((item, idx) => {
                                        const IconComponent = cmedIconMap[item.icon];
                                        return (
                                            <div key={idx} className="cmeds-why-choose-item-row">
                                                <div className="cmeds-why-choose-item-icon-box">
                                                    {IconComponent ? <IconComponent size={18} /> : <CmedIconDot size={18} />}
                                                </div>
                                                <span className="cmeds-why-choose-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SHIPS */}
                <section className="cmeds-feature-section cmeds-dark-section cmeds-ships-section">
                    <div className="cmeds-feature-container">
                        <div className="cmeds-feature-grid">
                            <div className="cmeds-feature-image-col">
                                <div className="cmeds-badge-overlay">
                                    <CmedIconSparkle size={14} />
                                    <span>Fleet</span>
                                </div>
                                <CmedPlaceholder label="Celebrity Mediterranean Fleet" />
                            </div>
                            <div className="cmeds-feature-copy-col">
                                <span className="cmedc-eyebrow-label">THE FLEET</span>
                                <h2 className="cmeds-feature-title">Celebrity Mediterranean Cruise Ships</h2>
                                <p className="cmedc-lead-paragraph">
                                    Celebrity's Mediterranean fleet changes by season. For 2026 and 2027, Celebrity lists ships including:
                                </p>
                                <div className="cmeds-feature-list">
                                    {cmedShips.map((item, idx) => {
                                        const IconComponent = cmedIconMap[item.icon];
                                        return (
                                            <div key={idx} className={`cmeds-feature-item-card ${idx === 6 ? 'cmeds-feature-card-full-width' : ''}`}>
                                                <div className="cmeds-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CmedIconCheck size={18} />}
                                                </div>
                                                <span className="cmeds-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cmedc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity Xcel is particularly notable because it debuted in the Mediterranean and is scheduled to return for the 2027/2028 season.
                                </p>
                            </div>
                        </div>

                        <div className="cmedx-dining-venues-block">
                            <div className="cmedx-dining-venues-divider"></div>
                            <p className="cmedx-dining-venues-lead">When comparing ships, consider:</p>
                            <div className="cmeds-consider-board">
                                {cmedShipConsider.map((item, idx) => {
                                    const IconComponent = cmedIconMap[item.icon];
                                    return (
                                        <div key={idx} className="cmeds-consider-row">
                                            <div className="cmeds-consider-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CmedIconDot size={18} />}
                                            </div>
                                            <span className="cmeds-consider-text">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className="cmedx-dining-venues-lead" style={{ marginTop: '20px' }}>
                                For a Mediterranean vacation, the itinerary and port time can be just as important as the ship.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ITINERARY STYLES */}
                <section className="cmeds-tag-section cmeds-bg-white">
                    <div className="cmeds-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">ROUTE STYLES</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Itineraries</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Mediterranean itineraries can broadly be divided into several travel styles. Popular options include:
                            </p>
                        </div>
                        <div className="cmeds-tag-grid">
                            {cmedItineraryStyles.map((item, idx) => {
                                const IconComponent = cmedIconMap[item.icon];
                                return (
                                    <div key={idx} className="cmeds-tag-card">
                                        <div className="cmeds-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CmedIconDot size={20} />}
                                        </div>
                                        <span className="cmeds-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cmeds-included-note">
                            Current Celebrity Mediterranean destinations include Greece, Italy, Spain, Croatia, France, Turkey, Malta and Montenegro, among others.
                        </p>
                    </div>
                </section>

                {/* GREEK ISLANDS */}
                <section className="cmeds-feature-section cmeds-bg-soft cmeds-greece-section">
                    <div className="cmeds-feature-container">
                        <div className="cmeds-feature-grid">
                            <div className="cmeds-feature-image-col">
                                <div className="cmeds-badge-overlay">
                                    <CmedIconSparkle size={14} />
                                    <span>Greece</span>
                                </div>
                                <CmedPlaceholder label="Santorini & the Greek Islands" />
                            </div>
                            <div className="cmeds-feature-copy-col">
                                <span className="cmedc-eyebrow-label">CELEBRITY MEDITERRANEAN COUNTRIES</span>
                                <h2 className="cmeds-feature-title">Celebrity Greek Islands Cruises</h2>
                                <p className="cmedc-lead-paragraph">
                                    Greece is one of the most popular regions for a Celebrity Mediterranean cruise. Depending on the itinerary, travelers can visit destinations such as:
                                </p>
                                <div className="cmeds-feature-list">
                                    {cmedGreeceList.map((item, idx) => (
                                        <div key={idx} className="cmeds-feature-item-card">
                                            <div className="cmeds-feature-item-icon"><CmedIconCheck size={18} /></div>
                                            <span className="cmeds-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cmedc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's Mediterranean destination program specifically highlights Greek destinations including Santorini, Zakynthos and Mykonos. Best for travelers interested in: {cmedGreeceBestFor.join(', ')}.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ITALY */}
                <section className="cmeds-feature-section cmeds-dark-section cmeds-italy-section">
                    <div className="cmeds-feature-container">
                        <div className="cmeds-feature-grid cmeds-reverse">
                            <div className="cmeds-feature-copy-col">
                                <span className="cmedc-eyebrow-label">CELEBRITY MEDITERRANEAN COUNTRIES</span>
                                <h2 className="cmeds-feature-title" style={{ textAlign: 'left' }}>Celebrity Italy Cruises</h2>
                                <p className="cmedc-lead-paragraph">
                                    Italy is one of the strongest components of Celebrity's Mediterranean program. Depending on the itinerary, travelers can visit:
                                </p>
                                <div className="cmeds-feature-list">
                                    {cmedItalyList.map((item, idx) => (
                                        <div key={idx} className="cmeds-feature-item-card">
                                            <div className="cmeds-feature-item-icon"><CmedIconCheck size={18} /></div>
                                            <span className="cmeds-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cmedc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's Mediterranean port network includes Rome, Florence/Pisa, Naples, Portofino, the Amalfi Coast and several destinations in Sicily and Sardinia. Best for travelers interested in: {cmedItalyBestFor.join(', ')}.
                                </p>
                            </div>
                            <div className="cmeds-feature-image-col">
                                <div className="cmeds-badge-overlay">
                                    <CmedIconSparkle size={14} />
                                    <span>Italy</span>
                                </div>
                                <CmedPlaceholder label="Rome, Florence & the Amalfi Coast" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPAIN */}
                <section className="cmeds-feature-section cmeds-bg-white cmeds-spain-section">
                    <div className="cmeds-feature-container">
                        <div className="cmeds-feature-grid">
                            <div className="cmeds-feature-image-col">
                                <div className="cmeds-badge-overlay">
                                    <CmedIconSparkle size={14} />
                                    <span>Spain</span>
                                </div>
                                <CmedPlaceholder label="Barcelona & Palma de Mallorca" />
                            </div>
                            <div className="cmeds-feature-copy-col">
                                <span className="cmedc-eyebrow-label">CELEBRITY MEDITERRANEAN COUNTRIES</span>
                                <h2 className="cmeds-feature-title">Celebrity Spain Cruises</h2>
                                <p className="cmedc-lead-paragraph">
                                    Celebrity offers Mediterranean itineraries visiting several Spanish destinations. Depending on the itinerary, ports can include:
                                </p>
                                <div className="cmeds-feature-list">
                                    {cmedSpainList.map((item, idx) => (
                                        <div key={idx} className="cmeds-feature-item-card">
                                            <div className="cmeds-feature-item-icon"><CmedIconCheck size={18} /></div>
                                            <span className="cmeds-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cmedc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity describes Barcelona as an important starting point for Mediterranean cruises and offers itineraries ranging from seven to 12 nights that explore Spanish destinations. Best for travelers interested in: {cmedSpainBestFor.join(', ')}.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CROATIA */}
                <section className="cmeds-feature-section cmeds-dark-section cmeds-croatia-section">
                    <div className="cmeds-feature-container">
                        <div className="cmeds-feature-grid cmeds-reverse">
                            <div className="cmeds-feature-copy-col">
                                <span className="cmedc-eyebrow-label">CELEBRITY MEDITERRANEAN COUNTRIES</span>
                                <h2 className="cmeds-feature-title" style={{ textAlign: 'left' }}>Celebrity Croatia Cruises</h2>
                                <p className="cmedc-lead-paragraph">
                                    Croatia provides a different Mediterranean experience, combining Adriatic scenery, historic towns and island landscapes. Celebrity's Mediterranean port network includes:
                                </p>
                                <div className="cmeds-feature-list">
                                    {cmedCroatiaList.map((item, idx) => (
                                        <div key={idx} className="cmeds-feature-item-card">
                                            <div className="cmeds-feature-item-icon"><CmedIconCheck size={18} /></div>
                                            <span className="cmeds-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cmedc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Split is among Celebrity's highlighted Mediterranean destinations for 2026 and 2027. Best for: {cmedCroatiaBestFor.join(', ')}.
                                </p>
                            </div>
                            <div className="cmeds-feature-image-col">
                                <div className="cmeds-badge-overlay">
                                    <CmedIconSparkle size={14} />
                                    <span>Croatia</span>
                                </div>
                                <CmedPlaceholder label="Split & Dubrovnik" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FRANCE */}
                <section className="cmeds-feature-section cmeds-bg-white cmeds-france-section">
                    <div className="cmeds-feature-container">
                        <div className="cmeds-feature-grid">
                            <div className="cmeds-feature-image-col">
                                <div className="cmeds-badge-overlay">
                                    <CmedIconSparkle size={14} />
                                    <span>France</span>
                                </div>
                                <CmedPlaceholder label="French Riviera & Cannes" />
                            </div>
                            <div className="cmeds-feature-copy-col">
                                <span className="cmedc-eyebrow-label">CELEBRITY MEDITERRANEAN COUNTRIES</span>
                                <h2 className="cmeds-feature-title">Celebrity France Cruises</h2>
                                <p className="cmedc-lead-paragraph">
                                    Selected Celebrity Mediterranean itineraries visit the French Riviera and southern France, including Cannes, Nice/Villefranche, Provence, Marseille, Toulon and Sete.
                                </p>
                                <div className="cmeds-feature-list">
                                    {cmedFranceList.map((item, idx) => (
                                        <div key={idx} className="cmeds-feature-item-card">
                                            <div className="cmeds-feature-item-icon"><CmedIconCheck size={18} /></div>
                                            <span className="cmeds-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cmedc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's current Mediterranean destination highlights include Provence, while its port network includes Cannes, Nice/Villefranche and several Provence ports. Best for: {cmedFranceBestFor.join(', ')}.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MALTA / TURKEY / MONTENEGRO */}
                <section className="cmeds-showcase-section">
                    <div className="cmeds-showcase-container">
                        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                            <span className="cmedc-eyebrow-label">MORE MEDITERRANEAN DESTINATIONS</span>
                            <h2 className="cmedc-section-heading">Malta, Turkey & Montenegro</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        </div>

                        {/* Tabs Bar */}
                        <div className="cmeds-showcase-tabs-bar">
                            <button 
                                className={`cmeds-showcase-tab ${cmedActiveDestTab === 'malta' ? 'active' : ''}`}
                                onClick={() => setCmedActiveDestTab('malta')}
                            >
                                <Church size={18} />
                                <span>Malta</span>
                            </button>
                            <button 
                                className={`cmeds-showcase-tab ${cmedActiveDestTab === 'turkey' ? 'active' : ''}`}
                                onClick={() => setCmedActiveDestTab('turkey')}
                            >
                                <Compass size={18} />
                                <span>Turkey</span>
                            </button>
                            <button 
                                className={`cmeds-showcase-tab ${cmedActiveDestTab === 'montenegro' ? 'active' : ''}`}
                                onClick={() => setCmedActiveDestTab('montenegro')}
                            >
                                <Waves size={18} />
                                <span>Montenegro</span>
                            </button>
                        </div>

                        {/* Tab Content Display Panel */}
                        <div className="cmeds-showcase-panel">
                            {cmedActiveDestTab === 'malta' && (
                                <div className="cmeds-showcase-content animate-fade-in">
                                    <div className="cmeds-showcase-left-banner cmeds-banner-malta">
                                        <Church size={64} className="cmeds-showcase-banner-icon" />
                                        <span className="cmeds-showcase-banner-tag">VALLETTA HIGHLIGHTS</span>
                                    </div>
                                    <div className="cmeds-showcase-right-body">
                                        <h3 className="cmeds-showcase-title">Malta (Valletta)</h3>
                                        <p className="cmedc-lead-paragraph">
                                            Malta is another distinctive Mediterranean destination. Celebrity features Valletta among its 2026 and 2027 Mediterranean destination highlights. Travelers can explore:
                                        </p>
                                        <ul className="cmeds-showcase-list">
                                            {cmedMaltaList.map((item, idx) => (
                                                <li key={idx}>
                                                    <CmedIconCheck size={16} className="cmeds-showcase-bullet" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="cmeds-showcase-note-text">
                                            Malta works particularly well for travelers who want history combined with Mediterranean scenery.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {cmedActiveDestTab === 'turkey' && (
                                <div className="cmeds-showcase-content animate-fade-in">
                                    <div className="cmeds-showcase-left-banner cmeds-banner-turkey">
                                        <Compass size={64} className="cmeds-showcase-banner-icon" />
                                        <span className="cmeds-showcase-banner-tag">ISTANBUL & EPHESUS</span>
                                    </div>
                                    <div className="cmeds-showcase-right-body">
                                        <h3 className="cmeds-showcase-title">Turkey</h3>
                                        <p className="cmedc-lead-paragraph">
                                            Selected Celebrity Mediterranean itineraries include Turkey. Potential destinations include {cmedTurkeyList.join(' and ')}. These destinations provide access to major historical and cultural attractions. Celebrity's Mediterranean port network currently includes Istanbul and Ephesus/Kusadasi.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {cmedActiveDestTab === 'montenegro' && (
                                <div className="cmeds-showcase-content animate-fade-in">
                                    <div className="cmeds-showcase-left-banner cmeds-banner-montenegro">
                                        <Waves size={64} className="cmeds-showcase-banner-icon" />
                                        <span className="cmeds-showcase-banner-tag">KOTOR BAY VIEW</span>
                                    </div>
                                    <div className="cmeds-showcase-right-body">
                                        <h3 className="cmeds-showcase-title">Montenegro (Kotor)</h3>
                                        <p className="cmedc-lead-paragraph">
                                            Montenegro appears on selected Mediterranean itineraries through destinations such as Kotor. Kotor offers {cmedMontenegroList.join(', ').toLowerCase()}. Celebrity lists Kotor among its Mediterranean ports of call.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </section>

                {/* DEPARTURE PORTS */}
                <section className="cmeds-ports-slider-section cmeds-dark-section">
                    <div className="cmeds-ports-slider-container">
                        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                            <span className="cmedc-eyebrow-label">DEPARTURE CITIES</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Departure Ports</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                The departure city can significantly affect the overall vacation.
                            </p>
                        </div>

                        <div className="cmeds-ports-slider-layout">
                            
                            {/* Left Side: City Tabs List */}
                            <div className="cmeds-ports-tabs-list">
                                {cmedDeparturePorts.map((item, idx) => {
                                    const IconComponent = cmedIconMap[item.icon];
                                    return (
                                        <button
                                            key={idx}
                                            className={`cmeds-port-tab-button ${cmedActivePortTab === idx ? 'active' : ''}`}
                                            onClick={() => setCmedActivePortTab(idx)}
                                        >
                                            <div className="cmeds-port-tab-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CmedIconDot size={18} />}
                                            </div>
                                            <span className="cmeds-port-tab-label">{item.title}</span>
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Right Side: Active Port Detail Card */}
                            <div className="cmeds-port-detail-panel">
                                <div className="cmeds-port-detail-card animate-fade-in">
                                    <div className="cmeds-port-detail-header">
                                        {(() => {
                                            const ActiveIcon = cmedIconMap[cmedDeparturePorts[cmedActivePortTab].icon];
                                            return ActiveIcon ? <ActiveIcon size={32} className="cmeds-port-detail-icon" /> : <CmedIconDot size={32} className="cmeds-port-detail-icon" />;
                                        })()}
                                        <h3 className="cmeds-port-detail-title">
                                            {cmedDeparturePorts[cmedActivePortTab].title}
                                        </h3>
                                    </div>
                                    <p className="cmeds-port-detail-desc">
                                        {cmedDeparturePorts[cmedActivePortTab].desc}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* PORTS TABLE */}
                <section className="cmedx-compare-section cmeds-bg-white">
                    <div className="cmedx-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">PORT NETWORK</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Cruise Ports</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Mediterranean port network is extensive.
                            </p>
                        </div>
                        <div className="cmedx-pair-table">
                            <div className="cmedx-pair-row cmedx-pair-header">
                                <div className="cmedx-pair-cell">Country / Region</div>
                                <div className="cmedx-pair-cell">Examples of Ports</div>
                            </div>
                            {cmedPortsTable.map((row, idx) => (
                                <div key={idx} className="cmedx-pair-row">
                                    <div className="cmedx-pair-cell">{row.region}</div>
                                    <div className="cmedx-pair-cell">{row.ports}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cmeds-included-note">
                            The exact ports depend on the ship, sailing date and itinerary. Celebrity's current port list includes destinations throughout the Mediterranean and wider European region.
                        </p>
                    </div>
                </section>

                {/* SHORE EXCURSIONS */}
                <section className="cmeds-feature-section cmeds-dark-section">
                    <div className="cmeds-feature-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">SHORE EXCURSIONS</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Shore Excursions</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Shore excursions are an important part of a Mediterranean cruise.
                            </p>
                        </div>
                        <div className="cmeds-feature-desc-list" style={{ marginTop: '40px' }}>
                            {cmedExcursionCategories.map((item, idx) => {
                                const IconComponent = cmedIconMap[item.icon];
                                return (
                                    <div key={idx} className="cmeds-feature-desc-card">
                                        <div className="cmeds-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="cmeds-feature-card-icon-inline" />}
                                            <h4 className="cmeds-feature-desc-title">{item.name}</h4>
                                        </div>
                                        <p className="cmeds-feature-desc-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ARE EXCURSIONS INCLUDED */}
                <section className="cmeds-worth-section cmeds-bg-white">
                    <div className="cmeds-worth-container">
                        <span className="cmedc-eyebrow-label">GOOD TO KNOW</span>
                        <h2 className="cmedc-section-heading">Are Celebrity Mediterranean Excursions Included?</h2>
                        <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        <p className="cmedc-lead-paragraph">
                            Celebrity Mediterranean shore excursions are generally not automatically included in the standard cruise fare. Travelers can select and purchase excursions based on their itinerary and ports. When comparing the total cost of a Mediterranean vacation, budget separately for excursions if you want guided sightseeing at multiple ports.
                        </p>
                    </div>
                </section>

                {/* CRUISE SEASON TABLE */}
                <section className="cmeds-glance-section">
                    <div className="cmeds-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">SAILING SEASON</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Cruise Season</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity describes the main Mediterranean cruise season as running from April through November, with June through September representing the peak months.
                            </p>
                        </div>
                        <div className="cmeds-glance-table">
                            {cmedSeasonTable.map((row, idx) => (
                                <div key={idx} className="cmeds-glance-row">
                                    <div className="cmeds-glance-feature">{row.season}</div>
                                    <div className="cmeds-glance-detail">{row.bestFor}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cmeds-included-note">
                            The best time depends on whether your priority is beach weather, sightseeing, lower crowds or a particular destination.
                        </p>
                    </div>
                </section>

                {/* BEST TIME */}
                <section className="cmeds-timeline-section cmeds-timeline-white">
                    <div className="cmeds-timeline-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="cmedc-eyebrow-label">MONTH BY MONTH</span>
                            <h2 className="cmedc-section-heading">Best Time for a Celebrity Mediterranean Cruise</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        </div>

                        <div className="cmeds-timeline-track">
                            <div className="cmeds-timeline-line"></div>
                            <div className="cmeds-timeline-nodes-grid">
                                {cmedBestTime.map((item, idx) => {
                                    const IconComponent = cmedIconMap[item.icon];
                                    return (
                                        <div key={idx} className="cmeds-timeline-card-wrapper">
                                            {/* Icon Node on the timeline */}
                                            <div className="cmeds-timeline-node">
                                                <div className="cmeds-timeline-icon-circle">
                                                    {IconComponent ? <IconComponent size={20} /> : <CmedIconDot size={20} />}
                                                </div>
                                                <div className="cmeds-timeline-pulse"></div>
                                            </div>
                                            
                                            {/* Info Card */}
                                            <div className="cmeds-timeline-content-card">
                                                <span className="cmeds-timeline-card-number">0{idx + 1}</span>
                                                <h4 className="cmeds-timeline-card-title">{item.title}</h4>
                                                <p className="cmeds-timeline-card-desc">{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* INCLUSIONS */}
                <section className="cmeds-included-section">
                    <div className="cmeds-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">WHAT'S INCLUDED</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Cruise Inclusions</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's standard cruise experience includes the core onboard vacation. Depending on the fare and package, Celebrity's cruise experience can include:
                            </p>
                        </div>
                        <div className="cmeds-included-grid">
                            {cmedIncluded.map((item, idx) => (
                                <div key={idx} className="cmeds-included-item">
                                    <CmedIconCheck size={18} className="cmeds-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cmeds-included-note">
                            Exact inclusions vary according to the fare, package and applicable terms. Travelers should always compare the specific booking terms before calculating the total trip cost.
                        </p>
                    </div>
                </section>

                {/* WHAT'S NOT INCLUDED */}
                <section className="cmeds-audience-section cmeds-bg-white">
                    <div className="cmeds-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">BUDGET PLANNING</span>
                            <h2 className="cmedc-section-heading">What's Not Included?</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Depending on the booking, travelers may need to budget separately for:
                            </p>
                        </div>
                        <div className="cmeds-audience-column cmeds-audience-negative">
                            <ul className="cmeds-audience-list">
                                {cmedNotIncluded.map((item, idx) => (
                                    <li key={idx} className="cmeds-audience-item">
                                        <CmedIconX size={18} className="cmeds-audience-check cmeds-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="cmeds-itinerary-note" style={{ marginTop: '24px' }}>
                            For a multi-country Mediterranean vacation, these additional costs can make a meaningful difference to the final budget.
                        </p>
                    </div>
                </section>

                {/* ACCOMMODATIONS */}
                <section className="cmeds-tag-section cmeds-bg-soft">
                    <div className="cmeds-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">STATEROOMS & SUITES</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Cruise Accommodations</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity offers multiple accommodation categories. Interior Staterooms are a practical choice for travelers who expect to spend most of their time exploring ports. Ocean View accommodations provide a window and natural light. Suites provide more space and premium amenities for travelers looking for a higher level of onboard comfort.
                            </p>
                        </div>
                        <div className="cmeds-tag-grid cmedx-tag-grid-4">
                            {cmedAccommodations.map((item, idx) => {
                                const IconComponent = cmedIconMap[item.icon];
                                return (
                                    <div key={idx} className="cmeds-tag-card">
                                        <div className="cmeds-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CmedIconDot size={20} />}
                                        </div>
                                        <span className="cmeds-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* IS A BALCONY WORTH IT */}
                <section className="cmeds-feature-section cmeds-bg-white cmeds-balcony-section">
                    <div className="cmeds-feature-container">
                        <div className="cmeds-feature-grid">
                            <div className="cmeds-feature-image-col">
                                <div className="cmeds-badge-overlay">
                                    <CmedIconDot size={14} />
                                    <span>Veranda</span>
                                </div>
                                <CmedPlaceholder label="Veranda Stateroom" />
                            </div>
                            <div className="cmeds-feature-copy-col">
                                <span className="cmedc-eyebrow-label">STATEROOM PLANNING</span>
                                <h2 className="cmeds-feature-title">Is a Balcony Worth It on a Celebrity Mediterranean Cruise?</h2>
                                <p className="cmedc-lead-paragraph">
                                    A veranda can be particularly appealing on Mediterranean itineraries because scenic sailing is part of the experience. A private balcony can provide a quiet place to:
                                </p>
                                <div className="cmeds-feature-list">
                                    {cmedBalconyList.map((item, idx) => (
                                        <div key={idx} className="cmeds-feature-item-card">
                                            <div className="cmeds-feature-item-icon"><CmedIconCheck size={18} /></div>
                                            <span className="cmeds-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cmedc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    However, travelers who spend most of their time exploring ports may prefer to allocate the budget toward excursions or a longer pre- or post-cruise stay.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WESTERN MEDITERRANEAN */}
                <section className="cmeds-itinerary-section cmeds-bg-soft">
                    <div className="cmeds-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">REGIONS</span>
                            <h2 className="cmedc-section-heading">Celebrity Western & Eastern Mediterranean Cruises</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        </div>
                        <div className="cmeds-itinerary-grid">
                            <div className="cmeds-itinerary-card" style={{ position: 'relative' }}>
                                <div style={{ height: '4px', background: 'var(--cmeds-navy)', width: '100%', position: 'absolute', top: 0, left: 0, borderTopLeftRadius: '20px', borderTopRightRadius: '20px', zIndex: 10 }}></div>
                                <h3 className="cmeds-itinerary-region">
                                    <Compass size={20} />
                                    Western Mediterranean
                                </h3>
                                <p className="cmedc-lead-paragraph" style={{ marginBottom: '18px' }}>
                                    Western Mediterranean itineraries commonly focus on destinations in Spain, France, Italy, Malta and Southern Europe. Popular combinations can include:
                                </p>
                                <ul className="cmeds-itinerary-list">
                                    {cmedWesternRoute.map((stop, idx) => (
                                        <li key={idx}><MapPin size={16} className="cmeds-included-icon" />{stop}</li>
                                    ))}
                                </ul>
                                <p className="cmeds-itinerary-note">Best for: {cmedWesternBestFor.join(', ')}.</p>
                            </div>
                            <div className="cmeds-itinerary-card" style={{ position: 'relative' }}>
                                <div style={{ height: '4px', background: 'var(--cmeds-green)', width: '100%', position: 'absolute', top: 0, left: 0, borderTopLeftRadius: '20px', borderTopRightRadius: '20px', zIndex: 10 }}></div>
                                <h3 className="cmeds-itinerary-region">
                                    <Landmark size={20} />
                                    Eastern Mediterranean
                                </h3>
                                <p className="cmedc-lead-paragraph" style={{ marginBottom: '18px' }}>
                                    Eastern Mediterranean itineraries can focus more heavily on Greece, Greek Islands, Turkey, Croatia, Montenegro and the Eastern Adriatic. Potential destinations include:
                                </p>
                                <ul className="cmeds-itinerary-list">
                                    {cmedEasternDestinations.map((stop, idx) => (
                                        <li key={idx}><MapPin size={16} className="cmeds-included-icon" />{stop}</li>
                                    ))}
                                </ul>
                                <p className="cmeds-itinerary-note">Best for: {cmedEasternBestFor.join(', ')}.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MEDITERRANEAN VS LAND-BASED EUROPE */}
                <section className="cmedx-compare-section cmeds-dark-section">
                    <div className="cmedx-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">CRUISE VS LAND</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean vs. Land-Based Europe</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        </div>
                        <div className="cmedx-pair-table">
                            <div className="cmedx-pair-row cmedx-pair-header">
                                <div className="cmedx-pair-cell">Celebrity Mediterranean Cruise</div>
                                <div className="cmedx-pair-cell">Land-Based Europe</div>
                            </div>
                            {cmedVsLandBased.map((row, idx) => (
                                <div key={idx} className="cmedx-pair-row">
                                    <div className="cmedx-pair-cell">{row.cruise}</div>
                                    <div className="cmedx-pair-cell">{row.land}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cmeds-included-note">
                            For travelers who want to see many Mediterranean destinations in one vacation, cruising can be an efficient option. For travelers who want several days in one city, a land-based itinerary may be better.
                        </p>
                    </div>
                </section>

                {/* PRE-CRUISE STAY */}
                <section className="cmeds-why-book-section cmeds-why-book-light">
                    <div className="cmeds-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">EXTEND YOUR JOURNEY</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Cruise + Pre-Cruise Stay</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A pre-cruise stay can make a Mediterranean vacation more enjoyable.
                            </p>
                        </div>
                        <div className="cmeds-why-book-grid">
                            {cmedPreCruiseStays.map((item, idx) => {
                                const IconComponent = cmedIconMap[item.icon];
                                return (
                                    <div key={idx} className="cmeds-why-book-card">
                                        <div className="cmeds-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CmedIconDot size={20} />}
                                        </div>
                                        <h4 className="cmeds-why-book-title">{item.title}</h4>
                                        <p className="cmeds-why-book-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cmedc-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            Starting your cruise vacation with a land stay also provides a buffer against flight delays.
                        </p>
                    </div>
                </section>

                {/* POST-CRUISE STAY */}
                <section className="cmeds-tag-section cmeds-dark-section cmeds-post-cruise-section">
                    <div className="cmeds-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">EXTEND YOUR JOURNEY</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Cruise + Post-Cruise Stay</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A post-cruise extension can work particularly well when the ship finishes in a major European city. Consider adding:
                            </p>
                        </div>
                        <div className="cmeds-tag-grid">
                            {cmedPostCruiseCities.map((item, idx) => {
                                const IconComponent = cmedIconMap[item.icon];
                                return (
                                    <div key={idx} className="cmeds-tag-card">
                                        <div className="cmeds-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CmedIconDot size={20} />}
                                        </div>
                                        <span className="cmeds-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cmeds-included-note">
                            A post-cruise stay allows travelers to slow down after the cruise rather than immediately returning home.
                        </p>
                    </div>
                </section>

                {/* ARE THEY WORTH IT */}
                <section className="cmeds-worth-section cmeds-bg-soft">
                    <div className="cmeds-worth-container">
                        <span className="cmedc-eyebrow-label">INVESTMENT & VALUE</span>
                        <h2 className="cmedc-section-heading">Are Celebrity Mediterranean Cruises Worth It?</h2>
                        <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        <p className="cmedc-lead-paragraph">
                            Celebrity Mediterranean Cruises can be an excellent choice for travelers who want to combine luxury cruising with European culture, history, food and scenery. The major advantage is convenience. One cruise can connect destinations that would otherwise require hotels, trains, flights, private transfers and multiple luggage changes. For first-time visitors to Europe, a Mediterranean cruise can provide a broad introduction to the region before returning for longer land-based stays.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="cmeds-glance-section cmeds-dark-section">
                    <div className="cmeds-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="cmedc-section-heading">Who Should Choose a Celebrity Mediterranean Cruise?</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        </div>
                        <div className="cmeds-glance-table">
                            {cmedWhoShould.map((row, idx) => (
                                <div key={idx} className="cmeds-glance-row">
                                    <div className="cmeds-glance-feature">{row.feature}</div>
                                    <div className="cmeds-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO MAY PREFER LAND-BASED */}
                <section className="cmeds-audience-section cmeds-bg-white">
                    <div className="cmeds-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">WORTH CONSIDERING</span>
                            <h2 className="cmedc-section-heading">Who May Prefer a Land-Based Mediterranean Vacation?</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                A land-based trip may be better for travelers who:
                            </p>
                        </div>
                        <div className="cmeds-audience-column cmeds-audience-negative">
                            <ul className="cmeds-audience-list">
                                {cmedLandBasedPreference.map((item, idx) => (
                                    <li key={idx} className="cmeds-audience-item">
                                        <CmedIconX size={18} className="cmeds-audience-check cmeds-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="cmeds-itinerary-note" style={{ marginTop: '24px' }}>
                            A combination of Celebrity cruise + pre/post land stays can provide a useful middle ground.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="cmeds-pros-section cmeds-dark-section">
                    <div className="cmeds-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="cmedc-eyebrow-label cmeds-eyebrow-white">PROS & CONS</span>
                            <h2 className="cmedc-section-heading">Celebrity Mediterranean Cruises Pros & Cons</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        </div>
                        <div className="cmeds-comparison-board">
                            <div className="cmeds-pros-panel">
                                <h3 className="cmeds-panel-title cmeds-pros-title">
                                    <CmedIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="cmeds-panel-list">
                                    {cmedPros.map((pro, idx) => (
                                        <div key={idx} className="cmeds-list-item">
                                            <div className="cmeds-item-icon-wrap cmeds-pro-icon"><CmedIconCheck size={16} /></div>
                                            <div className="cmeds-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cmeds-cons-panel">
                                <h3 className="cmeds-panel-title cmeds-cons-title">
                                    <CmedIconX size={22} />
                                    Cons
                                </h3>
                                <div className="cmeds-panel-list">
                                    {cmedCons.map((con, idx) => (
                                        <div key={idx} className="cmeds-list-item">
                                            <div className="cmeds-item-icon-wrap cmeds-con-icon"><CmedIconX size={16} /></div>
                                            <div className="cmeds-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW TO CHOOSE */}
                <section className="cmedx-steps-section">
                    <div className="cmedx-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">PLANNING WALKTHROUGH</span>
                            <h2 className="cmedc-section-heading">How to Choose the Best Celebrity Mediterranean Cruise</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        </div>
                        <div className="cmedx-steps-list">
                            {cmedSteps.map((step, idx) => (
                                <div key={idx} className="cmedx-step-item">
                                    <div className="cmedx-step-number">{idx + 1}</div>
                                    <div className="cmedx-step-body">
                                        <h4 className="cmedx-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="cmedx-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="cmedx-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="cmedx-step-tag">{tag}</span>
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
                <section className="cmeds-tag-section cmeds-bg-white">
                    <div className="cmeds-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">PACKING GUIDE</span>
                            <h2 className="cmedc-section-heading">What to Pack for a Celebrity Mediterranean Cruise</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Mediterranean packing depends heavily on the season. Recommended items include:
                            </p>
                        </div>
                        <div className="cmeds-tag-grid">
                            {cmedPackingList.map((item, idx) => {
                                const IconComponent = cmedIconMap[item.icon];
                                return (
                                    <div key={idx} className="cmeds-tag-card">
                                        <div className="cmeds-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CmedIconDot size={20} />}
                                        </div>
                                        <span className="cmeds-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cmeds-included-note">
                            For visits to religious sites, travelers should also pack clothing that meets local dress expectations.
                        </p>
                    </div>
                </section>

                {/* EXPERT INSIGHT */}
                <section id="celebrity-mediterranean-cruises-insight" className="cmede-expert-editorial-section cmede-growth-insight-section">
                    <div className="cmede-expert-editorial-container">
                        <div className="cmede-expert-editorial-card">

                            <div className="cmede-editorial-portrait-block">
                                <div className="cmede-editorial-image-container-relative" style={{ position: 'relative', marginBottom: '30px' }}>
                                    <div className="cmede-editorial-image-frame">
                                        <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" />
                                        <div className="cmede-editorial-gradient-layer"></div>
                                    </div>
                                    <div className="cmede-editorial-floating-stat">
                                        <div className="cmede-stat-tile">
                                            <span className="cmede-stat-number">40+</span>
                                            <span className="cmede-stat-label">Years Experience</span>
                                        </div>
                                        <div className="cmede-stat-divider"></div>
                                        <div className="cmede-stat-tile">
                                            <span className="cmede-stat-number">120+</span>
                                            <span className="cmede-stat-label">Countries Visited</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="cmede-expertise-section-box">
                                    <span className="cmede-expertise-intro-label">Her expertise spans:</span>
                                    <div className="cmede-expertise-horizontal-strip">
                                        {[
                                            'Premium & luxury cruising',
                                            'Mediterranean itinerary planning',
                                            'Greece, Italy & Spain routes',
                                            'Suite & stateroom selection',
                                            'Concierge-level cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="cmede-expertise-pills-row">
                                                <div className="cmede-expertise-pill-icon-box"><CmedIconDot size={14} /></div>
                                                <span className="cmede-expertise-pill-text">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="cmede-editorial-content-block">
                                <div className="cmede-editorial-header">
                                    <div className="cmede-editorial-eyebrow-container">
                                        <CmedIconAward size={18} className="cmede-editorial-icon-badge" />
                                        <span className="cmede-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="cmede-editorial-title">
                                        Why Choose Celebrity <br className="cmede-growth-title-break" />for the Mediterranean?
                                    </h2>
                                    <div className="cmede-editorial-accent-bar"></div>
                                </div>

                                <p className="cmede-editorial-lead-para">
                                    The Mediterranean is one destination where the itinerary should come before the ship.
                                </p>

                                <div className="cmede-priorities-box">
                                    <p className="cmede-priorities-intro">
                                        A traveler who dreams of Santorini and Mykonos should not choose a cruise simply because the ship is attractive. Likewise, someone focused on Rome, Florence and the French Riviera should compare the Western Mediterranean route carefully. I recommend starting with your top three destinations, then comparing the ships, port times, departure city and available excursions. For a more complete European vacation, adding two or three nights before or after the cruise can turn a cruise into a much more personalized Mediterranean journey.
                                    </p>
                                </div>
                            </div>

                            <div className="cmede-editorial-full-width-footer">
                                <p className="cmede-editorial-signature">
                                    — Angela Hughes<br />
                                    Founder &amp; CEO, Trips &amp; Ships Luxury Travel
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY PLAN WITH TRIPS & SHIPS */}
                <section className="cmeds-why-book-section cmeds-why-book-dark">
                    <div className="cmeds-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cmedc-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="cmedc-section-heading">Why Plan Your Celebrity Mediterranean Cruise With <br /> Trips & Ships Luxury Travel?</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                            <p className="cmedc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Planning a Mediterranean cruise involves much more than selecting a sailing date. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="cmeds-why-book-grid">
                            {cmedWhyPlan.map((item, idx) => {
                                const IconComponent = cmedIconMap[item.icon];
                                return (
                                    <div key={idx} className="cmeds-why-book-card">
                                        <div className="cmeds-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CmedIconDot size={20} />}
                                        </div>
                                        <h4 className="cmeds-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cmedc-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px', color: '#cbd5e1', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                            The goal is to match the cruise with how you want to experience Europe, rather than simply choosing the first available sailing.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="cmedc-faq-section">
                    <div className="cmedc-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="cmedc-section-heading">Frequently Asked Questions</h2>
                            <div className="cmedc-heading-bar cmedc-bar-center"></div>
                        </div>
                        <div className="cmedc-faq-list">
                            {cmedFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="cmedc-faq-item"
                                    onClick={() => cmedToggleFaq(index)}
                                >
                                    <div className="cmedc-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="cmedc-faq-toggle">
                                            {cmedActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {cmedActiveFaq === index && (
                                        <p className="cmedc-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

              

               

                {/* CTA SECTION */}
                <section className="cmedc-cta-section">
                    <div className="cmedc-cta-bg-pattern"></div>
                    <div className="cmedc-cta-inner">
                        <h2 className="cmedc-cta-heading">Plan Your Celebrity Mediterranean Cruise</h2>
                        <div className="cmedc-cta-separator"></div>
                        <p className="cmedc-cta-text">
                            Ready to experience the Mediterranean with Celebrity? Trips & Ships Luxury Travel can help you compare Celebrity ships, Greece and Italy itineraries, Western and Eastern Mediterranean routes, shore excursions, staterooms and pre- or post-cruise stays.
                        </p>
                        <div className="cmedc-cta-btn-row">
                            <Link to="/contact" className="cmedc-btn-primary">
                                <CmedIconPhone size={18} />
                                Plan My Celebrity Mediterranean Cruise
                            </Link>
                            <button className="cmedc-btn-outline">
                                <CmedIconList size={18} />
                                Speak With a Luxury Mediterranean Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default CelebrityMediterraneanCruises