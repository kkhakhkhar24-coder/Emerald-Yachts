import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebrityapexcruiseshipguide.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Wind,
    Gem,
    UtensilsCrossed,
    DoorOpen,
    Ship,
    Wine,
    Sparkles,
    Leaf,
    Waves,
    Compass,
    Flower2,
    Anchor,
    Sun,
    Droplet,
    TreeDeciduous,
    Thermometer,
    Dumbbell,
    Flower,
    Theater,
    Music,
    Users,
    Headphones,
    Dices,
    Tv,
    FileSearch,
    BedDouble,
    BadgePercent,
    Calendar,
    Plane,
    Sliders,
    HeartHandshake,
    Utensils,
    Sofa,
    ConciergeBell,
    GlassWater,
    ArrowUpRight,
    ChefHat,
    Fish,
    Coffee,
    Eye,
    Award,
    Palmtree,
    Globe
} from 'lucide-react'

const iconMap = {
    Wind,
    Gem,
    UtensilsCrossed,
    DoorOpen,
    Ship,
    Wine,
    Sparkles,
    Leaf,
    Waves,
    Compass,
    Flower2,
    Anchor,
    Sun,
    Droplet,
    TreeDeciduous,
    Thermometer,
    Dumbbell,
    Flower,
    Theater,
    Music,
    Users,
    Headphones,
    Dices,
    Tv,
    FileSearch,
    BedDouble,
    BadgePercent,
    Calendar,
    Plane,
    Sliders,
    HeartHandshake,
    Utensils,
    Sofa,
    ConciergeBell,
    GlassWater,
    ArrowUpRight,
    ChefHat,
    Fish,
    Coffee,
    Eye,
    Award,
    Globe,
    Ship2: Ship
}

/* ============================================================
   INLINE SVG ICONS (no lucide-react — plain inline placeholders)
   ============================================================ */
function CeapIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CeapIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CeapIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CeapIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CeapIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CeapIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CeapIconArrow({ size = 14 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

function CeapIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CeapIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CeapIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CeapPlaceholder({ label, className = '' }) {
    return (
        <div className={`ceap-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CeapIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityApexCruiseShipGuide() {
    const [ceapActiveFaq, setCeapActiveFaq] = useState(null)
    const ceapToggleFaq = (index) => {
        setCeapActiveFaq(ceapActiveFaq === index ? null : index)
    }

    const ceapFaqs = [
        {
            question: "1. Is Celebrity Apex a luxury cruise ship?",
            answer: "Yes. Celebrity Apex is considered one of the finest premium cruise ships at sea. As part of Celebrity Cruises' award-winning Edge Series, it combines elegant accommodations, exceptional dining, innovative venues like the Magic Carpet and Eden, and personalized service to deliver a luxury-inspired vacation experience. The ship is also recognized as a Forbes Travel Guide Four-Star resort at sea."
        },
        {
            question: "2. What is included on Celebrity Apex?",
            answer: "Your Celebrity Apex cruise fare typically includes luxury accommodations, complimentary main dining restaurants, Oceanview Café buffet, live entertainment and theater productions, Resort Pool and Solarium, Fitness Center, youth programs, and transportation between ports. Specialty dining, alcoholic beverages, Wi-Fi, shore excursions, and spa treatments are available for an additional cost unless included in your fare package."
        },
        {
            question: "3. Is The Retreat worth the upgrade?",
            answer: "Absolutely—especially if you're looking for a more exclusive cruise experience. The Retreat includes luxury suite accommodations, dedicated butler service, private Luminae restaurant, exclusive Retreat Lounge, private sundeck, concierge services, and priority embarkation and disembarkation. Guests who enjoy personalized luxury often find The Retreat well worth the investment."
        },
        {
            question: "4. How many restaurants are on Celebrity Apex?",
            answer: "Celebrity Apex offers 29 restaurants, bars, and lounges, giving guests an outstanding variety of complimentary and specialty dining experiences. Popular venues include Fine Cut Steakhouse, Eden Restaurant, Raw on 5, Rooftop Garden Grill, Le Grand Bistro, Oceanview Café, and Four Main Dining Restaurants. The ship's culinary program is consistently ranked among the best in premium cruising."
        },
        {
            question: "5. What is the Magic Carpet?",
            answer: "The Magic Carpet is Celebrity Cruises' signature cantilevered platform that moves between different decks. Throughout your cruise it transforms into an outdoor restaurant, lounge, cocktail bar, tender boarding platform, and scenic observation venue. Its breathtaking ocean views and innovative design make it one of Celebrity Apex's most recognizable features."
        },
        {
            question: "6. Does Celebrity Apex have Infinite Veranda cabins?",
            answer: "Yes. Celebrity Apex features the innovative Infinite Veranda staterooms that blur the boundary between indoor and outdoor living. Floor-to-ceiling windows open to create additional living space while still allowing guests to enjoy panoramic ocean views."
        },
        {
            question: "7. Is Wi-Fi included on Celebrity Apex?",
            answer: "Wi-Fi is available throughout Celebrity Apex using Starlink high-speed satellite internet. Depending on your fare or promotional package, Wi-Fi may be included or purchased separately before or during your cruise."
        },
        {
            question: "8. What entertainment is available onboard?",
            answer: "Celebrity Apex offers entertainment from morning until late night, including Broadway-style productions, live music, interactive shows, The Club performances, Eden evening experiences, casino, silent discos, and DJs and themed parties. Its technologically advanced theater features immersive LED screens and state-of-the-art production technology."
        },
        {
            question: "9. Where does Celebrity Apex sail?",
            answer: "Celebrity Apex primarily sails to Europe, including the Mediterranean, Greek Isles, Italy, France, Spain, and Northern Europe, as well as the Caribbean, including the Eastern, Western, and Southern Caribbean. Most itineraries range between 7 and 12 nights, depending on the season."
        },
        {
            question: "10. Is Celebrity Apex good for families?",
            answer: "Yes. Although Celebrity Cruises is especially popular with couples, Celebrity Apex is also an excellent choice for families. Families enjoy the Camp at Sea youth program, family-friendly entertainment, spacious staterooms, multiple pools, interactive activities, and dining options for all ages. It's particularly well suited for multi-generational vacations."
        },
        {
            question: "11. What makes Celebrity Apex different from Celebrity Edge?",
            answer: "Celebrity Apex builds upon the success of Celebrity Edge with refined public spaces, updated entertainment, enhanced dining experiences, and additional design improvements. Guests continue to enjoy signature Edge Series features like the Magic Carpet, Eden, Infinite Veranda cabins, Rooftop Garden, and The Retreat. Many travelers consider Apex one of the most polished ships in the Edge Series."
        },
        {
            question: "12. Is Celebrity Apex worth the money?",
            answer: "Yes. Celebrity Apex offers exceptional value through luxury accommodations, outstanding restaurants, modern ship design, excellent entertainment, personalized service, and premium itineraries. For travelers seeking a sophisticated cruise vacation without stepping into the ultra-luxury price category, Celebrity Apex is one of the best choices available."
        },
        {
            question: "13. Which cabin is best on Celebrity Apex?",
            answer: "The ideal cabin depends on your travel style. Inside Stateroom offers the best value, Ocean View provides natural light, Infinite Veranda is the most popular choice, Concierge Class adds amenities, AquaClass suits wellness-focused travelers, and The Retreat Suites offer the best overall luxury experience with butler service and exclusive amenities. Suite guests enjoy the highest level of comfort and personalized service onboard."
        },
        {
            question: "14. Does Celebrity Apex have butler service?",
            answer: "Yes. Guests staying in The Retreat Suites receive dedicated butler service to assist with dining reservations, unpacking and packing, in-suite dining, special requests, and personalized onboard assistance. This service helps create a seamless luxury vacation experience."
        },
        {
            question: "15. Why book Celebrity Apex with Trips & Ships Luxury Travel?",
            answer: "Booking through Trips & Ships Luxury Travel provides personalized planning from experienced luxury cruise advisors. Our team helps you compare cabin categories, select the best itinerary, find exclusive promotions, arrange flights and hotels, plan pre- and post-cruise stays, coordinate private transfers, and provide concierge-level service before, during, and after your Celebrity Apex vacation."
        }
    ]

    const ceapSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex",
                "name": "Celebrity Apex Cruise Ship Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex",
                "description": "Discover everything about Celebrity Apex including accommodations, restaurants, entertainment, Europe and Caribbean itineraries, deck highlights, cabins, and expert cruise planning advice.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex#article"
                }
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
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex#article",
                "headline": "Celebrity Apex Cruise Ship Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex",
                "description": "Expert guide to Celebrity Apex featuring accommodations, cabins, restaurants, entertainment, Europe and Caribbean itineraries, The Retreat, Magic Carpet, Eden, and expert cruise planning advice.",
                "image": "https://www.tripsandships.com/images/celebrity-apex-cruise-ship-guide.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Celebrity Cruise Planning Services",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Celebrity Cruises planning services helping travelers compare ships, choose cabins, select itineraries, and receive personalized cruise planning."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsandships.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Celebrity Cruises",
                        "item": "https://www.tripsandships.com/celebrity-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Ships",
                        "item": "https://www.tripsandships.com/celebrity-cruises/ships"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "Celebrity Apex Cruise Ship Guide",
                        "item": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Celebrity Apex a luxury cruise ship?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Apex is considered one of the finest premium cruise ships at sea. As part of Celebrity Cruises' award-winning Edge Series, it combines elegant accommodations, exceptional dining, innovative venues like the Magic Carpet and Eden, and personalized service to deliver a luxury-inspired vacation experience. The ship is also recognized as a Forbes Travel Guide Four-Star resort at sea."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on Celebrity Apex?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your Celebrity Apex cruise fare typically includes luxury accommodations, complimentary main dining restaurants, Oceanview Café buffet, live entertainment and theater productions, Resort Pool and Solarium, Fitness Center, youth programs, and transportation between ports. Specialty dining, alcoholic beverages, Wi-Fi, shore excursions, and spa treatments are available for an additional cost unless included in your fare package."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is The Retreat worth the upgrade?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. The Retreat includes luxury suite accommodations, dedicated butler service, the private Luminae restaurant, exclusive Retreat Lounge, private sundeck, concierge services, and priority embarkation and disembarkation. Guests who enjoy personalized luxury often find The Retreat well worth the investment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many restaurants are on Celebrity Apex?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Apex offers 29 restaurants, bars, and lounges, giving guests an outstanding variety of complimentary and specialty dining experiences including Fine Cut Steakhouse, Eden Restaurant, Raw on 5, Rooftop Garden Grill, Le Grand Bistro, Oceanview Café, and Four Main Dining Restaurants. The ship's culinary program is consistently ranked among the best in premium cruising."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the Magic Carpet?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Magic Carpet is Celebrity Cruises' signature cantilevered platform that moves between different decks. Throughout your cruise it transforms into an outdoor restaurant, lounge, cocktail bar, tender boarding platform, and scenic observation venue. Its breathtaking ocean views and innovative design make it one of Celebrity Apex's most recognizable features."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Celebrity Apex have Infinite Veranda cabins?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Apex features the innovative Infinite Veranda staterooms that blur the boundary between indoor and outdoor living. Floor-to-ceiling windows open to create additional living space while still allowing guests to enjoy panoramic ocean views."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included on Celebrity Apex?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Wi-Fi is available throughout Celebrity Apex using Starlink high-speed satellite internet. Depending on your fare or promotional package, Wi-Fi may be included or purchased separately before or during your cruise."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What entertainment is available onboard?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Apex offers entertainment from morning until late night, including Broadway-style productions, live music, interactive shows, The Club performances, Eden evening experiences, casino, silent discos, and DJs and themed parties. Its technologically advanced theater features immersive LED screens and state-of-the-art production technology."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where does Celebrity Apex sail?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Apex primarily sails to Europe, including the Mediterranean, Greek Isles, Italy, France, Spain, and Northern Europe, as well as the Caribbean, including the Eastern, Western, and Southern Caribbean. Most itineraries range between 7 and 12 nights, depending on the season."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Celebrity Apex good for families?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Although Celebrity Cruises is especially popular with couples, Celebrity Apex is also an excellent choice for families. Families enjoy the Camp at Sea youth program, family-friendly entertainment, spacious staterooms, multiple pools, interactive activities, and dining options for all ages. It is particularly well suited for multi-generational vacations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What makes Celebrity Apex different from Celebrity Edge?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Apex builds upon the success of Celebrity Edge with refined public spaces, updated entertainment, enhanced dining experiences, and additional design improvements while retaining signature Edge Series features including the Magic Carpet, Eden, Infinite Veranda cabins, Rooftop Garden, and The Retreat."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Celebrity Apex worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Apex offers exceptional value through luxury accommodations, outstanding restaurants, modern ship design, excellent entertainment, personalized service, and premium itineraries. It is one of the best choices for travelers seeking a sophisticated premium cruise vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cabin is best on Celebrity Apex?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The best cabin depends on your travel style. Inside Staterooms offer the best value, Ocean View cabins provide natural light, Infinite Veranda staterooms are the most popular choice, Concierge Class offers added amenities, AquaClass is ideal for wellness-focused travelers, and The Retreat Suites provide the ultimate luxury experience with butler service and exclusive amenities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Celebrity Apex have butler service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Guests staying in The Retreat Suites receive dedicated butler service to assist with dining reservations, unpacking and packing, in-suite dining, special requests, and personalized onboard assistance, creating a seamless luxury vacation experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book Celebrity Apex with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert Celebrity Cruises planning, personalized cabin and itinerary recommendations, exclusive promotions, flight and hotel arrangements, pre- and post-cruise planning, private transfer coordination, and concierge-level service before, during, and after your Celebrity Apex vacation."
                        }
                    }
                ]
            }
        ]
    }

    const ceapGlance = [
        { feature: 'Cruise Line', detail: 'Celebrity Cruises' },
        { feature: 'Ship Class', detail: 'Edge Series' },
        { feature: 'Guest Capacity', detail: 'Approx. 2,910' },
        { feature: 'Crew Members', detail: 'Approx. 1,320' },
        { feature: 'Maiden Voyage', detail: '2021' },
        { feature: 'Best For', detail: 'Couples, Families, Luxury Travelers' },
        { feature: 'Popular Destinations', detail: 'Mediterranean, Caribbean, Northern Europe' }
    ]

    const ceapWhySail = [
        { label: 'Contemporary Edge Series design', icon: 'Gem' },
        { label: 'Spacious accommodations', icon: 'Wind' },
        { label: 'Award-winning restaurants', icon: 'UtensilsCrossed' },
        { label: 'Infinite Veranda staterooms', icon: 'DoorOpen' },
        { label: 'Magic Carpet venue', icon: 'Ship' },
        { label: 'Eden experience', icon: 'Sparkles' },
        { label: 'Rooftop Garden', icon: 'Leaf' },
        { label: 'Resort-style pool deck', icon: 'Waves' },
        { label: 'World-class entertainment', icon: 'Theater' },
        { label: 'Exceptional service', icon: 'HeartHandshake' }
    ]

    const ceapCabins = [
        { name: 'Inside Staterooms', desc: 'Comfortable and affordable accommodations perfect for travelers who spend most of their time exploring the ship.', icon: 'BedDouble' },
        { name: 'Ocean View Staterooms', desc: 'Enjoy natural light and panoramic ocean views.', icon: 'Eye' },
        { name: 'Infinite Veranda Staterooms', desc: "Celebrity's signature design seamlessly blends indoor and outdoor living with floor-to-ceiling windows.", icon: 'DoorOpen' },
        { name: 'Concierge Class', desc: 'Includes additional services and exclusive amenities for a more personalized experience.', icon: 'Award' },
        { name: 'AquaClass', desc: 'Ideal for wellness-focused travelers with exclusive dining at Blu and spa benefits.', icon: 'Droplet' },
        { name: 'Suites', desc: 'Luxury accommodations featuring spacious layouts and access to The Retreat.', icon: 'Gem' }
    ]

    const ceapRetreatFeatures = [
        { label: 'Private restaurant', icon: 'Utensils' },
        { label: 'Exclusive lounge', icon: 'Sofa' },
        { label: 'Sundeck', icon: 'Sun' },
        { label: 'Butler service', icon: 'ConciergeBell' },
        { label: 'Concierge assistance', icon: 'HeartHandshake' },
        { label: 'Premium amenities', icon: 'Gem' },
        { label: 'Priority embarkation', icon: 'ArrowUpRight' }
    ]

    const ceapDining = [
        { name: 'Main Dining Restaurants', desc: 'Four complimentary restaurants offering unique menus inspired by global cuisine.', icon: 'UtensilsCrossed' },
        { name: 'Fine Cut Steakhouse', desc: 'Premium steaks and seafood in an elegant setting.', icon: 'ChefHat' },
        { name: 'Eden Restaurant', desc: 'A creative dining experience paired with immersive surroundings.', icon: 'Flower2' },
        { name: 'Raw on 5', desc: 'Fresh sushi, oysters, and seafood specialties.', icon: 'Fish' },
        { name: 'Le Grand Bistro', desc: 'French-inspired café serving pastries, coffee, and casual meals.', icon: 'Coffee' },
        { name: 'Rooftop Garden Grill', desc: 'Outdoor dining with grilled favorites and spectacular ocean views.', icon: 'Leaf' }
    ]

    const ceapMagicCarpet = [
        { label: 'Restaurant', icon: 'Utensils' },
        { label: 'Lounge', icon: 'Sofa' },
        { label: 'Bar', icon: 'GlassWater' },
        { label: 'Tender platform', icon: 'Anchor' },
        { label: 'Outdoor venue', icon: 'Wind' }
    ]

    const ceapEden = [
        { label: 'Fine dining', icon: 'ChefHat' },
        { label: 'Live entertainment', icon: 'Theater' },
        { label: 'Cocktail lounge', icon: 'Wine' },
        { label: 'Observation venue', icon: 'Eye' },
        { label: 'Relaxation space', icon: 'Flower' }
    ]

    const ceapWellness = [
        { label: 'Resort Pool', icon: 'Droplet' },
        { label: 'Adults-only Solarium', icon: 'Sun' },
        { label: 'Rooftop Garden', icon: 'TreeDeciduous' },
        { label: 'SEA Thermal Suite', icon: 'Thermometer' },
        { label: 'Full-service Spa', icon: 'Flower' },
        { label: 'Fitness Center', icon: 'Dumbbell' }
    ]

    const ceapEntertainment = [
        { label: 'Broadway-style theater productions', icon: 'Theater' },
        { label: 'Live music', icon: 'Music' },
        { label: 'Interactive performances', icon: 'Tv' },
        { label: 'Guest entertainers', icon: 'Users' },
        { label: 'Casino', icon: 'Dices' },
        { label: 'Nightclubs', icon: 'Sparkles' },
        { label: 'Silent discos', icon: 'Headphones' },
        { label: 'Cocktail lounges', icon: 'Wine' }
    ]

    const ceapIncluded = [
        'Luxury accommodations', 'Complimentary dining', 'Entertainment', 'Pools',
        'Fitness Center', 'Youth programs', 'Transportation between ports'
    ]

    const ceapPros = [
        'Elegant modern design', 'Outstanding restaurants', 'Spacious accommodations', 'Excellent entertainment',
        'Innovative Magic Carpet', 'Beautiful Eden venue', 'Exceptional service'
    ]

    const ceapCons = [
        'Specialty dining costs extra', 'Wi-Fi may require an additional package', 'Popular specialty restaurants book quickly'
    ]

    const ceapAudience = [
        'Couples', 'Honeymooners', 'Luxury travelers', 'Families',
        'Food lovers', 'First-time Celebrity guests', 'Travelers seeking premium cruise experiences'
    ]

    const ceapWhyBook = [
        { title: 'Compare Celebrity cruise ships', icon: 'FileSearch' },
        { title: 'Select the best stateroom or suite', icon: 'BedDouble' },
        { title: 'Find exclusive offers', icon: 'BadgePercent' },
        { title: 'Plan flights and hotels', icon: 'Plane' },
        { title: 'Customize pre- and post-cruise stays', icon: 'Calendar' },
        { title: 'Arrange private transfers', icon: 'Sliders' },
       
    ]

    const ceapRelated = [
        { title: 'Celebrity Cruises Overview', desc: 'Explore the full Celebrity Cruises fleet and start planning your next luxury sailing.', icon: 'Globe', link: '/celebrity-cruises' },
        { title: 'All Celebrity Ships', desc: 'Browse every Celebrity Cruises ship guide to compare classes and onboard experiences.', icon: 'Ship', link: '/celebrity-cruises/ships' },
        { title: 'Celebrity Beyond Cruise Ship Guide', desc: 'See how the third Edge Series ship compares to Celebrity Apex.', icon: 'Anchor', link: '/celebrity-cruises/ships/celebrity-beyond' },
        { title: 'Celebrity Edge Cruise Ship Guide', desc: 'Discover the ship that launched the award-winning Edge Series.', icon: 'Waves', link: '/celebrity-cruises/ships/celebrity-edge' },
        { title: 'Schedule a Cruise Consultation', desc: 'Talk to our luxury cruise specialists about cabins, itineraries, and exclusive offers.', icon: 'ConciergeBell', link: '/contact' }
    ]

    return (
        <>
            <Helmet>
                <title>Celebrity Apex Cruise Ship Guide: Cabins, Dining, Entertainment & Expert Review</title>
                <meta name="title" content="Celebrity Apex Cruise Ship Guide | Cabins, Dining & Europe Cruises" />
                <meta
                    name="description"
                    content="Discover everything about Celebrity Apex including accommodations, restaurants, entertainment, Europe and Caribbean itineraries, deck highlights, cabins, and expert cruise planning advice."
                />
                <script type="application/ld+json">
                    {JSON.stringify(ceapSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION (MATCHED) */}
                <section className="fcel-hero-section">
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <CeapIconSparkle size={16} />
                            <span>Celebrity Apex Cruise Ship Guide</span>
                        </div>
                        <h1 className="fcel-hero-title">Celebrity Apex <br /> Cruise Ship Guide</h1>
                        <p className="fcel-hero-subtitle">
                            Discover One of Celebrity Cruises' Most Innovative Edge Series Ships
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <CeapIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <CeapIconList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION (MATCHED) */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">EXPERT CRUISE GUIDE</span>
                                <h2 className="fcel-section-heading">Discover Celebrity Apex</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Apex combines elegant design, exceptional dining, luxurious accommodations, and immersive entertainment to create one of the finest premium cruise experiences at sea. As the second ship in Celebrity Cruises' award-winning Edge Series, Apex builds on the success of Celebrity Edge while introducing refined spaces, expanded experiences, and outstanding service.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Whether you're planning a Mediterranean escape, a Caribbean getaway, or celebrating a special occasion, Celebrity Apex delivers a sophisticated vacation with world-class amenities and unforgettable destinations. This guide covers everything you need to know before booking your Celebrity Apex cruise.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <CeapPlaceholder label="Celebrity Apex Cruise Ship" />
                                <div className="fcel-intro-badge-float">
                                    <CeapIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Edge Series Review Summary</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="ceap-quick-answer-section">
                    <div className="ceap-quick-answer-container">
                        <div className="ceap-quick-answer-card">
                            <h3 className="ceap-quick-answer-title">Is Celebrity Apex Worth It?</h3>
                            <p className="ceap-quick-answer-text">
                                Yes. Celebrity Apex is one of the highest-rated premium cruise ships thanks to its modern design, spacious accommodations, excellent dining, innovative venues like the Magic Carpet and Eden, and thoughtfully curated itineraries across Europe and the Caribbean. It's especially popular with couples, luxury travelers, and guests seeking a contemporary cruise experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="ceap-inline-cta-section">
                    <div className="ceap-inline-cta-container">
                        <span className="ceap-inline-cta-tag">Expert Planning</span>
                        <p className="ceap-inline-cta-text">Ready to sail on Celebrity's award-winning Edge Series ship?</p>
                        <div className="ceap-inline-cta-btn-row">
                            <Link to="/contact" className="ceap-btn-primary">
                                <CeapIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="ceap-btn-outline">
                                <CeapIconList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="ceap-glance-section">
                    <div className="ceap-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHIP OVERVIEW</span>
                            <h2 className="fcel-section-heading">Celebrity Apex At a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="ceap-glance-table">
                            {ceapGlance.map((row, idx) => (
                                <div key={idx} className="ceap-glance-row">
                                    <div className="ceap-glance-feature">{row.feature}</div>
                                    <div className="ceap-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY SAIL */}
                <section className="ceap-tag-section ceap-bg-white">
                    <div className="ceap-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">HIGHLIGHTS</span>
                            <h2 className="fcel-section-heading">Why Sail on Celebrity Apex?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Apex offers an elevated cruising experience with:
                            </p>
                        </div>
                        <div className="ceap-tag-grid">
                            {ceapWhySail.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ceap-tag-card">
                                        <div className="ceap-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CeapIconDot size={20} />}
                                        </div>
                                        <span className="ceap-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            Every area of the ship has been designed to maximize ocean views while creating a luxurious yet relaxed atmosphere.
                        </p>
                    </div>
                </section>

                {/* CELEBRITY APEX ACCOMMODATIONS */}
                <section className="ceap-feature-section ceap-bg-soft">
                    <div className="ceap-feature-container">
                        <div className="ceap-feature-grid ceap-reverse">
                            <div className="ceap-feature-copy-col">
                                <span className="fcel-eyebrow-label">ACCOMMODATIONS</span>
                                <h2 className="ceap-feature-title" style={{ textAlign: 'left' }}>Celebrity Apex Accommodations</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Apex offers accommodations for every travel style.
                                </p>
                                <div className="ceap-feature-desc-list">
                                    {ceapCabins.map((cabin, idx) => {
                                        const IconComponent = iconMap[cabin.icon];
                                        return (
                                            <div key={idx} className="ceap-feature-desc-card">
                                                <div className="ceap-feature-card-header">
                                                    {IconComponent && <IconComponent size={20} className="ceap-feature-card-icon-inline" />}
                                                    <h4 className="ceap-feature-desc-title">{cabin.name}</h4>
                                                </div>
                                                <p className="ceap-feature-desc-text">{cabin.desc}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="ceap-feature-image-col">
                                <div className="ceap-badge-overlay">
                                    <CeapIconSparkle size={14} />
                                    <span>Cabins & Suites</span>
                                </div>
                                <CeapPlaceholder label="Celebrity Apex Cabin Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE RETREAT (DARK) */}
                <section className="ceap-feature-section ceap-dark-section ceap-retreat-section">
                    <div className="ceap-feature-container">
                        <div className="ceap-feature-grid">
                            <div className="ceap-feature-image-col">
                                <div className="ceap-badge-overlay">
                                    <CeapIconSparkle size={14} />
                                    <span>The Retreat</span>
                                </div>
                                <CeapPlaceholder label="Celebrity Apex The Retreat Suite" />
                            </div>
                            <div className="ceap-feature-copy-col">
                                <span className="ceap-retreat-eyebrow">SHIP-WITHIN-A-SHIP</span>
                                <h2 className="ceap-retreat-title">The Retreat</h2>
                                <p className="ceap-retreat-lead">
                                    The Retreat is Celebrity Cruises' exclusive luxury suite experience. Guests enjoy:
                                </p>
                                <div className="ceap-retreat-grid">
                                    {ceapRetreatFeatures.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ceap-retreat-card">
                                                <div className="ceap-retreat-card-icon">
                                                    {IconComponent ? <IconComponent size={20} /> : <CeapIconCheck size={18} />}
                                                </div>
                                                <span className="ceap-retreat-card-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ceap-retreat-footer-text">
                                    The Retreat provides an elevated vacation experience with personalized service and private spaces.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESTAURANTS & DINING */}
                <section className="ceap-feature-section ceap-bg-white">
                    <div className="ceap-feature-container">
                        <div className="ceap-feature-grid">
                            <div className="ceap-feature-image-col">
                                <div className="ceap-badge-overlay">
                                    <CeapIconDot size={14} />
                                    <span>Dining Guide</span>
                                </div>
                                <CeapPlaceholder label="Celebrity Apex Dining Experience" />
                            </div>
                            <div className="ceap-feature-copy-col">
                                <span className="fcel-eyebrow-label">CULINARY EXCELLENCE</span>
                                <h2 className="ceap-feature-title">Restaurants & Dining</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Apex features an impressive collection of complimentary and specialty dining venues. Highlights include:
                                </p>
                                <div className="ceap-feature-desc-list">
                                    {ceapDining.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ceap-feature-desc-card">
                                                <div className="ceap-feature-card-header">
                                                    {IconComponent && <IconComponent size={20} className="ceap-feature-card-icon-inline" />}
                                                    <h4 className="ceap-feature-desc-title">{item.name}</h4>
                                                </div>
                                                <p className="ceap-feature-desc-text">{item.desc}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Dining aboard Celebrity Apex is consistently rated among the best in premium cruising.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ENTERTAINMENT */}
                <section className="ceap-tag-section ceap-bg-soft">
                    <div className="ceap-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ONBOARD FUN</span>
                            <h2 className="fcel-section-heading">Entertainment</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}>
                                Celebrity Apex offers entertainment throughout the day and evening. Guests can enjoy:
                            </p>
                        </div>
                        <div className="ceap-entertainment-gallery-grid">
                            {ceapEntertainment.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ceap-entertainment-gallery-card">
                                        <div className="ceap-entertainment-card-image">
                                            <CeapPlaceholder label={item.label} />
                                        </div>
                                        <div className="ceap-entertainment-card-info">
                                            <div className="ceap-entertainment-card-icon">
                                                {IconComponent ? <IconComponent size={20} /> : <CeapIconDot size={20} />}
                                            </div>
                                            <span className="ceap-entertainment-card-label">{item.label}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            The ship's entertainment is modern, engaging, and designed for all ages.
                        </p>
                    </div>
                </section>

                {/* MAGIC CARPET */}
                <section className="ceap-feature-section ceap-bg-white">
                    <div className="ceap-feature-container">
                        <div className="ceap-feature-grid ceap-reverse">
                            <div className="ceap-feature-copy-col">
                                <span className="fcel-eyebrow-label">SIGNATURE FEATURE</span>
                                <h2 className="ceap-feature-title" style={{ textAlign: 'left' }}>Magic Carpet</h2>
                                <p className="fcel-lead-paragraph">
                                    One of Celebrity Apex's most recognizable features, the Magic Carpet is a floating platform attached to the ship that transforms into:
                                </p>
                                <div className="ceap-feature-list">
                                    {ceapMagicCarpet.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ceap-feature-item-card">
                                                <div className="ceap-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CeapIconCheck size={18} />}
                                                </div>
                                                <span className="ceap-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Its flexibility and stunning ocean views make it one of the ship's signature attractions.
                                </p>
                            </div>
                            <div className="ceap-feature-image-col">
                                <div className="ceap-badge-overlay">
                                    <CeapIconSparkle size={14} />
                                    <span>Magic Carpet</span>
                                </div>
                                <CeapPlaceholder label="Celebrity Apex Magic Carpet" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* EDEN (DARK) */}
                <section className="ceap-feature-section ceap-dark-section">
                    <div className="ceap-feature-container">
                        <div className="ceap-feature-grid">
                            <div className="ceap-feature-image-col">
                                <div className="ceap-badge-overlay">
                                    <CeapIconDot size={14} />
                                    <span>Eden</span>
                                </div>
                                <CeapPlaceholder label="Celebrity Apex Eden Venue" />
                            </div>
                            <div className="ceap-feature-copy-col">
                                <span className="fcel-eyebrow-label">IMMERSIVE VENUE</span>
                                <h2 className="ceap-feature-title">Eden</h2>
                                <p className="fcel-lead-paragraph">
                                    Eden is one of the most unique spaces onboard. It combines:
                                </p>
                                <div className="ceap-feature-list">
                                    {ceapEden.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="ceap-feature-item-card">
                                                <div className="ceap-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CeapIconCheck size={18} />}
                                                </div>
                                                <span className="ceap-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Floor-to-ceiling windows create a breathtaking connection with the ocean.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* POOLS, SPA & WELLNESS */}
                <section className="ceap-tag-section ceap-bg-soft">
                    <div className="ceap-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RELAX & RECHARGE</span>
                            <h2 className="fcel-section-heading">Pools, Spa & Wellness</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Guests can relax at:
                            </p>
                        </div>
                        <div className="ceap-tag-grid">
                            {ceapWellness.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ceap-tag-card">
                                        <div className="ceap-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CeapIconDot size={20} />}
                                        </div>
                                        <span className="ceap-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            Whether you want to unwind or stay active, Celebrity Apex offers exceptional wellness facilities.
                        </p>
                    </div>
                </section>

                {/* EUROPE & CARIBBEAN SAILINGS */}
                <section className="ceap-itinerary-section">
                    <div className="ceap-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHERE TO SAIL</span>
                            <h2 className="fcel-section-heading">Europe & Caribbean Sailings</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Apex sails to many of the world's most sought-after destinations.
                            </p>
                        </div>
                        <div className="ceap-itinerary-grid">
                            <div className="ceap-itinerary-card">
                                <h3 className="ceap-itinerary-region">
                                    <Globe size={20} />
                                    Europe
                                </h3>
                                <ul className="ceap-itinerary-list">
                                    <li><Compass size={16} className="ceap-included-icon" />Mediterranean</li>
                                    <li><Waves size={16} className="ceap-included-icon" />Greek Isles</li>
                                    <li><Utensils size={16} className="ceap-included-icon" />Italy</li>
                                    <li><Wine size={16} className="ceap-included-icon" />France</li>
                                    <li><Music size={16} className="ceap-included-icon" />Spain</li>
                                    <li><Globe size={16} className="ceap-included-icon" />Northern Europe</li>
                                </ul>
                            </div>
                            <div className="ceap-itinerary-card">
                                <h3 className="ceap-itinerary-region">
                                    <Palmtree size={20} />
                                    Caribbean
                                </h3>
                                <ul className="ceap-itinerary-list">
                                    <li><Sun size={16} className="ceap-included-icon" />Eastern Caribbean</li>
                                    <li><Anchor size={16} className="ceap-included-icon" />Western Caribbean</li>
                                    <li><Waves size={16} className="ceap-included-icon" />Southern Caribbean</li>
                                </ul>
                            </div>
                        </div>
                        <p className="ceap-itinerary-note">Most cruises range from 7 to 12 nights.</p>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="ceap-included-section">
                    <div className="ceap-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ALL-INCLUSIVE BASICS</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Your Celebrity Apex cruise fare typically includes:
                            </p>
                        </div>
                        <div className="ceap-included-grid">
                            {ceapIncluded.map((item, idx) => (
                                <div key={idx} className="ceap-included-item">
                                    <CeapIconCheck size={18} className="ceap-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="ceap-included-note">
                            Optional purchases include specialty dining, beverages, Wi-Fi, shore excursions, and spa treatments.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="ceap-pros-section ceap-bg-white">
                    <div className="ceap-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label ceap-eyebrow-white">PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="ceap-comparison-board">
                            <div className="ceap-pros-panel">
                                <h3 className="ceap-panel-title ceap-pros-title">
                                    <CeapIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="ceap-panel-list">
                                    {ceapPros.map((pro, idx) => (
                                        <div key={idx} className="ceap-list-item">
                                            <div className="ceap-item-icon-wrap ceap-pro-icon">
                                                <CeapIconCheck size={16} />
                                            </div>
                                            <div className="ceap-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="ceap-cons-panel">
                                <h3 className="ceap-panel-title ceap-cons-title">
                                    <CeapIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="ceap-panel-list">
                                    {ceapCons.map((con, idx) => (
                                        <div key={idx} className="ceap-list-item">
                                            <div className="ceap-item-icon-wrap ceap-con-icon">
                                                <CeapIconX size={16} />
                                            </div>
                                            <div className="ceap-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD SAIL */}
                <section className="ceap-audience-section">
                    <div className="ceap-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Sail on Celebrity Apex?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Celebrity Apex is ideal for:
                            </p>
                        </div>
                        <div className="ceap-audience-column">
                            <ul className="ceap-audience-list">
                                {ceapAudience.map((item, idx) => (
                                    <li key={idx} className="ceap-audience-item">
                                        <CeapIconCheck size={18} className="ceap-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* IS CELEBRITY APEX WORTH THE MONEY */}
                <section className="ceap-worth-section ceap-dark-section">
                    <div className="ceap-worth-container">
                        <span className="fcel-eyebrow-label">INVESTMENT & VALUE</span>
                        <h2 className="fcel-section-heading">Is Celebrity Apex Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Celebrity Apex consistently delivers outstanding value through premium accommodations, exceptional dining, innovative ship design, and world-class service. For travelers seeking a modern premium cruise experience across Europe or the Caribbean, Celebrity Apex remains one of the best choices available.
                        </p>
                    </div>
                </section>

                {/* EXPERT INSIGHT (MATCHED — medi- classes) */}
                <section id="celebrity-apex-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
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
                                            'Retreat & suite experiences',
                                            'Caribbean & European itineraries',
                                            'Milestone occasions & celebrations',
                                            'Concierge-level cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <CeapIconDot size={14} />
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
                                        <CeapIconAward size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why I Recommend <br className="medi-growth-title-break" />Celebrity Apex
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    After decades of helping travelers experience the world's finest destinations, I believe Celebrity Apex strikes an outstanding balance between contemporary luxury and genuine comfort. The ship's elegant accommodations, diverse dining options, and thoughtfully designed public spaces create an experience that feels sophisticated without ever feeling overwhelming.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        I frequently recommend Celebrity Apex to couples celebrating milestone occasions, families looking for a premium vacation, and travelers exploring Europe or the Caribbean for the first time. Its carefully planned itineraries, attentive service, and innovative onboard experiences make it a ship that guests often return to again and again.
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'Milestone occasions & celebrations',
                                            'Premium family cruise experiences',
                                            'First-time Celebrity guests',
                                            'Iconic Europe & Caribbean itineraries',
                                            'Attentive, innovative service'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <CeapIconCheck size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <div className="medi-editorial-full-width-footer">
                                <p className="medi-editorial-body-para">
                                    If you're deciding between cabin categories, choosing the best itinerary, or wondering whether The Retreat is the right fit, my team and I are happy to help you find the Celebrity Apex experience that best matches your travel style.
                                </p>
                                <p className="medi-editorial-signature">
                                    — Angela Hughes<br />
                                    Founder &amp; CEO, Trips &amp; Ships Luxury Travel
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="ceap-why-book-section">
                    <div className="ceap-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Our luxury cruise specialists help you:
                            </p>
                        </div>
                        <div className="ceap-why-book-grid">
                            {ceapWhyBook.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="ceap-why-book-card">
                                        <div className="ceap-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CeapIconDot size={20} />}
                                        </div>
                                        <h4 className="ceap-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

            

                {/* FAQ SECTION (MATCHED) */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {ceapFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => ceapToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {ceapActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {ceapActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION (MATCHED) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Plan Your Celebrity Apex Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to compare cabins, secure exclusive promotions, and plan pre- and post-cruise stays. We handle every detail so you can enjoy the journey.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <CeapIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <CeapIconList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default CelebrityApexCruiseShipGuide