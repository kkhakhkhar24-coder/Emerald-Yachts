import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebrityaquaclassvsconciergeclass.css'
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
    Footprints,
    DollarSign,
    Bell,
    Bath,
    Users2,
    ClipboardList
} from 'lucide-react'

const iconMap = {
    Ship, Anchor, Compass, Wine, UtensilsCrossed, Wind, Sun, BedDouble, Sparkles,
    Crown, DoorOpen, Waves, Wifi, Utensils, ConciergeBell, GlassWater, Music,
    Landmark, TreeDeciduous, Mountain, Calendar, Plane, FileSearch, BadgePercent,
    Sliders, HeartHandshake, Users, MapPin, Globe, ShieldCheck, Coffee, Home,
    Star, Castle, Building2, Sunrise, ChefHat, Leaf, Droplet, Camera, Clock, ThumbsUp,
    Footprints, DollarSign, Bell, Bath, Users2, ClipboardList
}

/* ============================================================
   INLINE SVG ICONS (no lucide-react dependency for these — plain inline)
   ============================================================ */
function CavIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CavIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CavIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CavIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CavIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CavIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CavIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CavIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CavIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CavPlaceholder({ label, className = '' }) {
    return (
        <div className={`cavc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CavIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityAquaClassVsConciergeClass() {
    const [cavActiveFaq, setCavActiveFaq] = useState(null)
    const cavToggleFaq = (index) => {
        setCavActiveFaq(cavActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const cavDependsOn = [
        'How much you value Blu', 'How often you use spa and wellness amenities', 'Cabin location',
        'Price difference', 'Dining preferences', 'Whether you spend significant time in your stateroom', 'Your cruise itinerary'
    ]

    const cavGlance = [
        { feature: 'Stateroom', aquaClass: 'Premium category', conciergeClass: 'Premium category' },
        { feature: 'Veranda', aquaClass: 'Available on applicable staterooms', conciergeClass: 'Available on applicable staterooms' },
        { feature: 'Blu Restaurant', aquaClass: 'Yes', conciergeClass: 'No' },
        { feature: 'Wellness Focus', aquaClass: 'Strong', conciergeClass: 'Moderate' },
        { feature: 'Spa-Oriented Amenities', aquaClass: 'Yes', conciergeClass: 'More limited' },
        { feature: 'Enhanced Service', aquaClass: 'Yes', conciergeClass: 'Yes' },
        { feature: 'Premium Location', aquaClass: 'Available', conciergeClass: 'Available' },
        { feature: 'Special Stateroom Amenities', aquaClass: 'Yes', conciergeClass: 'Yes' },
        { feature: 'Priority Services', aquaClass: 'Available benefits', conciergeClass: 'Available benefits' },
        { feature: 'Best For', aquaClass: 'Wellness & Blu dining', conciergeClass: 'Convenience & service' },
        { feature: 'Upgrade Cost', aquaClass: 'Higher', conciergeClass: 'Lower than AquaClass' },
        { feature: 'Main Reason to Choose', aquaClass: 'Blu + wellness', conciergeClass: 'Concierge benefits' }
    ]

    const cavWhatIsAqua = [
        { label: 'Access to Blu', icon: 'UtensilsCrossed' },
        { label: 'Wellness-focused amenities', icon: 'Leaf' },
        { label: 'Spa-oriented stateroom features', icon: 'Bath' },
        { label: 'Enhanced service', icon: 'Bell' },
        { label: 'Premium stateroom positioning', icon: 'Crown' }
    ]

    const cavWhatIsConcierge = [
        { label: 'Enhanced service', icon: 'Bell' },
        { label: 'Concierge assistance', icon: 'ConciergeBell' },
        { label: 'Premium stateroom amenities', icon: 'Sparkles' },
        { label: 'Priority-related services', icon: 'BadgePercent' },
        { label: 'Additional convenience during the cruise', icon: 'ShieldCheck' }
    ]

    const cavBluAppeal = [
        'A quieter dining environment', 'Smaller-scale dining', 'Wellness-oriented cuisine',
        'Specialty restaurant service', 'A consistent dining experience throughout the cruise'
    ]

    const cavSpaFactors = ['Ship', 'Sailing', 'Spa facilities', 'Current Celebrity policies', 'Stateroom category']

    const cavAquaAmenities = [
        { label: 'Enhanced bathroom amenities', icon: 'Bath' },
        { label: 'Shower features', icon: 'Droplet' },
        { label: 'Wellness-oriented bedding', icon: 'BedDouble' },
        { label: 'Spa-related touches', icon: 'Leaf' },
        { label: 'Aromatherapy-oriented amenities', icon: 'Sparkles' },
        { label: 'Enhanced room service options', icon: 'Bell' },
       
    ]

    const cavConciergeBenefits = [
        { label: 'Concierge assistance', icon: 'ConciergeBell' },
        { label: 'Enhanced stateroom amenities', icon: 'Sparkles' },
        { label: 'Priority-related services', icon: 'BadgePercent' },
        { label: 'Additional embarkation convenience', icon: 'ShieldCheck' },
        { label: 'Enhanced room service', icon: 'Bell' },
        { label: 'Premium stateroom location on applicable ships', icon: 'MapPin' }
    ]

    const cavCabinFactors = [
        { label: 'Deck', icon: 'Building2' },
        { label: 'Forward vs. midship vs. aft', icon: 'Compass' },
        { label: 'Proximity to elevators', icon: 'ClipboardList' },
        { label: 'Proximity to dining', icon: 'Utensils' },
        { label: 'Proximity to the spa', icon: 'Bath' },
        { label: 'Proximity to pools', icon: 'Waves' },
        { label: 'Noise sources', icon: 'Wind' },
        { label: 'Veranda configuration', icon: 'DoorOpen' },
        { label: 'Obstructed views', icon: 'Camera' }
    ]

    const cavDiningCompare = [
        { feature: 'Main Dining', aqua: 'Yes', concierge: 'Yes' },
        { feature: 'Blu', aqua: 'Yes', concierge: 'No' },
        { feature: 'Wellness-Focused Dining', aqua: 'Yes', concierge: 'Not an AquaClass benefit' },
        { feature: 'Specialty Restaurants', aqua: 'Available separately', concierge: 'Available separately' },
        { feature: 'Room Service', aqua: 'Available', concierge: 'Available' },
        { feature: 'Dining Experience', aqua: 'Wellness-oriented', concierge: 'Traditional premium cruise experience' }
    ]

    const cavWellnessCompare = [
        { feature: 'Wellness Focus', aqua: 'High', concierge: 'Moderate' },
        { feature: 'Spa-Oriented Amenities', aqua: 'Yes', concierge: 'Limited' },
        { feature: 'Blu', aqua: 'Yes', concierge: 'No' },
        { feature: 'Fitness Access', aqua: 'Available according to ship', concierge: 'Available according to ship' },
        { feature: 'Spa Services', aqua: 'Available separately', concierge: 'Available separately' },
        { feature: 'Thermal Suite', aqua: 'Ship-dependent', concierge: 'Ship-dependent' }
    ]

    const cavStateroomChecklist = [
        { label: 'Bedding', icon: 'BedDouble' },
        { label: 'Bathroom amenities', icon: 'Bath' },
        { label: 'Room service', icon: 'Bell' },
        { label: 'Welcome amenities', icon: 'GlassWater' },
        { label: 'Veranda', icon: 'DoorOpen' },
        { label: 'Stateroom size', icon: 'Sliders' },
        { label: 'Location', icon: 'MapPin' },
        { label: 'Included beverages or packages', icon: 'Wine' },
        { label: 'Other booking-specific benefits', icon: 'Sparkles' }
    ]

    const cavChooseAquaFood = ['Blu', 'A more intimate restaurant', 'Wellness-oriented menus', 'A dedicated dining environment']
    const cavChooseConciergeFood = ['You are satisfied with the main dining experience', 'You prefer to spend the difference on specialty restaurants', 'Blu is not important to you']

    const cavPriceFactors = ['Ship', 'Sailing date', 'Itinerary', 'Demand', 'Stateroom location', 'Cruise length', 'Season', 'Promotions', 'Availability']

    const cavAquaWorthIf = ['You enjoy Blu', 'You value wellness', 'You use spa-related amenities', 'You spend substantial time onboard', 'You prefer a quieter dining environment', 'You want an enhanced stateroom experience', 'The upgrade price is reasonable']
    const cavAquaNotWorthIf = ["You rarely dine onboard", 'You prefer excursions over ship amenities', "You don't care about Blu", "You won't use wellness amenities", 'You mainly want a good balcony cabin', 'The upgrade price is very high']

    const cavConciergeWorthValues = ['Concierge service', 'Enhanced amenities', 'Convenient location', 'Priority-related benefits', 'Additional service touches']

    const cavAquaCouples = ['Quiet dining', 'Wellness', 'Spa experiences', 'Relaxation', 'Premium accommodations']
    const cavConciergeCouples = ['Spend most of their time ashore', 'Want a premium cabin', 'Value service', 'Do not care about Blu', 'Prefer to spend their budget on excursions']

    const cavFamiliesValue = ['A larger stateroom', 'Better cabin location', 'Shore excursions', 'Specialty dining', 'Other onboard experiences']

    const cavSoloAqua = ['A more intimate dining environment', 'Wellness', 'Spa experiences', 'Relaxation']

    const cavMultiGenCompare = ['Cabin location', 'Price difference', 'Dining preferences', 'Wellness interests', 'Amount of time onboard']

    const cavAquaPros = [
        'Blu restaurant access', 'Wellness-focused experience', 'Enhanced stateroom amenities', 'Spa-oriented benefits',
        'Premium service', 'Attractive option for relaxation-focused cruises', 'Strong choice for couples', 'Good fit for travelers who value onboard dining'
    ]
    const cavAquaCons = [
        'Higher price', 'Spa access can be ship-dependent', 'Not every traveler will use wellness benefits',
        'Cabin location varies', 'Upgrade may not provide value on port-intensive itineraries'
    ]
    const cavConciergePros = [
        'Enhanced service', 'Concierge assistance', 'Premium stateroom category', 'Convenience-focused benefits',
        'Can cost less than AquaClass', 'Good choice for travelers who do not need Blu'
    ]
    const cavConciergeCons = [
        'No AquaClass access to Blu', 'Less wellness-focused', 'Some benefits may not justify the upgrade for every traveler', 'Exact services vary by ship'
    ]

    const cavDecisionTable = [
        { feature: 'Blu', detail: 'AquaClass' },
        { feature: 'Wellness', detail: 'AquaClass' },
        { feature: 'Spa-oriented amenities', detail: 'AquaClass' },
        { feature: 'Quiet dining', detail: 'AquaClass' },
        { feature: 'Concierge assistance', detail: 'Concierge Class' },
        { feature: 'Premium service', detail: 'Both' },
        { feature: 'Lower upgrade cost', detail: 'Concierge Class' },
        { feature: 'Excursions over onboard amenities', detail: 'Concierge Class' },
        { feature: 'Spending more time onboard', detail: 'AquaClass' },
        { feature: 'Simple premium cabin upgrade', detail: 'Concierge Class' }
    ]

    const cavCabinChecklist = ['Deck', 'Location', 'View', 'Veranda', 'Nearby venues', 'Elevator proximity', 'Noise', 'Distance from dining', 'Distance from spa']

    const cavSteps = [
        { title: 'Compare the Price Difference', desc: 'Start with the actual upgrade cost for your sailing.', tags: [] },
        { title: 'Ask Whether Blu Matters', desc: 'If you know you want Blu, AquaClass becomes much more attractive.', tags: [] },
        { title: 'Consider Your Itinerary', desc: 'A port-intensive itinerary may reduce the amount of time you spend using onboard amenities.', tags: [] },
        { title: 'Consider Your Wellness Habits', desc: 'If you regularly use spas, fitness facilities and wellness services, AquaClass may have more value.', tags: [] },
        { title: 'Compare Cabin Locations', desc: "Don't ignore the individual stateroom.", tags: [] },
        { title: 'Consider Your Dining Preferences', desc: 'Blu is one of the most important AquaClass-specific benefits.', tags: [] },
        { title: 'Compare the Upgrade Against Other Spending', desc: 'Ask whether the extra money would be better used for:', tags: ['A larger suite', 'Better cabin location', 'Shore excursions', 'Specialty dining', 'Pre-cruise hotel', 'Post-cruise stay'] }
    ]

    const cavExampleAqua = ['Enjoy dining', 'Want Blu', 'Like spa experiences', 'Spend time onboard', 'Prefer wellness amenities']
    const cavExampleConcierge = ['Spend most days ashore', 'Rarely use spa facilities', "Don't care about Blu", 'Mainly want a balcony', 'Prefer spending money on excursions']

    const cavFinalAqua = ['Blu dining', 'Wellness-focused amenities', 'Spa-oriented experiences', 'A more relaxation-focused cruise', 'Enhanced premium stateroom benefits']
    const cavFinalConcierge = ['Concierge-style service', 'Convenience', 'Premium stateroom amenities', 'A potentially lower upgrade cost', 'A good cabin without needing Blu']

    const cavWhyPlan = [
        { title: 'Compare AquaClass and Concierge Class', icon: 'Sliders' },
        { title: 'Review Actual Cabin Locations', icon: 'MapPin' },
        { title: 'Compare Blu Access', icon: 'UtensilsCrossed' },
        { title: 'Evaluate Wellness Benefits', icon: 'Leaf' },
        { title: 'Review Spa-Related Amenities', icon: 'Bath' },
        { title: 'Compare Upgrade Pricing', icon: 'DollarSign' },
        { title: 'Select the Best Stateroom', icon: 'BedDouble' },
        { title: 'Compare Celebrity Ships', icon: 'Ship' },
        { title: 'Evaluate Itineraries', icon: 'Compass' },
        { title: 'Determine Whether the Upgrade Is Worthwhile', icon: 'ClipboardList' },
        { title: 'Coordinate Pre- and Post-Cruise Stays', icon: 'Calendar' },
        { title: 'Build a Complete Luxury Cruise Vacation', icon: 'Globe' }
    ]

    const cavFaqs = [
        { question: '1. What is the difference between Celebrity AquaClass and Concierge Class?', answer: 'AquaClass is focused on wellness and includes access to Blu, while Concierge Class focuses more on enhanced service, convenience and premium stateroom amenities.' },
        { question: '2. Does AquaClass include Blu?', answer: "Yes. AquaClass guests have access to Blu, Celebrity's restaurant dedicated to AquaClass guests." },
        { question: '3. Does Concierge Class include Blu?', answer: 'No. Blu access is an AquaClass benefit and is not included simply because a traveler is booked in Concierge Class.' },
        { question: '4. Is AquaClass more expensive than Concierge Class?', answer: 'Generally, AquaClass is positioned as a higher premium stateroom category, but the actual price difference varies by ship, sailing, cabin location, season and demand.' },
        { question: '5. Does AquaClass include spa access?', answer: 'AquaClass includes wellness-oriented benefits, but access to specific spa facilities such as thermal suites can vary by ship and current Celebrity policies. Travelers should verify the exact inclusions for their sailing.' },
        { question: '6. Is AquaClass worth the upgrade?', answer: 'AquaClass can be worth the upgrade if you value Blu, wellness amenities, spa-related experiences and spending more time enjoying the ship.' },
        { question: '7. Is Concierge Class worth it?', answer: 'Concierge Class can be worthwhile for travelers who value enhanced service, convenience and premium stateroom benefits without specifically needing Blu or the AquaClass wellness experience.' },
        { question: '8. Which is better for couples: AquaClass or Concierge Class?', answer: 'AquaClass can be particularly attractive to couples who value wellness, relaxation and Blu dining. Concierge Class can be better for couples who prioritize cabin value and spend more time exploring ports.' },
        { question: '9. Which has better dining, AquaClass or Concierge Class?', answer: 'AquaClass has the advantage because it provides access to Blu. Concierge Class does not include AquaClass access to Blu.' },
        { question: '10. Does AquaClass have better cabin locations?', answer: 'Not necessarily. Cabin locations vary by ship. A specific Concierge Class cabin can be preferable to an AquaClass cabin depending on deck, noise, views and proximity to onboard venues.' },
        { question: '11. Does AquaClass include better amenities?', answer: 'AquaClass provides additional wellness-focused amenities compared with Concierge Class, while Concierge Class emphasizes service and convenience. Exact amenities can vary by ship.' },
        { question: '12. Is Concierge Class better than AquaClass for families?', answer: 'It can be, particularly if family members do not care about Blu or wellness amenities and would rather spend the additional budget on excursions or other vacation experiences.' },
        { question: '13. Which Celebrity cabin category is better for a port-intensive itinerary?', answer: "Concierge Class may provide better value if you expect to spend most of your time ashore and won't use AquaClass's wellness and dining benefits." },
        { question: '14. Can I upgrade from Concierge Class to AquaClass?', answer: 'Availability and upgrade options depend on the sailing. If AquaClass is available, travelers can compare the current price difference against the additional benefits.' },
        { question: '15. Should I choose AquaClass or Concierge Class?', answer: 'Choose AquaClass if Blu, wellness and spa-oriented amenities are important to you. Choose Concierge Class if you primarily want enhanced service and a premium stateroom without paying for AquaClass-specific benefits.' }
    ]

    const cavRelated = [
        { title: 'Celebrity Alaska Cruises Guide', desc: 'Glacier itineraries, Alaska ports, wildlife and Cruisetours aboard Celebrity.', icon: 'Mountain', link: '/celebrity-cruises/alaska/' },
        { title: 'Celebrity Caribbean Cruises Guide', desc: 'Eastern, Western and Southern Caribbean itineraries, ships and departure ports.', icon: 'Compass', link: '/celebrity-cruises/caribbean/' },
        { title: 'Celebrity Edge Cruise Ship Guide', desc: "Deck plans, staterooms, dining and The Retreat aboard Celebrity's Edge Series ship.", icon: 'Ship', link: '/celebrity-cruises/ships/celebrity-edge' },
        { title: 'Celebrity Beyond Cruise Ship Guide', desc: "Explore Celebrity's award-winning Edge Series ocean ship, deck plans and dining.", icon: 'Anchor', link: '/celebrity-cruises/ships/celebrity-beyond' },
        { title: 'Celebrity Cruises Overview', desc: 'Compare Caribbean, Mediterranean, European and Alaska itineraries across the Celebrity fleet.', icon: 'Globe', link: '/celebrity-cruises/' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const cavSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/",
                "name": "Celebrity AquaClass vs. Concierge Class: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/",
                "description": "Compare Celebrity AquaClass vs. Concierge Class, including Blu dining, spa amenities, cabin locations, stateroom benefits, priority services and whether the AquaClass upgrade is worth it.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/#article" }
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/#article",
                "headline": "Celebrity AquaClass vs. Concierge Class: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/",
                "description": "Compare Celebrity AquaClass vs. Concierge Class, including Blu dining, wellness amenities, spa-related benefits, cabin locations, enhanced service and whether the AquaClass upgrade is worth the extra cost.",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/" }
            },
            {
                "@type": "Service",
                "name": "Celebrity AquaClass & Concierge Class Cruise Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Celebrity Cruises planning services helping travelers compare AquaClass and Concierge Class, evaluate cabin locations and upgrade pricing, choose staterooms, and receive personalized cruise planning."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity AquaClass vs. Concierge Class", "item": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": cavFaqs.map(f => ({
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
                <title>Celebrity AquaClass vs. Concierge Class: Complete Guide</title>
                <meta name="title" content="Celebrity AquaClass vs. Concierge Class | Is It Worth It?" />
                <meta
                    name="description"
                    content="Compare Celebrity AquaClass vs. Concierge Class, including Blu dining, spa amenities, cabin locations, stateroom benefits, priority services and whether the AquaClass upgrade is worth it."
                />
                <script type="application/ld+json">
                    {JSON.stringify(cavSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="cavc-page-wrapper">

                {/* HERO SECTION */}
                <section className="cavc-hero-section">
                    <div className="cavc-hero-overlay"></div>
                    <div className="cavc-hero-content">
                        <div className="cavc-hero-tag">
                            <CavIconSparkle size={16} />
                            <span>Celebrity Stateroom Categories</span>
                        </div>
                        <h1 className="cavc-hero-title">Celebrity Aqua Class vs. Concierge Class Complete Guide</h1>
                        <p className="cavc-hero-subtitle">
                            Which Celebrity Stateroom Class Is Better?
                        </p>
                        <div className="cavc-hero-btn-row">
                            <Link to='/contact' className="cavc-btn-primary">
                                <CavIconPhone size={18} />
                                Compare AquaClass & Concierge Class
                            </Link>
                            <button className="cavc-btn-outline">
                                <CavIconList size={18} />
                                Speak With a Celebrity Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="cavc-intro-section">
                    <div className="cavc-intro-container">
                        <div className="cavc-intro-grid">
                            <div className="cavc-intro-copy">
                                <span className="cavc-eyebrow-label">WHICH CELEBRITY STATEROOM CLASS IS BETTER?</span>
                                <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class</h2>
                                <div className="cavc-heading-bar"></div>
                                <p className="cavc-lead-paragraph">
                                    Celebrity AquaClass and Concierge Class are both premium stateroom categories designed for travelers who want additional benefits beyond a standard veranda stateroom.
                                </p>
                                <p className="cavc-lead-paragraph">
                                    The biggest difference is what the upgrade is designed around. Concierge Class focuses primarily on enhanced service, stateroom amenities and convenience. AquaClass adds a stronger wellness and spa-oriented experience, along with access to Blu, Celebrity's specialty restaurant dedicated to AquaClass guests.
                                </p>
                                <p className="cavc-lead-paragraph">
                                    For many travelers, the question is not simply which category is "better," but whether the additional AquaClass cost provides benefits they will actually use.
                                </p>
                            </div>
                            <div className="cavc-intro-image-frame">
                                <CavPlaceholder label="AquaClass vs. Concierge Class" />
                                <div className="cavc-intro-badge-float">
                                    <CavIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Two Premium Stateroom Categories</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="cavc-quick-answer-section">
                    <div className="cavc-quick-answer-container">
                        <div className="cavc-quick-answer-card">
                            <h3 className="cavc-quick-answer-title">Is AquaClass Better Than Concierge Class?</h3>
                            <p className="cavc-quick-answer-text">
                                AquaClass is generally the better choice for travelers who value Blu dining, wellness-focused amenities and the spa-oriented Celebrity experience. Concierge Class can be the better value for travelers who mainly want enhanced stateroom services and amenities without paying for AquaClass-specific benefits. The right choice depends on: {cavDependsOn.join(', ')}.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="cavc-inline-cta-section">
                    <div className="cavc-inline-cta-container">
                        <span className="cavc-inline-cta-tag">Expert Guidance</span>
                        <p className="cavc-inline-cta-text">Not sure whether AquaClass is worth the upgrade?</p>
                        <div className="cavc-inline-cta-btn-row">
                            <Link to="/contact" className="cavc-btn-primary">
                                <CavIconPhone size={18} />
                                Compare AquaClass & Concierge Class
                            </Link>
                            <Link to="/contact" className="cavc-btn-outline1">
                                <CavIconList size={18} />
                                Speak With a Celebrity Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="cavc-glance-section">
                    <div className="cavc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">SIDE-BY-SIDE OVERVIEW</span>
                            <h2 className="cavc-section-heading">Celebrity Aqua Class vs. Concierge Class <br /> at a Glance</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>
                        <div className="cavc-compare-table-3col">
                            <div className="cavc-compare-row-3col cavc-compare-header">
                                <div className="cavc-compare-cell cavc-compare-label">Feature</div>
                                <div className="cavc-compare-cell">AquaClass</div>
                                <div className="cavc-compare-cell">Concierge Class</div>
                            </div>
                            {cavGlance.map((row, idx) => (
                                <div key={idx} className="cavc-compare-row-3col">
                                    <div className="cavc-compare-cell cavc-compare-label">{row.feature}</div>
                                    <div className="cavc-compare-cell">{row.aquaClass}</div>
                                    <div className="cavc-compare-cell">{row.conciergeClass}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cavc-included-note">
                            Exact amenities can vary by ship and stateroom, so travelers should confirm the inclusions for their specific sailing.
                        </p>
                    </div>
                </section>

                {/* WHAT IS AQUACLASS */}
                <section className="cavc-feature-section cavc-bg-white">
                    <div className="cavc-feature-container">
                        <div className="cavc-feature-grid">
                            <div className="cavc-feature-image-col">
                                <div className="cavc-badge-overlay">
                                    <CavIconSparkle size={14} />
                                    <span>AquaClass</span>
                                </div>
                                <CavPlaceholder label="Celebrity AquaClass" />
                            </div>
                            <div className="cavc-feature-copy-col">
                                <span className="cavc-eyebrow-label">THE CATEGORY</span>
                                <h2 className="cavc-feature-title">What Is Celebrity Aqua Class?</h2>
                                <p className="cavc-lead-paragraph">
                                    Celebrity AquaClass is a premium stateroom category centered around wellness, relaxation and enhanced dining. The category is particularly known for:
                                </p>
                                <div className="cavc-feature-list">
                                    {cavWhatIsAqua.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cavc-feature-item-card">
                                                <div className="cavc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CavIconCheck size={18} />}
                                                </div>
                                                <span className="cavc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cavc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    AquaClass is designed for travelers who want the cruise experience to feel more focused on relaxation and wellness.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT IS CONCIERGE CLASS */}
                <section className="cavc-feature-section cavc-dark-section">
                    <div className="cavc-feature-container">
                        <div className="cavc-feature-grid cavc-reverse">
                            <div className="cavc-feature-copy-col">
                                <span className="cavc-eyebrow-label">THE CATEGORY</span>
                                <h2 className="cavc-feature-title" style={{ textAlign: 'left' }}>What Is Celebrity Concierge Class?</h2>
                                <p className="cavc-lead-paragraph">
                                    Celebrity Concierge Class is a premium stateroom category designed around personalized service, convenience and enhanced accommodations. Concierge Class can be appealing to travelers who want additional touches compared with a standard stateroom but do not necessarily need AquaClass's wellness-oriented benefits. Typical benefits can include:
                                </p>
                                <div className="cavc-feature-list">
                                    {cavWhatIsConcierge.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cavc-feature-item-card">
                                                <div className="cavc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CavIconCheck size={18} />}
                                                </div>
                                                <span className="cavc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cavc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Exact benefits depend on the ship and sailing.
                                </p>
                            </div>
                            <div className="cavc-feature-image-col">
                                <div className="cavc-badge-overlay">
                                    <CavIconSparkle size={14} />
                                    <span>Concierge Class</span>
                                </div>
                                <CavPlaceholder label="Celebrity Concierge Class" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* AQUACLASS BENEFITS: BLU */}
                <section className="cavc-feature-section cavc-bg-white">
                    <div className="cavc-feature-container">
                        <div className="cavc-feature-grid">
                            <div className="cavc-feature-image-col">
                                <div className="cavc-badge-overlay">
                                    <CavIconDot size={14} />
                                    <span>Blu</span>
                                </div>
                                <CavPlaceholder label="Blu Restaurant" />
                            </div>
                            <div className="cavc-feature-copy-col">
                                <span className="cavc-eyebrow-label">AQUACLASS BENEFITS</span>
                                <h2 className="cavc-feature-title">Blu Restaurant Access</h2>
                                <p className="cavc-lead-paragraph">
                                    One of the biggest reasons travelers choose AquaClass is Blu. Blu is a specialty restaurant created for AquaClass guests and focuses on a more intimate dining experience. For travelers who enjoy dining as an important part of the cruise, Blu can be one of the most valuable AquaClass benefits.
                                </p>
                                <p className="cavc-lead-paragraph" style={{ marginTop: '16px' }}>
                                    Blu is Celebrity's AquaClass-exclusive restaurant. The restaurant provides AquaClass guests with an alternative dining environment that is more intimate than the main dining room. Blu is especially appealing to travelers who prefer:
                                </p>
                            </div>
                        </div>

                        <div className="cavc-blu-appeal-container" style={{ marginTop: '40px' }}>
                            <div className="cavc-feature-list">
                                {cavBluAppeal.map((item, idx) => (
                                    <div key={idx} className="cavc-feature-item-card">
                                        <div className="cavc-feature-item-icon">
                                            <CavIconCheck size={18} />
                                        </div>
                                        <span className="cavc-feature-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="cavc-lead-paragraph" style={{ marginTop: '24px' }}>
                                Availability and operating arrangements can vary by ship.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AQUACLASS DINING ACCESS & INCLUSIONS */}
                <section className="cavc-worth-section cavc-bg-soft">
                    <div className="cavc-worth-container">
                        <span className="cavc-eyebrow-label">DINING DETAILS</span>
                        <h2 className="cavc-section-heading">Aqua Class Dining <br /> Access & Inclusions</h2>
                        <div className="cavc-heading-bar cavc-bar-center"></div>
                        <p className="cavc-lead-paragraph">
                            Yes, AquaClass guests have access to Blu as part of the AquaClass experience. However, access does not necessarily mean every specialty dining item or premium beverage is included. Travelers should distinguish between AquaClass dining access and other separately priced onboard dining or beverage options.
                        </p>
                    </div>
                </section>

                {/* AQUACLASS SPA BENEFITS */}
                <section className="cavc-feature-section cavc-dark-section">
                    <div className="cavc-feature-container">
                        <div className="cavc-feature-grid cavc-reverse">
                            <div className="cavc-feature-copy-col">
                                <span className="cavc-eyebrow-label">AQUACLASS BENEFITS</span>
                                <h2 className="cavc-feature-title" style={{ textAlign: 'left' }}>Celebrity Aqua Class Spa Benefits</h2>
                                <p className="cavc-lead-paragraph">
                                    AquaClass has a stronger connection to Celebrity's wellness and spa experience than Concierge Class. Depending on the ship, AquaClass can provide access to wellness-oriented amenities and spa-related benefits. Travelers should check the specific ship because spa facilities and access policies can differ between Celebrity vessels. This is important when comparing the upgrade price.
                                </p>
                                <p className="cavc-lead-paragraph" style={{ marginTop: '16px' }}>
                                    Does AquaClass include spa access? This is one of the most important points to understand. AquaClass does not automatically mean unlimited access to every thermal suite or spa facility on every Celebrity ship. Some spa facilities may require an additional purchase or reservation. The exact benefits depend on:
                                </p>
                            </div>
                            <div className="cavc-feature-image-col">
                                <div className="cavc-badge-overlay">
                                    <CavIconDot size={14} />
                                    <span>Spa & Wellness</span>
                                </div>
                                <CavPlaceholder label="AquaClass Spa Benefits" />
                            </div>
                        </div>

                        <div className="cavc-spa-factors-container" style={{ marginTop: '40px' }}>
                            <div className="cavc-feature-list">
                                {cavSpaFactors.map((item, idx) => (
                                    <div key={idx} className="cavc-feature-item-card">
                                        <div className="cavc-feature-item-icon">
                                            <CavIconCheck size={18} />
                                        </div>
                                        <span className="cavc-feature-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="cavc-lead-paragraph" style={{ marginTop: '24px' }}>
                                Therefore, travelers should verify the exact spa access included with their sailing before paying a significant AquaClass premium.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AQUACLASS AMENITIES */}
                <section className="cavc-included-section cavc-bg-soft">
                    <div className="cavc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">STATEROOM AMENITIES</span>
                            <h2 className="cavc-section-heading">Celebrity Aqua Class Amenities</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                            <p className="cavc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                AquaClass staterooms can include wellness-focused amenities such as:
                            </p>
                        </div>
                        <div className="cavc-included-grid">
                            {cavAquaAmenities.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cavc-included-item">
                                        {IconComponent ? <IconComponent size={18} className="cavc-included-icon" /> : <CavIconCheck size={18} className="cavc-included-icon" />}
                                        <span>{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cavc-included-note">
                            Specific amenities can change by ship and stateroom type.
                        </p>
                    </div>
                </section>

                {/* CONCIERGE CLASS BENEFITS */}
                <section className="cavc-included-section cavc-bg-white">
                    <div className="cavc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">CONCIERGE CLASS BENEFITS</span>
                            <h2 className="cavc-section-heading">Celebrity Concierge Class Benefits</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                            <p className="cavc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Concierge Class focuses more heavily on service and convenience. Depending on the ship and sailing, Concierge Class can provide benefits such as:
                            </p>
                        </div>
                        <div className="cavc-included-grid">
                            {cavConciergeBenefits.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cavc-included-item">
                                        {IconComponent ? <IconComponent size={18} className="cavc-included-icon" /> : <CavIconCheck size={18} className="cavc-included-icon" />}
                                        <span>{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cavc-included-note">
                            For travelers who don't care about wellness amenities, Concierge Class can provide a more practical upgrade.
                        </p>
                    </div>
                </section>

                {/* CABIN LOCATIONS */}
                <section className="cavc-feature-section cavc-bg-soft">
                    <div className="cavc-feature-container">
                        <div className="cavc-feature-grid cavc-reverse">
                            <div className="cavc-feature-copy-col">
                                <span className="cavc-eyebrow-label">CABIN LOCATION</span>
                                <h2 className="cavc-feature-title" style={{ textAlign: 'left' }}>Aqua Class vs. Concierge Class Cabin Locations</h2>
                                <p className="cavc-lead-paragraph">
                                    Cabin location is another important difference to consider. Both categories can offer attractive locations, but the exact placement depends on the Celebrity ship. When comparing two specific staterooms, look at:
                                </p>
                            </div>
                            <div className="cavc-feature-image-col">
                                <div className="cavc-badge-overlay">
                                    <CavIconDot size={14} />
                                    <span>Cabin Location</span>
                                </div>
                                <CavPlaceholder label="Cabin Location Comparison" />
                            </div>
                        </div>

                        <div className="cavc-cabin-factors-container" style={{ marginTop: '40px' }}>
                            <div className="cavc-feature-list">
                                {cavCabinFactors.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <div key={idx} className="cavc-feature-item-card">
                                            <div className="cavc-feature-item-icon">
                                                {IconComponent ? <IconComponent size={18} /> : <CavIconCheck size={18} />}
                                            </div>
                                            <span className="cavc-feature-item-text">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className="cavc-lead-paragraph" style={{ marginTop: '24px' }}>
                                A more expensive category does not automatically mean a better cabin location. Is AquaClass always in a better location? No. AquaClass may have attractive locations on a particular ship, but location varies. A Concierge Class stateroom in a quieter, centrally located area can sometimes be preferable to an AquaClass cabin farther forward or in another location that does not suit your preferences. This is why the individual cabin number matters almost as much as the category.
                            </p>
                        </div>
                    </div>
                </section>

                {/* DINING COMPARISON */}
                <section className="cavc-compare-section cavc-dark-section">
                    <div className="cavc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">DINING</span>
                            <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class: Dining</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                            <p className="cavc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Dining is one of the clearest differences.
                            </p>
                        </div>
                        <div className="cavc-compare-table-3col">
                            <div className="cavc-compare-row-3col cavc-compare-header">
                                <div className="cavc-compare-cell cavc-compare-label">Dining Feature</div>
                                <div className="cavc-compare-cell">AquaClass</div>
                                <div className="cavc-compare-cell">Concierge Class</div>
                            </div>
                            {cavDiningCompare.map((row, idx) => (
                                <div key={idx} className="cavc-compare-row-3col">
                                    <div className="cavc-compare-cell cavc-compare-label">{row.feature}</div>
                                    <div className="cavc-compare-cell">{row.aqua}</div>
                                    <div className="cavc-compare-cell">{row.concierge}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cavc-included-note">
                            If Blu is important to you, AquaClass has a major advantage.
                        </p>
                    </div>
                </section>

                {/* WELLNESS COMPARISON */}
                <section className="cavc-compare-section">
                    <div className="cavc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">WELLNESS</span>
                            <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class: Wellness</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>
                        <div className="cavc-compare-table-3col">
                            <div className="cavc-compare-row-3col cavc-compare-header">
                                <div className="cavc-compare-cell cavc-compare-label">Wellness Feature</div>
                                <div className="cavc-compare-cell">Aqua Class</div>
                                <div className="cavc-compare-cell">Concierge Class</div>
                            </div>
                            {cavWellnessCompare.map((row, idx) => (
                                <div key={idx} className="cavc-compare-row-3col">
                                    <div className="cavc-compare-cell cavc-compare-label">{row.feature}</div>
                                    <div className="cavc-compare-cell">{row.aqua}</div>
                                    <div className="cavc-compare-cell">{row.concierge}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cavc-included-note">
                            AquaClass is the stronger option for travelers who want their cruise to have a wellness component.
                        </p>
                    </div>
                </section>

                {/* SERVICE */}
                <section className="cavc-worth-section cavc-bg-soft">
                    <div className="cavc-worth-container">
                        <span className="cavc-eyebrow-label">SERVICE</span>
                        <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class: Service</h2>
                        <div className="cavc-heading-bar cavc-bar-center"></div>
                        <p className="cavc-lead-paragraph">
                            Both categories are positioned above standard accommodations. Concierge Class places greater emphasis on concierge-style service and convenience, while AquaClass combines premium service with wellness and Blu dining. If your priority is simply better service, Concierge Class may be enough. If you want service plus wellness-focused benefits, AquaClass may provide more value.
                        </p>
                    </div>
                </section>

                {/* STATEROOM AMENITIES CHECKLIST */}
                <section className="cavc-included-section cavc-bg-white">
                    <div className="cavc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">WHAT TO COMPARE</span>
                            <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class: <br /> Stateroom Amenities</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                            <p className="cavc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Both categories can include enhanced stateroom amenities. The exact package can differ by Celebrity ship. When comparing your options, check:
                            </p>
                        </div>
                        <div className="cavc-included-grid">
                            {cavStateroomChecklist.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cavc-included-item">
                                        {IconComponent ? <IconComponent size={18} className="cavc-included-icon" /> : <CavIconCheck size={18} className="cavc-included-icon" />}
                                        <span>{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WHICH HAS BETTER FOOD */}
                <section className="cavc-compare-section cavc-dark-section">
                    <div className="cavc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">DINING PREFERENCE</span>
                            <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class: <br /> Which Has Better Food?</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                            <p className="cavc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                This depends on what you mean by "better."
                            </p>
                        </div>
                        <div className="cavc-choice-board cavc-choice-board-inline">
                            <div className="cavc-choice-panel">
                                <h3 className="cavc-choice-title">
                                    <CavIconCheck size={22} />
                                    Choose AquaClass if you prefer:
                                </h3>
                                <div className="cavc-choice-list">
                                    {cavChooseAquaFood.map((item, idx) => (
                                        <div key={idx} className="cavc-choice-item">
                                            <div className="cavc-choice-icon-wrap">
                                                <CavIconCheck size={16} />
                                            </div>
                                            <div className="cavc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cavc-choice-panel">
                                <h3 className="cavc-choice-title">
                                    <CavIconCheck size={22} />
                                    Choose Concierge Class if:
                                </h3>
                                <div className="cavc-choice-list">
                                    {cavChooseConciergeFood.map((item, idx) => (
                                        <div key={idx} className="cavc-choice-item">
                                            <div className="cavc-choice-icon-wrap">
                                                <CavIconCheck size={16} />
                                            </div>
                                            <div className="cavc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="cavc-included-note">
                            AquaClass's biggest dining advantage is access to Blu, rather than simply having a different stateroom.
                        </p>
                    </div>
                </section>

                {/* WHICH HAS BETTER SERVICE */}
                <section className="cavc-worth-section cavc-bg-white">
                    <div className="cavc-worth-container">
                        <span className="cavc-eyebrow-label">SERVICE PREFERENCE</span>
                        <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class: <br /> Which Has Better Service?</h2>
                        <div className="cavc-heading-bar cavc-bar-center"></div>
                        <p className="cavc-lead-paragraph">
                            Both are premium categories, but the emphasis is different. Concierge Class is more focused on convenience and concierge-style service. AquaClass combines premium service with wellness-oriented amenities and Blu access. If service alone is your priority, Concierge Class can be sufficient.
                        </p>
                    </div>
                </section>

                {/* PRICE */}
                <section className="cavc-included-section cavc-bg-soft">
                    <div className="cavc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">UPGRADE COST</span>
                            <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class Price</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                            <p className="cavc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                The price difference between AquaClass and Concierge Class varies significantly. Factors include:
                            </p>
                        </div>
                        <div className="cavc-included-grid" style={{ margin: '0 auto', maxWidth: '900px' }}>
                            {cavPriceFactors.map((item, idx) => (
                                <div key={idx} className="cavc-included-item">
                                    <CavIconCheck size={18} className="cavc-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cavc-included-note">
                            There is no universal AquaClass upgrade price. The key question is: how much more are you paying for AquaClass, and will you actually use its benefits?
                        </p>
                    </div>
                </section>

                {/* IS AQUACLASS WORTH IT */}
                <section className="cavc-compare-section cavc-dark-section">
                    <div className="cavc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">VALUE CHECK</span>
                            <h2 className="cavc-section-heading">Is Aqua Class Worth the Extra Cost?</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>
                        <div className="cavc-choice-board cavc-choice-board-inline">
                            <div className="cavc-choice-panel">
                                <h3 className="cavc-choice-title">
                                    <CavIconCheck size={22} />
                                    AquaClass can be worth it if:
                                </h3>
                                <div className="cavc-choice-list">
                                    {cavAquaWorthIf.map((item, idx) => (
                                        <div key={idx} className="cavc-choice-item">
                                            <div className="cavc-choice-icon-wrap">
                                                <CavIconCheck size={16} />
                                            </div>
                                            <div className="cavc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cavc-choice-panel">
                                <h3 className="cavc-choice-title">
                                    <CavIconX size={22} />
                                    AquaClass may not be worth it if:
                                </h3>
                                <div className="cavc-choice-list">
                                    {cavAquaNotWorthIf.map((item, idx) => (
                                        <div key={idx} className="cavc-choice-item">
                                            <div className="cavc-choice-icon-wrap">
                                                <CavIconX size={16} />
                                            </div>
                                            <div className="cavc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IS CONCIERGE CLASS WORTH IT */}
                <section className="cavc-worth-section cavc-bg-soft">
                    <div className="cavc-worth-container">
                        <span className="cavc-eyebrow-label">VALUE CHECK</span>
                        <h2 className="cavc-section-heading">Is Concierge Class Worth <br />the Extra Cost?</h2>
                        <div className="cavc-heading-bar cavc-bar-center"></div>
                        <p className="cavc-lead-paragraph">
                            Concierge Class can be worthwhile if the price difference from a standard veranda stateroom is modest and you value: {cavConciergeWorthValues.join(', ')}. If the price difference becomes significant, compare the actual benefits against simply booking a standard veranda stateroom.
                        </p>
                    </div>
                </section>

                {/* BETTER FOR COUPLES */}
                <section className="cavc-compare-section">
                    <div className="cavc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">TRAVEL STYLE</span>
                            <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class: <br /> Which Is Better for Couples?</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>
                        <div className="cavc-choice-board cavc-choice-board-inline">
                            <div className="cavc-choice-panel">
                                <h3 className="cavc-choice-title">
                                    <CavIconCheck size={22} />
                                    AquaClass
                                </h3>
                                <p className="cavc-choice-lead" style={{ fontSize: '16px', fontWeight: '600', color: 'var(--cavc-navy-light)', marginBottom: '16px' }}>
                                    AquaClass can be particularly attractive to couples who want:
                                </p>
                                <div className="cavc-choice-list">
                                    {cavAquaCouples.map((item, idx) => (
                                        <div key={idx} className="cavc-choice-item">
                                            <div className="cavc-choice-icon-wrap">
                                                <CavIconCheck size={16} />
                                            </div>
                                            <div className="cavc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cavc-choice-panel">
                                <h3 className="cavc-choice-title">
                                    <CavIconCheck size={22} />
                                    Concierge Class
                                </h3>
                                <p className="cavc-choice-lead" style={{ fontSize: '16px', fontWeight: '600', color: 'var(--cavc-navy-light)', marginBottom: '16px' }}>
                                    Concierge Class can be better for couples who:
                                </p>
                                <div className="cavc-choice-list">
                                    {cavConciergeCouples.map((item, idx) => (
                                        <div key={idx} className="cavc-choice-item">
                                            <div className="cavc-choice-icon-wrap">
                                                <CavIconCheck size={16} />
                                            </div>
                                            <div className="cavc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOR FAMILIES */}
                <section className="cavc-audience-section">
                    <div className="cavc-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">FAMILY TRAVEL</span>
                            <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class <br /> for Families</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                            <p className="cavc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Families should think carefully before automatically choosing AquaClass. If everyone in the family values Blu and wellness amenities, AquaClass can make sense. However, families who spend most of their time exploring ports may get more value from:
                            </p>
                        </div>
                        <div className="cavc-audience-column cavc-audience-negative">
                            <ul className="cavc-audience-list">
                                {cavFamiliesValue.map((item, idx) => (
                                    <li key={idx} className="cavc-audience-item">
                                        <CavIconCheck size={18} className="cavc-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SOLO TRAVELERS */}
                <section className="cavc-worth-section cavc-bg-white">
                    <div className="cavc-worth-container">
                        <span className="cavc-eyebrow-label">SOLO TRAVEL</span>
                        <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class for Solo Travelers</h2>
                        <div className="cavc-heading-bar cavc-bar-center"></div>
                        <p className="cavc-lead-paragraph">
                             Solo travelers may appreciate AquaClass when they value: {cavSoloAqua.join(', ')}. Concierge Class may make more sense for travelers who primarily want a premium room and enhanced service.
                        </p>
                    </div>
                </section>

                {/* MULTI-GENERATIONAL */}
                <section className="cavc-feature-section cavc-bg-soft">
                    <div className="cavc-feature-container">
                        <div className="cavc-feature-grid">
                            <div className="cavc-feature-image-col">
                                <div className="cavc-badge-overlay">
                                    <CavIconSparkle size={14} />
                                    <span>Multi-Gen</span>
                                </div>
                                <CavPlaceholder label="Multi-Generational Travel" />
                            </div>
                            <div className="cavc-feature-copy-col">
                                <span className="cavc-eyebrow-label">GROUP TRAVEL</span>
                                <h2 className="cavc-feature-title">Aqua Class vs. Concierge Class for Multi-Generational Travel</h2>
                                <p className="cavc-lead-paragraph">
                                    For multi-generational groups, cabin category decisions can become more complicated. Some travelers may value Blu while others may prefer excursions. A practical approach is to compare:
                                </p>
                                <div className="cavc-feature-list">
                                    {cavMultiGenCompare.map((item, idx) => (
                                        <div key={idx} className="cavc-feature-item-card">
                                            <div className="cavc-feature-item-icon">
                                                <CavIconCheck size={18} />
                                            </div>
                                            <span className="cavc-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cavc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    It may not be necessary for every traveler in a group to choose the same category.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROS & CONS: AQUACLASS */}
                <section className="cavc-pros-section cavc-dark-section">
                    <div className="cavc-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="cavc-eyebrow-label cavc-eyebrow-white">AQUACLASS PROS & CONS</span>
                            <h2 className="cavc-section-heading">Celebrity Aqua Class Pros & Cons</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>
                        <div className="cavc-comparison-board">
                            <div className="cavc-pros-panel">
                                <h3 className="cavc-panel-title cavc-pros-title">
                                    <CavIconCheck size={22} />
                                    AquaClass Pros
                                </h3>
                                <div className="cavc-panel-list">
                                    {cavAquaPros.map((pro, idx) => (
                                        <div key={idx} className="cavc-list-item">
                                            <div className="cavc-item-icon-wrap cavc-pro-icon">
                                                <CavIconCheck size={16} />
                                            </div>
                                            <div className="cavc-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cavc-cons-panel">
                                <h3 className="cavc-panel-title cavc-cons-title">
                                    <CavIconAlert size={22} />
                                    AquaClass Cons
                                </h3>
                                <div className="cavc-panel-list">
                                    {cavAquaCons.map((con, idx) => (
                                        <div key={idx} className="cavc-list-item">
                                            <div className="cavc-item-icon-wrap cavc-con-icon">
                                                <CavIconX size={16} />
                                            </div>
                                            <div className="cavc-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROS & CONS: CONCIERGE CLASS */}
                <section className="cavc-pros-section">
                    <div className="cavc-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="cavc-eyebrow-label">CONCIERGE CLASS PROS & CONS</span>
                            <h2 className="cavc-section-heading">Concierge Class Pros & Cons</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>
                        <div className="cavc-comparison-board">
                            <div className="cavc-pros-panel">
                                <h3 className="cavc-panel-title cavc-pros-title">
                                    <CavIconCheck size={22} />
                                    Concierge Class Pros
                                </h3>
                                <div className="cavc-panel-list">
                                    {cavConciergePros.map((pro, idx) => (
                                        <div key={idx} className="cavc-list-item">
                                            <div className="cavc-item-icon-wrap cavc-pro-icon">
                                                <CavIconCheck size={16} />
                                            </div>
                                            <div className="cavc-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cavc-cons-panel">
                                <h3 className="cavc-panel-title cavc-cons-title">
                                    <CavIconAlert size={22} />
                                    Concierge Class Cons
                                </h3>
                                <div className="cavc-panel-list">
                                    {cavConciergeCons.map((con, idx) => (
                                        <div key={idx} className="cavc-list-item">
                                            <div className="cavc-item-icon-wrap cavc-con-icon">
                                                <CavIconX size={16} />
                                            </div>
                                            <div className="cavc-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DECISION TABLE */}
                <section className="cavc-glance-section cavc-bg-soft">
                    <div className="cavc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">QUICK DECISION GUIDE</span>
                            <h2 className="cavc-section-heading">Aqua Class vs. Concierge Class: <br /> Decision Table</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>
                        <div className="cavc-glance-table">
                            <div className="cavc-glance-row">
                                <div className="cavc-glance-feature">If You Value...</div>
                                <div className="cavc-glance-detail">Better Choice</div>
                            </div>
                            {cavDecisionTable.map((row, idx) => (
                                <div key={idx} className="cavc-glance-row">
                                    <div className="cavc-glance-feature">{row.feature}</div>
                                    <div className="cavc-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT ABOUT THE CABIN */}
                <section className="cavc-feature-section cavc-bg-white">
                    <div className="cavc-feature-container">
                        <div className="cavc-feature-grid cavc-reverse">
                            <div className="cavc-feature-copy-col">
                                <span className="cavc-eyebrow-label">DON'T FORGET</span>
                                <h2 className="cavc-feature-title" style={{ textAlign: 'left' }}>Aqua Class vs. Concierge Class: What About the Cabin?</h2>
                                <p className="cavc-lead-paragraph">
                                    Do not choose AquaClass solely because it sounds more luxurious. Before booking, compare the actual cabin numbers. Look at:
                                </p>
                                <div className="cavc-feature-list">
                                    {cavCabinChecklist.map((item, idx) => (
                                        <div key={idx} className="cavc-feature-item-card">
                                            <div className="cavc-feature-item-icon">
                                                <CavIconCheck size={18} />
                                            </div>
                                            <span className="cavc-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cavc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    A well-located Concierge Class cabin can be a better overall choice than a poorly located AquaClass cabin.
                                </p>
                            </div>
                            <div className="cavc-feature-image-col">
                                <div className="cavc-badge-overlay">
                                    <CavIconDot size={14} />
                                    <span>The Cabin</span>
                                </div>
                                <CavPlaceholder label="Compare the Actual Cabin" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW TO DECIDE */}
                <section className="cavc-steps-section cavc-bg-soft">
                    <div className="cavc-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">DECISION WALKTHROUGH</span>
                            <h2 className="cavc-section-heading">How to Decide Between Aqua Class <br /> and Concierge Class</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>
                        <div className="cavc-steps-list">
                            {cavSteps.map((step, idx) => (
                                <div key={idx} className="cavc-step-item">
                                    <div className="cavc-step-number">{idx + 1}</div>
                                    <div className="cavc-step-body">
                                        <h4 className="cavc-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="cavc-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="cavc-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="cavc-step-tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXAMPLES */}
                <section className="cavc-scenarios-section">
                    <div className="cavc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">REAL-WORLD SCENARIOS</span>
                            <h2 className="cavc-section-heading">Two Example Scenarios</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>

                        <div className="cavc-scenarios-stack">
                            {/* AQUACLASS SCENARIO */}
                            <div className="cavc-scenario-card">
                                <div className="cavc-scenario-card-header">
                                    <div className="cavc-scenario-list-icon">
                                        <CavIconCheck size={20} />
                                    </div>
                                    <h3 className="cavc-scenario-card-title">When AquaClass Is Worth It</h3>
                                </div>
                                <p className="cavc-scenario-desc">
                                    Imagine AquaClass costs only a modest amount more than Concierge Class.
                                </p>
                                <h4 className="cavc-scenario-you-title">You:</h4>
                                <div className="cavc-scenario-list-items">
                                    {cavExampleAqua.map((item, idx) => (
                                        <div key={idx} className="cavc-scenario-list-item">
                                            <div className="cavc-scenario-list-icon">
                                                <CavIconCheck size={14} />
                                            </div>
                                            <span className="cavc-scenario-list-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cavc-scenario-conclusion">
                                    In this situation, AquaClass can provide meaningful additional value.
                                </p>
                            </div>

                            {/* CONCIERGE SCENARIO */}
                            <div className="cavc-scenario-card">
                                <div className="cavc-scenario-card-header">
                                    <div className="cavc-scenario-list-icon">
                                        <CavIconCheck size={20} />
                                    </div>
                                    <h3 className="cavc-scenario-card-title">Example: When Concierge Class Is Better</h3>
                                </div>
                                <p className="cavc-scenario-desc">
                                    Now imagine the AquaClass upgrade is expensive and your itinerary has a port almost every day.
                                </p>
                                <h4 className="cavc-scenario-you-title">You:</h4>
                                <div className="cavc-scenario-list-items">
                                    {cavExampleConcierge.map((item, idx) => (
                                        <div key={idx} className="cavc-scenario-list-item">
                                            <div className="cavc-scenario-list-icon">
                                                <CavIconCheck size={14} />
                                            </div>
                                            <span className="cavc-scenario-list-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cavc-scenario-conclusion">
                                    In this situation, Concierge Class may be the smarter choice.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERT INSIGHT */}
                <section id="celebrity-aquaclass-vs-concierge-insight" className="cavc-editorial-section cavc-bg-soft">
                    <div className="cavc-editorial-container">
                        <div className="cavc-editorial-split-grid">

                            <div className="cavc-editorial-profile-sidebar">
                                <div className="cavc-editorial-avatar-wrap">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="cavc-editorial-avatar" />
                                </div>

                                <div className="cavc-editorial-bio">
                                    <h4 className="cavc-editorial-bio-name">Angela Hughes</h4>
                                    <p className="cavc-editorial-bio-title">Founder & CEO, Trips & Ships Luxury Travel</p>
                                </div>

                                <div className="cavc-editorial-stats-row">
                                    <div className="cavc-editorial-stat-badge">
                                        <strong>40+</strong> Years Experience
                                    </div>
                                    <div className="cavc-editorial-stat-badge">
                                        <strong>120+</strong> Countries Visited
                                    </div>
                                </div>

                                <div className="cavc-editorial-expertise-box">
                                    <span className="cavc-editorial-expertise-label">Her expertise spans:</span>
                                    <div className="cavc-editorial-expertise-list">
                                        {[
                                            'Premium & luxury cruising',
                                            'Celebrity stateroom category selection',
                                            'AquaClass & Concierge Class comparisons',
                                            'Cabin location & upgrade pricing',
                                            'Personalized luxury cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="cavc-editorial-expertise-item">
                                                <CavIconDot size={10} className="cavc-editorial-dot" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="cavc-editorial-main-content">
                                <div className="cavc-editorial-header">
                                    <div className="cavc-editorial-eyebrow-container">
                                        <CavIconAward size={16} className="cavc-editorial-icon-badge" />
                                        <span className="cavc-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="cavc-editorial-heading">
                                        Is Aqua Class Worth the Upgrade?
                                    </h2>
                                    <div className="cavc-editorial-heading-line"></div>
                                </div>

                                <p className="cavc-editorial-lead-para">
                                    AquaClass is not automatically the better cabin—it is the better fit for a particular type of traveler.
                                </p>

                                <div className="cavc-editorial-quote-box">
                                    <p className="cavc-editorial-quote-text">
                                        If Blu and wellness are central to how you want to experience the cruise, the upgrade can make sense. But if your vacation is primarily about exploring ports and returning to the ship to sleep, Concierge Class may offer a better balance between premium service and overall trip cost. The smartest comparison is always based on the actual price difference, cabin location and itinerary, rather than the category name alone.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY COMPARE WITH TRIPS & SHIPS */}
                <section className="cavc-why-book-section cavc-why-book-dark">
                    <div className="cavc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="cavc-section-heading">Why Compare Celebrity Aqua Class and Concierge Class With Trips & Ships Luxury Travel?</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                            <p className="cavc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Choosing between AquaClass and Concierge Class is easier when the decision is based on your complete vacation rather than the stateroom category alone. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="cavc-why-book-grid">
                            {cavWhyPlan.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cavc-why-book-card">
                                        <div className="cavc-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CavIconDot size={20} />}
                                        </div>
                                        <h4 className="cavc-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cavc-lead-paragraph" style={{ textAlign: 'center', marginTop: '20px', color: '#cbd5e1' }}>
                            The goal is to select the category that provides the most useful benefits for your travel style.
                        </p>
                    </div>
                </section>


                {/* FAQ SECTION */}
                <section className="cavc-faq-section">
                    <div className="cavc-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="cavc-section-heading">Frequently Asked Questions</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                        </div>
                        <div className="cavc-faq-list">
                            {cavFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="cavc-faq-item"
                                    onClick={() => cavToggleFaq(index)}
                                >
                                    <div className="cavc-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="cavc-faq-toggle">
                                            {cavActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {cavActiveFaq === index && (
                                        <p className="cavc-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL VERDICT */}
                <section className="cavc-compare-section">
                    <div className="cavc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cavc-eyebrow-label">FINAL VERDICT</span>
                            <h2 className="cavc-section-heading">Final Verdict</h2>
                            <div className="cavc-heading-bar cavc-bar-center"></div>
                            <p className="cavc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                The choice between Celebrity AquaClass vs. Concierge Class comes down to what you value most.
                            </p>
                        </div>
                        <div className="cavc-choice-board cavc-choice-board-inline">
                            <div className="cavc-choice-panel">
                                <h3 className="cavc-choice-title">
                                    <CavIconCheck size={22} />
                                    Choose AquaClass if you want:
                                </h3>
                                <div className="cavc-choice-list">
                                    {cavFinalAqua.map((item, idx) => (
                                        <div key={idx} className="cavc-choice-item">
                                            <div className="cavc-choice-icon-wrap">
                                                <CavIconCheck size={16} />
                                            </div>
                                            <div className="cavc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cavc-choice-panel">
                                <h3 className="cavc-choice-title">
                                    <CavIconCheck size={22} />
                                    Choose Concierge Class if you want:
                                </h3>
                                <div className="cavc-choice-list">
                                    {cavFinalConcierge.map((item, idx) => (
                                        <div key={idx} className="cavc-choice-item">
                                            <div className="cavc-choice-icon-wrap">
                                                <CavIconCheck size={16} />
                                            </div>
                                            <div className="cavc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="cavc-included-note">
                            The most important factor is not simply the category—it is the combination of price, cabin location, itinerary and benefits you will actually use. For travelers who will take advantage of Blu and wellness amenities, AquaClass can justify the additional cost. For travelers who mainly want a comfortable premium cabin and spend their days exploring ports, Concierge Class may provide the better overall value.
                        </p>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="cavc-cta-section">
                    <div className="cavc-cta-bg-pattern"></div>
                    <div className="cavc-cta-inner">
                        <h2 className="cavc-cta-heading">Plan Your Celebrity Cruise Upgrade</h2>
                        <div className="cavc-cta-separator"></div>
                        <p className="cavc-cta-text">
                            Not sure whether AquaClass is worth the upgrade? Trips & Ships Luxury Travel can compare your specific Celebrity sailing, cabin locations, AquaClass and Concierge Class pricing, Blu access and onboard benefits to help determine which option fits your vacation best.
                        </p>
                        <div className="cavc-cta-btn-row">
                            <Link to="/contact" className="cavc-btn-primary">
                                <CavIconPhone size={18} />
                                Compare AquaClass & Concierge Class
                            </Link>
                            <button className="cavc-btn-outline">
                                <CavIconList size={18} />
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

export default CelebrityAquaClassVsConciergeClass