import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebrityrivercruises.css'
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
    ThumbsUp
} from 'lucide-react'

const iconMap = {
    Ship, Anchor, Compass, Wine, UtensilsCrossed, Wind, Sun, BedDouble, Sparkles,
    Crown, DoorOpen, Waves, Wifi, Utensils, ConciergeBell, GlassWater, Music,
    Landmark, TreeDeciduous, Mountain, Calendar, Plane, FileSearch, BadgePercent,
    Sliders, HeartHandshake, Users, MapPin, Globe, ShieldCheck, Coffee, Home,
    Star, Castle, Building2, Sunrise, ChefHat, Leaf, Droplet, Camera, Clock, ThumbsUp
}

/* ============================================================
   INLINE SVG ICONS (no lucide-react dependency for these — plain inline)
   ============================================================ */
function CrivIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CrivIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CrivIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CrivIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CrivIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CrivIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CrivIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CrivIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CrivIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CrivPlaceholder({ label, className = '' }) {
    return (
        <div className={`cbcs-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CrivIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityRiverCruises() {
    const [crivActiveFaq, setCrivActiveFaq] = useState(null)
    const crivToggleFaq = (index) => {
        setCrivActiveFaq(crivActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const crivGlance = [
        { feature: 'First Sailings', detail: 'August 2027' },
        { feature: 'Initial Rivers', detail: 'Rhine & Danube' },
        { feature: 'Initial Program', detail: '2027–2028' },
        { feature: 'River Ship Experience', detail: 'Premium & intimate' },
        { feature: 'Ship Capacity', detail: '172 guests on current inaugural ships' },
        { feature: 'Daily Excursion', detail: 'Included' },
        { feature: 'Meals', detail: 'Included' },
        { feature: 'Beverages', detail: 'Included, including alcohol' },
        { feature: 'Wi-Fi', detail: 'Included' },
        { feature: 'Entertainment', detail: 'Included' },
        { feature: 'Dining', detail: 'Six dining options' },
        { feature: 'River View Rooms', detail: 'Available' },
        { feature: 'Infinite Balcony', detail: 'Available' },
        { feature: 'Skylight Infinite Balcony Suite', detail: 'Available' },
        { feature: 'Vista Balcony Suite', detail: 'Available' },
        { feature: 'Butler Service', detail: 'Included in suites' },
        { feature: 'Before & After Stays', detail: 'Available on selected itineraries' }
    ]

    const crivCompassFeatures = [
        { label: 'Open-air lounges', icon: 'Wind' },
        { label: 'Spacious interiors', icon: 'Home' },
        { label: 'River-facing accommodations', icon: 'Waves' },
        { label: 'King-size beds', icon: 'BedDouble' },
        { label: 'Skylight Infinite Balcony Suites', icon: 'Sparkles' },
        { label: 'Butler service in suites', icon: 'ConciergeBell' },
        { label: 'Complimentary stocked minibar', icon: 'GlassWater' },
        { label: 'Continental breakfast in room', icon: 'Coffee' },
        { label: 'Daily housekeeping and turndown', icon: 'Sun' },
        { label: 'In-room filtered water', icon: 'Droplet' }
    ]

    const crivSeekerFeatures = [
        { label: 'Approximately 172 guests', icon: 'Users' },
        { label: 'Magic Edge cantilevered dining pods', icon: 'UtensilsCrossed' },
        { label: 'Top-deck bar and grille', icon: 'GlassWater' },
        { label: 'Skylight Infinite Balcony Suites', icon: 'Sparkles' },
        { label: 'Open-air spaces', icon: 'Wind' },
        { label: 'King-size beds', icon: 'BedDouble' },
        { label: 'Butler service in suites', icon: 'ConciergeBell' },
        { label: 'Complimentary minibar', icon: 'GlassWater' },
        { label: 'Continental breakfast in room', icon: 'Coffee' },
        { label: 'Hybrid propulsion systems', icon: 'Ship' }
    ]

    const crivCompareShips = [
        { feature: 'Inaugural Year', compass: '2027', seeker: '2027' },
        { feature: 'Occupancy', compass: '172', seeker: '172' },
        { feature: 'River Cruising', compass: 'Europe', seeker: 'Europe' },
        { feature: 'Skylight Infinite Balcony Suites', compass: 'Yes', seeker: 'Yes' },
        { feature: 'Open-Air Spaces', compass: 'Yes', seeker: 'Yes' },
        { feature: 'King-Size Beds', compass: 'Yes', seeker: 'Yes' },
        { feature: 'Butler Service in Suites', compass: 'Yes', seeker: 'Yes' },
        { feature: 'Distinctive Feature', compass: 'Modern open-air design', seeker: 'Magic Edge dining pods' },
        { feature: 'Hybrid Propulsion', compass: '—', seeker: 'Yes' }
    ]

    const crivRhineHighlights = [
        { label: 'Medieval castles', icon: 'Castle' },
        { label: 'Vineyards', icon: 'Wine' },
        { label: 'Historic towns', icon: 'Landmark' },
        { label: 'Scenic river valleys', icon: 'Mountain' },
        { label: 'Germany', icon: 'MapPin' },
        { label: 'France', icon: 'MapPin' },
        { label: 'Switzerland', icon: 'MapPin' },
        { label: 'Netherlands', icon: 'MapPin' }
    ]

    const crivDanubeHighlights = [
        { label: 'Vienna', icon: 'Landmark' },
        { label: 'Budapest', icon: 'Building2' },
        { label: 'Bratislava', icon: 'Building2' },
        { label: 'Linz', icon: 'MapPin' },
        { label: 'Dürnstein', icon: 'Castle' },
        { label: 'Wachau Valley', icon: 'Mountain' },
        { label: 'Vilshofen', icon: 'MapPin' }
    ]

    const crivRiverPairs = [
        { rhine: 'Castles', danube: 'Imperial cities' },
        { rhine: 'Vineyards', danube: 'Historic capitals' },
        { rhine: 'Germany', danube: 'Austria' },
        { rhine: 'France', danube: 'Hungary' },
        { rhine: 'Amsterdam', danube: 'Budapest' },
        { rhine: 'Strasbourg', danube: 'Vienna' },
        { rhine: 'Scenic Rhine Valley', danube: 'Wachau Valley' }
    ]

    const crivChooseRhine = ['Castles', 'Vineyards', 'Medieval towns', 'Germany and France', 'Amsterdam', 'Scenic European landscapes']
    const crivChooseDanube = ['Vienna', 'Budapest', 'Central European history', 'Imperial architecture', 'Music and culture', 'Wachau Valley scenery']

    const crivIncluded = ['Meals', 'Beverages, including alcohol', 'Wi-Fi', 'Entertainment options', 'One shore excursion per day']

    const crivDiningHighlights = [
        { name: 'Regional Flavors', desc: 'Menus designed to evolve with the itinerary.', icon: 'ChefHat' },
        { name: 'Destination-Inspired Menus', desc: 'Cuisine influenced by the ports along the route.', icon: 'MapPin' },
        { name: 'Local Ingredients', desc: 'Dishes built around fresh, regional ingredients.', icon: 'Leaf' },
        { name: 'Flexible Dining', desc: 'All-day options for guests to dine on their schedule.', icon: 'Clock' },
        { name: 'All-Day Options', desc: 'Food available throughout the day, not just set hours.', icon: 'Coffee' },
        { name: 'Healthy Choices', desc: 'Menus that include lighter, wellness-focused options.', icon: 'Droplet' }
    ]

    const crivDiningVenues = [
        { label: 'Top-deck bar and lounge', icon: 'GlassWater' },
        { label: 'Martini Bar', icon: 'Wine' },
        { label: 'Café al Bacio', icon: 'Coffee' },
        { label: 'Sunset Bar', icon: 'Sun' }
    ]

    const crivRiverView = [
        { label: 'Approximately 157 sq. ft.', icon: 'Home' },
        { label: 'King-size bed', icon: 'BedDouble' },
        { label: 'Optional twin configuration', icon: 'BedDouble' },
        { label: 'Premium linens', icon: 'Sparkles' },
        { label: 'Spacious bathroom', icon: 'Droplet' },
        { label: 'Oversized shower', icon: 'Droplet' },
        { label: 'Natural light', icon: 'Sun' }
    ]

    const crivInfiniteBalcony = [
        { label: 'River views', icon: 'Waves' },
        { label: 'Fresh air', icon: 'Wind' },
        { label: 'Natural light', icon: 'Sun' },
        { label: 'A modern balcony concept', icon: 'DoorOpen' }
    ]

    const crivSkylight = [
        { label: 'Ceiling window', icon: 'Sun' },
        { label: 'Floor-to-ceiling windows', icon: 'DoorOpen' },
        { label: 'Separate living and sleeping areas', icon: 'Home' },
        { label: 'King-size bed', icon: 'BedDouble' },
        { label: 'Spa-style bathroom', icon: 'Droplet' },
        { label: 'Butler service', icon: 'ConciergeBell' },
        { label: 'Personalized minibar', icon: 'GlassWater' },
        { label: 'Approximately 233 sq. ft.', icon: 'Home' }
    ]

    const crivVistaBalcony = [
        { label: 'Panoramic river views', icon: 'Waves' },
        { label: 'Expansive veranda', icon: 'DoorOpen' },
        { label: 'Separate living and sleeping areas', icon: 'Home' },
        { label: 'King-size bed', icon: 'BedDouble' },
        { label: 'Butler service', icon: 'ConciergeBell' },
        { label: 'Premium bedding', icon: 'Sparkles' },
        { label: 'In-room technology', icon: 'Wifi' },
        { label: 'Wellness access', icon: 'Droplet' }
    ]

    const crivAccommodationsCompared = [
        { name: 'River View', bestFor: 'Value-focused travelers', feature: 'River views & natural light' },
        { name: 'Infinite Balcony', bestFor: 'Travelers wanting flexible outdoor access', feature: 'Lowering panoramic window' },
        { name: 'Vista Balcony Suite', bestFor: 'Travelers wanting more space', feature: 'Veranda & separate living area' },
        { name: 'Skylight Infinite Balcony Suite', bestFor: 'Luxury travelers', feature: 'Ceiling window + suite amenities' }
    ]

    const crivSuiteInclusions = [
        'Butler service', 'Personalized minibar', 'Complimentary laundry', 'Exclusive dining experience',
        '24-hour room service', 'Upgraded drink package', 'Cocktail hour', 'Specialty tea and coffee',
        'Espresso machine', 'Priority shore excursion booking', 'Priority specialty dining booking'
    ]

    const crivRiverVsOcean = [
        { river: 'Smaller ships', ocean: 'Much larger ships' },
        { river: 'Approximately 172 guests on current inaugural ships', ocean: 'Larger passenger capacity' },
        { river: 'European rivers', ocean: 'Oceans worldwide' },
        { river: 'City-center access', ocean: 'Ocean ports' },
        { river: 'Destination-focused', ocean: 'Ship + destination' },
        { river: 'Daily shore excursion included', ocean: 'Excursions vary' },
        { river: 'Intimate onboard environment', ocean: 'Resort-style environment' },
        { river: 'River views', ocean: 'Ocean views' },
        { river: 'Six dining options', ocean: 'Broader ocean-ship dining program' }
    ]

    const crivHowDifferent = [
        { title: 'New River Ships', desc: 'Celebrity is entering river cruising with purpose-built ships and a contemporary design approach.', icon: 'Ship' },
        { title: 'Innovative Staterooms', desc: 'The Skylight Infinite Balcony Suite is designed specifically to connect passengers more closely with the river and sky.', icon: 'Sparkles' },
        { title: 'Smaller Guest Experience', desc: 'The current inaugural ships accommodate approximately 172 guests.', icon: 'Users' },
        { title: 'Destination-Focused Dining', desc: 'Menus evolve with the itinerary and regional influences.', icon: 'ChefHat' },
        { title: 'Included Daily Excursions', desc: 'One shore excursion per day is included in the fare.', icon: 'Compass' },
        { title: 'Before & After Stays', desc: 'Selected Celebrity river itineraries offer hotel stays, breakfast, guided tours and transfers before or after the cruise.', icon: 'Calendar' }
    ]

    const crivCompareFactors = [
        'Ship size', 'Cabin design', 'Suite amenities', 'Dining', 'Included beverages',
        'Excursions', 'Wi-Fi', 'Service', 'Itinerary', 'Onboard atmosphere', 'Pre- and post-cruise options'
    ]

    const crivWorthValues = [
        { label: 'New ships', icon: 'Ship' },
        { label: 'Modern design', icon: 'Sparkles' },
        { label: 'Smaller guest capacity', icon: 'Users' },
        { label: 'European cultural immersion', icon: 'Landmark' },
        { label: 'Innovative accommodations', icon: 'Home' },
        { label: 'Included daily excursions', icon: 'Compass' },
        { label: 'Included meals and beverages', icon: 'Utensils' },
        { label: 'Wi-Fi', icon: 'Wifi' },
        { label: 'Destination-focused dining', icon: 'ChefHat' }
    ]

    const crivWhoShould = [
        { feature: 'Celebrity Ocean Cruise Guests', detail: 'Travelers who already enjoy Celebrity and want to experience the brand on European rivers.' },
        { feature: 'First-Time River Cruisers', detail: 'Travelers looking for a contemporary alternative to traditional river cruise design.' },
        { feature: 'Couples', detail: 'Those seeking a relaxed and intimate European vacation.' },
        { feature: 'Luxury Travelers', detail: 'Travelers interested in premium suites, butler service and modern accommodations.' },
        { feature: 'Food & Wine Travelers', detail: 'Those who enjoy destination-inspired cuisine and European culinary experiences.' },
        { feature: 'Culture & History Travelers', detail: 'Those who want convenient access to European cities and historic destinations.' }
    ]

    const crivMayPreferAnother = [
        'Want a very traditional river cruise atmosphere',
        'Prefer a large, established river fleet',
        'Want extensive river destinations beyond the Rhine and Danube immediately',
        'Prefer very large onboard entertainment programs',
        'Are primarily focused on finding the lowest cruise fare'
    ]

    const crivPros = [
        'New river cruise product', 'Modern ship design', 'Intimate guest capacity', 'Rhine and Danube itineraries',
        'Included daily shore excursion', 'Meals included', 'Beverages included', 'Wi-Fi included',
        'Six dining options', 'Innovative balcony concepts', 'Skylight Infinite Balcony Suites',
        'Butler service in suites', 'Before & After Stay options'
    ]

    const crivCons = [
        'New river cruise product', 'Initial program focused on Rhine and Danube',
        'Limited operating history compared with established river operators',
        'Additional services or experiences may carry separate costs',
        'Gratuities and other booking-specific charges should be checked before final payment'
    ]

    const crivSteps = [
        { title: 'Choose Rhine or Danube', desc: 'Start with the destinations you most want to experience.', tags: ['Rhine', 'Danube'] },
        { title: 'Choose the Season', desc: 'Spring, summer, fall and holiday sailings offer different experiences.', tags: ['Spring', 'Summer', 'Fall', 'Holiday'] },
        { title: 'Compare Itineraries', desc: 'Look beyond the number of nights. Check ports, overnight stays, scenic sailing, included excursions, and arrival and departure cities.', tags: ['Ports', 'Overnight stays', 'Scenic sailing', 'Included excursions', 'Arrival & departure cities'] },
        { title: 'Choose Your Accommodation', desc: 'Decide whether you prefer River View, Infinite Balcony, Vista Balcony Suite, or Skylight Infinite Balcony Suite.', tags: ['River View', 'Infinite Balcony', 'Vista Balcony Suite', 'Skylight Infinite Balcony Suite'] },
        { title: 'Consider Before & After Stays', desc: 'Adding hotel nights and guided experiences can make the river cruise part of a longer European vacation.', tags: [] }
    ]

    const crivWhyPlan = [
        { title: 'Compare Celebrity River Itineraries', icon: 'FileSearch' },
        { title: 'Choose Between Rhine and Danube', icon: 'Compass' },
        { title: 'Compare Celebrity Compass and Celebrity Seeker', icon: 'Ship' },
        { title: 'Select the Right Stateroom or Suite', icon: 'BedDouble' },
        { title: 'Evaluate Included Amenities', icon: 'ShieldCheck' },
        { title: 'Arrange Flights', icon: 'Plane' },
        { title: 'Coordinate Private Transfers', icon: 'MapPin' },
        { title: 'Add Pre-Cruise Hotel Stays', icon: 'Calendar' },
        { title: 'Add Post-Cruise European Extensions', icon: 'Globe' },
        { title: 'Compare Celebrity With Other Luxury River Cruise Lines', icon: 'BadgePercent' },
        { title: 'Create a Personalized European Itinerary', icon: 'Sliders' }
    ]

    const crivFaqs = [
        { question: '1. What are Celebrity River Cruises?', answer: "Celebrity River Cruises is Celebrity's premium river cruise offering designed for intimate European journeys on the Rhine and Danube. The inaugural river program begins in August 2027." },
        { question: '2. When do Celebrity River Cruises begin?', answer: "Celebrity's inaugural river cruises are scheduled to begin in August 2027." },
        { question: '3. Which rivers does Celebrity River Cruises sail?', answer: 'For 2027 and 2028, Celebrity plans to sail the Rhine and Danube Rivers.' },
        { question: '4. What are the Celebrity River Cruise ships?', answer: 'The initial ships include Celebrity Compass and Celebrity Seeker, with additional Celebrity river ships planned as the program expands.' },
        { question: '5. How many guests are on Celebrity Compass?', answer: 'Celebrity Compass is listed with an occupancy of 172 guests.' },
        { question: '6. How many guests are on Celebrity Seeker?', answer: 'Celebrity Seeker is listed with an occupancy of 172 guests.' },
        { question: '7. What is included on Celebrity River Cruises?', answer: 'The voyage fare includes meals, beverages including alcohol, Wi-Fi, entertainment options and one shore excursion per day.' },
        { question: '8. Are drinks included on Celebrity River Cruises?', answer: 'Yes. Celebrity states that beverages, including alcohol, are included in the voyage fare.' },
        { question: '9. Are shore excursions included?', answer: 'Yes. One shore excursion per day is included in the voyage fare.' },
        { question: '10. Is Wi-Fi included?', answer: 'Yes. Wi-Fi is included in the Celebrity River Cruises voyage fare.' },
        { question: '11. Does Celebrity River Cruises have balconies?', answer: 'Yes. Celebrity offers Infinite Balcony accommodations, Vista Balcony Suites and Skylight Infinite Balcony Suites.' },
        { question: '12. What is a Skylight Infinite Balcony Suite?', answer: 'It is a Celebrity river cruise suite featuring a large ceiling window, floor-to-ceiling windows, separate living and sleeping areas, and additional suite amenities.' },
        { question: '13. Does Celebrity River Cruises have inside cabins?', answer: "Celebrity's river ships do not offer traditional inside cabins; accommodations are designed around natural light and river views." },
        { question: '14. What is the best Celebrity River Cruise cabin?', answer: 'The best cabin depends on your priorities. Travelers wanting the most distinctive accommodation should consider the Skylight Infinite Balcony Suite, while River View rooms can provide a simpler option with river-facing views.' },
        { question: '15. Which is better: Celebrity Rhine or Danube?', answer: 'The Rhine is especially appealing for castles, vineyards and destinations in Germany, France and the Netherlands. The Danube is ideal for travelers interested in Vienna, Budapest, Central European history and the Wachau Valley.' },
        { question: '16. Does Celebrity River Cruises offer Vienna and Budapest itineraries?', answer: 'Yes. Celebrity offers Danube itineraries connecting destinations including Vilshofen, Linz, Dürnstein, Vienna and Budapest.' },
        { question: '17. Does Celebrity River Cruises offer Before & After Stays?', answer: 'Yes. Selected itineraries offer hotel stays, breakfast, guided tours and transfers before or after the river cruise.' },
        { question: '18. Is Celebrity River Cruises the same as Celebrity ocean cruising?', answer: "No. River cruising is a smaller, more destination-focused experience, while Celebrity's ocean ships offer larger resort-style environments and broader onboard entertainment." },
        { question: '19. Are Celebrity River Cruises luxury cruises?', answer: 'Celebrity positions its river program as a premium river cruise offering, with modern accommodations, suite amenities, destination-focused dining and personalized service.' },
        { question: '20. Are Celebrity River Cruises worth it?', answer: 'Celebrity River Cruises are worth considering if you value contemporary design, new ships, intimate cruising, included daily excursions and a premium European river experience.' },
        { question: '21. Which Celebrity River Cruise ship should I choose?', answer: 'Compare the itinerary and sailing date first. Celebrity Compass and Celebrity Seeker share many core features, while Seeker adds distinctive spaces such as the Magic Edge dining pods.' },
        { question: '22. How are Celebrity River Cruises different from other river cruises?', answer: 'Celebrity emphasizes contemporary ship design, innovative accommodations, destination-inspired dining and a premium experience that may feel familiar to travelers who already know the Celebrity brand.' }
    ]

    const crivRelated = [
        { title: 'Celebrity Beyond Cruise Ship Guide', desc: "Explore Celebrity's award-winning Edge Series ocean ship, deck plans, The Retreat and dining.", icon: 'Ship', link: '/celebrity-cruises/ships/celebrity-beyond' },
        { title: 'Celebrity Ocean Cruises Overview', desc: 'Compare Caribbean, Mediterranean and European ocean itineraries across the Celebrity fleet.', icon: 'Globe', link: '/celebrity-cruises/' },
        { title: 'Rhine River Cruise Guide', desc: 'Castles, vineyards and riverside towns through Germany, France, Switzerland and the Netherlands.', icon: 'Castle', link: '/river-cruises/rhine' },
        { title: 'Danube River Cruise Guide', desc: 'Vienna, Budapest, the Wachau Valley and Central European history along the Danube.', icon: 'Landmark', link: '/river-cruises/danube' },
        { title: 'European River Cruise Packing Guide', desc: 'What to pack for a European river cruise, from shore excursions to onboard dining.', icon: 'FileSearch', link: '/guides/european-river-cruise-packing' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const crivSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#webpage",
                "url": "https://tripsships.com/celebrity-cruises/river-cruises/",
                "name": "Celebrity River Cruises: Ships, Itineraries & Inclusions",
                "description": "Explore Celebrity River Cruises, including new ships, Rhine and Danube itineraries, accommodations, dining, inclusions, excursions and how the river experience differs from ocean cruising.",
                "isPartOf": { "@id": "https://tripsships.com/#website" },
                "about": { "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#service" },
                "breadcrumb": { "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "Service",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#service",
                "name": "Celebrity River Cruises",
                "serviceType": "Luxury River Cruises",
                "description": "Celebrity River Cruises offers premium European river cruise experiences on the Rhine and Danube, featuring intimate ships, modern accommodations, destination-focused dining, included daily shore excursions, and premium onboard amenities.",
                "url": "https://tripsships.com/celebrity-cruises/river-cruises/",
                "provider": { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://tripsships.com/" },
                "areaServed": [
                    { "@type": "Place", "name": "Europe" },
                    { "@type": "Place", "name": "Germany" },
                    { "@type": "Place", "name": "France" },
                    { "@type": "Place", "name": "Netherlands" },
                    { "@type": "Place", "name": "Austria" },
                    { "@type": "Place", "name": "Hungary" }
                ],
                "brand": { "@type": "Brand", "name": "Celebrity River Cruises" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tripsships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://tripsships.com/celebrity-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity River Cruises", "item": "https://tripsships.com/celebrity-cruises/river-cruises/" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#faq",
                "url": "https://tripsships.com/celebrity-cruises/river-cruises/",
                "mainEntity": crivFaqs.map(f => ({
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
                <title>Celebrity River Cruises 2027 & 2028: Ships, Routes & What's Included</title>
                <meta name="title" content="Celebrity River Cruises: Ships, Itineraries & Inclusions" />
                <meta
                    name="description"
                    content="Explore Celebrity River Cruises, including new ships, Rhine and Danube itineraries, accommodations, dining, inclusions, excursions and how the river experience differs from ocean cruising."
                />
                <script type="application/ld+json">
                    {JSON.stringify(crivSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION (REUSED) */}
                <section className="fcel-hero-section">
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <CrivIconSparkle size={16} />
                            <span>Celebrity River Cruises</span>
                        </div>
                        <h1 className="fcel-hero-title">Celebrity River Cruises <br /> A New Way to Experience Europe by River</h1>
                        <p className="fcel-hero-subtitle">
                            Ships, Itineraries & Inclusions for 2027 & 2028
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <CrivIconPhone size={18} />
                                Plan My Celebrity River Cruise
                            </Link>
                            <button className="fcel-btn-outline">
                                <CrivIconList size={18} />
                                Speak With a Luxury Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION (REUSED) */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">A NEW WAY TO EXPERIENCE EUROPE BY RIVER</span>
                                <h2 className="fcel-section-heading">Celebrity River Cruises</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Celebrity River Cruises introduces a new premium river cruise experience designed around intimate ships, modern accommodations, destination-focused dining, and immersive European travel.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Celebrity's inaugural river program begins in August 2027, with the Danube and Rhine forming the initial river network for 2027 and 2028. The program is designed to bring the Celebrity approach to smaller European waterways, with more intimate spaces, river-facing accommodations, and experiences centered on the destinations.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    For travelers already familiar with Celebrity's ocean cruises, the river product offers something distinctly different: smaller ships, closer access to European cities, and a journey where the river and destinations are central to the experience.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <CrivPlaceholder label="Celebrity River Cruises" />
                                <div className="fcel-intro-badge-float">
                                    <CrivIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Rhine & Danube 2027–2028</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION (REUSED) */}
                <section className="cbcs-quick-answer-section">
                    <div className="cbcs-quick-answer-container">
                        <div className="cbcs-quick-answer-card">
                            <h3 className="cbcs-quick-answer-title">What Are Celebrity River Cruises?</h3>
                            <p className="cbcs-quick-answer-text">
                                Celebrity River Cruises is Celebrity's premium river cruise offering in Europe, launching in August 2027. For 2027 and 2028, Celebrity plans to sail the Rhine and Danube Rivers, with new river ships designed for intimate journeys, modern accommodations, destination-focused dining, and included daily shore excursions. The voyage fare includes meals, beverages including alcohol, Wi-Fi, entertainment options, and one shore excursion per day.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA (REUSED) */}
                <section className="cbcs-inline-cta-section">
                    <div className="cbcs-inline-cta-container">
                        <span className="cbcs-inline-cta-tag">Expert Planning</span>
                        <p className="cbcs-inline-cta-text">Ready to experience Europe by river with Celebrity?</p>
                        <div className="cbcs-inline-cta-btn-row">
                            <Link to="/contact" className="cbcs-btn-primary">
                                <CrivIconPhone size={18} />
                                Plan My Celebrity River Cruise
                            </Link>
                            <Link to="/contact" className="cbcs-btn-outline">
                                <CrivIconList size={18} />
                                Speak With a Luxury Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE (REUSED) */}
                <section className="cbcs-glance-section">
                    <div className="cbcs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PROGRAM OVERVIEW</span>
                            <h2 className="fcel-section-heading">Celebrity River Cruises at a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-glance-table">
                            {crivGlance.map((row, idx) => (
                                <div key={idx} className="cbcs-glance-row">
                                    <div className="cbcs-glance-feature">{row.feature}</div>
                                    <div className="cbcs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            Celebrity's current river FAQ confirms the Rhine and Danube for 2027–2028 and lists meals, beverages including alcohol, Wi-Fi, entertainment and one shore excursion per day among the voyage inclusions.
                        </p>
                    </div>
                </section>

                {/* WHEN DO THEY BEGIN (REUSED single-statement pattern) */}
                <section className="cbcs-worth-section cbcs-bg-white">
                    <div className="cbcs-worth-container">
                        <span className="fcel-eyebrow-label">LAUNCH TIMELINE</span>
                        <h2 className="fcel-section-heading">When Do Celebrity River Cruises Begin?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Celebrity's inaugural river cruises are scheduled to begin in August 2027. The first generation of Celebrity river ships is designed specifically for Europe's waterways rather than adapting an ocean-going ship to river cruising. Celebrity Compass has an inaugural date of August 5, 2027, while Celebrity Seeker has an inaugural date of October 21, 2027. Both are listed with an occupancy of 172 guests.
                        </p>
                    </div>
                </section>

                {/* CELEBRITY COMPASS */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CrivIconSparkle size={14} />
                                    <span>Celebrity Compass</span>
                                </div>
                                <CrivPlaceholder label="Celebrity Compass River Ship" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">RIVER FLEET</span>
                                <h2 className="cbcs-feature-title">Celebrity Compass</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Compass is one of the first ships in the Celebrity River Cruises fleet. The ship accommodates approximately 172 guests and features:
                                </p>
                                <div className="cbcs-feature-list">
                                    {crivCompassFeatures.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CrivIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity describes Compass as a ship designed around connection, flexibility and closer views of the river.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY SEEKER (DARK, ALTERNATING) */}
                <section className="cbcs-feature-section cbcs-dark-section">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">RIVER FLEET</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Celebrity Seeker</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Seeker brings a similar next-generation approach to river cruising, with additional distinctive spaces. Highlights include:
                                </p>
                                <div className="cbcs-feature-list">
                                    {crivSeekerFeatures.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CrivIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity Seeker's inaugural sailing is listed for October 21, 2027.
                                </p>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CrivIconSparkle size={14} />
                                    <span>Celebrity Seeker</span>
                                </div>
                                <CrivPlaceholder label="Celebrity Seeker River Ship" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPASS VS SEEKER (NEW — criv- 3-col compare table) */}
                <section className="criv-compare-section">
                    <div className="criv-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHIP COMPARISON</span>
                            <h2 className="fcel-section-heading">Celebrity Compass vs. Celebrity Seeker</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="criv-compare-table-3col">
                            <div className="criv-compare-row-3col criv-compare-header">
                                <div className="criv-compare-cell criv-compare-label">Feature</div>
                                <div className="criv-compare-cell">Celebrity Compass</div>
                                <div className="criv-compare-cell">Celebrity Seeker</div>
                            </div>
                            {crivCompareShips.map((row, idx) => (
                                <div key={idx} className="criv-compare-row-3col">
                                    <div className="criv-compare-cell criv-compare-label">{row.feature}</div>
                                    <div className="criv-compare-cell">{row.compass}</div>
                                    <div className="criv-compare-cell">{row.seeker}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            The ships share the same overall design philosophy, so itinerary, departure date and preferred accommodation can be more important than choosing one ship purely by name.
                        </p>
                    </div>
                </section>

                {/* WHERE DOES IT SAIL — RHINE */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CrivIconDot size={14} />
                                    <span>Rhine River</span>
                                </div>
                                <CrivPlaceholder label="Rhine River Castles & Vineyards" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">WHERE TO SAIL</span>
                                <h2 className="cbcs-feature-title">Rhine River</h2>
                                <p className="fcel-lead-paragraph">The Rhine is known for:</p>
                                <div className="cbcs-feature-list">
                                    {crivRhineHighlights.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CrivIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    A Rhine itinerary can combine major cities with smaller riverside destinations, making it a strong choice for travelers interested in European history, architecture, wine and culture.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHERE DOES IT SAIL — DANUBE */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">WHERE TO SAIL</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Danube River</h2>
                                <p className="fcel-lead-paragraph">The Danube provides a different European river experience. Popular destinations and regions include:</p>
                                <div className="cbcs-feature-list">
                                    {crivDanubeHighlights.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CrivIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's Vienna & Budapest itinerary includes destinations such as Vilshofen, Linz, Grein, the Wachau Valley, Dürnstein, Vienna, Gönyű and Budapest.
                                </p>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CrivIconDot size={14} />
                                    <span>Danube River</span>
                                </div>
                                <CrivPlaceholder label="Danube River Vienna & Budapest" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* RHINE VS DANUBE (NEW — criv- 2-col pair table) */}
                <section className="criv-compare-section cbcs-bg-soft">
                    <div className="criv-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RIVER COMPARISON</span>
                            <h2 className="fcel-section-heading">Rhine vs. Danube: Which Celebrity River Cruise Is Better?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="criv-pair-table">
                            <div className="criv-pair-row criv-pair-header">
                                <div className="criv-pair-cell">Rhine River</div>
                                <div className="criv-pair-cell">Danube River</div>
                            </div>
                            {crivRiverPairs.map((row, idx) => (
                                <div key={idx} className="criv-pair-row">
                                    <div className="criv-pair-cell">{row.rhine}</div>
                                    <div className="criv-pair-cell">{row.danube}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CHOOSE RHINE / CHOOSE DANUBE (NEW — criv- choice board) */}
                <section className="criv-choice-section">
                    <div className="criv-choice-container">
                        <div className="criv-choice-board">
                            <div className="criv-choice-panel">
                                <h3 className="criv-choice-title">
                                    <CrivIconCheck size={22} />
                                    Choose the Rhine if you want:
                                </h3>
                                <div className="criv-choice-list">
                                    {crivChooseRhine.map((item, idx) => (
                                        <div key={idx} className="criv-choice-item">
                                            <div className="criv-choice-icon-wrap">
                                                <CrivIconCheck size={16} />
                                            </div>
                                            <div className="criv-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="criv-choice-panel">
                                <h3 className="criv-choice-title">
                                    <CrivIconCheck size={22} />
                                    Choose the Danube if you want:
                                </h3>
                                <div className="criv-choice-list">
                                    {crivChooseDanube.map((item, idx) => (
                                        <div key={idx} className="criv-choice-item">
                                            <div className="criv-choice-icon-wrap">
                                                <CrivIconCheck size={16} />
                                            </div>
                                            <div className="criv-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ITINERARIES (REUSED) */}
                <section className="cbcs-itinerary-section">
                    <div className="cbcs-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ROUTES</span>
                            <h2 className="fcel-section-heading">Celebrity River Cruise Itineraries</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's river itineraries are designed around a combination of major European cities, smaller riverside destinations and scenic sailing.
                            </p>
                        </div>
                        <div className="cbcs-itinerary-grid">
                            <div className="cbcs-itinerary-card">
                                <h3 className="cbcs-itinerary-region">
                                    <Landmark size={20} />
                                    Vienna & Budapest
                                </h3>
                                <p className="fcel-lead-paragraph" style={{ marginBottom: '18px' }}>
                                    This itinerary is one of the key Danube experiences. The route can include:
                                </p>
                                <ul className="cbcs-itinerary-list">
                                    <li><MapPin size={16} className="cbcs-included-icon" />Vilshofen → Linz → Grein</li>
                                    <li><Mountain size={16} className="cbcs-included-icon" />Wachau Valley → Dürnstein</li>
                                    <li><Landmark size={16} className="cbcs-included-icon" />Vienna → Gönyű → Budapest</li>
                                </ul>
                                <p className="cbcs-itinerary-note" style={{ marginTop: '18px' }}>
                                    The journey combines scenic sailing with destinations known for music, art, architecture and Central European history.
                                </p>
                            </div>
                            <div className="cbcs-itinerary-card">
                                <h3 className="cbcs-itinerary-region">
                                    <Castle size={20} />
                                    Rhine River Itineraries
                                </h3>
                                <p className="fcel-lead-paragraph" style={{ marginBottom: '18px' }}>
                                    Celebrity's Rhine program connects destinations in Germany, France, Switzerland and the Netherlands depending on the itinerary. Travelers can experience:
                                </p>
                                <ul className="cbcs-itinerary-list">
                                    <li><MapPin size={16} className="cbcs-included-icon" />Basel</li>
                                    <li><MapPin size={16} className="cbcs-included-icon" />Strasbourg</li>
                                    <li><MapPin size={16} className="cbcs-included-icon" />Heidelberg region</li>
                                    <li><MapPin size={16} className="cbcs-included-icon" />Mainz</li>
                                    <li><MapPin size={16} className="cbcs-included-icon" />Koblenz</li>
                                    <li><MapPin size={16} className="cbcs-included-icon" />Cologne</li>
                                    <li><MapPin size={16} className="cbcs-included-icon" />Amsterdam</li>
                                </ul>
                            </div>
                        </div>
                        <p className="cbcs-itinerary-note">The exact ports and direction vary by sailing, so travelers should compare individual itineraries rather than choosing solely by river name.</p>
                    </div>
                </section>

                {/* WHAT'S INCLUDED (REUSED) */}
                <section className="cbcs-included-section">
                    <div className="cbcs-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">VOYAGE FARE</span>
                            <h2 className="fcel-section-heading">What Is Included on Celebrity River Cruises?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity currently lists the following as included in the voyage fare:
                            </p>
                        </div>
                        <div className="cbcs-included-grid">
                            {crivIncluded.map((item, idx) => (
                                <div key={idx} className="cbcs-included-item">
                                    <CrivIconCheck size={18} className="cbcs-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            These inclusions are part of Celebrity's effort to create a more comprehensive river cruise fare rather than requiring travelers to add basic experiences individually.
                        </p>
                    </div>
                </section>

                {/* DINING */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CrivIconDot size={14} />
                                    <span>Dining</span>
                                </div>
                                <CrivPlaceholder label="Celebrity River Cruise Dining" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">CULINARY EXCELLENCE</span>
                                <h2 className="cbcs-feature-title">Celebrity River Cruise Dining</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity is placing significant emphasis on dining aboard its river ships. The current river program features six dining options, with menus designed to evolve with the itinerary. Dining focuses on:
                                </p>
                                <div className="cbcs-feature-desc-list">
                                    {crivDiningHighlights.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-desc-card">
                                                <div className="cbcs-feature-card-header">
                                                    {IconComponent && <IconComponent size={20} className="cbcs-feature-card-icon-inline" />}
                                                    <h4 className="cbcs-feature-desc-title">{item.name}</h4>
                                                </div>
                                                <p className="cbcs-feature-desc-text">{item.desc}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING VENUES */}
                <section className="cbcs-tag-section cbcs-bg-soft">
                    <div className="cbcs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity also introduces river versions of recognizable beverage and dining spaces, including:
                            </p>
                        </div>
                        <div className="cbcs-tag-grid">
                            {crivDiningVenues.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-tag-card">
                                        <div className="cbcs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CrivIconDot size={20} />}
                                        </div>
                                        <span className="cbcs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ACCOMMODATIONS INTRO */}
                <section className="cbcs-worth-section cbcs-bg-white">
                    <div className="cbcs-worth-container">
                        <span className="fcel-eyebrow-label">STATEROOMS & SUITES</span>
                        <h2 className="fcel-section-heading">Celebrity River Cruise Accommodations</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Celebrity's river ships are designed around natural light and river views. Unlike many ocean ships, Celebrity's river vessels do not offer traditional inside cabins. The current accommodation categories include river-view rooms, Infinite Balcony accommodations and suites.
                        </p>
                    </div>
                </section>

                {/* RIVER VIEW STATEROOM */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CrivIconSparkle size={14} />
                                    <span>River View</span>
                                </div>
                                <CrivPlaceholder label="River View Stateroom" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">ACCOMMODATIONS</span>
                                <h2 className="cbcs-feature-title">River View Stateroom</h2>
                                <p className="fcel-lead-paragraph">
                                    The River View stateroom is designed for travelers who want a comfortable river-facing room without moving into a suite category. Features include:
                                </p>
                                <div className="cbcs-feature-list">
                                    {crivRiverView.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CrivIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INFINITE BALCONY STATEROOM */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">ACCOMMODATIONS</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Infinite Balcony Stateroom</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity's Infinite Balcony design uses large windows that lower at the touch of a button. This creates an indoor-outdoor feeling while allowing passengers to remain comfortably inside their stateroom. It is particularly appealing for travelers who want:
                                </p>
                                <div className="cbcs-feature-list">
                                    {crivInfiniteBalcony.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CrivIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CrivIconSparkle size={14} />
                                    <span>Infinite Balcony</span>
                                </div>
                                <CrivPlaceholder label="Infinite Balcony Stateroom" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SKYLIGHT INFINITE BALCONY SUITE (DARK, ALTERNATING IMAGE) */}
                <section className="cbcs-feature-section cbcs-skylight-section">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CrivIconSparkle size={14} />
                                    <span>Skylight Suite</span>
                                </div>
                                <CrivPlaceholder label="Skylight Infinite Balcony Suite" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="cbcs-skylight-eyebrow">MOST DISTINCTIVE ACCOMMODATION</span>
                                <h2 className="cbcs-skylight-title">Skylight Infinite Balcony Suite</h2>
                                <p className="cbcs-skylight-lead">
                                    The Skylight Infinite Balcony Suite is one of the most distinctive accommodations in Celebrity's river cruise program. The suite features:
                                </p>
                                <div className="cbcs-skylight-grid">
                                    {crivSkylight.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-skylight-card">
                                                <div className="cbcs-skylight-card-icon">
                                                    {IconComponent ? <IconComponent size={20} /> : <CrivIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-skylight-card-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cbcs-skylight-footer-text">
                                    The ceiling window is designed to bring additional sky and natural light into the suite.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VISTA BALCONY SUITE */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">ACCOMMODATIONS</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Vista Balcony Suite</h2>
                                <p className="fcel-lead-paragraph">
                                    The Vista Balcony Suite provides more space with:
                                </p>
                                <div className="cbcs-feature-list">
                                    {crivVistaBalcony.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CrivIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CrivIconSparkle size={14} />
                                    <span>Vista Balcony Suite</span>
                                </div>
                                <CrivPlaceholder label="Vista Balcony Suite" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACCOMMODATIONS COMPARED (NEW — criv- 3-col compare table) */}
                <section className="criv-compare-section cbcs-bg-soft">
                    <div className="criv-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ACCOMMODATIONS COMPARED</span>
                            <h2 className="fcel-section-heading">Celebrity River Cruise Accommodations Compared</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="criv-compare-table-3col">
                            <div className="criv-compare-row-3col criv-compare-header">
                                <div className="criv-compare-cell criv-compare-label">Accommodation</div>
                                <div className="criv-compare-cell">Best For</div>
                                <div className="criv-compare-cell">Key Feature</div>
                            </div>
                            {crivAccommodationsCompared.map((row, idx) => (
                                <div key={idx} className="criv-compare-row-3col">
                                    <div className="criv-compare-cell criv-compare-label">{row.name}</div>
                                    <div className="criv-compare-cell">{row.bestFor}</div>
                                    <div className="criv-compare-cell">{row.feature}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SUITE INCLUSIONS (REUSED included pattern) */}
                <section className="cbcs-included-section cbcs-bg-white">
                    <div className="cbcs-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SUITE PERKS</span>
                            <h2 className="fcel-section-heading">What Is Included in Celebrity River Cruise Suites?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Suite guests receive additional amenities and services. These can include:
                            </p>
                        </div>
                        <div className="cbcs-included-grid">
                            {crivSuiteInclusions.map((item, idx) => (
                                <div key={idx} className="cbcs-included-item">
                                    <CrivIconCheck size={18} className="cbcs-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            Celebrity identifies these suite benefits as included suite perks.
                        </p>
                    </div>
                </section>

                {/* RIVER VS OCEAN CRUISES (NEW — criv- 2-col pair table) */}
                <section className="criv-compare-section">
                    <div className="criv-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RIVER VS. OCEAN</span>
                            <h2 className="fcel-section-heading">Celebrity River Cruises vs. Celebrity Ocean Cruises</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity River Cruises is not simply a smaller version of Celebrity's ocean cruise experience. The travel style is different.
                            </p>
                        </div>
                        <div className="criv-pair-table">
                            <div className="criv-pair-row criv-pair-header">
                                <div className="criv-pair-cell">Celebrity River Cruises</div>
                                <div className="criv-pair-cell">Celebrity Ocean Cruises</div>
                            </div>
                            {crivRiverVsOcean.map((row, idx) => (
                                <div key={idx} className="criv-pair-row">
                                    <div className="criv-pair-cell">{row.river}</div>
                                    <div className="criv-pair-cell">{row.ocean}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            The river experience is built around being closer to European destinations, while Celebrity's ocean ships provide more extensive onboard entertainment and resort-style amenities.
                        </p>
                    </div>
                </section>

                {/* HOW THEY ARE DIFFERENT (REUSED why-book card pattern, light) */}
                <section className="cbcs-why-book-section cbcs-why-book-light">
                    <div className="cbcs-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SIX DIFFERENTIATORS</span>
                            <h2 className="fcel-section-heading">How Celebrity River Cruises Are Different</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-why-book-grid">
                            {crivHowDifferent.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-why-book-card">
                                        <div className="cbcs-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CrivIconDot size={20} />}
                                        </div>
                                        <h4 className="cbcs-why-book-title">{item.title}</h4>
                                        <p className="cbcs-why-book-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* VS OTHER RIVER CRUISE LINES (REUSED audience pattern) */}
                <section className="cbcs-audience-section">
                    <div className="cbcs-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHOPPING AROUND?</span>
                            <h2 className="fcel-section-heading">Celebrity River Cruises vs. Other River Cruise Lines</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                When comparing Celebrity with other European river cruise companies, look beyond the headline cruise price. Compare:
                            </p>
                        </div>
                        <div className="cbcs-audience-column">
                            <ul className="cbcs-audience-list">
                                {crivCompareFactors.map((item, idx) => (
                                    <li key={idx} className="cbcs-audience-item">
                                        <CrivIconCheck size={18} className="cbcs-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="cbcs-itinerary-note" style={{ marginTop: '24px' }}>
                            The best river cruise depends on the traveler's priorities. Celebrity may appeal particularly to travelers who want a newer, contemporary river cruise experience and already appreciate the Celebrity brand.
                        </p>
                    </div>
                </section>

                {/* ARE THEY WORTH IT (REUSED tag grid pattern) */}
                <section className="cbcs-tag-section cbcs-bg-white">
                    <div className="cbcs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">INVESTMENT & VALUE</span>
                            <h2 className="fcel-section-heading">Are Celebrity River Cruises Worth It?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity River Cruises may be a strong choice for travelers who value:
                            </p>
                        </div>
                        <div className="cbcs-tag-grid">
                            {crivWorthValues.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-tag-card">
                                        <div className="cbcs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CrivIconDot size={20} />}
                                        </div>
                                        <span className="cbcs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            Because the river program is new, travelers should also compare Celebrity with established river cruise operators based on itinerary, ship style, service expectations and overall value.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE (REUSED glance table pattern — label + detail) */}
                <section className="cbcs-glance-section">
                    <div className="cbcs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Choose Celebrity River Cruises?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-glance-table">
                            {crivWhoShould.map((row, idx) => (
                                <div key={idx} className="cbcs-glance-row">
                                    <div className="cbcs-glance-feature">{row.feature}</div>
                                    <div className="cbcs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO MAY PREFER ANOTHER RIVER CRUISE (REUSED audience pattern, negative) */}
                <section className="cbcs-audience-section cbcs-bg-white">
                    <div className="cbcs-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORTH CONSIDERING</span>
                            <h2 className="fcel-section-heading">Who May Prefer Another River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Celebrity may not be the best match for travelers who:
                            </p>
                        </div>
                        <div className="cbcs-audience-column cbcs-audience-negative">
                            <ul className="cbcs-audience-list">
                                {crivMayPreferAnother.map((item, idx) => (
                                    <li key={idx} className="cbcs-audience-item">
                                        <CrivIconX size={18} className="cbcs-audience-check cbcs-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PROS & CONS (REUSED) */}
                <section className="cbcs-pros-section cbcs-bg-white">
                    <div className="cbcs-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label cbcs-eyebrow-white">PROS & CONS</span>
                            <h2 className="fcel-section-heading">Celebrity River Cruises Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="cbcs-comparison-board">
                            <div className="cbcs-pros-panel">
                                <h3 className="cbcs-panel-title cbcs-pros-title">
                                    <CrivIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="cbcs-panel-list">
                                    {crivPros.map((pro, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-pro-icon">
                                                <CrivIconCheck size={16} />
                                            </div>
                                            <div className="cbcs-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cbcs-cons-panel">
                                <h3 className="cbcs-panel-title cbcs-cons-title">
                                    <CrivIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="cbcs-panel-list">
                                    {crivCons.map((con, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-con-icon">
                                                <CrivIconX size={16} />
                                            </div>
                                            <div className="cbcs-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW TO CHOOSE (NEW — criv- numbered step guide) */}
                <section className="criv-steps-section">
                    <div className="criv-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING WALKTHROUGH</span>
                            <h2 className="fcel-section-heading">How to Choose the Best Celebrity River Cruise</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="criv-steps-list">
                            {crivSteps.map((step, idx) => (
                                <div key={idx} className="criv-step-item">
                                    <div className="criv-step-number">{idx + 1}</div>
                                    <div className="criv-step-body">
                                        <h4 className="criv-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="criv-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="criv-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="criv-step-tag">{tag}</span>
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
                <section id="celebrity-river-cruises-insight" className="medi-expert-editorial-section medi-growth-insight-section">
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
                                            'Rhine & Danube itineraries',
                                            'Suite & stateroom selection',
                                            'Concierge-level cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <CrivIconDot size={14} />
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
                                        <CrivIconAward size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        What Makes Celebrity <br className="medi-growth-title-break" />River Cruises Interesting?
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    Celebrity's move into river cruising is particularly interesting because it brings a contemporary design philosophy into a traditionally intimate travel category.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        The key attraction isn't simply that the ships are new. It is the combination of smaller-scale cruising, innovative accommodations, destination-focused dining and convenient access to European cities. For travelers who already know Celebrity from ocean cruising, the river product offers a completely different way to experience the brand.
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

                {/* WHY PLAN WITH TRIPS & SHIPS (REUSED why-book dark pattern, exact content match) */}
                <section className="cbcs-why-book-section cbcs-why-book-dark">
                    <div className="cbcs-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Plan Celebrity River Cruises With Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                A river cruise is only one part of a European vacation. The right itinerary, cabin, flights, transfers, hotels and pre- or post-cruise experiences can make a significant difference. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="cbcs-why-book-grid">
                            {crivWhyPlan.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-why-book-card">
                                        <div className="cbcs-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CrivIconDot size={20} />}
                                        </div>
                                        <h4 className="cbcs-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
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
                            {crivFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => crivToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {crivActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {crivActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED GUIDES (REUSED — 5 related content CTAs) */}
                <section className="cbcs-related-section">
                    <div className="cbcs-related-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">KEEP EXPLORING</span>
                            <h2 className="fcel-section-heading">Related Guides</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-related-grid">
                            {crivRelated.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <Link to={item.link} key={idx} className="cbcs-related-card">
                                        <div className="cbcs-related-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CrivIconDot size={20} />}
                                        </div>
                                        <h4 className="cbcs-related-title">{item.title}</h4>
                                        <p className="cbcs-related-desc">{item.desc}</p>
                                        <span className="cbcs-related-link">
                                            Read the Guide <CrivIconAward size={12} />
                                        </span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION (REUSED) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Plan Your Celebrity River Cruise</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Ready to experience Europe by river with Celebrity? Trips & Ships Luxury Travel can help you compare Celebrity River Cruises, select the right itinerary and accommodation, and coordinate the rest of your European vacation.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <CrivIconPhone size={18} />
                                Plan My Celebrity River Cruise
                            </Link>
                            <button className="fcel-btn-outline">
                                <CrivIconList size={18} />
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

export default CelebrityRiverCruises