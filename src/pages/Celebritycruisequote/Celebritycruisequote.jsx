import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebritycruisequote.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Users,
    Heart,
    Crown,
    Home,
    Layers,
    Building2,
    Globe,
    Ship,
    Calendar,
    Wallet,
    ClipboardList,
    CheckCircle,
    MapPin,
    Compass,
    Plane,
    Hotel,
    Car,
    Anchor,
    Star,
    Repeat,
    Sliders,
    Handshake,
    Gift,
    Sparkles,
    UserCheck,
    Award,
    Percent,
    Utensils,
    ShieldCheck,
    Tag,
    Landmark,
    TreePalm,
    Mountain,
    Snowflake,
    Waves
} from 'lucide-react'

const iconMap = {
    Users, Heart, Crown, Home, Layers, Building2, Globe, Ship, Calendar, Wallet,
    ClipboardList, CheckCircle, MapPin, Compass, Plane, Hotel, Car, Anchor, Star,
    Repeat, Sliders, Handshake, Gift, Sparkles, UserCheck, Award, Percent,
    Utensils, ShieldCheck, Tag, Landmark, TreePalm, Mountain, Snowflake, Waves
}

/* ============================================================
   INLINE SVG ICONS (no lucide-react dependency for these — plain inline)
   ============================================================ */
function CcqrIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CcqrIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CcqrIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CcqrIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CcqrIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CcqrIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CcqrIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

function CcqrIconArrow({ size = 14 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CcqrPlaceholder({ label, className = '' }) {
    return (
        <div className={`ccqr-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CcqrIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function Celebritycruisequote() {
    const [ccqrActiveFaq, setCcqrActiveFaq] = useState(null)
    const [ccqrActiveOption, setCcqrActiveOption] = useState('individual')
    const [ccqrActiveWhyIndex, setCcqrActiveWhyIndex] = useState(0)
    const [ccqrActiveInfoIndex, setCcqrActiveInfoIndex] = useState(0)
    const ccqrToggleFaq = (index) => {
        setCcqrActiveFaq(ccqrActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const ccqrQuoteFor = [
        'Individual Celebrity cruises', 'Couples cruises', 'Celebrity suites', 'Family cruises',
        'Multi-generational cruises', 'Group cruises', 'Luxury cruise vacations', 'Celebrity Caribbean cruises',
        'Celebrity Mediterranean cruises', 'Celebrity Alaska cruises', 'Celebrity European cruises',
        'Celebrity expedition cruises', 'Pre- and post-cruise stays', 'Customized cruise vacations'
    ]

    const ccqrWhyRequest = [
        { label: 'Which Celebrity ships fit your travel style', icon: 'Ship' },
        { label: 'Which itineraries match your dates', icon: 'Calendar' },
        { label: 'Which stateroom category makes sense', icon: 'Home' },
        { label: 'Whether a suite is worthwhile', icon: 'Crown' },
        { label: 'Which current offers may apply', icon: 'Tag' },
        { label: 'Whether a group booking may be advantageous', icon: 'Users' },
        { label: 'Which departure port is most convenient', icon: 'MapPin' },
        { label: 'Whether pre- or post-cruise stays should be added', icon: 'Hotel' },
        { label: 'What the overall vacation may cost', icon: 'Wallet' }
    ]

    const ccqrOptions = {
        individual: {
            name: 'Individual Celebrity Cruise Quote',
            intro: 'Traveling solo or as a couple? We can help compare Celebrity sailings based on:',
            benefits: [
                { label: 'Destination', icon: 'Globe' },
                { label: 'Travel dates', icon: 'Calendar' },
                { label: 'Cruise length', icon: 'Compass' },
                { label: 'Ship', icon: 'Ship' },
                { label: 'Stateroom', icon: 'Home' },
                { label: 'Budget', icon: 'Wallet' },
                { label: 'Preferred itinerary', icon: 'MapPin' },
                { label: 'Onboard experience', icon: 'Sparkles' }
            ],
            footer: 'Whether you already know the sailing you want or are still exploring options, a quote request gives us the information needed to begin planning.'
        },
        suite: {
            name: 'Celebrity Suite Cruise Quote',
            intro: 'Interested in a suite? Celebrity offers multiple suite categories, including accommodations within The Retreat on eligible ships. A suite quote can help you compare:',
            benefits: [
                { label: 'Suite category', icon: 'Crown' },
                { label: 'Location', icon: 'MapPin' },
                { label: 'Size', icon: 'Layers' },
                { label: 'Balcony or outdoor space', icon: 'Compass' },
                { label: 'Included services', icon: 'Handshake' },
                { label: 'Suite amenities', icon: 'Sparkles' },
                { label: 'The Retreat benefits', icon: 'Star' },
                { label: 'Overall value', icon: 'Award' }
            ],
            footer: 'For travelers considering a significant upgrade, we can help compare the additional cost against the benefits included with the suite.'
        },
        family: {
            name: 'Celebrity Family Cruise Quote',
            intro: 'Celebrity Cruises can be an option for families looking for a vacation that combines destinations, onboard activities and accommodations in one trip. A family quote can take into account:',
            benefits: [
                { label: 'Number of adults', icon: 'Users' },
                { label: 'Number of children', icon: 'UserCheck' },
                { label: 'Stateroom requirements', icon: 'Home' },
                { label: 'Connecting-room preferences', icon: 'Layers' },
                { label: 'Family-friendly itineraries', icon: 'MapPin' },
                { label: 'Dining preferences', icon: 'Utensils' },
                { label: 'Shore excursions', icon: 'Compass' },
                { label: 'Travel dates', icon: 'Calendar' },
                { label: 'Budget', icon: 'Wallet' }
            ],
            footer: 'We can also help compare whether booking multiple staterooms or a larger accommodation makes the most sense.'
        },
        multigen: {
            name: 'Celebrity Multi-Generational Cruise Quote',
            intro: 'Multi-generational cruise planning can be more complicated because different travelers may have different priorities. For example:',
            benefits: [
                { label: 'Grandparents may prioritize comfort', icon: 'Heart' },
                { label: 'Parents may prioritize convenience', icon: 'ShieldCheck' },
                { label: 'Children may want activities', icon: 'Sparkles' },
                { label: 'Couples may prefer upgraded accommodations', icon: 'Crown' },
                { label: 'Some travelers may want more independent time', icon: 'Compass' }
            ],
            footer: 'A personalized quote can help coordinate these different requirements around one Celebrity sailing.'
        },
        group: {
            name: 'Celebrity Group Cruise Quote',
            intro: 'Planning a larger Celebrity cruise? A group quote can be useful for:',
            benefits: [
                { label: 'Family reunions', icon: 'Users' },
                { label: 'University alumni groups', icon: 'Landmark' },
                { label: 'Corporate travel', icon: 'Building2' },
                { label: 'Friends traveling together', icon: 'UserCheck' },
                { label: 'Celebration cruises', icon: 'Sparkles' },
                { label: 'Anniversary groups', icon: 'Heart' },
                { label: 'Birthday groups', icon: 'Gift' },
                { label: 'Wedding-related travel', icon: 'Star' },
                { label: 'Associations', icon: 'Handshake' },
                { label: 'Clubs', icon: 'Award' },
                { label: 'Special-interest groups', icon: 'Sliders' }
            ],
            footer: "Celebrity's group program generally applies to groups booking eight staterooms or more, with separate rules and planning options. For Gal\u00e1pagos group bookings, Celebrity's requirements can differ."
        }
    }

    const ccqrDestinationInfo = [
        { label: 'Caribbean', icon: 'TreePalm' },
        { label: 'Mediterranean', icon: 'Waves' },
        { label: 'Alaska', icon: 'Mountain' },
        { label: 'Northern Europe', icon: 'Snowflake' },
        { label: 'Canada & New England', icon: 'MapPin' },
        { label: 'South America', icon: 'Globe' },
        { label: 'Gal\u00e1pagos', icon: 'Compass' },
        { label: 'Expedition destinations', icon: 'Anchor' }
    ]

    const ccqrTravelerInfo = [
        'Number of adults', 'Number of children', 'Number of staterooms', 'Whether you are traveling as a group'
    ]

    const ccqrStateroomPrefs = [
        { label: 'Inside', icon: 'Home' },
        { label: 'Ocean View', icon: 'Waves' },
        { label: 'Veranda', icon: 'Compass' },
        { label: 'Concierge Class', icon: 'Star' },
        { label: 'AquaClass', icon: 'Sparkles' },
        { label: 'Suite', icon: 'Crown' },
        { label: 'The Retreat', icon: 'Award' }
    ]

    const ccqrBudgetOptions = [
        'Per-person budget', 'Total trip budget', 'Approximate range'
    ]

    const ccqrSpecialRequirements = [
        { label: 'Accessible accommodation', icon: 'ShieldCheck' },
        { label: 'Connecting staterooms', icon: 'Layers' },
        { label: 'Specific deck', icon: 'MapPin' },
        { label: 'Midship location', icon: 'Compass' },
        { label: 'Larger balcony', icon: 'Home' },
        { label: 'Suite', icon: 'Crown' },
        { label: 'Dining preferences', icon: 'Utensils' },
        { label: 'Pre-cruise hotel', icon: 'Hotel' },
        { label: 'Post-cruise hotel', icon: 'Hotel' },
        { label: 'Private transfers', icon: 'Car' }
    ]

    const ccqrProcessSteps = [
        { title: 'Tell Us About Your Trip', desc: 'Submit your travel preferences through the quote request form. Include your:', tags: ['Destination', 'Dates', 'Number of travelers', 'Stateroom preference', 'Budget', 'Special requests'] },
        { title: 'We Review Your Requirements', desc: 'We use your information to understand what type of Celebrity vacation you are looking for. If your dates are flexible, we can consider additional sailing possibilities.', tags: [] },
        { title: 'Compare Celebrity Cruise Options', desc: 'We can evaluate options based on:', tags: ['Ship', 'Itinerary', 'Sailing date', 'Stateroom', 'Pricing', 'Promotions', 'Location', 'Overall trip value'] },
        { title: 'Review Your Personalized Options', desc: 'You can review the options and decide which Celebrity cruise best fits your priorities. There is no need to choose a sailing before requesting a quote.', tags: [] },
        { title: 'Plan the Rest of the Vacation', desc: 'If needed, we can also help coordinate:', tags: ['Flights', 'Hotels', 'Transfers', 'Shore excursions', 'Pre-cruise stays', 'Post-cruise stays', 'Land extensions', 'Group arrangements'] }
    ]

    const ccqrIncludedTable = [
        { feature: 'Celebrity cruise', detail: 'Yes' },
        { feature: 'Cruise stateroom', detail: 'Yes' },
        { feature: 'Suite', detail: 'Yes' },
        { feature: 'Family accommodations', detail: 'Yes' },
        { feature: 'Group accommodations', detail: 'Yes' },
        { feature: 'Cruise promotions', detail: 'Reviewed' },
        { feature: "Captain's Club benefits", detail: 'Reviewed' },
        { feature: 'Flights', detail: 'If requested' },
        { feature: 'Hotels', detail: 'If requested' },
        { feature: 'Transfers', detail: 'If requested' },
        { feature: 'Shore excursions', detail: 'If requested' },
        { feature: 'Pre-cruise stay', detail: 'If requested' },
        { feature: 'Post-cruise stay', detail: 'If requested' },
        { feature: 'Land extensions', detail: 'If applicable' }
    ]

    const ccqrDestinations = [
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
            intro: 'Celebrity offers European itineraries across multiple regions. Depending on the sailing, travelers may explore:',
            bullets: ['Scandinavia', 'British Isles', 'Northern Europe', 'Mediterranean Europe'],
            highlight: 'A quote can help match the itinerary to your available vacation time.'
        },
        {
            name: 'Celebrity Gal\u00e1pagos Cruise Quote',
            intro: 'For travelers interested in expedition travel, a Gal\u00e1pagos quote can include planning around:',
            bullets: ['Celebrity Flora', 'Gal\u00e1pagos itineraries', 'Suite accommodations', 'Expedition activities', 'Quito stays', 'Transfers', 'Longer South American journeys'],
            highlight: 'Gal\u00e1pagos planning is different from a conventional ocean cruise and may require additional land arrangements.'
        }
    ]

    const ccqrSuiteValues = [
        { label: 'Additional space', icon: 'Layers' },
        { label: 'Premium accommodations', icon: 'Crown' },
        { label: 'Suite-specific services', icon: 'Handshake' },
        { label: 'The Retreat experience', icon: 'Star' },
        { label: 'Priority services', icon: 'ShieldCheck' },
        { label: 'Enhanced onboard amenities', icon: 'Sparkles' }
    ]

    const ccqrFamilyRoomOptions = [
        { label: 'Multiple nearby rooms', icon: 'Home' },
        { label: 'Connecting accommodations where available', icon: 'Layers' },
        { label: 'Family room configurations', icon: 'Users' },
        { label: 'Suite options', icon: 'Crown' },
        { label: 'Different cabin categories for different travelers', icon: 'Sliders' }
    ]

    const ccqrGroupEvaluate = [
        { label: 'Cabin availability', icon: 'Home' },
        { label: 'Group pricing', icon: 'Tag' },
        { label: 'Dining arrangements', icon: 'Utensils' },
        { label: 'Group events', icon: 'Sparkles' },
        { label: 'Shore excursions', icon: 'Compass' },
        { label: 'Payment schedules', icon: 'Wallet' },
        { label: 'Special requests', icon: 'ClipboardList' }
    ]

    const ccqrQuoteVsBooking = [
        { quote: 'Compares ships, cabins and itineraries', direct: 'Assumes you already know exactly what you want' },
        { quote: 'Reviews promotions and loyalty benefits', direct: 'Applies whatever the direct channel shows' },
        { quote: 'Evaluates group options', direct: 'Handled separately if needed' },
        { quote: 'Coordinates pre- and post-cruise arrangements', direct: 'Typically booked independently' },
        { quote: 'One person evaluates the complete vacation', direct: 'Each component compared independently' }
    ]

    const ccqrWhyUsInclude = [
        { title: 'Celebrity Ship Selection', icon: 'Ship' },
        { title: 'Itinerary Comparison', icon: 'Compass' },
        { title: 'Stateroom Selection', icon: 'Home' },
        { title: 'Suite Planning', icon: 'Crown' },
        { title: 'Family Travel', icon: 'Users' },
        { title: 'Multi-Generational Travel', icon: 'Heart' },
        { title: 'Group Cruise Planning', icon: 'Building2' },
        { title: 'Celebrity Offers', icon: 'Tag' },
        { title: "Captain's Club Benefits", icon: 'Award' },
        { title: 'Pre-Cruise Hotels', icon: 'Hotel' },
        { title: 'Post-Cruise Hotels', icon: 'Hotel' },
        { title: 'Transfers', icon: 'Car' },
        { title: 'Shore Excursions', icon: 'MapPin' },
        { title: 'Land Extensions', icon: 'Globe' }
    ]

    const ccqrGoodQuoteSteps = [
        { title: 'Total Cost', desc: 'Look at the overall vacation cost.', tags: [] },
        { title: 'Cabin Category', desc: 'A lower fare may not be the best choice if the cabin does not meet your needs.', tags: [] },
        { title: 'Location', desc: 'Deck and cabin location can influence your onboard experience.', tags: [] },
        { title: 'Itinerary', desc: 'Compare the actual ports and time in each destination.', tags: [] },
        { title: 'Promotions', desc: 'Review current eligible offers.', tags: [] },
        { title: 'Loyalty Benefits', desc: "If you have Captain's Club status, check which benefits apply.", tags: [] },
        { title: 'Flexibility', desc: 'Consider cancellation, change and fare conditions.', tags: [] },
        { title: 'Complete Vacation', desc: 'Include flights, hotels and transfers if required.', tags: [] }
    ]

    const ccqrDontNeedToKnow = [
        'Which ship is best', 'Which cabin category is best', 'Which itinerary is best', 'Whether a suite is worth it',
        'Which promotion applies', 'Whether you need a group booking', 'Which departure port is most convenient'
    ]

    const ccqrWhoShould = [
        { feature: 'First-Time Celebrity Cruisers', detail: 'If you have never sailed Celebrity, professional guidance can help you understand the differences between ships, accommodations and itineraries.' },
        { feature: 'Couples', detail: 'Compare destinations, cabin categories and suite options.' },
        { feature: 'Families', detail: 'Coordinate multiple travelers and stateroom requirements.' },
        { feature: 'Multi-Generational Groups', detail: 'Balance different travel preferences within one vacation.' },
        { feature: 'Luxury Travelers', detail: 'Compare suites and premium experiences.' },
        { feature: 'Group Leaders', detail: 'Coordinate multiple staterooms and group requirements.' },
        { feature: 'Repeat Celebrity Guests', detail: "Review current offers alongside Captain's Club benefits." }
    ]

    const ccqrChecklist = [
        'Where do you want to cruise?', 'When do you want to travel?', 'How many people are traveling?',
        'How many staterooms do you need?', 'What is your approximate budget?', 'Do you want a suite?',
        'Do you have flexible dates?', 'Do you have a preferred ship?', "Do you have Captain's Club status?",
        'Are you traveling as a group?', 'Do you need flights?', 'Do you need hotels?', 'Do you need transfers?',
        'Do you want pre- or post-cruise travel?'
    ]

    const ccqrFaqs = [
        { question: '1. How do I request a Celebrity Cruise quote?', answer: 'Complete the Celebrity Cruise quote request form with your destination, travel dates, number of travelers, stateroom preference and any other requirements. A personalized cruise planning process can then begin.' },
        { question: '2. Can I request a Celebrity cruise quote if I don\u2019t know which ship I want?', answer: 'Yes. You can provide your destination, dates and general preferences, and the planning process can help narrow down suitable Celebrity ships and itineraries.' },
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
        { question: '13. Can Captain\u2019s Club benefits be considered?', answer: "Yes. If you are a Captain's Club member, provide your loyalty information so applicable benefits can be considered during the planning process." },
        { question: '14. Can I request a quote if my travel dates are flexible?', answer: 'Yes. Flexible dates can provide more opportunities to compare different Celebrity sailings, ships, cabins and pricing.' },
        { question: '15. Is requesting a Celebrity Cruise quote the same as booking?', answer: 'No. A quote request is the beginning of the planning process. You can review the available options before deciding whether to proceed with a booking.' }
    ]

    const ccqrRelated = [
        { title: "Celebrity Offers & Captain's Club Benefits", desc: 'Explore current Celebrity promotions, loyalty tiers, status match and milestone rewards.', icon: 'Award', link: '/celebrity-cruises/offers-loyalty' },
        { title: 'Celebrity Alaska Cruises: Complete Guide', desc: 'Ships, glacier itineraries, Inside Passage sailing and Cruisetours across Celebrity\u2019s Alaska program.', icon: 'Mountain', link: '/celebrity-cruises/alaska' },
        { title: 'Celebrity Caribbean Cruises Guide', desc: 'Compare Celebrity\u2019s Caribbean ships, itineraries, private destinations and stateroom categories.', icon: 'TreePalm', link: '/celebrity-cruises/caribbean' },
        { title: 'Celebrity AquaClass vs. Concierge Class', desc: 'A side-by-side comparison of Celebrity\u2019s two elevated stateroom categories and their included amenities.', icon: 'Layers', link: '/celebrity-cruises/aquaclass-vs-concierge-class' },
        { title: 'Celebrity Beyond Cruise Ship Guide', desc: 'Deck plans, staterooms, dining and The Retreat aboard Celebrity\u2019s Edge Series ship.', icon: 'Ship', link: '/celebrity-cruises/ships/celebrity-beyond' }
    ]

    /* ---------------- SCHEMA (content unchanged from source) ---------------- */

    const ccqrSchemaData = {
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
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/#article" }
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
                "mainEntity": ccqrFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question.replace(/^\d+\.\s*/, ''),
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    const ccqrActiveOptionData = ccqrOptions[ccqrActiveOption]

    return (
        <>
            <Helmet>
                <title>Celebrity Cruise Quote | Get a Personalized Cruise Plan</title>
                <meta name="title" content="Request a Celebrity Cruise Quote | Personalized Cruise Planning" />
                <meta
                    name="description"
                    content="Request a personalized Celebrity Cruises quote for individual, suite, family or group travel. Compare ships, itineraries, cabins, offers and cruise options with expert planning."
                />
                <script type="application/ld+json">
                    {JSON.stringify(ccqrSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="ccqr-page-wrapper">

                {/* HERO SECTION */}
                <section className="ccqr-hero-section">
                    <div className="ccqr-hero-overlay"></div>
                    <div className="ccqr-hero-content">
                        <div className="ccqr-hero-tag">
                            <CcqrIconSparkle size={16} />
                            <span>Personalized Cruise Planning</span>
                        </div>
                        <h1 className="ccqr-hero-title">Request a Celebrity <br /> Cruise Quote</h1>
                        <p className="ccqr-hero-subtitle">
                            Get a Personalized Celebrity Cruise Plan
                        </p>
                        <div className="ccqr-hero-btn-row">
                            <Link to='/contact' className="ccqr-btn-primary">
                                <CcqrIconPhone size={18} />
                                Request My Celebrity Cruise Quote
                            </Link>
                            <button className="ccqr-btn-outline">
                                <CcqrIconList size={18} />
                                Start My Celebrity Cruise Planning
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="ccqr-intro-section">
                    <div className="ccqr-intro-container">
                        <div className="ccqr-intro-grid">
                            <div className="ccqr-intro-copy">
                                <span className="ccqr-eyebrow-label">PERSONALIZED CELEBRITY PLANNING</span>
                                <h2 className="ccqr-section-heading">Get a Personalized Celebrity Cruise Plan</h2>
                                <div className="ccqr-heading-bar"></div>
                                <p className="ccqr-lead-paragraph">
                                    Planning a Celebrity Cruises vacation involves more than choosing a ship and departure date.
                                </p>
                                <p className="ccqr-lead-paragraph">
                                    Your ideal cruise can depend on your destination, travel dates, stateroom category, number of travelers, budget, onboard preferences and whether you are traveling individually, with family or as a larger group.
                                </p>
                                <p className="ccqr-lead-paragraph">
                                    Request a Celebrity Cruise Quote and let Trips & Ships Luxury Travel help you compare the options that fit your trip.
                                </p>
                                <p className="ccqr-lead-paragraph">
                                    We can help with individual cruises, suites, family vacations, multi-generational travel and group cruises, along with pre- and post-cruise planning.
                                </p>
                            </div>
                            <div className="ccqr-intro-image-frame">
                                <CcqrPlaceholder label="Request a Celebrity Cruise Quote" />
                                <div className="ccqr-intro-badge-float">
                                    <CcqrIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Personalized Planning</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="ccqr-quick-answer-section">
                    <div className="ccqr-quick-answer-container">
                        <div className="ccqr-quick-answer-card">
                            <h3 className="ccqr-quick-answer-title">What Can I Request a Celebrity Cruise Quote For?</h3>
                            <p className="ccqr-quick-answer-text">
                                You can request a personalized quote for:
                            </p>
                            <ul className="ccqr-quick-answer-list">
                                {ccqrQuoteFor.map((item, idx) => (
                                    <li key={idx}><CcqrIconCheck size={16} />{item}</li>
                                ))}
                            </ul>
                            <p className="ccqr-quick-answer-text" style={{ marginTop: '18px' }}>
                                Tell us what you are looking for, and we can help narrow the choices based on your travel priorities.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="ccqr-inline-cta-section">
                    <div className="ccqr-inline-cta-container">
                        <span className="ccqr-inline-cta-tag">Expert Planning</span>
                        <p className="ccqr-inline-cta-text">Ready to start planning your Celebrity cruise?</p>
                        <div className="ccqr-inline-cta-btn-row">
                            <Link to="/contact" className="ccqr-btn-primary">
                                <CcqrIconPhone size={18} />
                                Request My Celebrity Cruise Quote
                            </Link>
                            <Link to="/contact" className="ccqr-btn-outline-navy">
                                <CcqrIconList size={18} />
                                Start My Celebrity Cruise Planning
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY REQUEST A QUOTE */}
                <section className="ccqr-tag-section ccqr-bg-white">
                    <div className="ccqr-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">THE VALUE OF A QUOTE</span>
                            <h2 className="ccqr-section-heading">Why Request a Celebrity Cruise Quote?</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                            <p className="ccqr-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Cruises offers a wide range of ships, destinations, stateroom categories and itinerary lengths. Comparing everything independently can become time-consuming. A personalized quote can help you understand:
                            </p>
                        </div>
                        
                        <div className="ccqr-interactive-panel">
                            {/* Left List Pane */}
                            <div className="ccqr-why-list">
                                {ccqrWhyRequest.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon];
                                    const isActive = ccqrActiveWhyIndex === idx;
                                    return (
                                        <div
                                            key={idx}
                                            className={`ccqr-why-item ${isActive ? 'active' : ''}`}
                                            onMouseEnter={() => setCcqrActiveWhyIndex(idx)}
                                            onClick={() => setCcqrActiveWhyIndex(idx)}
                                        >
                                            <div className="ccqr-why-num">
                                                {String(idx + 1).padStart(2, '0')}
                                            </div>
                                            <div className="ccqr-why-item-icon">
                                                {IconComponent ? <IconComponent size={18} /> : <CcqrIconDot size={18} />}
                                            </div>
                                            <span className="ccqr-why-item-label">{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Right Dynamic Preview Pane */}
                            <div className="ccqr-preview-pane">
                                <div className="ccqr-preview-card-wrapper">
                                    <div className="ccqr-preview-header">
                                        <span className="ccqr-preview-tag">Quote Insight #{ccqrActiveWhyIndex + 1}</span>
                                        <h4 className="ccqr-preview-title">
                                            {ccqrWhyRequest[ccqrActiveWhyIndex].label}
                                        </h4>
                                    </div>
                                    <div className="ccqr-preview-body">
                                        {ccqrActiveWhyIndex === 0 && (
                                            <div className="ccqr-mock-visualization ship-comp">
                                                <div className="mock-ship-card premium">
                                                    <div className="mock-ship-title">Ship Fit Analysis</div>
                                                    <div className="mock-ship-detail">Edge Series class vs. Solstice class suitability</div>
                                                    <div className="mock-ship-bar-graph">
                                                        <div className="mock-bar-item">
                                                            <span>Onboard Tech &amp; Design</span>
                                                            <div className="mock-bar-bg"><div className="mock-bar-fill" style={{ width: '95%' }}></div></div>
                                                        </div>
                                                        <div className="mock-bar-item">
                                                            <span>Relaxed, Classic Vibe</span>
                                                            <div className="mock-bar-bg"><div className="mock-bar-fill" style={{ width: '85%' }}></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {ccqrActiveWhyIndex === 1 && (
                                            <div className="ccqr-mock-visualization itinerary-check">
                                                <div className="mock-calendar-card">
                                                    <div className="mock-calendar-header">Optimal Sailings Map</div>
                                                    <div className="mock-calendar-days">
                                                        <div className="mock-day flex-row">
                                                            <span className="mock-day-num">June</span>
                                                            <div className="mock-day-desc">
                                                                <strong>7-Night Western Caribbean</strong>
                                                                <span>Perfect weather &amp; minimal school crowds</span>
                                                            </div>
                                                        </div>
                                                        <div className="mock-day flex-row active">
                                                            <span className="mock-day-num">Sept</span>
                                                            <div className="mock-day-desc">
                                                                <strong>10-Night Eastern Med</strong>
                                                                <span>Excellent shoulder-season port timing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {ccqrActiveWhyIndex === 2 && (
                                            <div className="ccqr-mock-visualization stateroom-select">
                                                <div className="mock-cabin-grid">
                                                    <div className="mock-cabin-item active">
                                                        <div className="mock-cabin-header">
                                                            <span>Infinite Veranda</span>
                                                            <span className="price-tag">Recommended</span>
                                                        </div>
                                                        <p>Single button transforms your entire stateroom into an open-air veranda.</p>
                                                    </div>
                                                    <div className="mock-cabin-item">
                                                        <div className="mock-cabin-header">
                                                            <span>Sunset Veranda</span>
                                                        </div>
                                                        <p>Aft-facing staterooms offering spectacular wake views and larger balconies.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {ccqrActiveWhyIndex === 3 && (
                                            <div className="ccqr-mock-visualization retreat-worth">
                                                <div className="mock-retreat-card">
                                                    <div className="mock-retreat-header">
                                                        <span className="retreat-badge">The Retreat®</span>
                                                        <strong>VIP Inclusions Evaluated</strong>
                                                    </div>
                                                    <ul className="mock-retreat-list">
                                                        <li><span>✓</span> Luminae Private Fine Dining Restaurant</li>
                                                        <li><span>✓</span> Access to The Retreat Lounge &amp; Sundeck</li>
                                                        <li><span>✓</span> Butler &amp; Dedicated Concierge Services</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                        {ccqrActiveWhyIndex === 4 && (
                                            <div className="ccqr-mock-visualization offer-tag">
                                                <div className="mock-coupon-card">
                                                    <div className="coupon-header">Applicable Offer Audit</div>
                                                    <div className="coupon-discount">All Offers Checked</div>
                                                    <div className="coupon-sub text-center">BOGO 60% Off 2nd Guest + Drinks/Wi-Fi perks verified</div>
                                                    <div className="coupon-code">OFFER APPLIED: BESTRATE-US</div>
                                                </div>
                                            </div>
                                        )}
                                        {ccqrActiveWhyIndex === 5 && (
                                            <div className="ccqr-mock-visualization group-adv">
                                                <div className="mock-group-perks">
                                                    <div className="group-header">Group Benefits Calculator (8+ Staterooms)</div>
                                                    <div className="group-grid">
                                                        <div className="group-stat-box">
                                                            <div className="stat-val">TC</div>
                                                            <div className="stat-lbl">Tour Conductor berth credit</div>
                                                        </div>
                                                        <div className="group-stat-box">
                                                            <div className="stat-val">GAP</div>
                                                            <div className="stat-lbl">Onboard credit / party points</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {ccqrActiveWhyIndex === 6 && (
                                            <div className="ccqr-mock-visualization port-map">
                                                <div className="mock-ports-card">
                                                    <div className="ports-title">Convenient Departure Ports</div>
                                                    <ul className="ports-locations">
                                                        <li className="active">📍 Fort Lauderdale - Port Everglades (Cruises to Caribbean)</li>
                                                        <li>📍 Civitavecchia - Rome (Cruises to Greece/Italy)</li>
                                                        <li>📍 Seattle / Vancouver (Cruises to Alaska)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                        {ccqrActiveWhyIndex === 7 && (
                                            <div className="ccqr-mock-visualization prepost-stay">
                                                <div className="mock-stay-card">
                                                    <div className="stay-header">Pre/Post Cruise Stays &amp; Transfers</div>
                                                    <div className="stay-details">
                                                        <div className="stay-option">
                                                            <strong>Pre-Cruise Hotel Connection</strong>
                                                            <span>Selected boutique hotels near cruise terminals</span>
                                                        </div>
                                                        <div className="stay-option">
                                                            <strong>Private Ground Transportation</strong>
                                                            <span>Hassle-free transfers from airport to pier</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {ccqrActiveWhyIndex === 8 && (
                                            <div className="ccqr-mock-visualization cost-breakdown">
                                                <div className="mock-invoice-card">
                                                    <div className="invoice-row header">
                                                        <span>Trip Cost Transparency</span>
                                                        <span>Breakdown</span>
                                                    </div>
                                                    <div className="invoice-row">
                                                        <span>Cruise Fare &amp; Port Taxes</span>
                                                        <span className="badge-included">Included in Quote</span>
                                                    </div>
                                                    <div className="invoice-row">
                                                        <span>Pre-Cruise Hotel &amp; Air</span>
                                                        <span className="badge-included">Optional Add-on</span>
                                                    </div>
                                                    <div className="invoice-row">
                                                        <span>Onboard Credits (OBC)</span>
                                                        <span className="badge-included">Applied</span>
                                                    </div>
                                                    <div className="invoice-footer">
                                                        <span>Complete vacation price checked, no hidden fees</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="ccqr-included-note">
                            The goal is not simply to find the lowest advertised fare. It is to find the right Celebrity cruise for your trip.
                        </p>
                    </div>
                </section>

                {/* QUOTE OPTION TAB SHOWCASE */}
                <section className="ccqr-options-section ccqr-bg-soft">
                    <div className="ccqr-options-container">
                        <div className="ccqr-options-header">
                            <span className="ccqr-eyebrow-label">CELEBRITY CRUISE QUOTE OPTIONS</span>
                            <h2 className="ccqr-section-heading">Celebrity Cruise Quote Options</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                            <p className="ccqr-lead-paragraph">
                                Choose the type of Celebrity cruise vacation you are planning.
                            </p>
                        </div>

                        <div className="ccqr-options-tabs">
                            {[
                                { id: 'individual', label: 'Individual' },
                                { id: 'suite', label: 'Suite' },
                                { id: 'family', label: 'Family' },
                                { id: 'multigen', label: 'Multi-Generational' },
                                { id: 'group', label: 'Group' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`ccqr-option-tab-btn ${ccqrActiveOption === tab.id ? 'active' : ''}`}
                                    onClick={() => setCcqrActiveOption(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="ccqr-option-panel animate-fade-in">
                            <h3 className="ccqr-option-panel-title">{ccqrActiveOptionData.name}</h3>
                            <p className="ccqr-lead-paragraph">{ccqrActiveOptionData.intro}</p>
                            <div className="ccqr-option-benefit-list">
                                {ccqrActiveOptionData.benefits.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <div key={idx} className="ccqr-option-benefit-item">
                                            {IconComponent ? <IconComponent size={17} /> : <CcqrIconCheck size={17} />}
                                            <span>{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className="ccqr-lead-paragraph" style={{ marginTop: '20px', marginBottom: 0 }}>{ccqrActiveOptionData.footer}</p>
                        </div>
                    </div>
                </section>

                {/* WHAT INFORMATION DO WE NEED */}
                <section className="ccqr-info-section ccqr-bg-white">
                    <div className="ccqr-info-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="ccqr-eyebrow-label">BEFORE YOU SUBMIT</span>
                            <h2 className="ccqr-section-heading">What Information Do We Need for a Celebrity Cruise Quote?</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                            <p className="ccqr-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                You do not need to know every detail before submitting a request. Helpful information includes:
                            </p>
                        </div>

                        <div className="ccqr-info-accordion">
                            {/* DESTINATION */}
                            <div className={`ccqr-info-acc-item ${ccqrActiveInfoIndex === 0 ? 'active' : ''}`}>
                                <div className="ccqr-info-acc-header" onClick={() => setCcqrActiveInfoIndex(ccqrActiveInfoIndex === 0 ? null : 0)}>
                                    <div className="ccqr-info-acc-header-left">
                                        <span className="ccqr-info-acc-num">01</span>
                                        <span className="ccqr-info-acc-title">DESTINATION</span>
                                    </div>
                                    <div className="ccqr-info-acc-arrow">
                                        <CcqrIconArrow size={16} />
                                    </div>
                                </div>
                                <div className="ccqr-info-acc-content">
                                    <div className="ccqr-info-acc-inner">
                                        <h3 className="ccqr-info-card-heading">Examples:</h3>
                                        <div className="ccqr-info-card-list">
                                            {ccqrDestinationInfo.map((item, idx) => {
                                                const IconComponent = iconMap[item.icon];
                                                return (
                                                    <div key={idx} className="ccqr-info-list-tag">
                                                        {IconComponent ? <IconComponent size={16} /> : <CcqrIconCheck size={16} />}
                                                        <span>{item.label}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TRAVEL DATES */}
                            <div className={`ccqr-info-acc-item ${ccqrActiveInfoIndex === 1 ? 'active' : ''}`}>
                                <div className="ccqr-info-acc-header" onClick={() => setCcqrActiveInfoIndex(ccqrActiveInfoIndex === 1 ? null : 1)}>
                                    <div className="ccqr-info-acc-header-left">
                                        <span className="ccqr-info-acc-num">02</span>
                                        <span className="ccqr-info-acc-title">TRAVEL DATES</span>
                                    </div>
                                    <div className="ccqr-info-acc-arrow">
                                        <CcqrIconArrow size={16} />
                                    </div>
                                </div>
                                <div className="ccqr-info-acc-content">
                                    <div className="ccqr-info-acc-inner">
                                        <h3 className="ccqr-info-card-heading">Provide exact dates if you have them.</h3>
                                        <p className="ccqr-info-card-desc">
                                            If your dates are flexible, let us know. Flexible dates can sometimes provide more options.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* NUMBER OF TRAVELERS */}
                            <div className={`ccqr-info-acc-item ${ccqrActiveInfoIndex === 2 ? 'active' : ''}`}>
                                <div className="ccqr-info-acc-header" onClick={() => setCcqrActiveInfoIndex(ccqrActiveInfoIndex === 2 ? null : 2)}>
                                    <div className="ccqr-info-acc-header-left">
                                        <span className="ccqr-info-acc-num">03</span>
                                        <span className="ccqr-info-acc-title">NUMBER OF TRAVELERS</span>
                                    </div>
                                    <div className="ccqr-info-acc-arrow">
                                        <CcqrIconArrow size={16} />
                                    </div>
                                </div>
                                <div className="ccqr-info-acc-content">
                                    <div className="ccqr-info-acc-inner">
                                        <h3 className="ccqr-info-card-heading">Tell us:</h3>
                                        <div className="ccqr-info-card-checks">
                                            {ccqrTravelerInfo.map((item, idx) => (
                                                <div key={idx} className="ccqr-info-check-row">
                                                    <div className="ccqr-info-check-icon">
                                                        <CcqrIconCheck size={15} />
                                                    </div>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STATEROOM PREFERENCE */}
                            <div className={`ccqr-info-acc-item ${ccqrActiveInfoIndex === 3 ? 'active' : ''}`}>
                                <div className="ccqr-info-acc-header" onClick={() => setCcqrActiveInfoIndex(ccqrActiveInfoIndex === 3 ? null : 3)}>
                                    <div className="ccqr-info-acc-header-left">
                                        <span className="ccqr-info-acc-num">04</span>
                                        <span className="ccqr-info-acc-title">STATEROOM PREFERENCE</span>
                                    </div>
                                    <div className="ccqr-info-acc-arrow">
                                        <CcqrIconArrow size={16} />
                                    </div>
                                </div>
                                <div className="ccqr-info-acc-content">
                                    <div className="ccqr-info-acc-inner">
                                        <h3 className="ccqr-info-card-heading">Choose a general preference such as:</h3>
                                        <div className="ccqr-info-card-list">
                                            {ccqrStateroomPrefs.map((item, idx) => {
                                                const IconComponent = iconMap[item.icon];
                                                return (
                                                    <div key={idx} className="ccqr-info-list-tag">
                                                        {IconComponent ? <IconComponent size={16} /> : <CcqrIconCheck size={16} />}
                                                        <span>{item.label}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <p className="ccqr-info-card-footnote">
                                            If you are unsure, we can help compare the categories.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* BUDGET */}
                            <div className={`ccqr-info-acc-item ${ccqrActiveInfoIndex === 4 ? 'active' : ''}`}>
                                <div className="ccqr-info-acc-header" onClick={() => setCcqrActiveInfoIndex(ccqrActiveInfoIndex === 4 ? null : 4)}>
                                    <div className="ccqr-info-acc-header-left">
                                        <span className="ccqr-info-acc-num">05</span>
                                        <span className="ccqr-info-acc-title">BUDGET</span>
                                    </div>
                                    <div className="ccqr-info-acc-arrow">
                                        <CcqrIconArrow size={16} />
                                    </div>
                                </div>
                                <div className="ccqr-info-acc-content">
                                    <div className="ccqr-info-acc-inner">
                                        <h3 className="ccqr-info-card-heading">A preferred budget range can help narrow the options.</h3>
                                        <p className="ccqr-info-card-desc">You can provide either:</p>
                                        <div className="ccqr-info-card-checks">
                                            {ccqrBudgetOptions.map((item, idx) => (
                                                <div key={idx} className="ccqr-info-check-row">
                                                    <div className="ccqr-info-check-icon">
                                                        <CcqrIconCheck size={15} />
                                                    </div>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SPECIAL REQUIREMENTS */}
                            <div className={`ccqr-info-acc-item ${ccqrActiveInfoIndex === 5 ? 'active' : ''}`}>
                                <div className="ccqr-info-acc-header" onClick={() => setCcqrActiveInfoIndex(ccqrActiveInfoIndex === 5 ? null : 5)}>
                                    <div className="ccqr-info-acc-header-left">
                                        <span className="ccqr-info-acc-num">06</span>
                                        <span className="ccqr-info-acc-title">SPECIAL REQUIREMENTS</span>
                                    </div>
                                    <div className="ccqr-info-acc-arrow">
                                        <CcqrIconArrow size={16} />
                                    </div>
                                </div>
                                <div className="ccqr-info-acc-content">
                                    <div className="ccqr-info-acc-inner">
                                        <h3 className="ccqr-info-card-heading">Let us know about preferences such as:</h3>
                                        <div className="ccqr-info-card-list">
                                            {ccqrSpecialRequirements.map((item, idx) => {
                                                const IconComponent = iconMap[item.icon];
                                                return (
                                                    <div key={idx} className="ccqr-info-list-tag">
                                                        {IconComponent ? <IconComponent size={16} /> : <CcqrIconCheck size={16} />}
                                                        <span>{item.label}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUOTE REQUEST PROCESS — STEPS */}
                <section className="ccqr-steps-section ccqr-bg-soft">
                    <div className="ccqr-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">HOW IT WORKS</span>
                            <h2 className="ccqr-section-heading">Celebrity Cruise Quote Request Process</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                        </div>
                        <div className="ccqr-steps-list">
                            {ccqrProcessSteps.map((step, idx) => (
                                <div key={idx} className="ccqr-step-item">
                                    <div className="ccqr-step-number">{idx + 1}</div>
                                    <div className="ccqr-step-body">
                                        <h4 className="ccqr-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="ccqr-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="ccqr-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="ccqr-step-tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT CAN BE INCLUDED BOARD */}
                <section className="ccqr-glance-section ccqr-bg-white">
                    <div className="ccqr-feature-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">QUOTE COMPONENTS</span>
                            <h2 className="ccqr-section-heading">What Can Be Included in a Celebrity Cruise Quote?</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                            <p className="ccqr-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A personalized quote can potentially include:
                            </p>
                        </div>
                        
                        <div className="ccqr-included-board">
                            {/* Card 1: Standard Inclusions */}
                            <div className="ccqr-included-column">
                                <h3 className="ccqr-included-col-title">Core Inclusions</h3>
                                <div className="ccqr-included-items-list">
                                    {ccqrIncludedTable.filter(item => item.detail === 'Yes').map((row, idx) => (
                                        <div key={idx} className="ccqr-included-item-row">
                                            <span className="ccqr-included-bullet">•</span>
                                            <span className="ccqr-included-feature">{row.feature}</span>
                                            <span className="ccqr-included-badge badge-yes">{row.detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card 2: Promotion Reviews */}
                            <div className="ccqr-included-column">
                                <h3 className="ccqr-included-col-title">Offers & Loyalty</h3>
                                <div className="ccqr-included-items-list">
                                    {ccqrIncludedTable.filter(item => item.detail === 'Reviewed').map((row, idx) => (
                                        <div key={idx} className="ccqr-included-item-row">
                                            <span className="ccqr-included-bullet">•</span>
                                            <span className="ccqr-included-feature">{row.feature}</span>
                                            <span className="ccqr-included-badge badge-reviewed">{row.detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card 3: Optional Add-ons */}
                            <div className="ccqr-included-column">
                                <h3 className="ccqr-included-col-title">Optional Add-ons</h3>
                                <div className="ccqr-included-items-list">
                                    {ccqrIncludedTable.filter(item => item.detail !== 'Yes' && item.detail !== 'Reviewed').map((row, idx) => (
                                        <div key={idx} className="ccqr-included-item-row">
                                            <span className="ccqr-included-bullet">•</span>
                                            <span className="ccqr-included-feature">{row.feature}</span>
                                            <span className="ccqr-included-badge badge-optional">{row.detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="ccqr-included-note" style={{ marginTop: '30px', textAlign: 'center' }}>
                            The exact components depend on the vacation you are planning.
                        </p>
                    </div>
                </section>

                {/* CELEBRITY CRUISE DESTINATIONS */}
                <section className="ccqr-itinerary-section ccqr-bg-soft">
                    <div className="ccqr-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">WHERE TO GO</span>
                            <h2 className="ccqr-section-heading">Celebrity Cruise Destinations</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                        </div>
                        <div className="ccqr-itinerary-grid">
                            {ccqrDestinations.map((dest, idx) => (
                                <div key={idx} className="ccqr-itinerary-card">
                                    <h3 className="ccqr-itinerary-region">
                                        <Globe size={20} />
                                        {dest.name}
                                    </h3>
                                    <p className="ccqr-lead-paragraph" style={{ marginBottom: '18px', fontSize: '15.5px' }}>{dest.intro}</p>
                                    <ul className="ccqr-itinerary-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                                        {dest.bullets.map((b, bIdx) => (
                                            <li key={bIdx} style={{ width: 'fit-content', margin: 0 }}>{b}</li>
                                        ))}
                                    </ul>
                                    <p className="ccqr-itinerary-note">{dest.highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SUITES: IS IT WORTH THE UPGRADE */}
                <section className="ccqr-feature-section ccqr-dark-section">
                    <div className="ccqr-feature-container">
                        <div className="ccqr-feature-grid ccqr-reverse">
                            <div className="ccqr-feature-copy-col">
                                <span className="ccqr-eyebrow-label">SUITE QUOTES</span>
                                <h2 className="ccqr-feature-title" style={{ textAlign: 'left' }}>Is a Celebrity Suite Worth the Upgrade?</h2>
                                <p className="ccqr-lead-paragraph1">
                                    That depends on how you plan to use the ship. A suite may make sense when you value:
                                </p>
                                <div className="ccqr-feature-list">
                                    {ccqrSuiteValues.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccqr-feature-item-card">
                                                <div className="ccqr-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcqrIconCheck size={18} />}
                                                </div>
                                                <span className="ccqr-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccqr-lead-paragraph1" style={{ marginTop: '20px' }}>
                                    A quote allows you to compare the suite price against other stateroom categories before making the decision.
                                </p>
                            </div>
                            <div className="ccqr-feature-image-col">
                                <div className="ccqr-badge-overlay">
                                    <CcqrIconSparkle size={14} />
                                    <span>Celebrity Suites</span>
                                </div>
                                <CcqrPlaceholder label="Celebrity Cruise Quote for Suites" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAMILY QUOTE — MULTIPLE ROOMS */}
                <section className="ccqr-feature-section ccqr-bg-white">
                    <div className="ccqr-feature-container">
                        <div className="ccqr-feature-grid">
                            <div className="ccqr-feature-image-col">
                                <div className="ccqr-badge-overlay">
                                    <CcqrIconDot size={14} />
                                    <span>Family Quotes</span>
                                </div>
                                <CcqrPlaceholder label="Celebrity Cruise Quote for Families" />
                            </div>
                            <div className="ccqr-feature-copy-col">
                                <span className="ccqr-eyebrow-label">FAMILY QUOTES</span>
                                <h2 className="ccqr-feature-title">Can I Request Multiple Rooms?</h2>
                                <p className="ccqr-lead-paragraph">
                                    Yes. If your family needs more than one stateroom, include the number of rooms and preferred configuration in the request. We can help explore:
                                </p>
                                <div className="ccqr-feature-list">
                                    {ccqrFamilyRoomOptions.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccqr-feature-item-card">
                                                <div className="ccqr-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcqrIconCheck size={18} />}
                                                </div>
                                                <span className="ccqr-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GROUP QUOTE — WHEN TO REQUEST */}
                <section className="ccqr-feature-section ccqr-dark-section">
                    <div className="ccqr-feature-container">
                        <div className="ccqr-feature-grid ccqr-reverse">
                            <div className="ccqr-feature-copy-col">
                                <span className="ccqr-eyebrow-label">GROUP QUOTES</span>
                                <h2 className="ccqr-feature-title" style={{ textAlign: 'left' }}>When Should I Request a Group Quote?</h2>
                                <p className="ccqr-lead-paragraph1">
                                    The earlier the better. Group travel requires more coordination than an individual booking. Early planning can provide more time to evaluate:
                                </p>
                                <div className="ccqr-feature-list">
                                    {ccqrGroupEvaluate.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccqr-feature-item-card">
                                                <div className="ccqr-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcqrIconCheck size={18} />}
                                                </div>
                                                <span className="ccqr-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccqr-lead-paragraph1" style={{ marginTop: '20px' }}>
                                    Celebrity generally defines a standard group as eight staterooms or more.
                                </p>
                            </div>
                            <div className="ccqr-feature-image-col">
                                <div className="ccqr-badge-overlay">
                                    <CcqrIconSparkle size={14} />
                                    <span>Group Quotes</span>
                                </div>
                                <CcqrPlaceholder label="Celebrity Group Cruise Quote" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUOTE VS BOOKING DIRECT */}
                <section className="ccqr-glance-section">
                    <div className="ccqr-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">HOW THEY COMPARE</span>
                            <h2 className="ccqr-section-heading">Celebrity Cruise Quote vs. Booking Direct</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                            <p className="ccqr-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Booking directly with the cruise line can be appropriate for travelers who already know exactly what they want. However, a professional cruise planning service can be useful when you need help comparing ships, cabin categories, itineraries, promotions, loyalty benefits, group options and pre- and post-cruise arrangements.
                            </p>
                        </div>
                        <div className="ccqr-pair-table">
                            <div className="ccqr-pair-row ccqr-pair-header">
                                <div className="ccqr-pair-cell">Celebrity Cruise Quote</div>
                                <div className="ccqr-pair-cell">Booking Direct</div>
                            </div>
                            {ccqrQuoteVsBooking.map((row, idx) => (
                                <div key={idx} className="ccqr-pair-row">
                                    <div className="ccqr-pair-cell">{row.quote}</div>
                                    <div className="ccqr-pair-cell">{row.direct}</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccqr-included-note">
                            The advantage is having one person help evaluate the complete vacation instead of comparing every component independently.
                        </p>
                    </div>
                </section>

                {/* WHY USE TRIPS & SHIPS */}
                <section className="ccqr-why-plan-section ccqr-why-plan-dark">
                    <div className="ccqr-why-plan-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="ccqr-section-heading">Why Use Trips & Ships Luxury Travel?</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                            <p className="ccqr-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Trips & Ships Luxury Travel focuses on personalized cruise planning rather than simply providing a cruise fare. We can help you evaluate the complete trip. Our Planning Can Include:
                            </p>
                        </div>
                        <div className="ccqr-why-plan-grid">
                            {ccqrWhyUsInclude.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccqr-why-plan-card">
                                        <div className="ccqr-why-plan-icon">
                                            {IconComponent ? <IconComponent size={19} /> : <CcqrIconDot size={19} />}
                                        </div>
                                        <h4 className="ccqr-why-plan-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WHAT MAKES A GOOD QUOTE — EVALUATION CARDS */}
                <section className="ccqr-steps-section">
                    <div className="ccqr-feature-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">EVALUATION CRITERIA</span>
                            <h2 className="ccqr-section-heading">What Makes a Good Celebrity Cruise Quote?</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                            <p className="ccqr-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A useful quote should make it easy to understand more than the base cruise fare. We recommend evaluating:
                            </p>
                        </div>
                        <div className="ccqr-eval-grid">
                            {ccqrGoodQuoteSteps.map((step, idx) => {
                                let IconComponent = CcqrIconCheck;
                                const title = step.title.toLowerCase();
                                if (title.includes('cost')) IconComponent = iconMap['Wallet'] || CcqrIconCheck;
                                else if (title.includes('cabin')) IconComponent = iconMap['Home'] || CcqrIconCheck;
                                else if (title.includes('location')) IconComponent = iconMap['MapPin'] || CcqrIconCheck;
                                else if (title.includes('itinerary')) IconComponent = iconMap['Compass'] || CcqrIconCheck;
                                else if (title.includes('promotion')) IconComponent = iconMap['Tag'] || CcqrIconCheck;
                                else if (title.includes('loyalty')) IconComponent = iconMap['Award'] || CcqrIconCheck;
                                else if (title.includes('flexibility')) IconComponent = iconMap['ShieldCheck'] || CcqrIconCheck;
                                else if (title.includes('complete')) IconComponent = iconMap['Globe'] || CcqrIconCheck;

                                return (
                                    <div key={idx} className="ccqr-eval-card">
                                        <div className="ccqr-eval-card-header">
                                            <div className="ccqr-eval-icon-wrap">
                                                <IconComponent size={20} />
                                            </div>
                                            <span className="ccqr-eval-number">0{idx + 1}</span>
                                        </div>
                                        <h4 className="ccqr-eval-title">{step.title}</h4>
                                        <p className="ccqr-eval-desc">{step.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WHAT YOU DON'T NEED TO KNOW */}
                <section className="ccqr-audience-section">
                    <div className="ccqr-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">NO PRESSURE</span>
                            <h2 className="ccqr-section-heading">Celebrity Cruise Quote: What You Don't Need to Know</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                            <p className="ccqr-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                You do not need to know the following before requesting a quote:
                            </p>
                        </div>
                        <div className="ccqr-audience-column">
                            <ul className="ccqr-audience-list">
                                {ccqrDontNeedToKnow.map((item, idx) => (
                                    <li key={idx} className="ccqr-audience-item">
                                        <CcqrIconCheck size={18} className="ccqr-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="ccqr-itinerary-note" style={{ marginTop: '24px', borderTop: 'none', paddingTop: 0, textAlign: 'center' }}>
                            That is part of the planning process. Simply provide the information you already know.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD REQUEST A QUOTE */}
                <section className="ccqr-glance-section ccqr-bg-white">
                    <div className="ccqr-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="ccqr-section-heading">Who Should Request a Celebrity Cruise Quote?</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                        </div>
                        <div className="ccqr-profiles-list">
                            {ccqrWhoShould.map((row, idx) => {
                                let IconComponent = CcqrIconDot;
                                const feat = row.feature.toLowerCase();
                                if (feat.includes('first-time')) IconComponent = iconMap['Compass'] || CcqrIconDot;
                                else if (feat.includes('couples')) IconComponent = iconMap['Heart'] || CcqrIconDot;
                                else if (feat.includes('families')) IconComponent = iconMap['Users'] || CcqrIconDot;
                                else if (feat.includes('generational')) IconComponent = iconMap['Layers'] || CcqrIconDot;
                                else if (feat.includes('luxury')) IconComponent = iconMap['Crown'] || CcqrIconDot;
                                else if (feat.includes('group')) IconComponent = iconMap['Users'] || CcqrIconDot;
                                else if (feat.includes('repeat')) IconComponent = iconMap['Award'] || CcqrIconDot;

                                return (
                                    <div key={idx} className="ccqr-profile-row-card">
                                        <div className="ccqr-profile-row-icon">
                                            <IconComponent size={20} />
                                        </div>
                                        <div className="ccqr-profile-row-text">
                                            <h3 className="ccqr-profile-row-title">{row.feature}</h3>
                                            <p className="ccqr-profile-row-desc">{row.detail}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* QUOTE CHECKLIST */}
                <section className="ccqr-audience-section">
                    <div className="ccqr-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccqr-eyebrow-label">BEFORE YOU SUBMIT</span>
                            <h2 className="ccqr-section-heading">Celebrity Cruise Quote Checklist</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                            <p className="ccqr-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Before submitting your request, consider:
                            </p>
                        </div>
                        <div className="ccqr-audience-column">
                            <ul className="ccqr-audience-list">
                                {ccqrChecklist.map((item, idx) => (
                                    <li key={idx} className="ccqr-audience-item">
                                        <CcqrIconCheck size={18} className="ccqr-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="ccqr-itinerary-note" style={{ marginTop: '24px', borderTop: 'none', paddingTop: 0, textAlign: 'center' }}>
                            You can provide as much or as little information as you currently know.
                        </p>
                    </div>
                </section>

                {/* EXPERT INSIGHT */}
                <section id="celebrity-cruise-quote-insight" className="ccqr-editorial-section">
                    <div className="ccqr-editorial-container">
                        <div className="ccqr-editorial-split-grid">

                            <div className="ccqr-editorial-profile-sidebar">
                                <div className="ccqr-editorial-avatar-wrap">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="ccqr-editorial-avatar" />
                                </div>

                                <div className="ccqr-editorial-bio">
                                    <h4 className="ccqr-editorial-bio-name">Angela Hughes</h4>
                                    <p className="ccqr-editorial-bio-title">Founder & CEO, Trips & Ships Luxury Travel</p>
                                </div>

                                <div className="ccqr-editorial-stats-row">
                                    <div className="ccqr-editorial-stat-badge">
                                        <strong>40+</strong> Years Experience
                                    </div>
                                    <div className="ccqr-editorial-stat-badge">
                                        <strong>120+</strong> Countries Visited
                                    </div>
                                </div>

                                <div className="ccqr-editorial-expertise-box">
                                    <span className="ccqr-editorial-expertise-label">Her expertise spans:</span>
                                    <div className="ccqr-editorial-expertise-list">
                                        {[
                                            'Premium & luxury cruising',
                                            'Personalized Celebrity cruise planning',
                                            'Suite & stateroom selection',
                                            'Family & multi-generational trip coordination',
                                            'Group cruise quote planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="ccqr-editorial-expertise-item">
                                                <CcqrIconDot size={10} className="ccqr-editorial-dot" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="ccqr-editorial-main-content">
                                <div className="ccqr-editorial-header">
                                    <div className="ccqr-editorial-eyebrow-container">
                                        <CcqrIconAward size={16} className="ccqr-editorial-icon-badge" />
                                        <span className="ccqr-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="ccqr-editorial-heading">
                                        What Makes a Celebrity Cruise Quote Useful?
                                    </h2>
                                    <div className="ccqr-editorial-heading-line"></div>
                                </div>

                                <p className="ccqr-editorial-lead-para">
                                    Start with what you want your Celebrity vacation to look like, not with a single cabin price.
                                </p>

                                <div className="ccqr-editorial-quote-box">
                                    <p className="ccqr-editorial-quote-text">
                                        A Celebrity Cruise Quote is most useful when you want more than a basic cruise price. Whether you are planning an individual vacation, a suite experience, a family cruise, a multi-generational trip or a larger group, the right planning process can help you compare the complete vacation \u2014 the ship, the itinerary, the stateroom, current offers, Captain's Club benefits and any hotels, transfers or land extensions you may need.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="ccqr-faq-section">
                    <div className="ccqr-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="ccqr-section-heading">Frequently Asked Questions</h2>
                            <div className="ccqr-heading-bar ccqr-bar-center"></div>
                        </div>
                        <div className="ccqr-faq-list">
                            {ccqrFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="ccqr-faq-item"
                                    onClick={() => ccqrToggleFaq(index)}
                                >
                                    <div className="ccqr-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="ccqr-faq-toggle">
                                            {ccqrActiveFaq === index ? "\u2212" : "+"}
                                        </span>
                                    </div>
                                    {ccqrActiveFaq === index && (
                                        <p className="ccqr-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

              

                {/* CTA SECTION */}
                <section className="ccqr-cta-section">
                    <div className="ccqr-cta-bg-pattern"></div>
                    <div className="ccqr-cta-inner">
                        <h2 className="ccqr-cta-heading">Request Your Celebrity Cruise Quote</h2>
                        <div className="ccqr-cta-separator"></div>
                        <p className="ccqr-cta-text">
                            Ready to start planning your Celebrity cruise? Tell Trips & Ships Luxury Travel about your destination, dates, travelers, preferred accommodations and budget. We'll help you explore the Celebrity cruise options that fit your trip.
                        </p>
                        <div className="ccqr-cta-btn-row">
                            <Link to="/contact" className="ccqr-btn-primary">
                                <CcqrIconPhone size={18} />
                                Request My Celebrity Cruise Quote
                            </Link>
                            <button className="ccqr-btn-outline">
                                <CcqrIconList size={18} />
                                Plan My Celebrity Suite or Group Cruise
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default Celebritycruisequote