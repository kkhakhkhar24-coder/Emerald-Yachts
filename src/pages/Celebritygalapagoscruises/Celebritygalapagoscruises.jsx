import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebritygalapagoscruises.css'
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
    Waves,
    Wifi,
    ConciergeBell,
    GlassWater,
    Landmark,
    Mountain,
    Calendar,
    Plane,
    FileSearch,
    Sliders,
    HeartHandshake,
    Users,
    MapPin,
    Globe,
    ShieldCheck,
    Coffee,
    Home,
    Star,
    Camera,
    Clock,
    ThumbsUp,
    Leaf,
    Droplet,
    Fish,
    Bird,
    Turtle,
    Footprints,
    Backpack,
    Umbrella,
    Glasses,
    Shirt,
    PocketKnife,
    Pill,
    Award,
    Binoculars
} from 'lucide-react'

const cgcIconMap = {
    Ship, Anchor, Compass, Wind, Sun, BedDouble, Sparkles, Waves, Wifi,
    ConciergeBell, GlassWater, Landmark, Mountain, Calendar, Plane, FileSearch,
    Sliders, HeartHandshake, Users, MapPin, Globe, ShieldCheck, Coffee, Home,
    Star, Camera, Clock, ThumbsUp, Leaf, Droplet, Fish, Bird, Turtle,
    Footprints, Backpack, Umbrella, Glasses, Shirt, PocketKnife, Pill, Award, Binoculars
}

/* ============================================================
   INLINE SVG ICONS
   ============================================================ */
function CgcIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CgcIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CgcIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CgcIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CgcIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CgcIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CgcIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CgcIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CgcIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CgcPlaceholder({ label, className = '' }) {
    return (
        <div className={`cgc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CgcIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityGalapagosCruises() {
    const [cgcActiveFaq, setCgcActiveFaq] = useState(null)
    const cgcToggleFaq = (index) => {
        setCgcActiveFaq(cgcActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const cgcGlance = [
        { feature: 'Ship', detail: 'Celebrity Flora' },
        { feature: 'Ship Type', detail: 'All-suite mega-yacht' },
        { feature: 'Guest Capacity', detail: '100 guests' },
        { feature: 'Main Destination', detail: 'Galápagos Islands' },
        { feature: 'Cruise Length', detail: '7 nights' },
        { feature: 'Longer Packages', detail: '10, 11 & 16 nights' },
        { feature: 'Cruise Style', detail: 'Luxury expedition' },
        { feature: 'Excursions', detail: 'Twice daily' },
        { feature: 'Guides', detail: 'Galápagos National Park-certified naturalists' },
        { feature: 'Meals', detail: 'Included' },
        { feature: 'Beverages', detail: 'Included' },
        { feature: 'Wi-Fi', detail: 'Included' },
        { feature: 'Gratuities', detail: 'Included' },
        { feature: 'Park Fees', detail: 'Included' },
        { feature: 'Tourist Card', detail: 'Included' },
        { feature: 'Snorkel Equipment', detail: 'Included' },
        { feature: 'Mini-Wetsuits', detail: 'Included' },
        { feature: 'Binoculars', detail: 'Included' },
        { feature: 'Walking Sticks', detail: 'Included' },
        { feature: 'Baltra Transfers', detail: 'Included' },
        { feature: 'Quito Extensions', detail: 'Available on longer packages' },
        { feature: 'Machu Picchu', detail: 'Available on selected longer packages' }
    ]

    const cgcWhyChoose = [
        { label: 'Walk on volcanic islands', icon: 'Mountain' },
        { label: 'Explore beaches and lava landscapes', icon: 'Sun' },
        { label: 'Snorkel in protected waters', icon: 'Waves' },
        { label: 'Observe wildlife in natural surroundings', icon: 'Bird' },
        { label: 'Learn from certified naturalists', icon: 'FileSearch' },
        { label: 'Explore in small groups', icon: 'Users' },
        { label: 'Participate in twice-daily excursions', icon: 'Compass' },
        { label: 'Return to an all-suite ship between expeditions', icon: 'BedDouble' }
    ]

    const cgcFloraHighlights = [
        { label: '100-guest capacity', icon: 'Users' },
        { label: 'All-suite accommodations', icon: 'BedDouble' },
        { label: 'Purpose-built for Galápagos cruising', icon: 'Ship' },
        { label: 'Naturalist-led expedition experiences', icon: 'Compass' },
        { label: 'Complimentary snorkeling equipment', icon: 'Waves' },
        { label: 'Mini-wetsuits', icon: 'Droplet' },
        { label: 'Binoculars', icon: 'Binoculars' },
        { label: 'Walking sticks', icon: 'Footprints' },
        { label: 'Unlimited Wi-Fi', icon: 'Wifi' },
        { label: 'Included beverages', icon: 'GlassWater' },
        { label: 'Locally sourced cuisine', icon: 'Leaf' },
        { label: 'Suite services', icon: 'ConciergeBell' },
        { label: 'Expedition-focused public spaces', icon: 'Home' }
    ]

    const cgcSuiteFeatures = [
        { label: 'Spacious living areas', icon: 'Home' },
        { label: 'Private veranda', icon: 'Wind' },
        { label: 'King-sized bed', icon: 'BedDouble' },
        { label: 'Premium linens', icon: 'Sparkles' },
        { label: 'Spa-style bathroom', icon: 'Droplet' },
        { label: 'Mini-bar', icon: 'GlassWater' },
        { label: 'Complimentary bottled water', icon: 'Droplet' },
        { label: 'Marine binoculars', icon: 'Binoculars' },
        { label: 'Backpack', icon: 'Backpack' },
        { label: 'Rain poncho', icon: 'Umbrella' },
        { label: 'Premium bath amenities', icon: 'Sparkles' },
        { label: 'Personal Suite Attendant', icon: 'ConciergeBell' }
    ]

    const cgcInnerLoopIslands = ['Santiago Island', 'Rábida Island', 'Isabela Island', 'Bartolomé Island', 'Santa Cruz Island']
    const cgcInnerLoopBestFor = [
        { label: 'Volcanic landscapes', icon: 'Mountain' },
        { label: 'Snorkeling', icon: 'Waves' },
        { label: 'Marine wildlife', icon: 'Fish' },
        { label: 'Sea turtles', icon: 'Turtle' },
        { label: 'Penguins', icon: 'Bird' },
        { label: 'Lava formations', icon: 'Sun' },
        { label: 'Varied island environments', icon: 'Globe' }
    ]

    const cgcOuterLoopIslands = ['Española', 'Floreana', 'Isabela', 'Fernandina', 'Santa Cruz']
    const cgcOuterLoopBestFor = [
        { label: 'Española wildlife', icon: 'Bird' },
        { label: 'Sea lions', icon: 'Fish' },
        { label: 'Marine iguanas', icon: 'Turtle' },
        { label: 'Boobies', icon: 'Bird' },
        { label: 'Volcanic landscapes', icon: 'Mountain' },
        { label: 'Snorkeling', icon: 'Waves' },
        { label: 'Remote island experiences', icon: 'Compass' }
    ]

    const cgcDestinations = [
        { name: 'Española Island', desc: 'Española is particularly known for wildlife encounters and locations such as Gardner Bay and Punta Suárez.', icon: 'Bird' },
        { name: 'Isabela Island', desc: 'Isabela provides volcanic scenery and several important visitor sites, including Elizabeth Bay, Tagus Cove, Moreno Point and Urvina Bay on selected itineraries.', icon: 'Mountain' },
        { name: 'Fernandina Island', desc: 'Fernandina is one of the distinctive destinations of the Galápagos and can be visited at Espinoza Point.', icon: 'Sun' },
        { name: 'Floreana Island', desc: 'Floreana combines wildlife, history and distinctive visitor sites such as Cormorant Point and Post Office Bay.', icon: 'MapPin' },
        { name: 'Santa Cruz Island', desc: 'Santa Cruz is another important island within the Galápagos cruise network and appears on selected Celebrity itineraries.', icon: 'Leaf' },
        { name: 'Bartolomé Island', desc: 'Bartolomé is featured on selected Inner Loop itineraries and is known for dramatic volcanic scenery and opportunities for wildlife viewing and snorkeling.', icon: 'Camera' }
    ]

    const cgcWildlife = [
        { label: 'Giant tortoises', icon: 'Turtle' },
        { label: 'Marine iguanas', icon: 'Turtle' },
        { label: 'Galápagos sea lions', icon: 'Fish' },
        { label: 'Galápagos penguins', icon: 'Bird' },
        { label: 'Blue-footed boobies', icon: 'Bird' },
        { label: 'Frigatebirds', icon: 'Bird' },
        { label: 'Sea turtles', icon: 'Turtle' },
        { label: 'Sally Lightfoot crabs', icon: 'Waves' },
        { label: 'Rays', icon: 'Fish' },
        { label: 'Tropical fish', icon: 'Fish' },
        { label: 'Galápagos hawks', icon: 'Bird' },
        { label: 'Land iguanas', icon: 'Turtle' }
    ]

    const cgcLearnAbout = [
        { label: 'Evolution', icon: 'FileSearch' },
        { label: 'Adaptation', icon: 'Leaf' },
        { label: 'Island ecosystems', icon: 'Globe' },
        { label: 'Endemic species', icon: 'Bird' },
        { label: 'Volcanic geology', icon: 'Mountain' },
        { label: 'Conservation', icon: 'ShieldCheck' },
        { label: 'Marine environments', icon: 'Waves' }
    ]

    const cgcActivities = [
        { label: 'Nature walks', icon: 'Footprints' },
        { label: 'Wet landings', icon: 'Waves' },
        { label: 'Dry landings', icon: 'Anchor' },
        { label: 'Snorkeling', icon: 'Waves' },
        { label: 'Wildlife observation', icon: 'Binoculars' },
        { label: 'Zodiac/tender exploration', icon: 'Ship' },
        { label: 'Scenic cruising', icon: 'Compass' },
        { label: 'Naturalist briefings', icon: 'FileSearch' },
        { label: 'Photography', icon: 'Camera' },
        { label: 'Beach exploration', icon: 'Sun' }
    ]

    const cgcEquipment = ['Snorkeling equipment', 'Mini-wetsuits', 'Binoculars', 'Walking sticks']

    const cgcNaturalistInfo = [
        { label: 'What to expect', icon: 'FileSearch' },
        { label: 'Activity levels', icon: 'ThumbsUp' },
        { label: 'Terrain', icon: 'Mountain' },
        { label: 'What to bring', icon: 'Backpack' },
        { label: 'What to wear', icon: 'Shirt' },
        { label: 'Landing conditions', icon: 'Waves' },
        { label: 'Excursion options', icon: 'Compass' }
    ]

    const cgcIncluded = [
        'Accommodation aboard the Galápagos vessel', 'All meals', 'Complimentary beverages', 'Select wines',
        'Sparkling wine', 'Spirits', 'Soft drinks', 'Bottled water', 'Coffee and tea', 'Complimentary room service',
        'Internet access', 'Naturalist programs', 'Snorkeling equipment', 'Mini-wetsuits', 'Binoculars',
        'Walking sticks', 'Crew gratuities', 'Naturalist gratuities', 'Galápagos National Park admission',
        'Galápagos Tourist Card', 'Baltra airport/ship transfers'
    ]

    const cgcNotIncluded = [
        'Air transportation', 'Unspecified ground transfers', 'Food and beverages obtained off the ship',
        'Onboard purchases', 'Spa services', 'Laundry', 'Telecommunications', 'Travel insurance',
        'Optional pre- and post-cruise packages'
    ]

    const cgcLongerPackages = [
        { label: 'Quito hotel stay', icon: 'Home' },
        { label: 'Quito transfers', icon: 'Ship' },
        { label: 'Quito guided tour', icon: 'Compass' },
        { label: 'Quito-to-Baltra air transportation', icon: 'Plane' },
        { label: 'Baltra transfers', icon: 'Ship' },
        { label: '7-night Galápagos cruise', icon: 'Anchor' },
        { label: 'Meals during included land portions', icon: 'Coffee' },
        { label: 'Gratuities', icon: 'HeartHandshake' }
    ]

    const cgcSeasons = [
        { feature: 'December–May', detail: 'Warmer conditions & snorkeling' },
        { feature: 'June–November', detail: 'Marine wildlife & cooler conditions' },
        { feature: 'Year-Round', detail: 'Wildlife, nature & expedition travel' }
    ]

    const cgcDecMay = ['Warm-weather travel', 'Snorkeling', 'Swimming', 'Green landscapes', 'Tropical conditions']
    const cgcJunNov = ['Marine wildlife', 'Cooler temperatures', 'Active ocean ecosystems', 'Wildlife photography']

    const cgcVsTraditional = [
        { galapagos: 'Expedition-focused', traditional: 'Resort-focused' },
        { galapagos: 'Wildlife & nature', traditional: 'Entertainment & leisure' },
        { galapagos: 'Twice-daily excursions', traditional: 'Excursions vary' },
        { galapagos: 'Naturalist guides', traditional: 'Standard destination tours' },
        { galapagos: 'Small groups', traditional: 'Larger guest capacity' },
        { galapagos: 'All-suite Celebrity Flora', traditional: 'Larger cruise ship' },
        { galapagos: 'Snorkeling & hiking', traditional: 'Pools, shows & activities' },
        { galapagos: 'Galápagos ecosystem', traditional: 'Multiple cruise destinations' }
    ]

    const cgcChooseCelebrity = ['All-suite accommodations', 'Premium Celebrity service', 'Included drinks', 'Included Wi-Fi', 'Twice-daily excursions', 'Certified naturalists', 'Included expedition equipment', 'A 100-guest ship', 'Optional Quito and Peru extensions']
    const cgcChooseAnother = ['Different Galápagos ships', 'Smaller expedition vessels', 'Different itinerary networks', 'More specialized expedition programming']

    const cgcWorthValues = [
        { label: 'Accommodations', icon: 'BedDouble' },
        { label: 'Meals', icon: 'Coffee' },
        { label: 'Drinks', icon: 'GlassWater' },
        { label: 'Wi-Fi', icon: 'Wifi' },
        { label: 'Excursions', icon: 'Compass' },
        { label: 'Naturalists', icon: 'FileSearch' },
        { label: 'Equipment', icon: 'Waves' },
        { label: 'Gratuities', icon: 'HeartHandshake' },
        { label: 'Park fees', icon: 'ShieldCheck' },
        { label: 'Tourist Card', icon: 'FileSearch' },
        { label: 'Baltra transfers', icon: 'Ship' }
    ]

    const cgcWhoShould = [
        { title: 'Wildlife Enthusiasts', desc: 'If seeing giant tortoises, marine iguanas, sea lions, penguins and unusual bird species is the main goal, the Galápagos is difficult to match.', icon: 'Bird' },
        { title: 'Luxury Expedition Travelers', desc: 'Celebrity Flora combines expedition exploration with all-suite accommodations and premium onboard amenities.', icon: 'Sparkles' },
        { title: 'First-Time Galápagos Travelers', desc: 'The included transfers, guides, equipment and excursions simplify the logistics.', icon: 'FileSearch' },
        { title: 'Couples', desc: 'The combination of wildlife exploration and an intimate all-suite ship works particularly well for couples.', icon: 'HeartHandshake' },
        { title: 'Active Travelers', desc: 'Hiking, snorkeling, tendering and wildlife walks provide plenty of opportunities to be active.', icon: 'Footprints' },
        { title: 'Multi-Generational Travelers', desc: 'The structured expedition format can work well for families traveling together, provided everyone is comfortable with the activity levels.', icon: 'Users' },
    ]

    const cgcMayPreferAnother = ['Want the smallest possible expedition vessel', 'Prefer highly specialized adventure expeditions', 'Want complete flexibility outside a structured itinerary', 'Are primarily seeking a traditional beach vacation', 'Prefer a lower-cost Galápagos experience', 'Want to spend most of the vacation in mainland South America']

    const cgcPros = ['Celebrity Flora is purpose-built for the Galápagos', 'All-suite ship', 'Approximately 100 guests', 'Twice-daily guided excursions', 'Certified naturalist guides', 'Meals included', 'Drinks included', 'Wi-Fi included', 'Gratuities included', 'Park fees included', 'Tourist Card included', 'Snorkel equipment included', 'Mini-wetsuits included', 'Binoculars included', 'Walking sticks included', 'Baltra transfers included', 'Quito extensions available', 'Machu Picchu extensions available on selected packages']

    const cgcCons = ['Galápagos travel is a premium-priced experience', 'Airfare is not included in the standard 7-night cruise', 'Travel insurance is not included', 'Optional pre/post packages cost extra', 'Expedition activities can be physically demanding', 'Itineraries and visitor sites can change', 'Wildlife sightings cannot be guaranteed']

    const cgcSteps = [
        { title: 'Choose Inner Loop or Outer Loop', desc: 'Compare the islands and visitor sites included in each itinerary.', tags: [] },
        { title: 'Decide How Long You Want to Travel', desc: 'Choose between:', tags: ['7-night Galápagos cruise', '10-night package', '11-night package', '16-night package'] },
        { title: 'Decide Whether You Want Quito', desc: 'Adding Quito provides additional time in mainland Ecuador before the island expedition.', tags: [] },
        { title: 'Consider Machu Picchu', desc: 'If this is a once-in-a-lifetime South American trip, consider a longer itinerary that combines the Galápagos with Machu Picchu.', tags: [] },
        { title: 'Consider Your Activity Level', desc: 'Galápagos excursions can involve:', tags: ['Walking', 'Uneven terrain', 'Wet landings', 'Snorkeling', 'Tendering', 'Swimming'] },
        { title: 'Choose Your Suite', desc: 'Because Celebrity Flora is all-suite, compare the suite categories, location and included amenities before booking.', tags: [] }
    ]

    const cgcPacking = [
        { label: 'Lightweight clothing', icon: 'Shirt' },
        { label: 'Comfortable walking shoes', icon: 'Footprints' },
        { label: 'Sandals or water shoes', icon: 'Waves' },
        { label: 'Sun protection', icon: 'Sun' },
        { label: 'Sunglasses', icon: 'Glasses' },
        { label: 'Hat', icon: 'Umbrella' },
        { label: 'Reusable water bottle', icon: 'Droplet' },
        { label: 'Camera', icon: 'Camera' },
        { label: 'Waterproof bag', icon: 'Backpack' },
        { label: 'Lightweight rain jacket', icon: 'Umbrella' },
        { label: 'Swimwear', icon: 'Waves' },
        { label: 'Personal medications', icon: 'Pill' },
        
    ]

    const cgcWhyPlan = [
        { title: 'Compare Celebrity Flora Itineraries', icon: 'FileSearch' },
        { title: 'Compare Inner and Outer Loop Routes', icon: 'Compass' },
        { title: 'Select the Right Suite', icon: 'BedDouble' },
        { title: 'Choose the Best Season', icon: 'Calendar' },
        { title: 'Compare 7-Night and Longer Packages', icon: 'Ship' },
        { title: 'Add Quito', icon: 'Landmark' },
        { title: 'Add Machu Picchu', icon: 'Mountain' },
        { title: 'Coordinate International Flights', icon: 'Plane' },
        { title: 'Arrange Transfers', icon: 'MapPin' },
        { title: 'Review Expedition Activity Levels', icon: 'ThumbsUp' },
        { title: 'Build a Larger Ecuador or South America Itinerary', icon: 'Globe' },
        { title: 'Compare Celebrity With Other Luxury Expedition Options', icon: 'Sliders' }
    ]

    const cgcFaqs = [
        { question: '1. What are Celebrity Galápagos Cruises?', answer: 'Celebrity Galápagos Cruises are luxury expedition-style cruises centered on Celebrity Flora, an all-suite 100-guest ship designed specifically for the Galápagos.' },
        { question: '2. What ship does Celebrity use in the Galápagos?', answer: "Celebrity's flagship Galápagos ship is Celebrity Flora, a purpose-built, all-suite mega-yacht designed for the islands." },
        { question: '3. How many guests does Celebrity Flora accommodate?', answer: 'Celebrity Flora accommodates approximately 100 guests.' },
        { question: '4. How long are Celebrity Galápagos Cruises?', answer: 'The core Galápagos cruise is 7 nights. Celebrity also offers longer 10-, 11- and 16-night vacation packages combining the cruise with mainland Ecuador and, on selected itineraries, Peru.' },
        { question: '5. What is included on Celebrity Galápagos Cruises?', answer: 'The 7-night cruise includes accommodations, meals, beverages, Wi-Fi, room service, naturalist programs, expedition equipment, gratuities, Galápagos National Park admission, Tourist Card fees and Baltra transfers.' },
        { question: '6. Are excursions included on Celebrity Galápagos Cruises?', answer: 'Yes. Celebrity includes twice-daily Galápagos National Park-certified naturalist-guided excursions.' },
        { question: '7. What wildlife can I see on a Celebrity Galápagos Cruise?', answer: 'Depending on the itinerary and conditions, travelers may see giant tortoises, marine iguanas, sea lions, Galápagos penguins, blue-footed boobies, frigatebirds, sea turtles and other endemic wildlife.' },
        { question: '8. What is the Celebrity Galápagos Inner Loop?', answer: 'The Inner Loop is a Celebrity Flora itinerary visiting a selection of central and western Galápagos destinations. A current itinerary includes Santiago, Rábida, Isabela, Bartolomé and Santa Cruz.' },
        { question: '9. What is the Celebrity Galápagos Outer Loop?', answer: 'The Outer Loop is an alternative itinerary featuring destinations such as Española, Floreana, Isabela, Fernandina and Santa Cruz.' },
        { question: '10. Does Celebrity include snorkeling equipment?', answer: 'Yes. Celebrity provides complimentary snorkeling equipment, mini-wetsuits, binoculars and walking sticks for the duration of the cruise.' },
        { question: '11. Are drinks included on Celebrity Galápagos Cruises?', answer: 'Yes. Celebrity includes beverages onboard, including select wines, sparkling wine, spirits, soft drinks, bottled water, coffee and tea.' },
        { question: '12. Is Wi-Fi included on Celebrity Flora?', answer: 'Yes. Complimentary internet access is included, and Celebrity promotes unlimited Wi-Fi as part of its Galápagos experience.' },
        { question: '13. Does Celebrity offer Galápagos and Machu Picchu packages?', answer: 'Yes. Selected 16-night packages combine the Galápagos with Machu Picchu and other South American experiences.' },
        { question: '14. Does Celebrity include Quito before the Galápagos cruise?', answer: "Celebrity's 10-, 11- and 16-night packages include a pre-cruise Quito stay, with hotel accommodation, transfers, a guided Quito tour and transportation to Baltra." },
        { question: '15. Are Celebrity Galápagos Cruises worth it?', answer: 'They can be an excellent choice for travelers who want an all-inclusive luxury expedition experience, with an all-suite ship, twice-daily naturalist-led excursions, wildlife encounters and many major expedition costs included.' }
    ]

    const cgcRelated = [
        { title: 'Celebrity Flora Ship Guide', desc: 'A closer look at Celebrity Flora — suites, public spaces, dining and the expedition equipment included on every sailing.', icon: 'Ship', link: '/celebrity-cruises/ships/celebrity-flora' },
        { title: 'Celebrity Ocean Cruises Overview', desc: 'Compare Caribbean, Mediterranean and European ocean itineraries across the Celebrity fleet.', icon: 'Globe', link: '/celebrity-cruises/' },
        { title: 'Galápagos Inner Loop vs. Outer Loop', desc: 'A side-by-side look at island stops, wildlife and best-for travelers for each Celebrity Flora itinerary.', icon: 'Compass', link: '/celebrity-cruises/galapagos/inner-vs-outer-loop' },
        { title: 'Quito & Machu Picchu Extensions Guide', desc: 'How to combine a Galápagos cruise with mainland Ecuador and Peru for a longer South American journey.', icon: 'Landmark', link: '/guides/quito-machu-picchu-extensions' },
        { title: 'Galápagos Packing & Planning Guide', desc: 'What to pack, when to go and how to prepare for a Galápagos expedition cruise.', icon: 'FileSearch', link: '/guides/galapagos-packing-planning' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const cgcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/galapagos/",
                "name": "Celebrity Galápagos Cruises: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/galapagos/",
                "description": "Explore Celebrity Galápagos Cruises aboard Celebrity Flora, including all-inclusive expedition features, wildlife, Inner and Outer Loop itineraries, excursions, suites and planning tips.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/celebrity-cruises/galapagos/#article" }
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/galapagos/#article",
                "headline": "Celebrity Galápagos Cruises: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/galapagos/",
                "description": "Complete guide to Celebrity Galápagos Cruises, including Celebrity Flora, all-inclusive expedition features, Inner and Outer Loop itineraries, wildlife, excursions, suites, Quito extensions and Machu Picchu packages.",
                "image": "https://www.tripsandships.com/images/celebrity-galapagos-cruises.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/galapagos/" }
            },
            {
                "@type": "Service",
                "name": "Celebrity Galápagos Cruise Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Expedition Cruise Consulting",
                "description": "Expert Celebrity Galápagos cruise planning services helping travelers compare Celebrity Flora itineraries, choose suites, select Inner or Outer Loop routes, add Quito or Machu Picchu extensions, and receive personalized cruise and South America travel planning."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Galápagos Cruises", "item": "https://www.tripsandships.com/celebrity-cruises/galapagos/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": cgcFaqs.map(f => ({
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
                <title>Celebrity Galápagos Cruises: Complete Guide</title>
                <meta name="title" content="Celebrity Galápagos Cruises | Celebrity Flora & Itineraries" />
                <meta
                    name="description"
                    content="Explore Celebrity Galápagos Cruises aboard Celebrity Flora, including all-inclusive expedition features, wildlife, Inner and Outer Loop itineraries, excursions, suites and planning tips."
                />
                <script type="application/ld+json">
                    {JSON.stringify(cgcSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="cgc-page-wrapper">

                {/* HERO SECTION */}
                <section className="cgc-hero-section">
                    <div className="cgc-hero-overlay"></div>
                    <div className="cgc-hero-content">
                        <div className="cgc-hero-tag">
                            <CgcIconSparkle size={16} />
                            <span>Celebrity Galápagos Cruises</span>
                        </div>
                        <h1 className="cgc-hero-title">Celebrity Galápagos Cruises: <br /> Complete Guide</h1>
                        <p className="cgc-hero-subtitle">
                            Celebrity Flora itineraries, all-inclusive expedition features, wildlife, and planning tips
                        </p>
                        <div className="cgc-hero-btn-row">
                            <Link to="/contact" className="cgc-btn-primary">
                                <CgcIconPhone size={18} />
                                Plan My Celebrity Galápagos Cruise
                            </Link>
                            <button className="cgc-btn-outline">
                                <CgcIconList size={18} />
                                Speak With a Luxury Expedition Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="cgc-intro-section">
                    <div className="cgc-intro-container">
                        <div className="cgc-intro-grid">
                            <div className="cgc-intro-copy">
                                <span className="cgc-eyebrow-label">EXPERIENCE THE GALÁPAGOS WITH CELEBRITY</span>
                                <h2 className="cgc-section-heading">Experience the Galápagos With Celebrity</h2>
                                <div className="cgc-heading-bar"></div>
                                <p className="cgc-lead-paragraph">
                                    Celebrity Galápagos Cruises offer an intimate expedition experience in one of the world's most extraordinary wildlife destinations.
                                </p>
                                <p className="cgc-lead-paragraph">
                                    The centerpiece of Celebrity's Galápagos program is Celebrity Flora, a 100-guest, all-suite mega-yacht purpose-built for the Galápagos Islands. The experience combines guided exploration with Galápagos National Park-certified naturalists, small-group excursions, wildlife encounters, snorkeling and comfortable suite accommodations.
                                </p>
                                <p className="cgc-lead-paragraph">
                                    Celebrity's current Galápagos program includes 7-night cruises, along with longer 10-, 11- and 16-night vacation packages that can combine the islands with Quito and, on selected journeys, Peru and Machu Picchu.
                                </p>
                            </div>
                            <div className="cgc-intro-image-frame">
                                <CgcPlaceholder label="Celebrity Galápagos Cruises" />
                                <div className="cgc-intro-badge-float">
                                    <CgcIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Celebrity Flora — 100 Guests</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="cgc-quick-answer-section">
                    <div className="cgc-quick-answer-container">
                        <div className="cgc-quick-answer-card">
                            <h3 className="cgc-quick-answer-title">What Are Celebrity Galápagos Cruises?</h3>
                            <p className="cgc-quick-answer-text">
                                Celebrity Galápagos Cruises are all-inclusive expedition-style vacations centered on Celebrity Flora, with 7-night Galápagos cruises, twice-daily naturalist-led excursions, wildlife encounters, meals, drinks, Wi-Fi, gratuities, park fees and expedition equipment included. Longer packages can add Quito and South American destinations such as Lima, Cusco and Machu Picchu.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="cgc-inline-cta-section">
                    <div className="cgc-inline-cta-container">
                        <span className="cgc-inline-cta-tag">Expert Planning</span>
                        <p className="cgc-inline-cta-text">Ready to experience the Galápagos with Celebrity?</p>
                        <div className="cgc-inline-cta-btn-row">
                            <Link to="/contact" className="cgc-btn-primary-alt">
                                <CgcIconPhone size={18} />
                                Plan My Celebrity Galápagos Cruise
                            </Link>
                            <Link to="/contact" className="cgc-btn-outline-alt">
                                <CgcIconList size={18} />
                                Speak With a Luxury Expedition Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="cgc-glance-section">
                    <div className="cgc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">PROGRAM OVERVIEW</span>
                            <h2 className="cgc-section-heading">Celebrity Galápagos Cruises at a Glance</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity describes the Galápagos experience as all-inclusive, with excursions, equipment, meals, drinks, Wi-Fi, gratuities and park-related fees included.
                            </p>
                        </div>
                        <div className="cgc-glance-table">
                            {cgcGlance.map((row, idx) => (
                                <div key={idx} className="cgc-glance-row">
                                    <div className="cgc-glance-feature">{row.feature}</div>
                                    <div className="cgc-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE CELEBRITY GALÁPAGOS CRUISES */}
                <section className="cgc-why-choose-section">
                    <div className="cgc-why-choose-container">
                        <div className="cgc-why-choose-split">
                            <div className="cgc-why-choose-left">
                                <span className="cgc-eyebrow-label">A DIFFERENT KIND OF CRUISE</span>
                                <h2 className="cgc-why-choose-title">Why Choose Celebrity Galápagos Cruises?</h2>
                                <p className="cgc-why-choose-desc">
                                    The Galápagos is different from a conventional cruise destination. The emphasis is on wildlife, nature, conservation and expedition exploration, rather than traditional cruise entertainment. Celebrity's Galápagos experience gives travelers opportunities to:
                                </p>
                                <div className="cgc-why-choose-footnote">
                                    <p className="cgc-why-choose-footnote-text">
                                        The Galápagos Islands are located on the equator approximately 800 kilometers west of mainland Ecuador.
                                    </p>
                                </div>
                            </div>
                            <div className="cgc-why-choose-right">
                                {cgcWhyChoose.map((item, idx) => {
                                    const IconComponent = cgcIconMap[item.icon];
                                    return (
                                        <div key={idx} className="cgc-why-item">
                                            <div className="cgc-why-item-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CgcIconDot size={18} />}
                                            </div>
                                            <span className="cgc-why-item-label">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY FLORA: THE SHIP */}
                <section className="flora-showcase-section">
                    <div className="flora-showcase-container">
                        <div className="flora-showcase-top">
                            <div className="flora-showcase-copy">
                                <span className="cgc-eyebrow-label">THE SHIP BEHIND THE EXPERIENCE</span>
                                <h2 className="flora-showcase-title">Celebrity Flora</h2>
                                <p className="flora-showcase-desc">
                                    Celebrity Flora is the signature ship for Celebrity's Galápagos program. The ship was designed specifically for the Galápagos environment and carries approximately 100 guests, creating a more intimate expedition atmosphere than a conventional ocean cruise. Celebrity describes Flora as an all-suite mega-yacht purpose-built for the Galápagos.
                                </p>
                            </div>
                            <div className="flora-showcase-image-wrapper">
                                <div className="cgc-badge-overlay">
                                    <CgcIconDot size={14} />
                                    <span>Celebrity Flora</span>
                                </div>
                                <CgcPlaceholder label="Celebrity Flora Mega-Yacht" />
                            </div>
                        </div>

                        <div className="flora-showcase-specs-container">
                            <h4 className="flora-showcase-specs-title">Expedition Highlights & Specifications</h4>
                            <div className="flora-showcase-grid">
                                {cgcFloraHighlights.map((item, idx) => {
                                    const IconComponent = cgcIconMap[item.icon];
                                    return (
                                        <div key={idx} className="flora-spec-card">
                                            <div className="flora-spec-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CgcIconCheck size={18} />}
                                            </div>
                                            <span className="flora-spec-label">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FLORA ACCOMMODATIONS */}
                <section className="flora-suites-section">
                    <div className="flora-suites-container">
                        <div className="flora-suites-top">
                            <div className="flora-suites-image-wrapper">
                                <div className="cgc-badge-overlay">
                                    <CgcIconSparkle size={14} />
                                    <span>Every Guest, A Suite</span>
                                </div>
                                <CgcPlaceholder label="Celebrity Flora Suite" />
                            </div>
                            <div className="flora-suites-copy">
                                <span className="cgc-eyebrow-label">STATEROOMS & SUITES</span>
                                <h2 className="flora-suites-title">Celebrity Flora Accommodations</h2>
                                <p className="flora-suites-desc">
                                    Every guest aboard Celebrity Flora stays in a suite. Celebrity's suite experience includes amenities designed to make the accommodation comfortable between shore excursions. Depending on the suite category, features can include:
                                </p>
                            </div>
                        </div>

                        <div className="flora-suites-grid-container">
                            <h4 className="flora-suites-grid-title">Premium Suite Amenities & Features</h4>
                            <div className="flora-suites-grid">
                                {cgcSuiteFeatures.map((item, idx) => {
                                    const IconComponent = cgcIconMap[item.icon];
                                    return (
                                        <div key={idx} className="flora-suite-card">
                                            <div className="flora-suite-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CgcIconCheck size={18} />}
                                            </div>
                                            <span className="flora-suite-label">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="flora-suites-footer-card">
                            <p className="flora-suites-footer-text">
                                The Royal Suite, for example, includes a private veranda, king-sized bed, spa tub, separate shower, in-suite filtered water station and full-suite automation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ITINERARIES INTRO */}
                <section className="cgc-worth-section cgc-bg-soft">
                    <div className="cgc-worth-container">
                        <span className="cgc-eyebrow-label">ROUTES</span>
                        <h2 className="cgc-section-heading">Celebrity Galápagos Itineraries</h2>
                        <div className="cgc-heading-bar cgc-bar-center"></div>
                        <p className="cgc-lead-paragraph">
                            Celebrity's Galápagos program is built around different island combinations rather than simply visiting a list of traditional cruise ports. Current itinerary options include Inner Loop and Outer Loop journeys, with specific islands and visitor sites varying by sailing.
                        </p>
                    </div>
                </section>

                {/* INNER LOOP */}
                <section className="flora-route-section flora-route-light">
                    <div className="flora-route-container">
                        <div className="flora-route-split">
                            <div className="flora-route-copy">
                                <span className="cgc-eyebrow-label">WHERE TO SAIL</span>
                                <h2 className="flora-route-title">Celebrity Galápagos Inner Loop</h2>
                                <p className="flora-route-desc">
                                    The Inner Loop itinerary explores a different combination of islands and visitor sites, with destinations such as:
                                </p>
                                <div className="flora-route-track">
                                    {cgcInnerLoopIslands.map((item, idx) => (
                                        <span key={idx} className="flora-route-pill">
                                            <MapPin size={14} />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <p className="flora-route-desc" style={{ marginTop: '18px' }}>
                                    A current 7-night Inner Loop itinerary includes Egas Port, Rábida Island, Elizabeth Bay, Tagus Cove, Sullivan Bay, Bartolomé and Las Bachas.
                                </p>
                            </div>
                            <div className="flora-route-image-wrapper">
                                <div className="cgc-badge-overlay">
                                    <CgcIconDot size={14} />
                                    <span>Inner Loop</span>
                                </div>
                                <CgcPlaceholder label="Galápagos Inner Loop" />
                            </div>
                        </div>

                        <div className="flora-route-best-container">
                            <h4 className="flora-route-best-title">Best For</h4>
                            <div className="flora-route-best-grid">
                                {cgcInnerLoopBestFor.map((item, idx) => {
                                    const IconComponent = cgcIconMap[item.icon];
                                    return (
                                        <div key={idx} className="flora-route-best-card">
                                            <div className="flora-route-best-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CgcIconCheck size={18} />}
                                            </div>
                                            <span className="flora-route-best-label">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUTER LOOP */}
                <section className="flora-route-section flora-route-dark">
                    <div className="flora-route-container">
                        <div className="flora-route-split flora-reverse">
                            <div className="flora-route-image-wrapper">
                                <div className="cgc-badge-overlay">
                                    <CgcIconDot size={14} />
                                    <span>Outer Loop</span>
                                </div>
                                <CgcPlaceholder label="Galápagos Outer Loop" />
                            </div>
                            <div className="flora-route-copy">
                                <span className="cgc-eyebrow-label">WHERE TO SAIL</span>
                                <h2 className="flora-route-title">Celebrity Galápagos Outer Loop</h2>
                                <p className="flora-route-desc">
                                    The Outer Loop offers a different wildlife and landscape combination. A current itinerary includes destinations such as:
                                </p>
                                <div className="flora-route-track">
                                    {cgcOuterLoopIslands.map((item, idx) => (
                                        <span key={idx} className="flora-route-pill">
                                            <MapPin size={14} />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <p className="flora-route-desc" style={{ marginTop: '18px' }}>
                                    Selected visitor sites include Gardner Bay, Punta Suárez, Cormorant Point, Post Office Bay, Moreno Point, Urvina Bay, Espinoza Point and Vicente Roca Point.
                                </p>
                            </div>
                        </div>

                        <div className="flora-route-best-container">
                            <h4 className="flora-route-best-title">Best For</h4>
                            <div className="flora-route-best-grid">
                                {cgcOuterLoopBestFor.map((item, idx) => {
                                    const IconComponent = cgcIconMap[item.icon];
                                    return (
                                        <div key={idx} className="flora-route-best-card">
                                            <div className="flora-route-best-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CgcIconCheck size={18} />}
                                            </div>
                                            <span className="flora-route-best-label">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="cgc-itinerary-section">
                    <div className="cgc-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">ISLANDS & VISITOR SITES</span>
                            <h2 className="cgc-section-heading">Celebrity Galápagos Destinations</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Galápagos program can include numerous islands and visitor sites.
                            </p>
                        </div>
                        <div className="cgc-destination-grid">
                            {cgcDestinations.map((item, idx) => {
                                const IconComponent = cgcIconMap[item.icon];
                                return (
                                    <div key={idx} className="cgc-destination-card">
                                        <div className="cgc-destination-icon">
                                            {IconComponent ? <IconComponent size={22} /> : <CgcIconDot size={22} />}
                                        </div>
                                        <h3 className="cgc-destination-name">{item.name}</h3>
                                        <p className="cgc-destination-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WILDLIFE */}
                <section className="cgc-wildlife-section">
                    <div className="cgc-wildlife-container">
                        <div className="cgc-wildlife-header">
                            <span className="cgc-eyebrow-label">WHAT YOU'LL SEE</span>
                            <h2 className="cgc-section-heading">Celebrity Galápagos Wildlife</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Wildlife is the central reason many travelers choose a Galápagos expedition. Depending on the itinerary and season, travelers may encounter:
                            </p>
                        </div>
                        <div className="cgc-wildlife-cloud">
                            {cgcWildlife.map((item, idx) => {
                                const IconComponent = cgcIconMap[item.icon];
                                return (
                                    <div key={idx} className="cgc-wildlife-pill">
                                        <div className="cgc-wildlife-icon-wrap">
                                            {IconComponent ? <IconComponent size={18} /> : <CgcIconDot size={18} />}
                                        </div>
                                        <span className="cgc-wildlife-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cgc-wildlife-footer-text">
                            Celebrity emphasizes close encounters with wildlife that has evolved in the isolated Galápagos environment.
                        </p>
                    </div>
                </section>

                {/* WHAT MAKES WILDLIFE DIFFERENT */}
                <section className="flora-diff-section">
                    <div className="flora-diff-container">
                        <div className="flora-diff-top">
                            <div className="flora-diff-copy">
                                <span className="cgc-eyebrow-label">RESPONSIBLE EXPLORATION</span>
                                <h2 className="flora-diff-title">What Makes Galápagos Wildlife Different?</h2>
                                <p className="flora-diff-desc">
                                    One of the defining characteristics of the Galápagos is the opportunity to observe animals in relatively natural settings. Celebrity's naturalist-led excursions are designed around responsible exploration and education. Travelers can learn about:
                                </p>
                            </div>
                            <div className="flora-diff-image-wrapper">
                                <div className="cgc-badge-overlay">
                                    <CgcIconDot size={14} />
                                    <span>Naturalist-Led Learning</span>
                                </div>
                                <CgcPlaceholder label="Galápagos Wildlife Encounters" />
                            </div>
                        </div>

                        <div className="flora-diff-grid-container">
                            <h4 className="flora-diff-grid-title">Educational Focus Areas</h4>
                            <div className="flora-diff-grid">
                                {cgcLearnAbout.map((item, idx) => {
                                    const IconComponent = cgcIconMap[item.icon];
                                    return (
                                        <div key={idx} className="flora-diff-card">
                                            <div className="flora-diff-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CgcIconCheck size={18} />}
                                            </div>
                                            <span className="flora-diff-label">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXCURSIONS */}
                <section className="flora-excursions-section">
                    <div className="flora-excursions-container">
                        <div className="flora-excursions-top">
                            <div className="flora-excursions-image-wrapper">
                                <div className="cgc-badge-overlay">
                                    <CgcIconDot size={14} />
                                    <span>Twice Daily</span>
                                </div>
                                <CgcPlaceholder label="Celebrity Galápagos Excursions" />
                            </div>
                            <div className="flora-excursions-copy">
                                <span className="cgc-eyebrow-label">GUIDED EXPLORATION</span>
                                <h2 className="flora-excursions-title">Celebrity Galápagos Excursions</h2>
                                <p className="flora-excursions-desc">
                                    Celebrity includes twice-daily guided excursions on its Galápagos cruises. Excursions are led by Galápagos National Park-certified naturalists and can involve hiking, snorkeling, tendering, wildlife observation and other expedition activities.
                                </p>
                            </div>
                        </div>

                        <div className="flora-excursions-grid-container">
                            <h4 className="flora-excursions-grid-title">Typical Expedition Activities</h4>
                            <div className="flora-excursions-grid">
                                {cgcActivities.map((item, idx) => {
                                    const IconComponent = cgcIconMap[item.icon];
                                    return (
                                        <div key={idx} className="flora-excursion-card">
                                            <div className="flora-excursion-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CgcIconCheck size={18} />}
                                            </div>
                                            <span className="flora-excursion-label">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="flora-excursions-equip-card">
                            <h4 className="flora-excursions-equip-title">Celebrity provides equipment including:</h4>
                            <div className="flora-excursions-equip-row">
                                {cgcEquipment.map((item, idx) => (
                                    <span key={idx} className="flora-excursions-equip-pill">
                                        <CgcIconCheck size={14} />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ARE EXCURSIONS INCLUDED */}
                <section className="cgc-quick-answer-section cgc-bg-soft">
                    <div className="cgc-quick-answer-container">
                        <div className="cgc-quick-answer-card">
                            <h3 className="cgc-quick-answer-title">Are Celebrity Galápagos Excursions Included?</h3>
                            <p className="cgc-quick-answer-text">
                                Yes. Celebrity's Galápagos program includes guided excursions, with twice-daily excursions promoted as part of the all-inclusive experience. Unlike many conventional cruises where excursions are optional add-ons, Galápagos exploration is the core of the Celebrity experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* NATURALISTS */}
                <section className="flora-naturalists-section">
                    <div className="flora-naturalists-container">
                        <div className="flora-naturalists-top">
                            <div className="flora-naturalists-copy">
                                <span className="cgc-eyebrow-label">CERTIFIED EXPERTS</span>
                                <h2 className="flora-naturalists-title">Celebrity Galápagos Naturalists</h2>
                                <p className="flora-naturalists-desc">
                                    Naturalists play an important role in the Celebrity Galápagos experience. Celebrity's excursions and onboard programs involve Galápagos National Park-certified naturalists, who provide information about wildlife, geology, ecosystems and conservation. Each evening, travelers can receive information about the next day's activities, including:
                                </p>
                            </div>
                            <div className="flora-naturalists-image-wrapper">
                                <div className="cgc-badge-overlay">
                                    <CgcIconDot size={14} />
                                    <span>National Park-Certified</span>
                                </div>
                                <CgcPlaceholder label="Galápagos Naturalist Guides" />
                            </div>
                        </div>

                        <div className="flora-naturalists-grid-container">
                            <h4 className="flora-naturalists-grid-title">Evening Briefings Cover:</h4>
                            <div className="flora-naturalists-grid">
                                {cgcNaturalistInfo.map((item, idx) => {
                                    const IconComponent = cgcIconMap[item.icon];
                                    return (
                                        <div key={idx} className="flora-naturalist-card">
                                            <div className="flora-naturalist-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <CgcIconCheck size={18} />}
                                            </div>
                                            <span className="flora-naturalist-label">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="cgc-inclusions-section">
                    <div className="cgc-inclusions-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">CRUISE FARE</span>
                            <h2 className="cgc-section-heading">Celebrity Galápagos Cruise Inclusions</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Galápagos cruises are designed as an all-inclusive experience. Included on 7-night Galápagos cruises:
                            </p>
                        </div>
                        <div className="cgc-inclusions-matrix">
                            {cgcIncluded.map((item, idx) => (
                                <div key={idx} className="cgc-inclusion-card">
                                    <div className="cgc-inclusion-check-box">
                                        <CgcIconCheck size={14} />
                                    </div>
                                    <span className="cgc-inclusion-label">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT'S NOT INCLUDED */}
                <section className="cgc-inclusions-section cgc-bg-white">
                    <div className="cgc-inclusions-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">GOOD TO KNOW</span>
                            <h2 className="cgc-section-heading">What's Not Included?</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity states that the following are generally not included in 7-night cruise fares:
                            </p>
                        </div>
                        <div className="cgc-inclusions-matrix">
                            {cgcNotIncluded.map((item, idx) => (
                                <div key={idx} className="cgc-exclusion-card">
                                    <div className="cgc-exclusion-x-box">
                                        <CgcIconX size={14} />
                                    </div>
                                    <span className="cgc-exclusion-label">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cgc-included-note">
                            This distinction is important when comparing the total cost of a Galápagos vacation.
                        </p>
                    </div>
                </section>

                {/* LONGER PACKAGES */}
                <section className="cgc-tag-section cgc-bg-soft">
                    <div className="cgc-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">EXTEND YOUR TRIP</span>
                            <h2 className="cgc-section-heading">Celebrity Galápagos 10-, 11- & 16-Night Packages</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity also offers longer Galápagos vacation packages. These can combine the 7-night Galápagos cruise with time in mainland Ecuador and, on selected itineraries, Peru. Celebrity's longer packages can include:
                            </p>
                        </div>
                        <div className="cgc-tag-grid">
                            {cgcLongerPackages.map((item, idx) => {
                                const IconComponent = cgcIconMap[item.icon];
                                return (
                                    <div key={idx} className="cgc-tag-card">
                                        <div className="cgc-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CgcIconDot size={20} />}
                                        </div>
                                        <span className="cgc-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* + QUITO */}
                <section className="cgc-feature-section">
                    <div className="cgc-feature-container">
                        <div className="cgc-feature-grid">
                            <div className="cgc-feature-copy-col">
                                <span className="cgc-eyebrow-label">MAINLAND ECUADOR</span>
                                <h2 className="cgc-feature-title" style={{ textAlign: 'left' }}>Celebrity Galápagos + Quito</h2>
                                <p className="cgc-lead-paragraph">
                                    A longer Galápagos vacation can begin with time in Quito. Celebrity's 10-, 11- and 16-night packages include a pre-cruise Quito stay, with hotel accommodation, transfers, meals during the applicable pre-land portion and a guided Quito tour. This can be particularly useful for international travelers who want to experience Ecuador beyond the islands.
                                </p>
                            </div>
                            <div className="cgc-feature-image-col">
                                <div className="cgc-badge-overlay">
                                    <CgcIconDot size={14} />
                                    <span>Quito, Ecuador</span>
                                </div>
                                <CgcPlaceholder label="Quito, Ecuador" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* + MACHU PICCHU */}
                <section className="cgc-feature-section cgc-dark-section">
                    <div className="cgc-feature-container">
                        <div className="cgc-feature-grid cgc-reverse">
                            <div className="cgc-feature-image-col">
                                <div className="cgc-badge-overlay">
                                    <CgcIconDot size={14} />
                                    <span>Peru</span>
                                </div>
                                <CgcPlaceholder label="Machu Picchu, Peru" />
                            </div>
                            <div className="cgc-feature-copy-col">
                                <span className="cgc-eyebrow-label">EXTEND TO PERU</span>
                                <h2 className="cgc-feature-title" style={{ textAlign: 'left' }}>Celebrity Galápagos + Machu Picchu</h2>
                                <p className="cgc-lead-paragraph">
                                    For travelers who want a larger South American journey, selected 16-night packages combine the Galápagos with Machu Picchu. A current Celebrity itinerary combines the Galápagos Inner Loop with Machu Picchu. This creates an itinerary combining:
                                </p>
                                <div className="cgc-route-line">
                                    <span className="cgc-route-stop">Quito</span>
                                    <span className="cgc-route-arrow">→</span>
                                    <span className="cgc-route-stop">Galápagos</span>
                                    <span className="cgc-route-arrow">→</span>
                                    <span className="cgc-route-stop">Peru</span>
                                    <span className="cgc-route-arrow">→</span>
                                    <span className="cgc-route-stop">Machu Picchu</span>
                                </div>
                                <p className="cgc-lead-paragraph" style={{ marginTop: '18px' }}>
                                    It can be an excellent option for travelers making the long journey to South America and wanting more than a standalone island cruise.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEST TIME */}
                <section className="cgc-choice-section">
                    <div className="cgc-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">WHEN TO GO</span>
                            <h2 className="cgc-section-heading">Best Time for a Celebrity Galápagos Cruise</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                There is no single best month for everyone. The Galápagos can be visited throughout the year, but conditions and wildlife activity vary by season.
                            </p>
                        </div>
                        <div className="cgc-choice-board">
                            <div className="cgc-choice-panel">
                                <h3 className="cgc-choice-title">
                                    <Sun size={22} />
                                    December to May
                                </h3>
                                <p className="cgc-lead-paragraph">This period is often associated with warmer conditions and generally calmer seas.</p>
                                <h4 className="cgc-mini-heading">Best For</h4>
                                <div className="cgc-choice-list">
                                    {cgcDecMay.map((item, idx) => (
                                        <div key={idx} className="cgc-choice-item">
                                            <div className="cgc-choice-icon-wrap">
                                                <CgcIconCheck size={16} />
                                            </div>
                                            <div className="cgc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cgc-choice-panel">
                                <h3 className="cgc-choice-title">
                                    <Waves size={22} />
                                    June to November
                                </h3>
                                <p className="cgc-lead-paragraph">This period brings cooler and drier conditions, with nutrient-rich waters that can support abundant marine life.</p>
                                <h4 className="cgc-mini-heading">Best For</h4>
                                <div className="cgc-choice-list">
                                    {cgcJunNov.map((item, idx) => (
                                        <div key={idx} className="cgc-choice-item">
                                            <div className="cgc-choice-icon-wrap">
                                                <CgcIconCheck size={16} />
                                            </div>
                                            <div className="cgc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEASONS GLANCE TABLE */}
                <section className="cgc-glance-section cgc-bg-white">
                    <div className="cgc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="cgc-section-heading">Celebrity Galápagos Cruise Seasons</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                        </div>
                        <div className="cgc-glance-table">
                            {cgcSeasons.map((row, idx) => (
                                <div key={idx} className="cgc-glance-row">
                                    <div className="cgc-glance-feature">{row.feature}</div>
                                    <div className="cgc-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cgc-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            The best departure ultimately depends on your priorities, preferred activities and specific itinerary.
                        </p>
                    </div>
                </section>

                {/* VS TRADITIONAL CRUISE */}
                <section className="cgc-compare-section cgc-dark-section">
                    <div className="cgc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">A DIFFERENT STYLE OF TRAVEL</span>
                            <h2 className="cgc-section-heading">Celebrity Galápagos vs. Traditional Cruise</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A Galápagos expedition is very different from a conventional Caribbean or Mediterranean cruise.
                            </p>
                        </div>
                        <div className="cgc-pair-table">
                            <div className="cgc-pair-row cgc-pair-header">
                                <div className="cgc-pair-cell">Celebrity Galápagos</div>
                                <div className="cgc-pair-cell">Traditional Ocean Cruise</div>
                            </div>
                            {cgcVsTraditional.map((row, idx) => (
                                <div key={idx} className="cgc-pair-row">
                                    <div className="cgc-pair-cell">{row.galapagos}</div>
                                    <div className="cgc-pair-cell">{row.traditional}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cgc-included-note">
                            If wildlife and exploration are your priorities, the Galápagos experience is fundamentally different from a typical ocean vacation.
                        </p>
                    </div>
                </section>

                {/* VS OTHER EXPEDITION CRUISES */}
                <section className="cgc-choice-section">
                    <div className="cgc-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">SHOPPING AROUND?</span>
                            <h2 className="cgc-section-heading">Celebrity Galápagos vs. Other Expedition Cruises</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Galápagos Cruises occupy a distinctive position between traditional luxury cruising and expedition travel.
                            </p>
                        </div>
                        <div className="cgc-choice-board">
                            <div className="cgc-choice-panel">
                                <h3 className="cgc-choice-title">
                                    <CgcIconCheck size={22} />
                                    Choose Celebrity if you want:
                                </h3>
                                <div className="cgc-choice-list">
                                    {cgcChooseCelebrity.map((item, idx) => (
                                        <div key={idx} className="cgc-choice-item">
                                            <div className="cgc-choice-icon-wrap">
                                                <CgcIconCheck size={16} />
                                            </div>
                                            <div className="cgc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cgc-choice-panel">
                                <h3 className="cgc-choice-title">
                                    <Compass size={22} />
                                    Consider another expedition operator if you want:
                                </h3>
                                <div className="cgc-choice-list">
                                    {cgcChooseAnother.map((item, idx) => (
                                        <div key={idx} className="cgc-choice-item">
                                            <div className="cgc-choice-icon-wrap">
                                                <CgcIconCheck size={16} />
                                            </div>
                                            <div className="cgc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ARE THEY WORTH IT */}
                <section className="cgc-worth-section">
                    <div className="cgc-worth-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">INVESTMENT & VALUE</span>
                            <h2 className="cgc-section-heading">Are Celebrity Galápagos Cruises Worth It?</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Galápagos Cruises can be particularly compelling for travelers who want to simplify the logistics of a complex wildlife-focused vacation. A significant portion of the experience is included:
                            </p>
                        </div>
                        <div className="cgc-worth-grid">
                            {cgcWorthValues.map((item, idx) => {
                                const IconComponent = cgcIconMap[item.icon];
                                return (
                                    <div key={idx} className="cgc-worth-card">
                                        <div className="cgc-worth-icon-wrap">
                                            {IconComponent ? <IconComponent size={18} /> : <CgcIconDot size={18} />}
                                        </div>
                                        <span className="cgc-worth-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cgc-worth-footer-text">
                            The value becomes even more compelling for travelers who would otherwise need to arrange separate guides, excursions, equipment and transfers throughout the islands.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="cgc-why-book-section cgc-why-book-light">
                    <div className="cgc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label-navy">WHO IS IT FOR?</span>
                            <h2 className="cgc-section-heading">Who Should Choose a Celebrity Galápagos Cruise?</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                        </div>
                        <div className="cgc-why-book-grid">
                            {cgcWhoShould.map((item, idx) => {
                                const IconComponent = cgcIconMap[item.icon];
                                return (
                                    <div key={idx} className="cgc-why-book-card">
                                        <div className="cgc-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CgcIconDot size={20} />}
                                        </div>
                                        <h4 className="cgc-why-book-title">{item.title}</h4>
                                        <p className="cgc-why-book-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WHO MAY PREFER ANOTHER */}
                <section className="cgc-audience-section">
                    <div className="cgc-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">WORTH CONSIDERING</span>
                            <h2 className="cgc-section-heading">Who May Prefer Another Galápagos Cruise?</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Celebrity may not be the best fit for travelers who:
                            </p>
                        </div>
                        <div className="cgc-audience-column cgc-audience-negative">
                            <ul className="cgc-audience-list">
                                {cgcMayPreferAnother.map((item, idx) => (
                                    <li key={idx} className="cgc-audience-item">
                                        <CgcIconX size={18} className="cgc-audience-check cgc-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="cgc-pros-section cgc-dark-section">
                    <div className="cgc-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="cgc-eyebrow-label cgc-eyebrow-white">PROS & CONS</span>
                            <h2 className="cgc-section-heading">Celebrity Galápagos Cruises Pros & Cons</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                        </div>
                        <div className="cgc-comparison-board">
                            <div className="cgc-pros-panel">
                                <h3 className="cgc-panel-title cgc-pros-title">
                                    <CgcIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="cgc-panel-list">
                                    {cgcPros.map((pro, idx) => (
                                        <div key={idx} className="cgc-list-item">
                                            <div className="cgc-item-icon-wrap cgc-pro-icon">
                                                <CgcIconCheck size={16} />
                                            </div>
                                            <div className="cgc-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cgc-cons-panel">
                                <h3 className="cgc-panel-title cgc-cons-title">
                                    <CgcIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="cgc-panel-list">
                                    {cgcCons.map((con, idx) => (
                                        <div key={idx} className="cgc-list-item">
                                            <div className="cgc-item-icon-wrap cgc-con-icon">
                                                <CgcIconX size={16} />
                                            </div>
                                            <div className="cgc-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW TO CHOOSE */}
                <section className="cgc-steps-section">
                    <div className="cgc-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">PLANNING WALKTHROUGH</span>
                            <h2 className="cgc-section-heading">How to Choose the Best Celebrity Galápagos Cruise</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                        </div>
                        <div className="cgc-steps-list">
                            {cgcSteps.map((step, idx) => (
                                <div key={idx} className="cgc-step-item">
                                    <div className="cgc-step-number">{idx + 1}</div>
                                    <div className="cgc-step-body">
                                        <h4 className="cgc-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="cgc-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="cgc-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="cgc-step-tag">{tag}</span>
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
                <section className="cgc-pack-section">
                    <div className="cgc-pack-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">PACKING LIST</span>
                            <h2 className="cgc-section-heading">What to Pack for a Celebrity Galápagos Cruise</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity supplies important expedition equipment, but travelers should still plan carefully. Recommended items:
                            </p>
                        </div>
                        <div className="cgc-pack-grid">
                            {cgcPacking.map((item, idx) => {
                                const IconComponent = cgcIconMap[item.icon];
                                return (
                                    <div key={idx} className="cgc-pack-card">
                                        <div className="cgc-pack-icon-wrap">
                                            {IconComponent ? <IconComponent size={24} /> : <CgcIconDot size={24} />}
                                        </div>
                                        <span className="cgc-pack-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cgc-pack-footer-text">
                            Celebrity provides equipment such as snorkeling gear, mini-wetsuits, binoculars and walking sticks.
                        </p>
                    </div>
                </section>

                {/* EXPERT INSIGHT */}
                <section id="celebrity-galapagos-cruises-insight" className="cgc-expert-editorial-section">
                    <div className="cgc-expert-editorial-container">
                        <div className="cgc-expert-editorial-card">

                            <div className="cgc-editorial-portrait-block">
                                <div className="cgc-editorial-image-container-relative" style={{ position: 'relative', marginBottom: '30px' }}>
                                    <div className="cgc-editorial-image-frame">
                                        <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" />
                                        <div className="cgc-editorial-gradient-layer"></div>
                                    </div>

                                    <div className="cgc-editorial-floating-stat">
                                        <div className="cgc-stat-tile">
                                            <span className="cgc-stat-number">40+</span>
                                            <span className="cgc-stat-label">Years Experience</span>
                                        </div>
                                        <div className="cgc-stat-divider"></div>
                                        <div className="cgc-stat-tile">
                                            <span className="cgc-stat-number">120+</span>
                                            <span className="cgc-stat-label">Countries Visited</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cgc-editorial-content-block">
                                <div className="cgc-editorial-header">
                                    <div className="cgc-editorial-eyebrow-container">
                                        <CgcIconAward size={18} className="cgc-editorial-icon-badge" />
                                        <span className="cgc-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="cgc-editorial-title">
                                        Why Choose Celebrity <br className="cgc-growth-title-break" />for the Galápagos?
                                    </h2>
                                    <div className="cgc-editorial-accent-bar"></div>
                                </div>

                                <p className="cgc-editorial-lead-para">
                                    The Galápagos is not simply another cruise destination. The real value is in the quality and organization of the expedition experience.
                                </p>

                                <div className="cgc-priorities-box">
                                    <p className="cgc-priorities-intro">
                                        Celebrity Flora combines an intimate all-suite environment with twice-daily naturalist-led exploration, while many of the practical details—equipment, drinks, Wi-Fi, gratuities, park fees and transfers—are already included. For travelers who want the wildlife experience without sacrificing the comfort associated with a luxury cruise, Celebrity Flora offers a particularly attractive balance.
                                    </p>
                                </div>

                                <div className="cgc-expertise-section-box">
                                    <span className="cgc-expertise-intro-label">Her expertise spans:</span>
                                    <div className="cgc-expertise-horizontal-strip">
                                        {[
                                            'Premium & luxury cruising',
                                            'Galápagos expedition planning',
                                            'Celebrity Flora itineraries',
                                            'Suite selection & accommodations',
                                            'South America itinerary building'
                                        ].map((item, idx) => (
                                            <div key={idx} className="cgc-expertise-pills-row">
                                                <div className="cgc-expertise-pill-icon-box">
                                                    <CgcIconDot size={14} />
                                                </div>
                                                <span className="cgc-expertise-pill-text">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="cgc-editorial-full-width-footer">
                                <p className="cgc-editorial-signature">
                                    — Angela Hughes<br />
                                    Founder &amp; CEO, Trips &amp; Ships Luxury Travel
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY PLAN WITH TRIPS & SHIPS */}
                <section className="cgc-why-book-section cgc-why-book-dark">
                    <div className="cgc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cgc-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="cgc-section-heading">Why Plan Your Celebrity Galápagos Cruise With Trips & Ships Luxury Travel?</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                            <p className="cgc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Planning the Galápagos requires more than selecting a cruise date. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="cgc-why-book-grid">
                            {cgcWhyPlan.map((item, idx) => {
                                const IconComponent = cgcIconMap[item.icon];
                                return (
                                    <div key={idx} className="cgc-why-book-card">
                                        <div className="cgc-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CgcIconDot size={20} />}
                                        </div>
                                        <h4 className="cgc-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cgc-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px', color: '#cbd5e1' }}>
                            A Galápagos journey can easily become a once-in-a-lifetime South American vacation when the cruise is planned as part of a larger itinerary.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="cgc-faq-section">
                    <div className="cgc-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="cgc-section-heading">Frequently Asked Questions</h2>
                            <div className="cgc-heading-bar cgc-bar-center"></div>
                        </div>
                        <div className="cgc-faq-list">
                            {cgcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="cgc-faq-item"
                                    onClick={() => cgcToggleFaq(index)}
                                >
                                    <div className="cgc-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="cgc-faq-toggle">
                                            {cgcActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {cgcActiveFaq === index && (
                                        <p className="cgc-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* FINAL CTA */}
                <section className="cgc-cta-section">
                    <div className="cgc-cta-bg-pattern"></div>
                    <div className="cgc-cta-inner">
                        <h2 className="cgc-cta-heading">Plan Your Celebrity Galápagos Cruise</h2>
                        <div className="cgc-cta-separator"></div>
                        <p className="cgc-cta-text">
                            Ready to experience the Galápagos with Celebrity? Trips & Ships Luxury Travel can help you compare Celebrity Flora itineraries, choose between Inner and Outer Loop routes, select the right suite, add Quito or Machu Picchu, and coordinate the complete South American journey.
                        </p>
                        <div className="cgc-cta-btn-row">
                            <Link to="/contact" className="cgc-btn-primary">
                                <CgcIconPhone size={18} />
                                Plan My Celebrity Galápagos Cruise
                            </Link>
                            <button className="cgc-btn-outline">
                                <CgcIconList size={18} />
                                Speak With a Luxury Expedition Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default CelebrityGalapagosCruises