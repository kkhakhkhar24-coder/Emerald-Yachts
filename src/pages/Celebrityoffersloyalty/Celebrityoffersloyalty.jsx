import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebrityoffersloyalty.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Tag,
    Gift,
    CreditCard,
    Percent,
    Award,
    Star,
    Crown,
    Wifi,
    Wine,
    GlassWater,
    Utensils,
    Sparkles,
    Users,
    Home,
    Ship,
    Calendar,
    TrendingUp,
    Repeat,
    Building2,
    PartyPopper,
    Plane,
    MapPin,
    CheckCircle,
    Coffee,
    Shirt,
    Compass,
    Globe,
    Layers,
    Gem,
    Anchor,
    ClipboardList,
    Handshake,
    Sliders,
    ShieldCheck,
    Trophy,
    Wallet,
    UserCheck,
    Sunrise,
    Heart
} from 'lucide-react'

const iconMap = {
    Tag, Gift, CreditCard, Percent, Award, Star, Crown, Wifi, Wine, GlassWater,
    Utensils, Sparkles, Users, Home, Ship, Calendar, TrendingUp, Repeat,
    Building2, PartyPopper, Plane, MapPin, CheckCircle, Coffee, Shirt, Compass,
    Globe, Layers, Gem, Anchor, ClipboardList, Handshake, Sliders, ShieldCheck,
    Trophy, Wallet, UserCheck, Sunrise, Heart
}

/* ============================================================
   INLINE SVG ICONS (no lucide-react dependency for these — plain inline)
   ============================================================ */
function CcobIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CcobIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CcobIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CcobIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CcobIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CcobIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CcobIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CcobIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CcobIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

function CcobIconArrow({ size = 14 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CcobPlaceholder({ label, className = '' }) {
    return (
        <div className={`ccob-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CcobIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function Celebrityoffersloyalty() {
    const [ccobActiveFaq, setCcobActiveFaq] = useState(null)
    const [ccobActiveTier, setCcobActiveTier] = useState('preview')
    const ccobToggleFaq = (index) => {
        setCcobActiveFaq(ccobActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const ccobGlance = [
        { feature: 'Cruise promotions', detail: 'Yes' },
        { feature: 'Cruise fare savings', detail: 'Select offers' },
        { feature: 'Second-guest offers', detail: 'Select promotions' },
        { feature: '3rd/4th/5th guest offers', detail: 'Select sailings' },
        { feature: 'Onboard credit', detail: 'Select promotions' },
        { feature: 'Cabin upgrades', detail: 'Select promotions' },
        { feature: 'Loyalty program', detail: "Captain's Club" },
        { feature: 'Club Point tiers', detail: 'Preview, Classic, Select, Elite, Elite Plus, Zenith' },
        { feature: 'Status match', detail: 'Yes, with qualifying Royal Caribbean/Silversea status' },
        { feature: 'Power Up Points', detail: 'Yes' },
        { feature: 'Milestone Benefits', detail: 'Yes' },
        { feature: 'Group cruises', detail: 'Yes' },
        { feature: 'Group planner', detail: 'Yes' },
        { feature: 'Group pricing opportunities', detail: 'Yes' },
        { feature: 'Group rewards', detail: 'Yes' }
    ]

    const ccobOfferTypes = [
        'Cruise fare savings', 'Second-guest discounts', 'Third-, fourth- and fifth-guest offers',
        'Onboard credit', 'Select cabin upgrades', "Captain's Club exclusive offers",
        'Loyalty discounts', 'Milestone rewards'
    ]

    const ccobCurrentOfferTypes = [
        { label: 'Cruise fare savings', icon: 'Tag' },
        { label: 'Onboard credit', icon: 'CreditCard' },
        { label: 'Second-guest discounts', icon: 'Users' },
        { label: 'Additional-guest offers', icon: 'Gift' },
        { label: 'Cabin upgrades', icon: 'Layers' },
        { label: 'Package-related incentives', icon: 'Sparkles' }
    ]

    const ccobSavingsFactors = [
        { label: 'Sailing date', icon: 'Calendar' },
        { label: 'Ship', icon: 'Ship' },
        { label: 'Destination', icon: 'Globe' },
        { label: 'Cruise length', icon: 'Compass' },
        { label: 'Stateroom category', icon: 'Home' },
        { label: 'Number of guests', icon: 'Users' },
        { label: 'Fare type', icon: 'Tag' },
        { label: 'Booking date', icon: 'ClipboardList' },
        { label: 'Availability', icon: 'CheckCircle' },
        { label: 'Promotion terms', icon: 'Sliders' }
    ]

    const ccobSecondGuestOffers = [
        { label: 'BOGO 50% off the second guest on refundable fares', icon: 'Percent' },
        { label: 'BOGO 75% off the second guest on qualifying non-refundable fares', icon: 'Percent' },
        { label: 'Other second-guest promotions', icon: 'Gift' }
    ]

    const ccobUsefulFor = [
        { label: 'Families', icon: 'Users' },
        { label: 'Multi-generational vacations', icon: 'Home' },
        { label: 'Friends sharing a stateroom', icon: 'UserCheck' },
        { label: 'Family reunion cruises', icon: 'PartyPopper' },
        { label: 'Group travel', icon: 'Users' }
    ]

    const ccobUpgradeGoodWhen = [
        'The price difference is small', 'You want a balcony', 'The sailing is scenic', 'The cabin category is important to you'
    ]

    const ccobCapacityFactors = [
        'Eligible sailings vary', 'Eligible staterooms can sell out', 'Offers can change',
        'Promotions can be withdrawn', 'Booking changes can affect eligibility'
    ]

    const ccobTierTable = [
        { feature: 'Preview', detail: '0' },
        { feature: 'Classic', detail: '2–149' },
        { feature: 'Select', detail: '150–299' },
        { feature: 'Elite', detail: '300–749' },
        { feature: 'Elite Plus', detail: '750–2,999' },
        { feature: 'Zenith', detail: '3,000+' }
    ]

    const ccobTiers = {
        preview: {
            name: 'Preview',
            points: '0 Club Points',
            intro: 'Preview is the pre-sailing membership level.',
            benefits: [
                { label: "Access to the Captain's Club Loyalty Desk", icon: 'Handshake' },
                { label: "Captain's Club newsletter", icon: 'ClipboardList' },
                { label: 'Program information', icon: 'CheckCircle' }
            ],
            footer: 'After earning qualifying Club Points, members move into Classic status.'
        },
        classic: {
            name: 'Classic',
            points: '2 Club Points',
            intro: 'Classic begins at 2 Club Points.',
            benefits: [
                { label: "Captain's Club Welcome Event", icon: 'PartyPopper' },
                { label: 'Exclusive onboard premium offers', icon: 'Gift' },
                { label: 'Loyalty Desk access', icon: 'Handshake' },
                { label: 'Eligible partner benefits', icon: 'Users' },
                { label: 'Certain onboard discounts', icon: 'Percent' }
            ],
            footer: 'Celebrity also lists a one-category upgrade opportunity through AquaClass, subject to availability and restrictions.'
        },
        select: {
            name: 'Select',
            points: '150 Club Points',
            intro: 'Select begins at 150 Club Points.',
            benefits: [
                { label: 'Wi-Fi discounts', icon: 'Wifi' },
                { label: 'Laundry discounts', icon: 'Shirt' },
                { label: 'Drink-package discounts when purchased pre-cruise', icon: 'Wine' },
                { label: 'Benefits inherited from Classic', icon: 'CheckCircle' }
            ],
            footer: 'Celebrity currently lists a 25% Wi-Fi discount, 10% laundry discount and qualifying 10% drink-package discounts for Select members.'
        },
        elite: {
            name: 'Elite',
            points: '300 Club Points',
            intro: 'This is where the loyalty benefits become substantially more valuable for frequent cruisers.',
            benefits: [
                { label: 'Exclusive daily continental breakfast', icon: 'Coffee' },
                { label: 'Elite Cocktail Hour', icon: 'GlassWater' },
                { label: 'Complimentary Persian Garden access on one port day', icon: 'Sparkles' },
                { label: 'One complimentary laundry bag', icon: 'Shirt' },
                { label: '30% Wi-Fi discount', icon: 'Wifi' },
                { label: '15% qualifying drink-package discounts', icon: 'Wine' }
            ],
            footer: 'Benefits and availability can vary by ship and sailing.'
        },
        eliteplus: {
            name: 'Elite Plus',
            points: '750 Club Points',
            intro: 'Elite Plus begins at 750 Club Points.',
            benefits: [
                { label: 'Exclusive daily continental breakfast', icon: 'Coffee' },
                { label: 'Elite Cocktail Hour', icon: 'GlassWater' },
                { label: 'Two complimentary laundry bags', icon: 'Shirt' },
                { label: '35% Wi-Fi discount', icon: 'Wifi' },
                { label: '20% qualifying drink-package discounts', icon: 'Wine' },
                { label: '15% specialty dining cover-charge discount', icon: 'Utensils' },
                { label: 'Spa discount', icon: 'Sparkles' }
            ],
            footer: 'Elite Plus is particularly valuable for travelers who cruise frequently and regularly purchase Wi-Fi, specialty dining or other onboard services.'
        },
        zenith: {
            name: 'Zenith',
            points: '3,000 Club Points',
            intro: 'It represents the highest standard Captain\u2019s Club tier.',
            benefits: [
                { label: "Access to The Retreat Lounge/Michael's Club", icon: 'Crown' },
                { label: 'Complimentary premium beverage package', icon: 'Wine' },
                { label: 'Complimentary premium Wi-Fi', icon: 'Wifi' },
                { label: 'Complimentary laundry', icon: 'Shirt' },
                { label: 'Specialty dining discount', icon: 'Utensils' }
            ],
            footer: 'Celebrity also states that reaching 3,000 points provides a complimentary 7-night Caribbean or Bermuda cruise in a Veranda stateroom, with taxes and fees applying.'
        }
    }

    const ccobMilestones = [
        {
            title: '1,500 Club Point Milestone',
            desc: 'At 1,500 Club Points, Elite Plus members can receive benefits such as:',
            tags: ['480 minutes of Premium Wi-Fi', '20% specialty dining cover-charge discount', 'Complimentary digital photo', 'Surprise in-room amenity']
        },
        {
            title: '2,250 Club Point Milestone',
            desc: 'At 2,250 points, the benefits increase to include:',
            tags: ['720 minutes of Premium Wi-Fi', '25% specialty dining cover-charge discount', 'Two digital photos', 'Surprise in-room amenity', 'Extend Your Stay benefit when available']
        },
        {
            title: '3,000 Club Point Milestone',
            desc: 'At 3,000 Club Points, Zenith-level milestone benefits include:',
            tags: ['35% specialty dining cover-charge discount', 'Three digital photos', 'Surprise in-room amenity']
        },
        {
            title: '6,000 Club Point Milestone (Double Zenith)',
            desc: 'The 6,000-point level is described as Double Zenith. Benefits include the 3,000-point benefits plus:',
            tags: ['Specialty lunch on embarkation day of every sailing', 'Specialty dinner on the milestone sailing', 'Champagne on the milestone sailing']
        },
        {
            title: '9,000 Club Point Milestone (Triple Zenith)',
            desc: 'The 9,000-point level is described as Triple Zenith. It adds benefits including:',
            tags: ['A 7-night complimentary Caribbean or Bermuda cruise in a Sky Suite', 'Specialty lunch on every sailing', 'Specialty dinner on the milestone sailing', 'Champagne on the milestone sailing']
        }
    ]

    const ccobEarnFactors = [
        { label: 'Number of nights', icon: 'Calendar' },
        { label: 'Stateroom category', icon: 'Home' }
    ]

    const ccobPowerUpActivities = [
        { label: 'Surveys', icon: 'ClipboardList' },
        { label: 'Webinars', icon: 'Sunrise' },
        { label: 'Other qualifying activities', icon: 'CheckCircle' }
    ]

    const ccobStatusMatchPrograms = [
        { label: "Celebrity Captain's Club", icon: 'Crown' },
        { label: 'Royal Caribbean Crown & Anchor Society', icon: 'Anchor' },
        { label: 'Silversea Venetian Society', icon: 'Gem' }
    ]

    const ccobStatusMatchTiers = [
        { royal: 'Gold', celebrity: 'Classic' },
        { royal: 'Platinum', celebrity: 'Select' },
        { royal: 'Diamond', celebrity: 'Elite' },
        { royal: 'Diamond Plus', celebrity: 'Elite Plus' },
        { royal: 'Pinnacle Club', celebrity: 'Zenith' }
    ]

    const ccobStatusMatchWho = [
        'Royal Caribbean', 'Celebrity', 'Silversea'
    ]

    const ccobExclusiveOffers = [
        { label: 'Special cruise pricing', icon: 'Tag' },
        { label: 'Member-only offers', icon: 'Gift' },
        { label: 'Loyalty discounts', icon: 'Percent' },
        { label: 'Onboard benefits', icon: 'Sparkles' },
        { label: 'Partner benefits', icon: 'Handshake' }
    ]

    const ccobDrinkDiscountTable = [
        { feature: 'Classic', detail: '10%' },
        { feature: 'Select', detail: '10%' },
        { feature: 'Elite', detail: '15%' },
        { feature: 'Elite Plus', detail: '20%' },
        { feature: 'Zenith', detail: 'Complimentary premium package' }
    ]

    const ccobWifiDiscountTable = [
        { feature: 'Classic', detail: '10% discount' },
        { feature: 'Select', detail: '25% discount' },
        { feature: 'Elite', detail: '30% discount + minutes' },
        { feature: 'Elite Plus', detail: '35% discount + minutes' },
        { feature: 'Zenith', detail: 'Complimentary Premium Wi-Fi' }
    ]

    const ccobLaundryBenefits = [
        { name: 'Select', bestFor: 'Discounted laundry services', feature: 'Value for longer sailings' },
        { name: 'Elite', bestFor: 'One complimentary bag', feature: 'A practical everyday benefit' },
        { name: 'Elite Plus', bestFor: 'Two complimentary bags', feature: 'Meaningful for frequent cruisers' },
        { name: 'Zenith', bestFor: 'Complimentary laundry', feature: 'The top-tier convenience benefit' }
    ]

    const ccobDiningBenefits = [
        { feature: 'Elite Plus', detail: '15% specialty dining cover-charge discount' },
        { feature: 'Zenith', detail: '25% specialty dining cover-charge discount' }
    ]

    const ccobClubVsPromo = [
        { club: 'Loyalty program', promo: 'Limited-time promotion' },
        { club: 'Based on membership', promo: 'Based on booking eligibility' },
        { club: 'Club Points matter', promo: 'Sailing/date matters' },
        { club: 'Tier benefits', promo: 'Promotional terms' },
        { club: 'Member offers', promo: 'Public or targeted offer' },
        { club: 'Status match', promo: 'Usually not relevant' },
        { club: 'Milestone benefits', promo: 'Usually not relevant' },
        { club: 'Can change', promo: 'Can change' }
    ]

    const ccobGroupTypes = [
        {
            name: 'Family & Friends Groups',
            intro: 'A standard Celebrity group generally begins at eight staterooms or more, and can include:',
            bullets: ['Family reunions', 'Friend reunions', 'Class reunions', 'Birthdays', 'Graduations', 'Retirement celebrations'],
            highlight: 'Celebrity also states that Gal\u00e1pagos group bookings can require five staterooms under its group program.'
        },
        {
            name: 'Celebration & Special Event Groups',
            intro: 'Celebrity group cruises also support milestone and celebratory travel, including:',
            bullets: ['Religious retreats', 'Bridal events', 'Charters', 'Anniversaries', 'Corporate events'],
            highlight: 'For groups of eight staterooms or more, Celebrity says it can hold cruise-fare pricing for 30 days while arrangements are finalized, subject to the applicable terms.'
        },
        {
            name: 'University & Organization Groups',
            intro: "Celebrity's group program can also work for organizations, including:",
            bullets: ['Alumni travel', 'University groups', 'Corporate retreats', 'Associations', 'Clubs', 'Religious organizations', 'Special-interest groups'],
            highlight: 'A dedicated group planner can assist with dining, shore excursions, venues and other arrangements.'
        }
    ]

    const ccobGroupBenefits = [
        { label: 'Dedicated group vacation planner', icon: 'ClipboardList' },
        { label: 'Flexible payment arrangements', icon: 'Wallet' },
        { label: 'Group rewards', icon: 'Gift' },
        { label: 'Group dining', icon: 'Utensils' },
        { label: 'Private venue options', icon: 'Building2' },
        { label: 'Group shore excursions', icon: 'Compass' },
        { label: 'Event planning assistance', icon: 'Handshake' }
    ]

    const ccobGroupRewards = [
        'Sparkling wine', 'Wine', 'Fruit baskets', 'Canap\u00e9s', 'Cocktail parties', 'Meetings'
    ]

    const ccobSteps = [
        { title: 'Check the Current Promotion', desc: 'Start with the sailing you actually want.', tags: [] },
        { title: 'Compare the Total Price', desc: 'Look beyond the headline percentage. Compare:', tags: ['Cruise fare', 'Taxes', 'Fees', 'Port expenses', 'Gratuities', 'Packages', 'Onboard credit', 'Cabin category'] },
        { title: "Check Captain's Club Status", desc: 'If you are already a member, determine your current tier.', tags: [] },
        { title: 'Check Loyalty Benefits', desc: 'Review:', tags: ['Wi-Fi discount', 'Drink discount', 'Laundry', 'Dining', 'Spa benefits', 'Exclusive offers'] },
        { title: 'Check Status Match', desc: 'If you have Royal Caribbean or Silversea loyalty status, see whether you qualify for Celebrity\u2019s status-match program.', tags: [] },
        { title: 'Consider Group Pricing', desc: 'If you are traveling with eight or more staterooms, compare Celebrity\u2019s group program.', tags: [] },
        { title: 'Review Restrictions', desc: 'Confirm:', tags: ['Booking dates', 'Sailing dates', 'Eligible cabin categories', 'Refundable vs. non-refundable fares', 'Group restrictions', 'Exclusions', 'Combinability'] }
    ]

    const ccobWhoBenefits = [
        { feature: 'Couples', detail: 'Second-guest promotions can make a meaningful difference when traveling together.' },
        { feature: 'Families', detail: 'Third-, fourth- and fifth-guest promotions can potentially reduce cruise-fare costs for qualifying staterooms.' },
        { feature: 'Repeat Celebrity Cruisers', detail: "Captain's Club benefits become more valuable as you move into Elite, Elite Plus and Zenith." },
        { feature: 'Royal Caribbean Loyalists', detail: 'Status match can provide a faster path into a corresponding Celebrity tier.' },
        { feature: 'Silversea Travelers', detail: 'Eligible Silversea members can also participate in the applicable loyalty status-match structure.' },
        { feature: 'Large Groups', detail: 'Groups can benefit from dedicated planning, group rewards, flexible payments and coordinated experiences.' }
    ]

    const ccobWorthIt = [
        { label: 'Frequent promotional campaigns', icon: 'Tag' },
        { label: 'Cruise fare savings', icon: 'Percent' },
        { label: 'Second-guest promotions', icon: 'Users' },
        { label: 'Additional-guest opportunities', icon: 'Gift' },
        { label: 'Onboard credit offers', icon: 'CreditCard' },
        { label: 'Select cabin upgrades', icon: 'Layers' },
        { label: "Captain's Club exclusive offers", icon: 'Crown' },
        { label: 'Tier-based loyalty benefits', icon: 'Trophy' },
        { label: 'Power Up Points', icon: 'Sparkles' },
        { label: 'Status matching', icon: 'Repeat' },
        { label: 'Milestone rewards', icon: 'Award' },
        { label: 'Group booking opportunities', icon: 'Building2' }
    ]

    const ccobCons = [
        'Offers are capacity controlled', 'Promotions can expire quickly', 'Eligibility varies by sailing',
        'Some offers exclude River Cruises or Gal\u00e1pagos', 'Some promotions have fare-type restrictions',
        'Benefits may not combine', 'Group and individual pricing can differ', 'Promotional prices can change without notice'
    ]

    const ccobWhyPlan = [
        { title: 'Compare Current Celebrity Promotions', icon: 'Tag' },
        { title: "Review Captain's Club Benefits", icon: 'Crown' },
        { title: 'Check Loyalty Tier Advantages', icon: 'Trophy' },
        { title: 'Evaluate Status-Match Opportunities', icon: 'Repeat' },
        { title: 'Compare Refundable and Non-Refundable Fares', icon: 'ShieldCheck' },
        { title: 'Compare Onboard-Credit Promotions', icon: 'CreditCard' },
        { title: 'Review Cabin Upgrade Opportunities', icon: 'Layers' },
        { title: 'Evaluate Family Offers', icon: 'Users' },
        { title: 'Compare Group Booking Options', icon: 'Building2' },
        { title: 'Coordinate Group Travel', icon: 'Handshake' },
        { title: 'Review Pre- and Post-Cruise Arrangements', icon: 'Calendar' },
        { title: 'Match the Promotion With the Right Sailing', icon: 'Sliders' }
    ]

    const ccobFaqs = [
        { question: '1. What are Celebrity Cruises offers?', answer: 'Celebrity Cruises offers are limited-time promotions that can provide cruise fare savings, onboard credit, second-guest discounts, additional-guest offers or cabin upgrades on qualifying sailings.' },
        { question: '2. What is Celebrity Captain\u2019s Club?', answer: "Captain\u2019s Club is Celebrity Cruises' loyalty program for repeat guests. Members earn Club Points and progress through Preview, Classic, Select, Elite, Elite Plus and Zenith tiers." },
        { question: '3. How many Captain\u2019s Club tiers are there?', answer: 'There are six Captain\u2019s Club levels: Preview, Classic, Select, Elite, Elite Plus and Zenith.' },
        { question: '4. How many points do I need for Celebrity Elite status?', answer: 'Celebrity Captain\u2019s Club Elite status begins at 300 Club Points.' },
        { question: '5. How many points do I need for Celebrity Elite Plus?', answer: 'Celebrity Captain\u2019s Club Elite Plus status begins at 750 Club Points.' },
        { question: '6. How many points do I need for Celebrity Zenith?', answer: 'Celebrity Captain\u2019s Club Zenith status begins at 3,000 Club Points.' },
        { question: '7. What are the best Celebrity Captain\u2019s Club benefits?', answer: 'Captain\u2019s Club benefits vary by tier, but higher-level benefits can include complimentary laundry, Wi-Fi benefits, drink-package benefits, specialty dining discounts, Elite Cocktail Hour and access to select venues.' },
        { question: '8. Does Celebrity offer a status match?', answer: 'Yes. Celebrity participates in a loyalty status-match program involving Royal Caribbean Crown & Anchor Society and Silversea Venetian Society, subject to eligibility requirements.' },
        { question: '9. What are Celebrity Power Up Points?', answer: 'Power Up Points allow Captain\u2019s Club members to earn loyalty points through qualifying activities such as surveys and webinars. Ten Power Up Points convert into one Club Point.' },
        { question: '10. Does Celebrity offer onboard credit promotions?', answer: 'Yes. Celebrity periodically offers onboard-credit promotions. Current promotional terms include offers providing up to $650 in onboard credit on qualifying bookings, subject to restrictions.' },
        { question: '11. Does Celebrity offer free or discounted fares for additional guests?', answer: 'Celebrity periodically offers promotions for third, fourth and fifth guests in qualifying staterooms. Taxes, fees and port expenses can still apply.' },
        { question: '12. Can Captain\u2019s Club benefits be combined with Celebrity promotions?', answer: 'Not automatically. Celebrity states that Captain\u2019s Club benefits generally do not combine with other promotions unless specifically stated.' },
        { question: '13. Does Celebrity offer group cruise opportunities?', answer: 'Yes. Celebrity generally defines a group as eight staterooms or more and provides group planning, flexible payment options, group rewards and coordinated dining and excursions.' },
        { question: '14. Can Celebrity groups receive special benefits?', answer: 'Yes. Group bookings can provide access to group rewards, dedicated planning, group dining, private venues and customized shore excursions, subject to the group\u2019s applicable terms.' },
        { question: '15. How do I find the best Celebrity Cruise deal?', answer: 'Compare the current promotion, total cruise cost, cabin category, Captain\u2019s Club benefits, onboard credit, fare conditions and group opportunities. Availability and promotional terms can change, so verify the offer for your specific sailing before booking.' }
    ]

    const ccobRelated = [
        { title: 'Celebrity Alaska Cruises: Complete Guide', desc: 'Ships, glacier itineraries, Inside Passage sailing and Cruisetours across Celebrity\u2019s Alaska program.', icon: 'Compass', link: '/celebrity-cruises/alaska' },
        { title: 'Celebrity Caribbean Cruises Guide', desc: 'Compare Celebrity\u2019s Caribbean ships, itineraries, private destinations and stateroom categories.', icon: 'Anchor', link: '/celebrity-cruises/caribbean' },
        { title: 'Celebrity AquaClass vs. Concierge Class', desc: 'A side-by-side comparison of Celebrity\u2019s two elevated stateroom categories and their included amenities.', icon: 'Layers', link: '/celebrity-cruises/aquaclass-vs-concierge-class' },
        { title: 'Celebrity Beyond Cruise Ship Guide', desc: 'Deck plans, staterooms, dining and The Retreat aboard Celebrity\u2019s Edge Series ship.', icon: 'Ship', link: '/celebrity-cruises/ships/celebrity-beyond' },
        { title: 'Celebrity Cruises Overview', desc: 'Compare Caribbean, Mediterranean, European and Alaska itineraries across the Celebrity fleet.', icon: 'Globe', link: '/celebrity-cruises/' }
    ]

    /* ---------------- SCHEMA (content unchanged from source) ---------------- */

    const ccobSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/",
                "name": "Celebrity Offers & Captain\u2019s Club Benefits: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/",
                "description": "Explore Celebrity Cruises offers, Captain\u2019s Club benefits, loyalty tiers, status match, Power Up Points, milestone rewards and group cruise opportunities.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/#article" }
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/#article",
                "headline": "Celebrity Offers & Captain\u2019s Club Benefits: Complete Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/",
                "description": "Complete guide to Celebrity Cruises offers, Captain\u2019s Club loyalty tiers, Club Points, status matching, Power Up Points, milestone benefits, onboard discounts and group cruise opportunities.",
                "image": "https://www.tripsandships.com/images/celebrity-offers-loyalty.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/" }
            },
            {
                "@type": "Service",
                "name": "Celebrity Cruise Offers & Loyalty Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Celebrity Cruise Offer and Loyalty Planning",
                "description": "Expert Celebrity Cruises planning services helping travelers compare current cruise promotions, Captain\u2019s Club benefits, loyalty tiers, status-match opportunities, onboard-credit offers, cabin upgrades, family offers and group booking options."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Offers & Captain\u2019s Club Benefits", "item": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": ccobFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question.replace(/^\d+\.\s*/, ''),
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    const ccobActiveTierData = ccobTiers[ccobActiveTier]

    return (
        <>
            <Helmet>
                <title>Celebrity Alaska Cruises: Complete Guide</title>
                <title>Celebrity Cruise Offers & Captain's Club Benefits | 2026 Guide</title>
                <meta name="title" content="Celebrity Offers & Captain's Club Benefits: Complete Guide" />
                <meta
                    name="description"
                    content="Explore Celebrity Cruises offers, Captain's Club benefits, loyalty tiers, status match, Power Up Points, milestone rewards and group cruise opportunities."
                />
                <script type="application/ld+json">
                    {JSON.stringify(ccobSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="ccob-page-wrapper">

                {/* HERO SECTION */}
                <section className="ccob-hero-section">
                    <div className="ccob-hero-overlay"></div>
                    <div className="ccob-hero-content">
                        <div className="ccob-hero-tag">
                            <CcobIconSparkle size={16} />
                            <span>Celebrity Cruises Offers & Loyalty</span>
                        </div>
                        <h1 className="ccob-hero-title">Celebrity Offers & Captain's Club <br /> Benefits: Complete Guide</h1>
                        <p className="ccob-hero-subtitle">
                            Cruise Promotions, Loyalty Tiers, Status Match & Group Cruise Opportunities
                        </p>
                        <div className="ccob-hero-btn-row">
                            <Link to='/contact' className="ccob-btn-primary">
                                <CcobIconPhone size={18} />
                                Compare My Celebrity Cruise Offers
                            </Link>
                            <button className="ccob-btn-outline">
                                <CcobIconList size={18} />
                                Speak With a Celebrity Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="ccob-intro-section">
                    <div className="ccob-intro-container">
                        <div className="ccob-intro-grid">
                            <div className="ccob-intro-copy">
                                <span className="ccob-eyebrow-label">FIND CELEBRITY OFFERS & LOYALTY BENEFITS</span>
                                <h2 className="ccob-section-heading">Find Celebrity Cruise Offers and Loyalty Benefits</h2>
                                <div className="ccob-heading-bar"></div>
                                <p className="ccob-lead-paragraph">
                                    Celebrity Cruises offers can include cruise fare savings, onboard credit, second-guest promotions, additional-guest offers, cabin upgrades and other limited-time incentives.
                                </p>
                                <p className="ccob-lead-paragraph">
                                    For repeat Celebrity travelers, the Captain's Club loyalty program adds another layer of value through tier-based benefits, exclusive offers, onboard discounts, status matching and milestone rewards.
                                </p>
                                <p className="ccob-lead-paragraph">
                                    The key is understanding the difference between a current promotional offer, a Captain's Club loyalty benefit and a group booking opportunity. These programs have different eligibility requirements and may not always be combinable.
                                </p>
                                <p className="ccob-lead-paragraph">
                                    Because Celebrity promotions are capacity controlled and can change or expire, travelers should verify the current terms before booking.
                                </p>
                            </div>
                            <div className="ccob-intro-image-frame">
                                <CcobPlaceholder label="Celebrity Offers & Captain's Club" />
                                <div className="ccob-intro-badge-float">
                                    <CcobIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>6 Loyalty Tiers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="ccob-quick-answer-section">
                    <div className="ccob-quick-answer-container">
                        <div className="ccob-quick-answer-card">
                            <h3 className="ccob-quick-answer-title">What Are Celebrity Cruise Offers?</h3>
                            <p className="ccob-quick-answer-text">
                                Celebrity Cruise Offers are limited-time promotions that can provide savings or added value on eligible sailings, while Captain's Club benefits reward repeat guests based on their Club Point tier. Depending on the promotion and sailing, offers can include:
                            </p>
                            <ul className="ccob-quick-answer-list">
                                {ccobOfferTypes.map((item, idx) => (
                                    <li key={idx}><CcobIconCheck size={16} />{item}</li>
                                ))}
                            </ul>
                            <p className="ccob-quick-answer-text" style={{ marginTop: '18px' }}>
                                The exact offer, sailing eligibility, booking window and combinability rules vary.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="ccob-inline-cta-section">
                    <div className="ccob-inline-cta-container">
                        <span className="ccob-inline-cta-tag">Expert Planning</span>
                        <p className="ccob-inline-cta-text">Want to know which Celebrity promotion and loyalty benefits provide the best value for your sailing?</p>
                        <div className="ccob-inline-cta-btn-row">
                            <Link to="/contact" className="ccob-btn-primary">
                                <CcobIconPhone size={18} />
                                Compare My Celebrity Cruise Offers
                            </Link>
                            <Link to="/contact" className="ccob-btn-outline-navy">
                                <CcobIconList size={18} />
                                Speak With a Celebrity Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="ccob-glance-section">
                    <div className="ccob-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">PROGRAM OVERVIEW</span>
                            <h2 className="ccob-section-heading">Celebrity Offers & Captain's Club at a Glance</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                        </div>
                        <div className="ccob-glance-table">
                            {ccobGlance.map((row, idx) => (
                                <div key={idx} className="ccob-glance-row">
                                    <div className="ccob-glance-feature">{row.feature}</div>
                                    <div className="ccob-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CURRENT CELEBRITY CRUISE OFFERS */}
                <section className="ccob-feature-section ccob-bg-white">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid">
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconDot size={14} />
                                    <span>Current Offers</span>
                                </div>
                                <CcobPlaceholder label="Current Celebrity Cruise Offers" />
                            </div>
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">PROMOTIONAL CALENDAR</span>
                                <h2 className="ccob-feature-title">Current Celebrity Cruise Offers</h2>
                                <p className="ccob-lead-paragraph">
                                    Celebrity regularly changes its promotional calendar, so there is no single permanent "best Celebrity deal." Current promotions can include different combinations of:
                                </p>
                                <div className="ccob-feature-list">
                                    {ccobCurrentOfferTypes.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccob-feature-item-card">
                                                <div className="ccob-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcobIconCheck size={18} />}
                                                </div>
                                                <span className="ccob-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '20px' }}>
                                    For example, Celebrity's current promotional terms include an up to $650 onboard credit offer on qualifying new bookings, with the amount varying by sailing length and stateroom category. The promotion excludes Celebrity River Cruises and Gal\u00e1pagos and is subject to its stated terms and availability. Celebrity also lists promotional opportunities separately from its Captain's Club loyalty benefits.
                                </p>
                                <p className="ccob-itinerary-note" style={{ borderTop: 'none', paddingTop: 0 }}>
                                    Important: Promotional values and booking periods change frequently, so a deal shown today may not be available for a future booking.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY CRUISE DEALS: WHAT CAN YOU SAVE */}
                <section className="ccob-tag-section ccob-bg-soft">
                    <div className="ccob-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">VALUE FACTORS</span>
                            <h2 className="ccob-section-heading">Celebrity Cruise Deals: What Can You Save?</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                The value of a Celebrity promotion depends on:
                            </p>
                        </div>
                        <div className="ccob-tag-grid">
                            {ccobSavingsFactors.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccob-tag-card">
                                        <div className="ccob-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CcobIconDot size={20} />}
                                        </div>
                                        <span className="ccob-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ccob-included-note">
                            For example, recent Celebrity promotions have offered different savings for inside, ocean-view, veranda, Concierge Class, AquaClass and suite categories. This means travelers should compare the total booking value, rather than choosing a promotion simply because its headline discount is larger.
                        </p>
                    </div>
                </section>

                {/* SECOND GUEST OFFERS */}
                <section className="ccob-feature-section ccob-dark-section">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid cccob-reverse ccob-reverse">
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">COUPLES & COMPANIONS</span>
                                <h2 className="ccob-feature-title" style={{ textAlign: 'left' }}>Celebrity Second Guest Offers</h2>
                                <p className="ccob-lead-paragraph">
                                    One of the most searched Celebrity promotions involves discounts for the second guest. Depending on the promotion, Celebrity may offer:
                                </p>
                                <div className="ccob-feature-list">
                                    {ccobSecondGuestOffers.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccob-feature-item-card">
                                                <div className="ccob-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcobIconCheck size={18} />}
                                                </div>
                                                <span className="ccob-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Eligibility depends on the specific promotion, sailing and fare type. Celebrity's promotional terms also make clear that some second-guest offers do not apply to contracted groups, charters or certain other rate categories.
                                </p>
                            </div>
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconSparkle size={14} />
                                    <span>Second Guest</span>
                                </div>
                                <CcobPlaceholder label="Celebrity Second Guest Offers" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3RD, 4TH & 5TH GUEST OFFERS */}
                <section className="ccob-feature-section ccob-bg-white">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid">
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconSparkle size={14} />
                                    <span>Additional Guests</span>
                                </div>
                                <CcobPlaceholder label="Celebrity 3rd, 4th & 5th Guest Offers" />
                            </div>
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">FAMILY & MULTI-GUEST</span>
                                <h2 className="ccob-feature-title">Celebrity 3rd, 4th & 5th Guest Offers</h2>
                                <p className="ccob-lead-paragraph">
                                    Celebrity sometimes offers promotional cruise fares for additional guests sharing a stateroom. A current promotional structure provides $0 cruise fares for qualifying third, fourth and fifth guests on eligible sailings and stateroom categories, although taxes, fees and port expenses still apply. The offer is subject to exclusions and does not apply universally across Celebrity's product range.
                                </p>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '12px' }}>This Can Be Particularly Useful For:</p>
                                <div className="ccob-feature-list">
                                    {ccobUsefulFor.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccob-feature-item-card">
                                                <div className="ccob-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcobIconCheck size={18} />}
                                                </div>
                                                <span className="ccob-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccob-itinerary-note" style={{ marginTop: '16px', borderTop: 'none', paddingTop: 0 }}>
                                    Always compare the final total price, including taxes and fees.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ONBOARD CREDIT OFFERS */}
                <section className="ccob-feature-section ccob-dark-section">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid ccob-reverse">
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">ONBOARD SPENDING</span>
                                <h2 className="ccob-feature-title" style={{ textAlign: 'left' }}>Celebrity Onboard Credit Offers</h2>
                                <p className="ccob-lead-paragraph">
                                    Celebrity periodically offers onboard credit promotions. A current promotion provides up to $650 in onboard credit depending on cruise length, stateroom category and sailing eligibility.
                                </p>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '12px' }}>
                                    For qualifying 6-night-or-longer sailings, the current terms list higher onboard-credit amounts for veranda, Concierge Class, AquaClass and suite categories than for inside and ocean-view accommodations.
                                </p>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '12px' }}>
                                    Onboard credit can potentially be useful for eligible onboard expenses, but travelers should review the specific promotion's terms before assuming what it covers.
                                </p>
                            </div>
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconSparkle size={14} />
                                    <span>Onboard Credit</span>
                                </div>
                                <CcobPlaceholder label="Celebrity Onboard Credit Offers" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CABIN UPGRADE OFFERS */}
                <section className="ccob-feature-section ccob-bg-white">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid">
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconDot size={14} />
                                    <span>Cabin Upgrades</span>
                                </div>
                                <CcobPlaceholder label="Celebrity Cabin Upgrade Offers" />
                            </div>
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">STATEROOM VALUE</span>
                                <h2 className="ccob-feature-title">Celebrity Cabin Upgrade Offers</h2>
                                <p className="ccob-lead-paragraph">
                                    Celebrity also periodically runs cabin upgrade promotions. A recent promotion has offered Ocean View to Veranda upgrades on selected sailings and ships, subject to availability and capacity restrictions.
                                </p>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '12px' }}>Upgrade offers can be especially attractive when:</p>
                                <div className="ccob-choice-list" style={{ marginTop: '10px' }}>
                                    {ccobUpgradeGoodWhen.map((item, idx) => (
                                        <div key={idx} className="ccob-choice-item">
                                            <div className="ccob-choice-icon-wrap">
                                                <CcobIconCheck size={16} />
                                            </div>
                                            <div className="ccob-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="ccob-itinerary-note" style={{ marginTop: '20px', borderTop: 'none', paddingTop: 0 }}>
                                    However, an upgrade promotion does not necessarily mean every cabin on every sailing qualifies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AVAILABLE ON EVERY SAILING */}
                <section className="ccob-audience-section">
                    <div className="ccob-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">CAPACITY CONTROLLED</span>
                            <h2 className="ccob-section-heading">Are Celebrity Cruise Offers Available on Every Sailing?</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                No. Celebrity states that its offers are generally capacity controlled, meaning:
                            </p>
                        </div>
                        <div className="ccob-audience-column">
                            <ul className="ccob-audience-list">
                                {ccobCapacityFactors.map((item, idx) => (
                                    <li key={idx} className="ccob-audience-item">
                                        <CcobIconCheck size={18} className="ccob-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="ccob-itinerary-note" style={{ marginTop: '24px', borderTop: 'none', paddingTop: 0, textAlign: 'center' }}>
                            This is why checking the promotion against the specific ship, sailing and cabin category is essential.
                        </p>
                    </div>
                </section>

                {/* CAN OFFERS BE COMBINED */}
                <section className="ccob-worth-section">
                    <div className="ccob-worth-container">
                        <span className="ccob-eyebrow-label">COMBINABILITY</span>
                        <h2 className="ccob-section-heading">Can Celebrity Offers Be Combined?</h2>
                        <div className="ccob-heading-bar ccob-bar-center"></div>
                        <p className="ccob-lead-paragraph">
                            Sometimes. Celebrity promotional terms specify which offers may be combined. For example, certain savings or onboard-credit offers can be combinable with qualifying second-guest or additional-guest promotions, subject to the stated terms. However, do not assume that every Celebrity offer stacks with every other offer. Captain's Club benefits also have their own restrictions and generally do not combine with other promotions unless specifically stated.
                        </p>
                    </div>
                </section>

                {/* WHAT IS CAPTAIN'S CLUB */}
                <section className="ccob-feature-section ccob-dark-section">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid">
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconAward size={14} />
                                    <span>Loyalty Program</span>
                                </div>
                                <CcobPlaceholder label="What Is Celebrity Captain's Club" />
                            </div>
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">THE LOYALTY PROGRAM</span>
                                <h2 className="ccob-feature-title">What Is Celebrity Captain's Club?</h2>
                                <p className="ccob-lead-paragraph">
                                    Captain's Club is Celebrity Cruises' loyalty program for repeat guests. Members earn Club Points through qualifying Celebrity sailings and activities. The program currently has six membership levels: Preview, Classic, Select, Elite, Elite Plus and Zenith.
                                </p>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '12px' }}>
                                    The higher your Club Point balance, the higher your Captain's Club tier and the greater the range of benefits available.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAPTAIN'S CLUB TIERS TABLE */}
                <section className="ccob-glance-section">
                    <div className="ccob-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">POINT THRESHOLDS</span>
                            <h2 className="ccob-section-heading">Celebrity Captain's Club Tiers</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                        </div>
                        <div className="ccob-glance-table">
                            {ccobTierTable.map((row, idx) => (
                                <div key={idx} className="ccob-glance-row">
                                    <div className="ccob-glance-feature">{row.feature}</div>
                                    <div className="ccob-glance-detail">{row.detail} Club Points</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccob-included-note">
                            Celebrity confirms these current point thresholds on its Captain's Club pages.
                        </p>
                    </div>
                </section>

                {/* TIER DETAIL TABBED SHOWCASE */}
                <section className="ccob-tiers-section">
                    <div className="ccob-tiers-container">
                        <div className="ccob-tiers-header">
                            <span className="ccob-eyebrow-label">TIER BY TIER</span>
                            <h2 className="ccob-section-heading">Captain's Club Tier Benefits</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph">
                                Each Captain's Club tier unlocks a progressively richer set of benefits.
                            </p>
                        </div>

                        <div className="ccob-tiers-tabs">
                            {[
                                { id: 'preview', label: 'Preview' },
                                { id: 'classic', label: 'Classic' },
                                { id: 'select', label: 'Select' },
                                { id: 'elite', label: 'Elite' },
                                { id: 'eliteplus', label: 'Elite Plus' },
                                { id: 'zenith', label: 'Zenith' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`ccob-tier-tab-btn ${ccobActiveTier === tab.id ? 'active' : ''}`}
                                    onClick={() => setCcobActiveTier(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="ccob-tier-panel animate-fade-in">
                            <div className="ccob-tier-panel-header">
                                <h3 className="ccob-tier-panel-title">Celebrity Captain's Club {ccobActiveTierData.name}</h3>
                                <span className="ccob-tier-points-pill">{ccobActiveTierData.points}</span>
                            </div>
                            <p className="ccob-lead-paragraph">{ccobActiveTierData.intro}</p>
                            <p className="ccob-lead-paragraph" style={{ marginBottom: '6px' }}>
                                {ccobActiveTier === 'preview' ? 'Benefits include:' : ccobActiveTier === 'classic' ? 'Classic members receive benefits such as:' : ccobActiveTier === 'select' ? 'Benefits include additional discounts and recognition, such as:' : 'Featured benefits include:'}
                            </p>
                            <div className="ccob-tier-benefit-list">
                                {ccobActiveTierData.benefits.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <div key={idx} className="ccob-tier-benefit-item">
                                            {IconComponent ? <IconComponent size={17} /> : <CcobIconCheck size={17} />}
                                            <span>{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className="ccob-lead-paragraph" style={{ marginTop: '20px', marginBottom: 0 }}>{ccobActiveTierData.footer}</p>
                        </div>
                    </div>
                </section>

                {/* MILESTONE BENEFITS */}
                <section className="ccob-steps-section ccob-bg-soft">
                    <div className="ccob-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">BEYOND THE TOP TIER</span>
                            <h2 className="ccob-section-heading">Celebrity Captain's Club Milestone Benefits</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity has expanded its loyalty program with Milestone Benefits beginning at higher Club Point levels. Current milestones include 1,500, 2,250, 3,000, 6,000 and 9,000 points. The program began applying to qualifying future sailings departing on or after June 11, 2026, after the applicable milestone is achieved.
                            </p>
                        </div>
                        <div className="ccob-steps-list">
                            {ccobMilestones.map((step, idx) => (
                                <div key={idx} className="ccob-step-item">
                                    <div className="ccob-step-number">{idx + 1}</div>
                                    <div className="ccob-step-body">
                                        <h4 className="ccob-step-title">{step.title}</h4>
                                        <p className="ccob-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="ccob-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="ccob-step-tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW TO EARN CLUB POINTS */}
                <section className="ccob-feature-section ccob-bg-white">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid ccob-reverse">
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">EARNING POINTS</span>
                                <h2 className="ccob-feature-title" style={{ textAlign: 'left' }}>How Do You Earn Celebrity Captain's Club Points?</h2>
                                <p className="ccob-lead-paragraph">
                                    Club Points are primarily earned through qualifying Celebrity sailings. The number of points depends on factors including:
                                </p>
                                <div className="ccob-feature-list">
                                    {ccobEarnFactors.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccob-feature-item-card">
                                                <div className="ccob-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcobIconCheck size={18} />}
                                                </div>
                                                <span className="ccob-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's current program awards points based on stateroom category and the number of nights sailed. Higher-value accommodations can therefore accelerate progress through the loyalty tiers.
                                </p>
                            </div>
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconSparkle size={14} />
                                    <span>Earning Points</span>
                                </div>
                                <CcobPlaceholder label="How to Earn Club Points" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* POWER UP POINTS */}
                <section className="ccob-feature-section ccob-dark-section">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid">
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconSparkle size={14} />
                                    <span>Power Up Points</span>
                                </div>
                                <CcobPlaceholder label="Celebrity Power Up Points" />
                            </div>
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">EARN BETWEEN CRUISES</span>
                                <h2 className="ccob-feature-title">Celebrity Captain's Club Power Up Points</h2>
                                <p className="ccob-lead-paragraph">
                                    Power Up Points allow Captain's Club members to earn points without being onboard. Celebrity can invite members to participate in activities such as:
                                </p>
                                <div className="ccob-feature-list">
                                    {ccobPowerUpActivities.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccob-feature-item-card">
                                                <div className="ccob-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcobIconCheck size={18} />}
                                                </div>
                                                <span className="ccob-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '20px' }}>
                                    For every 10 Power Up Points, members receive 1 Club Point. Celebrity states that monthly Power Up Points are converted and added to the member's Club Point balance within the specified processing period. This can provide a useful way to build loyalty points between cruises.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATUS MATCH */}
                <section className="ccob-tag-section ccob-bg-white">
                    <div className="ccob-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">CROSS-BRAND LOYALTY</span>
                            <h2 className="ccob-section-heading">Celebrity Captain's Club Status Match</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity participates in a loyalty status match program involving:
                            </p>
                        </div>
                        <div className="ccob-tag-grid ccob-status-match-tag-grid">
                            {ccobStatusMatchPrograms.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccob-tag-card">
                                        <div className="ccob-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CcobIconDot size={20} />}
                                        </div>
                                        <span className="ccob-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ccob-included-note">
                            Qualifying members can receive a corresponding membership level when enrolling in another participating loyalty program, subject to the program rules.
                        </p>
                    </div>
                </section>

                {/* STATUS MATCH TIERS TABLE */}
                <section className="ccob-glance-section">
                    <div className="ccob-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">MATCH MATRIX</span>
                            <h2 className="ccob-section-heading">Celebrity Status Match Tiers</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                        </div>
                        <div className="ccob-pair-table">
                            <div className="ccob-pair-row ccob-pair-header">
                                <div className="ccob-pair-cell">Royal Caribbean Status</div>
                                <div className="ccob-pair-cell">Celebrity Captain's Club</div>
                            </div>
                            {ccobStatusMatchTiers.map((row, idx) => (
                                <div key={idx} className="ccob-pair-row">
                                    <div className="ccob-pair-cell">{row.royal}</div>
                                    <div className="ccob-pair-cell">{row.celebrity}</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccob-included-note">
                            The exact status-match rules include qualifying-point and program requirements, and the matrix was realigned effective July 1, 2026.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CONSIDER STATUS MATCH */}
                <section className="ccob-audience-section ccob-bg-white">
                    <div className="ccob-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">WORTH CONSIDERING</span>
                            <h2 className="ccob-section-heading">Who Should Consider Celebrity Status Match?</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Status matching can be particularly useful for travelers who already have meaningful loyalty status with:
                            </p>
                        </div>
                        <div className="ccob-audience-column">
                            <ul className="ccob-status-match-audience-list">
                                {ccobStatusMatchWho.map((item, idx) => (
                                    <li key={idx} className="ccob-status-match-audience-item">
                                        <CcobIconCheck size={18} className="ccob-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="ccob-itinerary-note" style={{ marginTop: '24px', borderTop: 'none', paddingTop: 0, textAlign: 'center' }}>
                            Instead of starting from zero in another participating program, eligible travelers may receive a corresponding membership level. Because status-match rules can change, travelers should verify eligibility before relying on a particular match.
                        </p>
                    </div>
                </section>

                {/* EXCLUSIVE OFFERS */}
                <section className="ccob-feature-section ccob-dark-section">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid ccob-reverse">
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">MEMBER-ONLY</span>
                                <h2 className="ccob-feature-title" style={{ textAlign: 'left' }}>Celebrity Captain's Club Exclusive Offers</h2>
                                <p className="ccob-lead-paragraph">
                                    Captain's Club members can receive access to exclusive offers beyond standard public promotions. These may include:
                                </p>
                                <div className="ccob-feature-list">
                                    {ccobExclusiveOffers.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccob-feature-item-card">
                                                <div className="ccob-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcobIconCheck size={18} />}
                                                </div>
                                                <span className="ccob-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity specifically identifies exclusive offers as part of Captain's Club membership.
                                </p>
                            </div>
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconSparkle size={14} />
                                    <span>Exclusive Offers</span>
                                </div>
                                <CcobPlaceholder label="Captain's Club Exclusive Offers" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* DRINK DISCOUNTS TABLE */}
                <section className="ccob-glance-section ccob-bg-white">
                    <div className="ccob-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">ONBOARD SAVINGS</span>
                            <h2 className="ccob-section-heading">Celebrity Captain's Club Drink Discounts</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Captain's Club members can receive qualifying discounts on drink packages.
                            </p>
                        </div>
                        <div className="ccob-glance-table">
                            {ccobDrinkDiscountTable.map((row, idx) => (
                                <div key={idx} className="ccob-glance-row">
                                    <div className="ccob-glance-feature">{row.feature}</div>
                                    <div className="ccob-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccob-included-note">
                            These discounts are generally subject to pre-cruise purchase requirements and other restrictions.
                        </p>
                    </div>
                </section>

                {/* WIFI BENEFITS TABLE */}
                <section className="ccob-glance-section" style={{ paddingTop: '0' }}>
                    <div className="ccob-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">STAYING CONNECTED</span>
                            <h2 className="ccob-section-heading">Celebrity Captain's Club Wi-Fi Benefits</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Wi-Fi benefits increase as members move through the loyalty tiers.
                            </p>
                        </div>
                        <div className="ccob-glance-table">
                            {ccobWifiDiscountTable.map((row, idx) => (
                                <div key={idx} className="ccob-glance-row">
                                    <div className="ccob-glance-feature">{row.feature}</div>
                                    <div className="ccob-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccob-included-note">
                            Exact benefits are subject to Celebrity's current terms and benefit rules.
                        </p>
                    </div>
                </section>

                {/* LAUNDRY BENEFITS */}
                <section className="ccob-itinerary-section ccob-bg-white ccob-laundry-section">
                    <div className="ccob-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">PRACTICAL PERKS</span>
                            <h2 className="ccob-section-heading">Celebrity Captain's Club Laundry Benefits</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Laundry benefits also become more valuable at higher tiers.
                            </p>
                        </div>
                        <div className="ccob-itinerary-grid">
                            {ccobLaundryBenefits.map((tier, idx) => (
                                <div key={idx} className="ccob-itinerary-card">
                                    <h3 className="ccob-itinerary-region">
                                        <Shirt size={20} />
                                        {tier.name}
                                    </h3>
                                    <p className="ccob-lead-paragraph" style={{ marginBottom: '18px', fontSize: '16px' }}>{tier.bestFor}.</p>
                                    <p className="ccob-itinerary-note">{tier.feature}</p>
                                </div>
                            ))}
                        </div>
                        <p className="ccob-included-note">
                            For longer cruises, these benefits can provide meaningful practical value.
                        </p>
                    </div>
                </section>

                {/* SPECIALTY DINING BENEFITS */}
                <section className="ccob-glance-section">
                    <div className="ccob-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">DINING SAVINGS</span>
                            <h2 className="ccob-section-heading">Celebrity Captain's Club Specialty Dining Benefits</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Elite Plus and Zenith members receive qualifying discounts on specialty dining cover charges.
                            </p>
                        </div>
                        <div className="ccob-glance-table">
                            {ccobDiningBenefits.map((row, idx) => (
                                <div key={idx} className="ccob-glance-row">
                                    <div className="ccob-glance-feature">{row.feature}</div>
                                    <div className="ccob-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccob-included-note">
                            Milestone levels can provide additional specialty dining discounts.
                        </p>
                    </div>
                </section>

                {/* CAPTAIN'S CLUB VS CURRENT CRUISE OFFERS */}
                <section className="ccob-glance-section" style={{ background: 'var(--ccob-bg-white)' }}>
                    <div className="ccob-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">TWO DIFFERENT PROGRAMS</span>
                            <h2 className="ccob-section-heading">Celebrity Captain's Club vs. Current Cruise Offers</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                These are not the same thing.
                            </p>
                        </div>
                        <div className="ccob-pair-table">
                            <div className="ccob-pair-row ccob-pair-header">
                                <div className="ccob-pair-cell">Captain's Club</div>
                                <div className="ccob-pair-cell">Cruise Promotion</div>
                            </div>
                            {ccobClubVsPromo.map((row, idx) => (
                                <div key={idx} className="ccob-pair-row">
                                    <div className="ccob-pair-cell">{row.club}</div>
                                    <div className="ccob-pair-cell">{row.promo}</div>
                                </div>
                            ))}
                        </div>
                        <p className="ccob-included-note">
                            The best booking strategy is to check both your Captain's Club benefits and the current promotion.
                        </p>
                    </div>
                </section>

                {/* CAN BE COMBINED */}
                <section className="ccob-worth-section ccob-bg-soft">
                    <div className="ccob-worth-container">
                        <span className="ccob-eyebrow-label">TERMS TO CHECK</span>
                        <h2 className="ccob-section-heading">Can Captain's Club Benefits Be Combined With Celebrity Offers?</h2>
                        <div className="ccob-heading-bar ccob-bar-center"></div>
                        <p className="ccob-lead-paragraph">
                            Not automatically. Celebrity's terms state that Captain's Club benefits generally do not combine with another promotion unless specifically stated. This is important when comparing public sale price, Captain's Club pricing, onboard credit, drink discounts, Wi-Fi discounts and cabin upgrades. The lowest headline fare is not always the best overall value.
                        </p>
                    </div>
                </section>

                {/* GROUP CRUISE OPPORTUNITIES */}
                <section className="ccob-feature-section ccob-dark-section">
                    <div className="ccob-feature-container">
                        <div className="ccob-feature-grid">
                            <div className="ccob-feature-image-col">
                                <div className="ccob-badge-overlay">
                                    <CcobIconAward size={14} />
                                    <span>Group Cruises</span>
                                </div>
                                <CcobPlaceholder label="Celebrity Group Cruise Opportunities" />
                            </div>
                            <div className="ccob-feature-copy-col">
                                <span className="ccob-eyebrow-label">TRAVELING TOGETHER</span>
                                <h2 className="ccob-feature-title">Celebrity Group Cruise Opportunities</h2>
                                <p className="ccob-lead-paragraph">
                                    Celebrity also offers group booking opportunities for travelers organizing larger parties. A standard Celebrity group generally begins at eight staterooms or more.
                                </p>
                                <p className="ccob-lead-paragraph" style={{ marginTop: '12px' }}>
                                    Celebrity also states that Gal\u00e1pagos group bookings can require five staterooms under its group program.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GROUP CRUISE TYPES CARD GRID */}
                <section className="ccob-itinerary-section ccob-bg-white">
                    <div className="ccob-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">GROUP TYPES</span>
                            <h2 className="ccob-section-heading">Types of Celebrity Group Cruises</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                        </div>
                        <div className="ccob-itinerary-grid">
                            {ccobGroupTypes.map((group, idx) => (
                                <div key={idx} className="ccob-itinerary-card">
                                    <h3 className="ccob-itinerary-region">
                                        <Users size={20} />
                                        {group.name}
                                    </h3>
                                    <p className="ccob-lead-paragraph" style={{ marginBottom: '18px', fontSize: '15.5px' }}>{group.intro}</p>
                                    <ul className="ccob-itinerary-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                                        {group.bullets.map((b, bIdx) => (
                                            <li key={bIdx} style={{ width: 'fit-content', margin: 0 }}>{b}</li>
                                        ))}
                                    </ul>
                                    <p className="ccob-itinerary-note">{group.highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* GROUP BENEFITS */}
                <section className="ccob-included-section ccob-cruise-inclusions-section">
                    <div className="ccob-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">GROUP ADVANTAGES</span>
                            <h2 className="ccob-section-heading">Celebrity Group Cruise Benefits</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Group bookings can provide access to:
                            </p>
                        </div>
                        <div className="ccob-included-grid">
                            {ccobGroupBenefits.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccob-included-item">
                                        {IconComponent ? <IconComponent size={18} className="ccob-included-icon" /> : <CcobIconCheck size={18} className="ccob-included-icon" />}
                                        <span>{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ccob-included-note">
                            For groups of eight staterooms or more, Celebrity says it can hold cruise-fare pricing for 30 days while arrangements are finalized, subject to the applicable terms.
                        </p>
                    </div>
                </section>

                {/* GROUP REWARDS */}
                <section className="ccob-included-section ccob-bg-white">
                    <div className="ccob-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">FOR THE GROUP LEADER</span>
                            <h2 className="ccob-section-heading">Celebrity Group Rewards</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Group bookings can provide rewards for the group leader. Depending on the group and applicable terms, rewards can include onboard credits that may be used for items such as:
                            </p>
                        </div>
                        <div className="ccob-included-grid">
                            {ccobGroupRewards.map((item, idx) => (
                                <div key={idx} className="ccob-included-item">
                                    <CcobIconCheck size={18} className="ccob-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="ccob-included-note">
                            The exact reward structure should be confirmed when establishing the group booking.
                        </p>
                    </div>
                </section>

                {/* ARE GROUP OFFERS THE SAME AS PUBLIC OFFERS */}
                <section className="ccob-worth-section ccob-bg-soft">
                    <div className="ccob-worth-container">
                        <span className="ccob-eyebrow-label">A DIFFERENT PRICE STRUCTURE</span>
                        <h2 className="ccob-section-heading">Are Celebrity Group Offers the Same as Public Offers?</h2>
                        <div className="ccob-heading-bar ccob-bar-center"></div>
                        <p className="ccob-lead-paragraph">
                            No. Group bookings can have separate pricing structures and terms. Celebrity's promotional terms specifically state that certain public promotions may have restrictions involving Group X rates, contracted groups, charters and other booking categories. This is why groups should compare individual promotional pricing vs. contracted group pricing rather than assuming the public promotion is automatically the better deal.
                        </p>
                    </div>
                </section>

                {/* HOW TO FIND THE BEST OFFER — STEPS */}
                <section className="ccob-steps-section">
                    <div className="ccob-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">PLANNING WALKTHROUGH</span>
                            <h2 className="ccob-section-heading">How to Find the Best Celebrity Cruise Offer</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                        </div>
                        <div className="ccob-steps-list">
                            {ccobSteps.map((step, idx) => (
                                <div key={idx} className="ccob-step-item">
                                    <div className="ccob-step-number">{idx + 1}</div>
                                    <div className="ccob-step-body">
                                        <h4 className="ccob-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="ccob-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="ccob-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="ccob-step-tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO BENEFITS MOST */}
                <section className="ccob-glance-section">
                    <div className="ccob-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="ccob-section-heading">Celebrity Cruise Offers: Who Benefits Most?</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                        </div>
                        <div className="ccob-glance-table">
                            {ccobWhoBenefits.map((row, idx) => (
                                <div key={idx} className="ccob-glance-row">
                                    <div className="ccob-glance-feature">{row.feature}</div>
                                    <div className="ccob-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ARE THEY WORTH IT — SPLIT SECTION */}
                <section className="ccob-tag-section ccob-bg-white">
                    <div className="ccob-worth-container-split">
                        <div className="ccob-worth-split-grid">

                            <div className="ccob-worth-info-col">
                                <span className="ccob-eyebrow-label">INVESTMENT & VALUE</span>
                                <h2 className="ccob-section-heading">Are Celebrity Cruise Offers Worth It?</h2>
                                <div className="ccob-heading-bar"></div>
                                <p className="ccob-lead-paragraph">
                                    They can be, but the best offer is not always the largest advertised discount. For example, a lower cruise fare may be less valuable than a slightly higher fare that includes a more desirable cabin, onboard credit or another benefit. Likewise, Captain's Club benefits can provide substantial value for repeat cruisers, especially at Elite, Elite Plus and Zenith. The right comparison is:
                                </p>
                                <div className="ccob-worth-footer-note">
                                    <p className="ccob-worth-note">
                                        Total trip cost + cabin + included value + loyalty benefits + flexibility.
                                    </p>
                                </div>
                            </div>

                            <div className="ccob-worth-advantages-col">
                                <div className="ccob-worth-advantages-list">
                                    {ccobWorthIt.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ccob-worth-item-row">
                                                <div className="ccob-worth-item-icon-box">
                                                    {IconComponent ? <IconComponent size={18} /> : <CcobIconDot size={18} />}
                                                </div>
                                                <span className="ccob-worth-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="ccob-pros-section ccob-dark-section">
                    <div className="ccob-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="ccob-eyebrow-label ccob-eyebrow-white">PROS & CONS</span>
                            <h2 className="ccob-section-heading">Celebrity Offers Pros & Cons</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                        </div>

                        <div className="ccob-comparison-board">
                            <div className="ccob-pros-panel">
                                <h3 className="ccob-panel-title ccob-pros-title">
                                    <CcobIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="ccob-panel-list">
                                    {ccobWorthIt.map((pro, idx) => (
                                        <div key={idx} className="ccob-list-item">
                                            <div className="ccob-item-icon-wrap ccob-pro-icon">
                                                <CcobIconCheck size={16} />
                                            </div>
                                            <div className="ccob-item-title">{pro.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="ccob-cons-panel">
                                <h3 className="ccob-panel-title ccob-cons-title">
                                    <CcobIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="ccob-panel-list">
                                    {ccobCons.map((con, idx) => (
                                        <div key={idx} className="ccob-list-item">
                                            <div className="ccob-item-icon-wrap ccob-con-icon">
                                                <CcobIconX size={16} />
                                            </div>
                                            <div className="ccob-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERT INSIGHT */}
                <section id="celebrity-offers-loyalty-insight" className="ccob-editorial-section">
                    <div className="ccob-editorial-container">
                        <div className="ccob-editorial-split-grid">

                            <div className="ccob-editorial-profile-sidebar">
                                <div className="ccob-editorial-avatar-wrap">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="ccob-editorial-avatar" />
                                </div>

                                <div className="ccob-editorial-bio">
                                    <h4 className="ccob-editorial-bio-name">Angela Hughes</h4>
                                    <p className="ccob-editorial-bio-title">Founder & CEO, Trips & Ships Luxury Travel</p>
                                </div>

                                <div className="ccob-editorial-stats-row">
                                    <div className="ccob-editorial-stat-badge">
                                        <strong>40+</strong> Years Experience
                                    </div>
                                    <div className="ccob-editorial-stat-badge">
                                        <strong>120+</strong> Countries Visited
                                    </div>
                                </div>

                                <div className="ccob-editorial-expertise-box">
                                    <span className="ccob-editorial-expertise-label">Her expertise spans:</span>
                                    <div className="ccob-editorial-expertise-list">
                                        {[
                                            'Premium & luxury cruising',
                                            "Captain's Club & loyalty program strategy",
                                            'Celebrity fare & promotion comparison',
                                            'Group cruise planning',
                                            'Cross-brand status matching'
                                        ].map((item, idx) => (
                                            <div key={idx} className="ccob-editorial-expertise-item">
                                                <CcobIconDot size={10} className="ccob-editorial-dot" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="ccob-editorial-main-content">
                                <div className="ccob-editorial-header">
                                    <div className="ccob-editorial-eyebrow-container">
                                        <CcobIconAward size={16} className="ccob-editorial-icon-badge" />
                                        <span className="ccob-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="ccob-editorial-heading">
                                        How Should You Evaluate a Celebrity Cruise Deal?
                                    </h2>
                                    <div className="ccob-editorial-heading-line"></div>
                                </div>

                                <p className="ccob-editorial-lead-para">
                                    The best Celebrity offer is rarely just the promotion with the biggest number attached to it.
                                </p>

                                <div className="ccob-editorial-quote-box">
                                    <p className="ccob-editorial-quote-text">
                                        A $650 onboard credit, for example, may be more useful to one traveler than a lower cruise fare, while a family may benefit more from an eligible third-, fourth- or fifth-guest offer. For repeat Celebrity travelers, Captain's Club status can change the calculation even further because Wi-Fi, drinks, laundry, dining and milestone benefits can add meaningful value. For groups, the comparison becomes more complex because group pricing, rewards and public promotions can have different rules.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY PLAN WITH TRIPS & SHIPS */}
                <section className="ccob-why-plan-section ccob-why-plan-dark">
                    <div className="ccob-why-plan-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="ccob-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="ccob-section-heading">Why Plan Celebrity Offers With <br /> Trips & Ships Luxury Travel?</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                            <p className="ccob-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Celebrity promotions can be difficult to compare because the offer with the lowest advertised price is not always the best overall value. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="ccob-why-plan-grid">
                            {ccobWhyPlan.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ccob-why-plan-card">
                                        <div className="ccob-why-plan-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CcobIconDot size={20} />}
                                        </div>
                                        <h4 className="ccob-why-plan-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ccob-lead-paragraph" style={{ textAlign: 'center', marginTop: '20px', color: '#cbd5e1' }}>
                            The goal is to evaluate the complete vacation value, not just the advertised discount.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="ccob-faq-section">
                    <div className="ccob-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="ccob-section-heading">Frequently Asked Questions</h2>
                            <div className="ccob-heading-bar ccob-bar-center"></div>
                        </div>
                        <div className="ccob-faq-list">
                            {ccobFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="ccob-faq-item"
                                    onClick={() => ccobToggleFaq(index)}
                                >
                                    <div className="ccob-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="ccob-faq-toggle">
                                            {ccobActiveFaq === index ? "\u2212" : "+"}
                                        </span>
                                    </div>
                                    {ccobActiveFaq === index && (
                                        <p className="ccob-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

              

                {/* CTA SECTION */}
                <section className="ccob-cta-section">
                    <div className="ccob-cta-bg-pattern"></div>
                    <div className="ccob-cta-inner">
                        <h2 className="ccob-cta-heading">Plan Your Celebrity Cruise With the Right Offer</h2>
                        <div className="ccob-cta-separator"></div>
                        <p className="ccob-cta-text">
                            Want to know which Celebrity promotion and loyalty benefits provide the best value for your sailing? Trips & Ships Luxury Travel can help compare current offers, Captain's Club benefits, status-match opportunities, cabin options and group pricing so you can choose the right Celebrity cruise strategy.
                        </p>
                        <div className="ccob-cta-btn-row">
                            <Link to="/contact" className="ccob-btn-primary">
                                <CcobIconPhone size={18} />
                                Compare My Celebrity Cruise Offers
                            </Link>
                            <button className="ccob-btn-outline">
                                <CcobIconList size={18} />
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

export default Celebrityoffersloyalty