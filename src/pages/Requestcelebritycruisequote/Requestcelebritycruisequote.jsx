import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './RequestCelebrityCruiseQuote.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Ship,
    Anchor,
    Compass,
    MapPin,
    Calendar,
    Clock,
    BedDouble,
    Crown,
    Wallet,
    BadgePercent,
    Users,
    Building2,
    Sun,
    ConciergeBell,
    Sparkles,
    Star,
    Home,
    DoorOpen,
    UtensilsCrossed,
    Binoculars,
    GraduationCap,
    Briefcase,
    PartyPopper,
    Gift,
    HeartHandshake,
    Landmark,
    ClipboardList,
    Award,
    ShieldCheck,
    Plane,
    Globe,
    Sliders,
    TreeDeciduous,
    Mountain,
    Waves,
    Baby,
    FileSearch
} from 'lucide-react'

const iconMap = {
    Ship, Anchor, Compass, MapPin, Calendar, Clock, BedDouble, Crown, Wallet,
    BadgePercent, Users, Building2, Sun, ConciergeBell, Sparkles, Star, Home,
    DoorOpen, UtensilsCrossed, Binoculars, GraduationCap, Briefcase, PartyPopper,
    Gift, HeartHandshake, Landmark, ClipboardList, Award, ShieldCheck, Plane,
    Globe, Sliders, TreeDeciduous, Mountain, Waves, Baby, FileSearch
}

/* ============================================================
   INLINE SVG ICONS (no lucide-react dependency for these — plain inline)
   ============================================================ */
function RcqIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function RcqIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function RcqIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function RcqIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function RcqIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function RcqIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function RcqIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function RcqPlaceholder({ label, className = '' }) {
    return (
        <div className={`rcq-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <RcqIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function RequestCelebrityCruiseQuote() {
    const [rcqActiveFaq, setRcqActiveFaq] = useState(null)
    const rcqToggleFaq = (index) => {
        setRcqActiveFaq(rcqActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const rcqQuoteFor = [
        { label: 'Individual Celebrity cruises', icon: 'Ship' },
        { label: 'Couples cruises', icon: 'HeartHandshake' },
        { label: 'Celebrity suites', icon: 'Crown' },
        { label: 'Family cruises', icon: 'Users' },
        { label: 'Multi-generational cruises', icon: 'Home' },
        { label: 'Group cruises', icon: 'Users' },
        { label: 'Luxury cruise vacations', icon: 'Sparkles' },
        { label: 'Celebrity Caribbean cruises', icon: 'Sun' },
        { label: 'Celebrity Mediterranean cruises', icon: 'Landmark' },
        { label: 'Celebrity Alaska cruises', icon: 'Mountain' },
        { label: 'Celebrity European cruises', icon: 'Globe' },
        { label: 'Celebrity expedition cruises', icon: 'Compass' },
        { label: 'Pre- and post-cruise stays', icon: 'Building2' },
        { label: 'Customized cruise vacations', icon: 'Sliders' }
    ]

    const rcqWhyRequest = [
        { label: 'Which Celebrity ships fit your travel style', icon: 'Ship' },
        { label: 'Which itineraries match your dates', icon: 'Calendar' },
        { label: 'Which stateroom category makes sense', icon: 'BedDouble' },
        { label: 'Whether a suite is worthwhile', icon: 'Crown' },
        { label: 'Which current offers may apply', icon: 'BadgePercent' },
        { label: 'Whether a group booking may be advantageous', icon: 'Users' },
        { label: 'Which departure port is most convenient', icon: 'MapPin' },
        { label: 'Whether pre- or post-cruise stays should be added', icon: 'Building2' },
        { label: 'What the overall vacation may cost', icon: 'Wallet' }
    ]

    const rcqIncludedTable = [
        { feature: 'Celebrity cruise', detail: 'Yes' },
        { feature: 'Cruise stateroom', detail: 'Yes' },
        { feature: 'Suite', detail: 'Yes' },
        { feature: 'Family accommodations', detail: 'Yes' },
        { feature: 'Group accommodations', detail: 'Yes' },
        { feature: "Cruise promotions", detail: 'Reviewed' },
        { feature: "Captain's Club benefits", detail: 'Reviewed' },
        { feature: 'Flights', detail: 'If requested' },
        { feature: 'Hotels', detail: 'If requested' },
        { feature: 'Transfers', detail: 'If requested' },
        { feature: 'Shore excursions', detail: 'If requested' },
        { feature: 'Pre-cruise stay', detail: 'If requested' },
        { feature: 'Post-cruise stay', detail: 'If requested' },
        { feature: 'Land extensions', detail: 'If applicable' }
    ]

    const rcqIndividualFactors = [
        { label: 'Destination', icon: 'MapPin' },
        { label: 'Travel dates', icon: 'Calendar' },
        { label: 'Cruise length', icon: 'Clock' },
        { label: 'Ship', icon: 'Ship' },
        { label: 'Stateroom', icon: 'BedDouble' },
        { label: 'Budget', icon: 'Wallet' },
        { label: 'Preferred itinerary', icon: 'Compass' },
        { label: 'Onboard experience', icon: 'Sparkles' }
    ]

    const rcqSuiteFactors = [
        { label: 'Suite category', icon: 'Crown' },
        { label: 'Location', icon: 'MapPin' },
        { label: 'Size', icon: 'Home' },
        { label: 'Balcony or outdoor space', icon: 'Sun' },
        { label: 'Included services', icon: 'ConciergeBell' },
        { label: 'Suite amenities', icon: 'Sparkles' },
        { label: 'The Retreat benefits', icon: 'Star' },
        { label: 'Overall value', icon: 'Wallet' }
    ]

    const rcqFamilyFactors = [
        { label: 'Number of adults', icon: 'Users' },
        { label: 'Number of children', icon: 'Baby' },
        { label: 'Stateroom requirements', icon: 'BedDouble' },
        { label: 'Connecting-room preferences', icon: 'DoorOpen' },
        { label: 'Family-friendly itineraries', icon: 'Compass' },
        { label: 'Dining preferences', icon: 'UtensilsCrossed' },
        { label: 'Shore excursions', icon: 'Binoculars' },
        { label: 'Travel dates', icon: 'Calendar' },
        { label: 'Budget', icon: 'Wallet' }
    ]

    const rcqMultiGenFactors = [
        { label: 'Grandparents may prioritize comfort', icon: 'Home' },
        { label: 'Parents may prioritize convenience', icon: 'Clock' },
        { label: 'Children may want activities', icon: 'Sparkles' },
        { label: 'Couples may prefer upgraded accommodations', icon: 'Crown' },
        { label: 'Some travelers may want more independent time', icon: 'Compass' }
    ]

    const rcqGroupTypes = [
        { label: 'Family reunions', icon: 'Home' },
        { label: 'University alumni groups', icon: 'GraduationCap' },
        { label: 'Corporate travel', icon: 'Briefcase' },
        { label: 'Friends traveling together', icon: 'Users' },
        { label: 'Celebration cruises', icon: 'PartyPopper' },
        { label: 'Anniversary groups', icon: 'HeartHandshake' },
        { label: 'Birthday groups', icon: 'Gift' },
        { label: 'Wedding-related travel', icon: 'HeartHandshake' },
        { label: 'Associations', icon: 'Landmark' },
        { label: 'Clubs', icon: 'Users' },
        { label: 'Special-interest groups', icon: 'Star' }
    ]

    const rcqInfoNeeded = [
        { label: 'Destination', icon: 'MapPin' },
        { label: 'Travel Dates', icon: 'Calendar' },
        { label: 'Number of Travelers', icon: 'Users' },
        { label: 'Stateroom Preference', icon: 'BedDouble' },
        { label: 'Budget', icon: 'Wallet' },
        { label: 'Special Requirements', icon: 'ClipboardList' }
    ]

    const rcqSteps = [
        {
            title: 'Tell Us About Your Trip',
            desc: 'Submit your travel preferences through the quote request form. Include your:',
            tags: ['Destination', 'Dates', 'Number of travelers', 'Stateroom preference', 'Budget', 'Special requests']
        },
        {
            title: 'We Review Your Requirements',
            desc: 'We use your information to understand what type of Celebrity vacation you are looking for. If your dates are flexible, we can consider additional sailing possibilities.',
            tags: []
        },
        {
            title: 'Compare Celebrity Cruise Options',
            desc: 'We can evaluate options based on:',
            tags: ['Ship', 'Itinerary', 'Sailing date', 'Stateroom', 'Pricing', 'Promotions', 'Location', 'Overall trip value']
        },
        {
            title: 'Review Your Personalized Options',
            desc: 'You can review the options and decide which Celebrity cruise best fits your priorities. There is no need to choose a sailing before requesting a quote.',
            tags: []
        },
        {
            title: 'Plan the Rest of the Vacation',
            desc: 'If needed, we can also help coordinate:',
            tags: ['Flights', 'Hotels', 'Transfers', 'Shore excursions', 'Pre-cruise stays', 'Post-cruise stays', 'Land extensions', 'Group arrangements']
        }
    ]

    const rcqDestinations = [
        {
            name: 'Celebrity Caribbean Cruise Quote',
            intro: 'Popular Caribbean planning can include:',
            bullets: ['Eastern Caribbean', 'Western Caribbean', 'Southern Caribbean', 'Bahamas', 'Private-island experiences'],
            highlight: 'A quote can help compare departure ports, sailing dates, ships and itinerary lengths.'
        },
        {
            name: 'Celebrity Mediterranean Cruise Quote',
            intro: 'Mediterranean cruise planning can include destinations in:',
            bullets: ['Greece', 'Italy', 'Spain', 'France', 'Turkey', 'Croatia', 'Malta'],
            highlight: 'We can help compare itinerary length, ports, cruise dates and pre- or post-cruise stays.'
        },
        {
            name: 'Celebrity Alaska Cruise Quote',
            intro: 'An Alaska quote can include comparisons for:',
            bullets: ['Glacier itineraries', 'Inside Passage', 'Alaska ports', 'Cruise tours', 'Land extensions', 'Pre-cruise stays', 'Post-cruise stays'],
            highlight: 'Alaska planning can benefit from looking at the complete vacation rather than the cruise alone.'
        },
        {
            name: 'Celebrity European Cruise Quote',
            intro: 'Depending on the sailing, travelers may explore:',
            bullets: ['Scandinavia', 'British Isles', 'Northern Europe', 'Mediterranean Europe'],
            highlight: 'A quote can help match the itinerary to your available vacation time.'
        },
        {
            name: 'Celebrity Galápagos Cruise Quote',
            intro: 'For travelers interested in expedition travel, a Galápagos quote can include planning around:',
            bullets: ['Celebrity Flora', 'Galápagos itineraries', 'Suite accommodations', 'Expedition activities', 'Quito stays', 'Transfers', 'Longer South American journeys'],
            highlight: 'Galápagos planning is different from a conventional ocean cruise and may require additional land arrangements.'
        }
    ]

    const rcqFamilyRooms = [
        'Multiple nearby rooms', 'Connecting accommodations where available', 'Family room configurations',
        'Suite options', 'Different cabin categories for different travelers'
    ]

    const rcqGroupEvaluate = [
        'Cabin availability', 'Group pricing', 'Dining arrangements', 'Group events',
        'Shore excursions', 'Payment schedules', 'Special requests'
    ]

    const rcqDirectVsQuote = [
        'Ships', 'Cabin categories', 'Itineraries', 'Promotions', 'Loyalty benefits', 'Group options', 'Pre- and post-cruise arrangements'
    ]

    const rcqGoodQuote = [
        { name: 'Total Cost', desc: 'Look at the overall vacation cost.', icon: 'Wallet' },
        { name: 'Cabin Category', desc: 'A lower fare may not be the best choice if the cabin does not meet your needs.', icon: 'BedDouble' },
        { name: 'Location', desc: 'Deck and cabin location can influence your onboard experience.', icon: 'MapPin' },
        { name: 'Itinerary', desc: 'Compare the actual ports and time in each destination.', icon: 'Compass' },
        { name: 'Promotions', desc: 'Review current eligible offers.', icon: 'BadgePercent' },
        { name: 'Loyalty Benefits', desc: "If you have Captain's Club status, check which benefits apply.", icon: 'Award' },
        { name: 'Flexibility', desc: 'Consider cancellation, change and fare conditions.', icon: 'ShieldCheck' },
        { name: 'Complete Vacation', desc: 'Include flights, hotels and transfers if required.', icon: 'Plane' }
    ]

    const rcqDontNeedToKnow = [
        'Which ship is best', 'Which cabin category is best', 'Which itinerary is best',
        'Whether a suite is worth it', 'Which promotion applies', 'Whether you need a group booking',
        'Which departure port is most convenient'
    ]

    const rcqWhoShould = [
        { feature: 'First-Time Celebrity Cruisers', detail: 'If you have never sailed Celebrity, professional guidance can help you understand the differences between ships, accommodations and itineraries.' },
        { feature: 'Couples', detail: 'Compare destinations, cabin categories and suite options.' },
        { feature: 'Families', detail: 'Coordinate multiple travelers and stateroom requirements.' },
        { feature: 'Multi-Generational Groups', detail: 'Balance different travel preferences within one vacation.' },
        { feature: 'Luxury Travelers', detail: 'Compare suites and premium experiences.' },
        { feature: 'Group Leaders', detail: 'Coordinate multiple staterooms and group requirements.' },
        { feature: 'Repeat Celebrity Guests', detail: "Review current offers alongside Captain's Club benefits." }
    ]

    const rcqChecklist = [
        { label: 'Where do you want to cruise?', icon: 'MapPin' },
        { label: 'When do you want to travel?', icon: 'Calendar' },
        { label: 'How many people are traveling?', icon: 'Users' },
        { label: 'How many staterooms do you need?', icon: 'BedDouble' },
        { label: 'What is your approximate budget?', icon: 'Wallet' },
        { label: 'Do you want a suite?', icon: 'Crown' },
        { label: 'Do you have flexible dates?', icon: 'Clock' },
        { label: 'Do you have a preferred ship?', icon: 'Ship' },
        { label: "Do you have Captain's Club status?", icon: 'Award' },
        { label: 'Are you traveling as a group?', icon: 'Users' },
        { label: 'Do you need flights?', icon: 'Plane' },
        { label: 'Do you need hotels?', icon: 'Building2' },
        { label: 'Do you need transfers?', icon: 'ConciergeBell' },
        { label: 'Do you want pre- or post-cruise travel?', icon: 'Compass' }
    ]

    const rcqPlanningInclude = [
        { title: 'Celebrity ship selection', icon: 'Ship' },
        { title: 'Itinerary comparison', icon: 'Compass' },
        { title: 'Stateroom selection', icon: 'BedDouble' },
        { title: 'Suite planning', icon: 'Crown' },
        { title: 'Family travel', icon: 'Home' },
        { title: 'Multi-generational travel', icon: 'Users' },
        { title: 'Group cruise planning', icon: 'Users' },
        { title: 'Celebrity offers', icon: 'BadgePercent' },
        { title: "Captain's Club benefits", icon: 'Award' },
        { title: 'Pre-cruise hotels', icon: 'Building2' },
        { title: 'Post-cruise hotels', icon: 'Building2' },
        { title: 'Transfers', icon: 'ConciergeBell' },
        { title: 'Shore excursions', icon: 'Binoculars' },
        { title: 'Land extensions', icon: 'TreeDeciduous' },
        { title: 'Special travel requests', icon: 'Sliders' }
    ]

    const rcqFaqs = [
        { question: '1. How do I request a Celebrity Cruise quote?', answer: 'Complete the Celebrity Cruise quote request form with your destination, travel dates, number of travelers, stateroom preference and any other requirements. A personalized cruise planning process can then begin.' },
        { question: "2. Can I request a Celebrity cruise quote if I don't know which ship I want?", answer: 'Yes. You can provide your destination, dates and general preferences, and the planning process can help narrow down suitable Celebrity ships and itineraries.' },
        { question: '3. Can I request a quote for a Celebrity suite?', answer: 'Yes. Include your preferred suite category or simply indicate that you want to compare suite options.' },
        { question: '4. Can families request a Celebrity Cruise quote?', answer: 'Yes. Family requests can include multiple travelers, multiple staterooms, connecting-room preferences and family-specific requirements.' },
        { question: '5. Can I request a Celebrity group cruise quote?', answer: 'Yes. Group requests can be made for family reunions, corporate groups, alumni travel, celebrations and other organized travel.' },
        { question: '6. How many rooms are usually required for a Celebrity group?', answer: 'Celebrity generally defines a standard group as eight staterooms or more, although specific group requirements can vary by product and program.' },
        { question: '7. Can I request a quote for a Celebrity Caribbean cruise?', answer: 'Yes. You can request quotes for Eastern, Western and Southern Caribbean itineraries, subject to available Celebrity sailings.' },
        { question: '8. Can I request a Celebrity Mediterranean cruise quote?', answer: 'Yes. A quote can be requested for Mediterranean itineraries, including sailings visiting destinations in Italy, Greece, Spain, France and other Mediterranean regions.' },
        { question: '9. Can I request a Celebrity Alaska cruise quote?', answer: 'Yes. Alaska cruise requests can include cruise-only options as well as planning around cruise tours and additional land arrangements.' },
        { question: '10. Can my Celebrity cruise quote include hotels?', answer: 'Yes. If you need a pre- or post-cruise hotel, include this in your request so it can be considered as part of the overall vacation plan.' },
        { question: '11. Can my Celebrity cruise quote include flights and transfers?', answer: 'Flights and transfers can be considered when building a complete cruise vacation, depending on your requirements.' },
        { question: '12. Can you help me compare Celebrity cruise offers?', answer: 'Yes. Current promotions can be reviewed alongside the sailing, stateroom category and other booking considerations.' },
        { question: "13. Can Captain's Club benefits be considered?", answer: "Yes. If you are a Captain's Club member, provide your loyalty information so applicable benefits can be considered during the planning process." },
        { question: '14. Can I request a quote if my travel dates are flexible?', answer: 'Yes. Flexible dates can provide more opportunities to compare different Celebrity sailings, ships, cabins and pricing.' },
        { question: '15. Is requesting a Celebrity Cruise quote the same as booking?', answer: 'No. A quote request is the beginning of the planning process. You can review the available options before deciding whether to proceed with a booking.' }
    ]

    const rcqRelated = [
        { title: 'Celebrity Mediterranean Cruises', desc: 'Compare Celebrity itineraries, ports and stateroom options across the Mediterranean.', icon: 'Anchor', link: '/celebrity-cruises/mediterranean/' },
        { title: 'Celebrity Alaska Cruises', desc: 'Glacier itineraries, Inside Passage sailings, Alaska ports and Cruisetours.', icon: 'Mountain', link: '/celebrity-cruises/alaska/' },
        { title: 'Celebrity Danube River Cruises', desc: "Explore Celebrity's Danube River sailings, ports and onboard experience.", icon: 'Waves', link: '/celebrity-cruises/danube-river-cruises/' },
        { title: 'Celebrity Apex Ship Guide', desc: 'Deck plans, staterooms, dining and The Retreat aboard Celebrity Apex.', icon: 'Ship', link: '/celebrity-cruises/ships/celebrity-apex' },
        { title: 'Celebrity Cruises Overview', desc: 'Compare Caribbean, Mediterranean, European, Alaska and expedition itineraries across the Celebrity fleet.', icon: 'Globe', link: '/celebrity-cruises/' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const rcqSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/",
                "name": "Request a Celebrity Cruise Quote | Personalized Cruise Planning",
                "url": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/",
                "description": "Request a personalized Celebrity Cruises quote for individual, suite, family or group travel. Compare ships, itineraries, cabins, offers and cruise options with expert planning.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/#article" }
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/#article",
                "headline": "Request a Celebrity Cruise Quote | Personalized Cruise Planning",
                "url": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/",
                "description": "Personalized Celebrity Cruises planning guide covering individual cruises, suites, family vacations, multi-generational travel, group cruises, destinations, stateroom options, current offers, Captain's Club benefits, hotels, flights and transfers.",
                "image": "https://www.tripsandships.com/images/celebrity-cruise-quote.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/" }
            },
            {
                "@type": "Service",
                "name": "Celebrity Cruise Quote & Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Celebrity Cruise Planning and Quote Service",
                "description": "Personalized Celebrity Cruises planning services helping travelers compare ships, itineraries, staterooms, suites, current offers, Captain's Club benefits, family accommodations, group cruise options, hotels, flights, transfers and pre- and post-cruise arrangements."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Request a Celebrity Cruise Quote", "item": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": rcqFaqs.map(f => ({
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
                <title>Request a Celebrity Cruise Quote | Personalized Cruise Planning</title>
                <meta name="title" content="Celebrity Cruise Quote | Get a Personalized Cruise Plan" />
                <meta
                    name="description"
                    content="Request a personalized Celebrity Cruises quote for individual, suite, family or group travel. Compare ships, itineraries, cabins, offers and cruise options with expert planning."
                />
                <script type="application/ld+json">
                    {JSON.stringify(rcqSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="rcq-page-wrapper">

                {/* HERO SECTION */}
                <section className="rcq-hero-section">
                    <div className="rcq-hero-overlay"></div>
                    <div className="rcq-hero-content">
                        <div className="rcq-hero-tag">
                            <RcqIconSparkle size={16} />
                            <span>Celebrity Cruise Quote</span>
                        </div>
                        <h1 className="rcq-hero-title">Request a Celebrity Cruise Quote</h1>
                        <p className="rcq-hero-subtitle">
                            Get a Personalized Celebrity Cruise Plan
                        </p>
                        <div className="rcq-hero-btn-row">
                            <Link to='/contact' className="rcq-btn-primary">
                                <RcqIconPhone size={18} />
                                Request My Celebrity Cruise Quote
                            </Link>
                            <button className="rcq-btn-outline">
                                <RcqIconList size={18} />
                                Speak With a Celebrity Cruise Planning Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="rcq-intro-section">
                    <div className="rcq-intro-container">
                        <div className="rcq-intro-grid">
                            <div className="rcq-intro-copy">
                                <span className="rcq-eyebrow-label">PERSONALIZED CRUISE PLANNING</span>
                                <h2 className="rcq-section-heading">Get a Personalized Celebrity Cruise Plan</h2>
                                <div className="rcq-heading-bar"></div>
                                <p className="rcq-lead-paragraph">
                                    Planning a Celebrity Cruises vacation involves more than choosing a ship and departure date. Your ideal cruise can depend on your destination, travel dates, stateroom category, number of travelers, budget, onboard preferences and whether you are traveling individually, with family or as a larger group.
                                </p>
                                <p className="rcq-lead-paragraph">
                                    Request a Celebrity Cruise Quote and let Trips & Ships Luxury Travel help you compare the options that fit your trip.
                                </p>
                                <p className="rcq-lead-paragraph">
                                    We can help with individual cruises, suites, family vacations, multi-generational travel and group cruises, along with pre- and post-cruise planning.
                                </p>
                            </div>
                            <div className="rcq-intro-image-frame">
                                <RcqPlaceholder label="Request a Celebrity Cruise Quote" />
                                <div className="rcq-intro-badge-float">
                                    <RcqIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Personalized Planning</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="rcq-quick-answer-section">
                    <div className="rcq-quick-answer-container">
                        <div className="rcq-quick-answer-card">
                            <h3 className="rcq-quick-answer-title">What Can I Request a Celebrity Cruise Quote For?</h3>
                            <p className="rcq-quick-answer-text">
                                You can request a personalized quote for:
                            </p>
                            <div className="rcq-feature-list">
                                {rcqQuoteFor.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <div key={idx} className="rcq-feature-item-card">
                                            <div className="rcq-feature-item-icon">
                                                {IconComponent ? <IconComponent size={18} /> : <RcqIconCheck size={18} />}
                                            </div>
                                            <span className="rcq-feature-item-text">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className="rcq-quick-answer-text" style={{ marginTop: '20px' }}>
                                Tell us what you are looking for, and we can help narrow the choices based on your travel priorities.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="rcq-inline-cta-section">
                    <div className="rcq-inline-cta-container">
                        <span className="rcq-inline-cta-tag">Expert Planning</span>
                        <p className="rcq-inline-cta-text">Ready to start planning your Celebrity cruise?</p>
                        <div className="rcq-inline-cta-btn-row">
                            <Link to="/contact" className="rcq-btn-primary">
                                <RcqIconPhone size={18} />
                                Start My Celebrity Cruise Planning
                            </Link>
                            <Link to="/contact" className="rcq-btn-outline1">
                                <RcqIconList size={18} />
                                Speak With a Celebrity Cruise Planning Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHAT CAN BE INCLUDED — AT A GLANCE TABLE */}
                <section className="rcq-glance-section">
                    <div className="rcq-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">QUOTE OVERVIEW</span>
                            <h2 className="rcq-section-heading">What Can Be Included in a Celebrity Cruise Quote?</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                            <p className="rcq-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A personalized quote can potentially include the following.
                            </p>
                        </div>
                        <div className="rcq-glance-table">
                            {rcqIncludedTable.map((row, idx) => (
                                <div key={idx} className="rcq-glance-row">
                                    <div className="rcq-glance-feature">{row.feature}</div>
                                    <div className="rcq-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="rcq-included-note">
                            The exact components depend on the vacation you are planning.
                        </p>
                    </div>
                </section>

                {/* WHY REQUEST A QUOTE */}
                <section className="rcq-tag-section rcq-bg-white">
                    <div className="rcq-worth-container-split">
                        <div className="rcq-worth-split-grid">
                            <div className="rcq-worth-info-col">
                                <span className="rcq-eyebrow-label">WHY REQUEST A QUOTE?</span>
                                <h2 className="rcq-section-heading">Why Request a Celebrity Cruise Quote?</h2>
                                <div className="rcq-heading-bar"></div>
                                <p className="rcq-lead-paragraph">
                                    Celebrity Cruises offers a wide range of ships, destinations, stateroom categories and itinerary lengths. Comparing everything independently can become time-consuming. A personalized quote can help you understand:
                                </p>
                                <div className="rcq-worth-footer-note">
                                    <p className="rcq-worth-note">
                                        The goal is not simply to find the lowest advertised fare. It is to find the right Celebrity cruise for your trip.
                                    </p>
                                </div>
                            </div>
                            <div className="rcq-worth-advantages-col">
                                <div className="rcq-worth-advantages-list">
                                    {rcqWhyRequest.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="rcq-worth-item-row">
                                                <div className="rcq-worth-item-icon-box">
                                                    {IconComponent ? <IconComponent size={18} /> : <RcqIconDot size={18} />}
                                                </div>
                                                <span className="rcq-worth-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUOTE OPTIONS: INDIVIDUAL */}
                <section className="rcq-feature-section rcq-bg-soft">
                    <div className="rcq-feature-container">
                        <div className="rcq-feature-grid">
                            <div className="rcq-feature-image-col">
                                <div className="rcq-badge-overlay">
                                    <RcqIconSparkle size={14} />
                                    <span>Individual Quote</span>
                                </div>
                                <RcqPlaceholder label="Individual Celebrity Cruise Quote" />
                            </div>
                            <div className="rcq-feature-copy-col">
                                <span className="rcq-eyebrow-label">QUOTE OPTIONS</span>
                                <h2 className="rcq-feature-title">Individual Celebrity Cruise Quote</h2>
                                <p className="rcq-lead-paragraph">
                                    Traveling solo or as a couple? We can help compare Celebrity sailings based on:
                                </p>
                                <div className="rcq-feature-list">
                                    {rcqIndividualFactors.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="rcq-feature-item-card">
                                                <div className="rcq-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RcqIconCheck size={18} />}
                                                </div>
                                                <span className="rcq-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="rcq-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Whether you already know the sailing you want or are still exploring options, a quote request gives us the information needed to begin planning.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUOTE OPTIONS: SUITE */}
                <section className="rcq-feature-section rcq-dark-section">
                    <div className="rcq-feature-container">
                        <div className="rcq-feature-grid rcq-reverse">
                            <div className="rcq-feature-copy-col">
                                <span className="rcq-eyebrow-label">QUOTE OPTIONS</span>
                                <h2 className="rcq-feature-title" style={{ textAlign: 'left' }}>Celebrity Suite Cruise Quote</h2>
                                <p className="rcq-lead-paragraph">
                                    Interested in a suite? Celebrity offers multiple suite categories, including accommodations within The Retreat on eligible ships. A suite quote can help you compare:
                                </p>
                                <div className="rcq-feature-list">
                                    {rcqSuiteFactors.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="rcq-feature-item-card">
                                                <div className="rcq-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RcqIconCheck size={18} />}
                                                </div>
                                                <span className="rcq-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="rcq-lead-paragraph" style={{ marginTop: '20px' }}>
                                    For travelers considering a significant upgrade, we can help compare the additional cost against the benefits included with the suite.
                                </p>
                            </div>
                            <div className="rcq-feature-image-col">
                                <div className="rcq-badge-overlay">
                                    <RcqIconSparkle size={14} />
                                    <span>Suite Quote</span>
                                </div>
                                <RcqPlaceholder label="Celebrity Suite Cruise Quote" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUOTE OPTIONS: FAMILY */}
                <section className="rcq-feature-section rcq-bg-white">
                    <div className="rcq-feature-container">
                        <div className="rcq-feature-grid">
                            <div className="rcq-feature-image-col">
                                <div className="rcq-badge-overlay">
                                    <RcqIconSparkle size={14} />
                                    <span>Family Quote</span>
                                </div>
                                <RcqPlaceholder label="Celebrity Family Cruise Quote" />
                            </div>
                            <div className="rcq-feature-copy-col">
                                <span className="rcq-eyebrow-label">QUOTE OPTIONS</span>
                                <h2 className="rcq-feature-title">Celebrity Family Cruise Quote</h2>
                                <p className="rcq-lead-paragraph">
                                    Celebrity Cruises can be an option for families looking for a vacation that combines destinations, onboard activities and accommodations in one trip. A family quote can take into account:
                                </p>
                                <div className="rcq-feature-list">
                                    {rcqFamilyFactors.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="rcq-feature-item-card">
                                                <div className="rcq-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RcqIconCheck size={18} />}
                                                </div>
                                                <span className="rcq-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="rcq-lead-paragraph" style={{ marginTop: '20px' }}>
                                    We can also help compare whether booking multiple staterooms or a larger accommodation makes the most sense.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUOTE OPTIONS: MULTI-GENERATIONAL */}
                <section className="rcq-feature-section rcq-dark-section">
                    <div className="rcq-feature-container">
                        <div className="rcq-feature-grid rcq-reverse">
                            <div className="rcq-feature-copy-col">
                                <span className="rcq-eyebrow-label">QUOTE OPTIONS</span>
                                <h2 className="rcq-feature-title" style={{ textAlign: 'left' }}>Celebrity Multi-Generational Cruise Quote</h2>
                                <p className="rcq-lead-paragraph">
                                    Multi-generational cruise planning can be more complicated because different travelers may have different priorities. For example:
                                </p>
                                <div className="rcq-feature-list">
                                    {rcqMultiGenFactors.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="rcq-feature-item-card">
                                                <div className="rcq-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RcqIconCheck size={18} />}
                                                </div>
                                                <span className="rcq-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="rcq-lead-paragraph" style={{ marginTop: '20px' }}>
                                    A personalized quote can help coordinate these different requirements around one Celebrity sailing.
                                </p>
                            </div>
                            <div className="rcq-feature-image-col">
                                <div className="rcq-badge-overlay">
                                    <RcqIconSparkle size={14} />
                                    <span>Multi-Generational</span>
                                </div>
                                <RcqPlaceholder label="Celebrity Multi-Generational Cruise Quote" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUOTE OPTIONS: GROUP */}
                <section className="rcq-feature-section rcq-bg-white">
                    <div className="rcq-feature-container">
                        <div className="rcq-feature-grid">
                            <div className="rcq-feature-image-col">
                                <div className="rcq-badge-overlay">
                                    <RcqIconSparkle size={14} />
                                    <span>Group Quote</span>
                                </div>
                                <RcqPlaceholder label="Celebrity Group Cruise Quote" />
                            </div>
                            <div className="rcq-feature-copy-col">
                                <span className="rcq-eyebrow-label">QUOTE OPTIONS</span>
                                <h2 className="rcq-feature-title">Celebrity Group Cruise Quote</h2>
                                <p className="rcq-lead-paragraph">
                                    Planning a larger Celebrity cruise? A group quote can be useful for:
                                </p>
                                <div className="rcq-feature-list">
                                    {rcqGroupTypes.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="rcq-feature-item-card">
                                                <div className="rcq-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RcqIconCheck size={18} />}
                                                </div>
                                                <span className="rcq-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="rcq-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's group program generally applies to groups booking eight staterooms or more, with separate rules and planning options. For Galápagos group bookings, Celebrity's requirements can differ.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT INFORMATION DO WE NEED */}
                <section className="rcq-tag-section rcq-bg-soft">
                    <div className="rcq-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">GETTING STARTED</span>
                            <h2 className="rcq-section-heading">What Information Do We Need for a Celebrity Cruise Quote?</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                            <p className="rcq-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                You do not need to know every detail before submitting a request. Helpful information includes:
                            </p>
                        </div>
                        <div className="rcq-tag-grid">
                            {rcqInfoNeeded.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="rcq-tag-card">
                                        <div className="rcq-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <RcqIconDot size={20} />}
                                        </div>
                                        <span className="rcq-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="rcq-included-note">
                            If your dates are flexible, let us know — flexible dates can sometimes provide more options. A preferred budget range can help narrow the options, and you can provide either a per-person budget, total trip budget or approximate range.
                        </p>
                    </div>
                </section>

                {/* QUOTE REQUEST PROCESS */}
                <section className="rcq-steps-section">
                    <div className="rcq-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">HOW IT WORKS</span>
                            <h2 className="rcq-section-heading">Celebrity Cruise Quote Request Process</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                        </div>
                        <div className="rcq-steps-list">
                            {rcqSteps.map((step, idx) => (
                                <div key={idx} className="rcq-step-item">
                                    <div className="rcq-step-number">{idx + 1}</div>
                                    <div className="rcq-step-body">
                                        <h4 className="rcq-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="rcq-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="rcq-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="rcq-step-tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CELEBRITY CRUISE DESTINATIONS */}
                <section className="rcq-itinerary-section rcq-bg-soft">
                    <div className="rcq-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">WHERE TO GO</span>
                            <h2 className="rcq-section-heading">Celebrity Cruise Destinations</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                        </div>
                        <div className="rcq-itinerary-grid">
                            {rcqDestinations.map((dest, idx) => (
                                <div key={idx} className="rcq-itinerary-card" style={{ position: 'relative' }}>
                                    <div style={{ height: '4px', background: idx % 2 === 0 ? 'var(--rcq-green)' : 'var(--rcq-navy)', width: '100%', position: 'absolute', top: 0, left: 0, borderTopLeftRadius: '20px', borderTopRightRadius: '20px', zIndex: 10 }}></div>
                                    <h3 className="rcq-itinerary-region">
                                        <MapPin size={20} />
                                        {dest.name}
                                    </h3>
                                    <p className="rcq-lead-paragraph" style={{ marginBottom: '18px' }}>{dest.intro}</p>
                                    <ul className="rcq-itinerary-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', padding: '18px 30px 24px', flexGrow: 1 }}>
                                        {dest.bullets.map((b, bIdx) => (
                                            <li key={bIdx} style={{ width: 'fit-content', margin: 0 }}><RcqIconCheck size={16} className="rcq-included-icon" />{b}</li>
                                        ))}
                                    </ul>
                                    <p className="rcq-itinerary-note">{dest.highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SUITE WORTH THE UPGRADE */}
                <section className="rcq-worth-section rcq-dark-section">
                    <div className="rcq-worth-container">
                        <span className="rcq-eyebrow-label">SUITE QUOTES</span>
                        <h2 className="rcq-section-heading">Is a Celebrity Suite Worth the Upgrade?</h2>
                        <div className="rcq-heading-bar rcq-bar-center"></div>
                        <p className="rcq-lead-paragraph">
                            That depends on how you plan to use the ship. A suite may make sense when you value additional space, premium accommodations, suite-specific services, The Retreat experience, priority services and enhanced onboard amenities. A quote allows you to compare the suite price against other stateroom categories before making the decision.
                        </p>
                    </div>
                </section>

                {/* FAMILY & GROUP QUOTE — CHOICE BOARD */}
                <section className="rcq-choice-section">
                    <div className="rcq-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">FAMILY & GROUP PLANNING</span>
                            <h2 className="rcq-section-heading">Celebrity Cruise Quotes for Families & Groups</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                        </div>
                        <div className="rcq-choice-board">
                            <div className="rcq-choice-panel">
                                <h3 className="rcq-choice-title">
                                    <RcqIconCheck size={22} />
                                    Can I Request Multiple Rooms?
                                </h3>
                                <p className="rcq-lead-paragraph">
                                    Yes. If your family needs more than one stateroom, include the number of rooms and preferred configuration in the request. We can help explore:
                                </p>
                                <div className="rcq-choice-list">
                                    {rcqFamilyRooms.map((item, idx) => (
                                        <div key={idx} className="rcq-choice-item">
                                            <div className="rcq-choice-icon-wrap">
                                                <RcqIconCheck size={16} />
                                            </div>
                                            <div className="rcq-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rcq-choice-panel">
                                <h3 className="rcq-choice-title">
                                    <RcqIconCheck size={22} />
                                    When Should I Request a Group Quote?
                                </h3>
                                <p className="rcq-lead-paragraph">
                                    The earlier the better. Group travel requires more coordination than an individual booking. Early planning can provide more time to evaluate:
                                </p>
                                <div className="rcq-choice-list">
                                    {rcqGroupEvaluate.map((item, idx) => (
                                        <div key={idx} className="rcq-choice-item">
                                            <div className="rcq-choice-icon-wrap">
                                                <RcqIconCheck size={16} />
                                            </div>
                                            <div className="rcq-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="rcq-included-note">
                            Celebrity generally defines a standard group as eight staterooms or more.
                        </p>
                    </div>
                </section>

                {/* QUOTE VS BOOKING DIRECT — CHOICE BOARD */}
                <section className="rcq-choice-section" style={{ background: 'var(--rcq-bg-white)' }}>
                    <div className="rcq-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">MAKING THE RIGHT CHOICE</span>
                            <h2 className="rcq-section-heading">Celebrity Cruise Quote vs. Booking Direct</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                        </div>
                        <div className="rcq-choice-board">
                            <div className="rcq-choice-panel">
                                <h3 className="rcq-choice-title">
                                    <RcqIconCheck size={22} />
                                    Booking Directly
                                </h3>
                                <p className="rcq-lead-paragraph">
                                    Booking directly with the cruise line can be appropriate for travelers who already know exactly what they want.
                                </p>
                            </div>
                            <div className="rcq-choice-panel">
                                <h3 className="rcq-choice-title">
                                    <RcqIconCheck size={22} />
                                    Quote Through Trips & Ships
                                </h3>
                                <p className="rcq-lead-paragraph">
                                    A professional cruise planning service can be useful when you need help comparing:
                                </p>
                                <div className="rcq-choice-list">
                                    {rcqDirectVsQuote.map((item, idx) => (
                                        <div key={idx} className="rcq-choice-item">
                                            <div className="rcq-choice-icon-wrap">
                                                <RcqIconCheck size={16} />
                                            </div>
                                            <div className="rcq-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="rcq-included-note">
                            The advantage is having one person help evaluate the complete vacation instead of comparing every component independently.
                        </p>
                    </div>
                </section>

                {/* WHAT MAKES A GOOD QUOTE */}
                <section className="rcq-feature-section rcq-bg-soft">
                    <div className="rcq-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <span className="rcq-eyebrow-label">EVALUATING YOUR OPTIONS</span>
                            <h2 className="rcq-section-heading">What Makes a Good Celebrity Cruise Quote?</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                            <p className="rcq-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A useful quote should make it easy to understand more than the base cruise fare. We recommend evaluating:
                            </p>
                        </div>
                        <div className="rcq-feature-desc-list">
                            {rcqGoodQuote.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="rcq-feature-desc-card">
                                        <div className="rcq-feature-card-header">
                                            {IconComponent && <IconComponent size={20} className="rcq-feature-card-icon-inline" />}
                                            <h4 className="rcq-feature-desc-title">{idx + 1}. {item.name}</h4>
                                        </div>
                                        <p className="rcq-feature-desc-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WHAT YOU DON'T NEED TO KNOW */}
                <section className="rcq-audience-section rcq-bg-white">
                    <div className="rcq-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">NO PRESSURE</span>
                            <h2 className="rcq-section-heading">Celebrity Cruise Quote: What You Don't Need to Know</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                            <p className="rcq-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                You do not need to know the following before requesting a quote:
                            </p>
                        </div>
                        <div className="rcq-audience-column">
                            <ul className="rcq-audience-list">
                                {rcqDontNeedToKnow.map((item, idx) => (
                                    <li key={idx} className="rcq-audience-item">
                                        <RcqIconCheck size={18} className="rcq-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="rcq-itinerary-note" style={{ marginTop: '24px' }}>
                            That is part of the planning process. Simply provide the information you already know.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD REQUEST A QUOTE */}
                <section className="rcq-glance-section">
                    <div className="rcq-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="rcq-section-heading">Who Should Request a Celebrity Cruise Quote?</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                        </div>
                        <div className="rcq-glance-table">
                            {rcqWhoShould.map((row, idx) => (
                                <div key={idx} className="rcq-glance-row">
                                    <div className="rcq-glance-feature">{row.feature}</div>
                                    <div className="rcq-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* QUOTE CHECKLIST */}
                <section className="rcq-packing-section">
                    <div className="rcq-packing-container">
                        <div className="rcq-packing-header">
                            <span className="rcq-eyebrow-label">BEFORE YOU SUBMIT</span>
                            <h2 className="rcq-section-heading">Celebrity Cruise Quote Checklist</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                            <p className="rcq-lead-paragraph">
                                Before submitting your request, consider:
                            </p>
                        </div>
                        <div className="rcq-packing-checklist-board">
                            <div className="rcq-packing-checklist-grid">
                                {rcqChecklist.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <div key={idx} className="rcq-packing-item-row">
                                            <div className="rcq-packing-icon-box">
                                                {IconComponent ? <IconComponent size={18} /> : <RcqIconDot size={18} />}
                                            </div>
                                            <span className="rcq-packing-item-text">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <p className="rcq-packing-footer-note">
                            You can provide as much or as little information as you currently know.
                        </p>
                    </div>
                </section>

                {/* EXPERT INSIGHT */}
                <section id="celebrity-cruise-quote-insight" className="rcq-editorial-section">
                    <div className="rcq-editorial-container">
                        <div className="rcq-editorial-split-grid">

                            {/* Profile Sidebar */}
                            <div className="rcq-editorial-profile-sidebar">
                                <div className="rcq-editorial-avatar-wrap">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="rcq-editorial-avatar" />
                                </div>

                                <div className="rcq-editorial-bio">
                                    <h4 className="rcq-editorial-bio-name">Angela Hughes</h4>
                                    <p className="rcq-editorial-bio-title">Founder & CEO, Trips & Ships Luxury Travel</p>
                                </div>

                                <div className="rcq-editorial-stats-row">
                                    <div className="rcq-editorial-stat-badge">
                                        <strong>40+</strong> Years Experience
                                    </div>
                                    <div className="rcq-editorial-stat-badge">
                                        <strong>120+</strong> Countries Visited
                                    </div>
                                </div>

                                <div className="rcq-editorial-expertise-box">
                                    <span className="rcq-editorial-expertise-label">Her expertise spans:</span>
                                    <div className="rcq-editorial-expertise-list">
                                        {[
                                            'Premium & luxury cruising',
                                            'Personalized cruise planning & quote comparison',
                                            'Celebrity ship & itinerary planning',
                                            'Suite & stateroom selection',
                                            'Family & group cruise coordination'
                                        ].map((item, idx) => (
                                            <div key={idx} className="rcq-editorial-expertise-item">
                                                <RcqIconDot size={10} className="rcq-editorial-dot" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Main Insight Content */}
                            <div className="rcq-editorial-main-content">
                                <div className="rcq-editorial-header">
                                    <div className="rcq-editorial-eyebrow-container">
                                        <RcqIconAward size={16} className="rcq-editorial-icon-badge" />
                                        <span className="rcq-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="rcq-editorial-heading">
                                        What Makes a Celebrity Cruise Quote Worth It?
                                    </h2>
                                    <div className="rcq-editorial-heading-line"></div>
                                </div>

                                <p className="rcq-editorial-lead-para">
                                    A good cruise quote is not just a price — it is a complete comparison.
                                </p>

                                <div className="rcq-editorial-quote-box">
                                    <p className="rcq-editorial-quote-text">
                                        When clients ask me what actually matters in a Celebrity cruise quote, I tell them to look past the base cruise fare and evaluate the total cost, the cabin category, the location, the itinerary, current promotions, loyalty benefits and the flexibility of the fare conditions. A lower fare is not always the better choice if the cabin, itinerary or flexibility does not fit what you actually need. That is how you find the right Celebrity cruise for your trip, not just the cheapest advertised price.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY PLAN WITH TRIPS & SHIPS */}
                <section className="rcq-why-book-section rcq-why-book-dark">
                    <div className="rcq-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="rcq-section-heading">Why Use Trips & Ships Luxury Travel?</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                            <p className="rcq-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Trips & Ships Luxury Travel focuses on personalized cruise planning rather than simply providing a cruise fare. We can help you evaluate the complete trip. Our planning can include:
                            </p>
                        </div>
                        <div className="rcq-why-book-grid">
                            {rcqPlanningInclude.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="rcq-why-book-card">
                                        <div className="rcq-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <RcqIconDot size={20} />}
                                        </div>
                                        <h4 className="rcq-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="rcq-faq-section">
                    <div className="rcq-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="rcq-section-heading">Frequently Asked Questions</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                        </div>
                        <div className="rcq-faq-list">
                            {rcqFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="rcq-faq-item"
                                    onClick={() => rcqToggleFaq(index)}
                                >
                                    <div className="rcq-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="rcq-faq-toggle">
                                            {rcqActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {rcqActiveFaq === index && (
                                        <p className="rcq-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED CONTENT */}
                <section className="rcq-related-section">
                    <div className="rcq-related-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="rcq-eyebrow-label">KEEP EXPLORING</span>
                            <h2 className="rcq-section-heading">Related Celebrity Cruise Guides</h2>
                            <div className="rcq-heading-bar rcq-bar-center"></div>
                        </div>
                        <div className="rcq-related-grid">
                            {rcqRelated.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <Link key={idx} to={item.link} className="rcq-related-card">
                                        <div className="rcq-related-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <RcqIconDot size={20} />}
                                        </div>
                                        <h3 className="rcq-related-title">{item.title}</h3>
                                        <p className="rcq-related-desc">{item.desc}</p>
                                        <span className="rcq-related-link">Read More →</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* FINAL VERDICT */}
                <section className="rcq-worth-section rcq-bg-soft">
                    <div className="rcq-worth-container">
                        <span className="rcq-eyebrow-label">FINAL VERDICT</span>
                        <h2 className="rcq-section-heading">Final Verdict</h2>
                        <div className="rcq-heading-bar rcq-bar-center"></div>
                        <p className="rcq-lead-paragraph">
                            A Celebrity Cruise Quote is most useful when you want more than a basic cruise price. Whether you are planning an individual vacation, a suite experience, a family cruise, a multi-generational trip or a larger group, the right planning process can help you compare the complete vacation. Trips & Ships Luxury Travel can help evaluate Celebrity ships, destinations, itineraries, staterooms, suites, current offers, Captain's Club benefits, family arrangements, group opportunities, hotels, transfers and pre- and post-cruise travel.
                        </p>
                        <p className="rcq-lead-paragraph" style={{ fontWeight: 600 }}>
                            Instead of starting with a single cabin price, start with what you want your Celebrity vacation to look like.
                        </p>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="rcq-cta-section">
                    <div className="rcq-cta-bg-pattern"></div>
                    <div className="rcq-cta-inner">
                        <h2 className="rcq-cta-heading">Request Your Celebrity Cruise Quote</h2>
                        <div className="rcq-cta-separator"></div>
                        <p className="rcq-cta-text">
                            Ready to start planning your Celebrity cruise? Tell Trips & Ships Luxury Travel about your destination, dates, travelers, preferred accommodations and budget. We'll help you explore the Celebrity cruise options that fit your trip.
                        </p>
                        <div className="rcq-cta-btn-row">
                            <Link to="/contact" className="rcq-btn-primary">
                                <RcqIconPhone size={18} />
                                Request My Celebrity Cruise Quote
                            </Link>
                            <Link to="/contact" className="rcq-btn-outline">
                                <RcqIconList size={18} />
                                Start My Celebrity Cruise Planning
                            </Link>
                            <Link to="/contact" className="rcq-btn-outline">
                                <RcqIconSparkle size={18} />
                                Plan My Celebrity Suite or Group Cruise
                            </Link>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default RequestCelebrityCruiseQuote