import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebrityedgecruiseshipguide.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Wind,
    Gem,
    UtensilsCrossed,
    Crown,
    DoorOpen,
    Ship,
    Wine,
    Sparkles,
    Waves,
    Compass,
    Trees,
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
    Smile,
    Eye,
    Award,
    Coffee,
    Palmtree
} from 'lucide-react'

const iconMap = {
    Wind,
    Gem,
    UtensilsCrossed,
    Crown,
    DoorOpen,
    Ship,
    Wine,
    Sparkles,
    Waves,
    Compass,
    Trees,
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
    Smile,
    Eye,
    Award,
    Coffee
}


/* ============================================================
   INLINE SVG ICONS (fallback placeholders)
   ============================================================ */
function CecsIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CecsIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CecsIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CecsIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CecsIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CecsIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CecsIconArrow({ size = 14 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

function CecsIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CecsIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CecsIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CecsPlaceholder({ label, className = '' }) {
    return (
        <div className={`cecs-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CecsIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityEdgeCruiseShipGuide() {
    const [cecsActiveFaq, setCecsActiveFaq] = useState(null)
    const cecsToggleFaq = (index) => {
        setCecsActiveFaq(cecsActiveFaq === index ? null : index)
    }

    const cecsFaqs = [
        {
            question: "1. Is Celebrity Edge a luxury cruise ship?",
            answer: "Yes. Celebrity Edge is considered one of the world's leading premium cruise ships. It combines contemporary luxury, award-winning dining, innovative ship design, and personalized service to deliver an elevated cruise experience. As the first ship in Celebrity Cruises' Edge Series, it introduced groundbreaking features that have since redefined modern cruising."
        },
        {
            question: "2. What is included on Celebrity Edge?",
            answer: "Your Celebrity Edge cruise fare typically includes luxury accommodations, complimentary main dining restaurants, Oceanview Café buffet, live entertainment and theater productions, Resort Pool and Solarium, Fitness Center, youth programs, and transportation between ports. Specialty dining, alcoholic beverages, Wi-Fi, spa treatments, and shore excursions are available for an additional fee unless included in your cruise package."
        },
        {
            question: "3. What are Infinite Veranda cabins?",
            answer: "Infinite Veranda cabins are Celebrity Edge's signature accommodation innovation. Instead of a traditional balcony, floor-to-ceiling windows open electronically to transform your entire room into an open-air living space. This design provides more interior space while allowing guests to enjoy fresh ocean air and uninterrupted panoramic views. They're one of the ship's most unique and popular features."
        },
        {
            question: "4. Is The Retreat worth the upgrade?",
            answer: "Absolutely. The Retreat is Celebrity Cruises' luxury suite experience and includes spacious suite accommodations, butler service, private Luminae Restaurant, exclusive Retreat Lounge, private sundeck, concierge services, and priority embarkation and disembarkation. For travelers seeking additional privacy, premium amenities, and personalized service, The Retreat offers exceptional value."
        },
        {
            question: "5. How many restaurants are on Celebrity Edge?",
            answer: "Celebrity Edge offers more than 29 restaurants, cafés, bars, and lounges, providing one of the strongest culinary programs in premium cruising. Popular venues include Fine Cut Steakhouse, Eden Restaurant, Raw on 5, Rooftop Garden Grill, Le Grand Bistro, Oceanview Café, and Four Main Dining Restaurants. Guests enjoy a wide variety of international cuisine ranging from casual dining to specialty fine dining experiences."
        },
        {
            question: "6. What is the Magic Carpet?",
            answer: "The Magic Carpet is Celebrity Edge's most iconic innovation. Attached to the side of the ship, this floating platform moves between decks and transforms into an outdoor restaurant, lounge, cocktail bar, tender boarding platform, and observation deck. No other cruise ship offers an experience quite like the Magic Carpet, making it one of Celebrity Edge's signature attractions."
        },
        {
            question: "7. Does Celebrity Edge have butler service?",
            answer: "Yes. Guests staying in The Retreat Suites receive dedicated butler service. Your butler can assist with dining reservations, in-suite dining, unpacking and packing, special requests, and personalized onboard assistance. This service enhances the overall luxury experience and ensures a seamless vacation."
        },
        {
            question: "8. Is Wi-Fi included?",
            answer: "Wi-Fi is available throughout Celebrity Edge. Depending on your fare or promotional offer, internet access may be included or purchased separately before or during your cruise. High-speed internet packages are also available for guests who need enhanced connectivity while at sea."
        },
        {
            question: "9. Where does Celebrity Edge sail?",
            answer: "Celebrity Edge sails to many of the world's most popular cruise destinations, including the Mediterranean, Greek Isles, Italy, France, Spain, Croatia, Eastern Caribbean, Western Caribbean, and Southern Caribbean. Seasonal itineraries may also include additional European sailings."
        },
        {
            question: "10. Is Celebrity Edge good for families?",
            answer: "Yes. Although Celebrity Cruises is especially popular with couples, Celebrity Edge is also an excellent choice for families. Families enjoy the Camp at Sea youth program, family-friendly entertainment, spacious accommodations, multiple pools, interactive activities, and diverse dining options. The ship is particularly well suited for multi-generational vacations."
        },
        {
            question: "11. What makes Celebrity Edge different from other cruise ships?",
            answer: "Celebrity Edge introduced several innovations that changed modern cruise design, including Infinite Veranda staterooms, the Magic Carpet floating platform, Eden entertainment venue, Rooftop Garden, Resort Deck, and contemporary open-air architecture. Its focus on connecting guests with the ocean through innovative design continues to distinguish it from traditional cruise ships."
        },
        {
            question: "12. Is Celebrity Edge worth the money?",
            answer: "Yes. Celebrity Edge offers exceptional value through elegant accommodations, outstanding restaurants, innovative ship design, exceptional entertainment, personalized service, and premium itineraries. For travelers looking for a sophisticated cruise vacation without paying ultra-luxury prices, Celebrity Edge remains one of the best premium cruise options available."
        },
        {
            question: "13. Which cabin is best on Celebrity Edge?",
            answer: "The ideal cabin depends on your travel preferences. Inside Stateroom offers the best value, Ocean View provides great natural light, Infinite Veranda is the most popular choice, Concierge Class adds additional services, AquaClass suits wellness-focused travelers, and The Retreat Suites deliver ultimate luxury with butler service and exclusive amenities. Suite guests receive the highest level of comfort and personalized service onboard."
        },
        {
            question: "14. Does Celebrity Edge have Eden?",
            answer: "Yes. Eden is one of Celebrity Edge's most distinctive venues. During the day, it serves as a peaceful observation lounge with panoramic ocean views. In the evening, Eden transforms into an immersive venue featuring fine dining, live performances, signature cocktails, and interactive entertainment. Its unique atmosphere makes it one of the ship's most memorable spaces."
        },
        {
            question: "15. Why book Celebrity Edge with Trips & Ships Luxury Travel?",
            answer: "Booking through Trips & Ships Luxury Travel provides personalized planning from experienced luxury cruise specialists. Our advisors help you compare Celebrity Edge with other Edge Series ships, select the best stateroom or suite, find exclusive cruise offers, arrange flights and hotels, plan pre- and post-cruise stays, coordinate private transfers, and provide concierge-level service before, during, and after your vacation."
        }
    ]

    const cecsSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-edge",
                "name": "Celebrity Edge Cruise Ship Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-edge",
                "description": "Discover everything about Celebrity Edge including Infinite Veranda cabins, Magic Carpet, accommodations, dining, entertainment, destinations, deck highlights, and expert cruise planning advice.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-edge#article"
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-edge#article",
                "headline": "Celebrity Edge Cruise Ship Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-edge",
                "description": "Expert guide to Celebrity Edge featuring Infinite Veranda cabins, Magic Carpet, accommodations, dining, entertainment, destinations, The Retreat, Eden, and expert cruise planning advice.",
                "image": "https://www.tripsandships.com/images/celebrity-edge-cruise-ship-guide.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-edge"
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
                        "name": "Celebrity Edge Cruise Ship Guide",
                        "item": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-edge"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Celebrity Edge a luxury cruise ship?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Edge is considered one of the world's leading premium cruise ships. It combines contemporary luxury, award-winning dining, innovative ship design, and personalized service to deliver an elevated cruise experience. As the first ship in Celebrity Cruises' Edge Series, it introduced groundbreaking features that have since redefined modern cruising."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on Celebrity Edge?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your Celebrity Edge cruise fare typically includes luxury accommodations, complimentary main dining restaurants, Oceanview Café buffet, live entertainment and theater productions, Resort Pool and Solarium, Fitness Center, youth programs, and transportation between ports. Specialty dining, alcoholic beverages, Wi-Fi, spa treatments, and shore excursions are available for an additional fee unless included in your cruise package."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are Infinite Veranda cabins?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Infinite Veranda cabins are Celebrity Edge's signature accommodation innovation. Instead of a traditional balcony, floor-to-ceiling windows open electronically to transform your entire room into an open-air living space. This design provides more interior space while allowing guests to enjoy fresh ocean air and uninterrupted panoramic views."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is The Retreat worth the upgrade?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. The Retreat includes spacious suite accommodations, butler service, the private Luminae Restaurant, exclusive Retreat Lounge, private sundeck, concierge services, and priority embarkation and disembarkation. It offers exceptional value for travelers seeking additional privacy and personalized luxury."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many restaurants are on Celebrity Edge?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Edge offers more than 29 restaurants, cafés, bars, and lounges, including Fine Cut Steakhouse, Eden Restaurant, Raw on 5, Rooftop Garden Grill, Le Grand Bistro, Oceanview Café, and four Main Dining Restaurants."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the Magic Carpet?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Magic Carpet is Celebrity Edge's signature floating platform attached to the side of the ship. It transforms into an outdoor restaurant, lounge, cocktail bar, tender boarding platform, and observation deck while providing spectacular panoramic ocean views."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Celebrity Edge have butler service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Guests staying in The Retreat Suites receive dedicated butler service for dining reservations, unpacking and packing, in-suite dining, special requests, and personalized onboard assistance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Wi-Fi is available throughout Celebrity Edge. Depending on your fare or promotional offer, internet access may be included or purchased separately before or during your cruise. High-speed internet packages are also available."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where does Celebrity Edge sail?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Edge sails to the Mediterranean, Greek Isles, Italy, France, Spain, Croatia, Eastern Caribbean, Western Caribbean, and Southern Caribbean, with seasonal European itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Celebrity Edge good for families?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Edge is an excellent choice for families, offering Camp at Sea youth programs, family-friendly entertainment, spacious accommodations, multiple pools, interactive activities, and diverse dining options."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What makes Celebrity Edge different from other cruise ships?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Edge introduced revolutionary innovations including Infinite Veranda staterooms, the Magic Carpet floating platform, Eden, Rooftop Garden, Resort Deck, and contemporary open-air architecture that transformed modern cruise design."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Celebrity Edge worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Edge offers exceptional value through elegant accommodations, outstanding restaurants, innovative ship design, premium entertainment, personalized service, and destination-focused itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cabin is best on Celebrity Edge?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The best cabin depends on your travel style. Inside Staterooms offer great value, Ocean View cabins provide natural light, Infinite Veranda cabins are the most popular, Concierge Class adds extra amenities, AquaClass focuses on wellness, and The Retreat Suites deliver the ultimate luxury experience with butler service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Celebrity Edge have Eden?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Eden is one of Celebrity Edge's most distinctive venues, offering fine dining, live performances, signature cocktails, interactive entertainment, and panoramic ocean views in a unique immersive setting."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book Celebrity Edge with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert Celebrity Cruises planning, personalized cabin and itinerary recommendations, exclusive promotions, flight and hotel arrangements, pre- and post-cruise planning, private transfers, and concierge-level service before, during, and after your Celebrity Edge vacation."
                        }
                    }
                ]
            }
        ]
    }

    const cecsGlance = [
        { feature: 'Cruise Line', detail: 'Celebrity Cruises' },
        { feature: 'Ship Class', detail: 'Edge Series' },
        { feature: 'Guest Capacity', detail: 'Approx. 2,918' },
        { feature: 'Crew Members', detail: 'Approx. 1,320' },
        { feature: 'Maiden Voyage', detail: '2018' },
        { feature: 'Best For', detail: 'Couples, Families, Luxury Travelers' },
        { feature: 'Popular Destinations', detail: 'Mediterranean, Caribbean, Europe' }
    ]

    const cecsWhySail = [
        { label: 'Revolutionary Infinite Veranda cabins', icon: 'DoorOpen' },
        { label: 'Magic Carpet floating venue', icon: 'Ship' },
        { label: 'Award-winning dining', icon: 'UtensilsCrossed' },
        { label: 'The Retreat luxury suites', icon: 'Crown' },
        { label: 'Eden experience', icon: 'Flower2' },
        { label: 'Rooftop Garden', icon: 'Trees' },
        { label: 'Resort-style pool deck', icon: 'Waves' },
        { label: 'Spacious public areas', icon: 'Wind' },
        { label: 'Contemporary luxury design', icon: 'Gem' },
        { label: 'Personalized service', icon: 'HeartHandshake' }
    ]

    const cecsAccommodations = [
        { name: 'Inside Staterooms', desc: 'Comfortable and affordable accommodations with modern amenities.', icon: 'BedDouble' },
        { name: 'Ocean View Staterooms', desc: 'Enjoy natural light and expansive ocean views.', icon: 'Eye' },
        { name: 'Infinite Veranda Staterooms', desc: "Celebrity's revolutionary design transforms the balcony into part of your living space with floor-to-ceiling windows that open at the touch of a button.", icon: 'DoorOpen' },
        { name: 'Concierge Class', desc: 'Includes additional services and exclusive amenities for an enhanced vacation.', icon: 'Award' },
        { name: 'AquaClass', desc: 'Perfect for wellness-focused travelers with exclusive Blu restaurant access and spa benefits.', icon: 'Droplet' },
        { name: 'Suites', desc: 'Luxury accommodations featuring spacious layouts and exclusive access to The Retreat.', icon: 'Gem' }
    ]

    const cecsRetreatFeatures = [
        { label: 'Private Luminae Restaurant', icon: 'Utensils' },
        { label: 'Exclusive Retreat Lounge', icon: 'Sofa' },
        { label: 'Retreat Sundeck', icon: 'Sun' },
        { label: 'Butler service', icon: 'ConciergeBell' },
        { label: 'Concierge assistance', icon: 'HeartHandshake' },
        { label: 'Priority embarkation', icon: 'ArrowUpRight' },
        { label: 'Premium suite amenities', icon: 'Sparkles' }
    ]

    const cecsDining = [
        { name: 'Main Dining Restaurants', desc: 'Four complimentary restaurants serving globally inspired cuisine.', icon: 'UtensilsCrossed' },
        { name: 'Fine Cut Steakhouse', desc: 'Premium steaks, seafood, and fine wines.', icon: 'ChefHat' },
        { name: 'Eden Restaurant', desc: 'Creative cuisine paired with immersive surroundings.', icon: 'Flower2' },
        { name: 'Raw on 5', desc: 'Fresh sushi, oysters, and seafood specialties.', icon: 'Fish' },
        { name: 'Le Grand Bistro', desc: 'French-inspired café serving pastries, coffee, and light meals.', icon: 'Coffee' },
        { name: 'Rooftop Garden Grill', desc: 'Outdoor dining with grilled favorites and ocean views.', icon: 'Trees' }
    ]

    const cecsMagicCarpet = [
        { label: 'Outdoor restaurant', icon: 'Utensils' },
        { label: 'Lounge', icon: 'Sofa' },
        { label: 'Cocktail bar', icon: 'GlassWater' },
        { label: 'Tender boarding platform', icon: 'Anchor' },
        { label: 'Observation deck', icon: 'Eye' }
    ]

    const cecsEden = [
        { label: 'Signature restaurant', icon: 'ChefHat' },
        { label: 'Live performances', icon: 'Theater' },
        { label: 'Cocktail lounge', icon: 'Wine' },
        { label: 'Relaxation space', icon: 'Sofa' },
        { label: 'Floor-to-ceiling ocean views', icon: 'Waves' }
    ]

    const cecsWellness = [
        { label: 'Resort Pool', icon: 'Droplet' },
        { label: 'Adults-only Solarium', icon: 'Sun' },
        { label: 'Rooftop Garden', icon: 'TreeDeciduous' },
        { label: 'SEA Thermal Suite', icon: 'Thermometer' },
        { label: 'Luxury Spa', icon: 'Flower' },
        { label: 'Modern Fitness Center', icon: 'Dumbbell' }
    ]

    const cecsEntertainment = [
        { label: 'Broadway-caliber productions', icon: 'Theater' },
        { label: 'Live music', icon: 'Music' },
        { label: 'Interactive performances', icon: 'Users' },
        { label: 'Guest entertainers', icon: 'Smile' },
        { label: 'Casino', icon: 'Dices' },
        { label: 'Silent discos', icon: 'Headphones' },
        { label: 'Nightclubs', icon: 'Tv' },
        { label: 'Cocktail lounges', icon: 'Wine' }
    ]

    const cecsIncluded = [
        'Luxury accommodations', 'Complimentary dining', 'Entertainment', 'Pools',
        'Fitness Center', 'Youth programs'
    ]

    const cecsPros = [
        'Revolutionary ship design', 'Innovative Infinite Veranda cabins', 'Outstanding dining', 'Spacious public areas',
        'Magic Carpet experience', 'Excellent service', 'Luxurious Retreat suites'
    ]

    const cecsCons = [
        'Infinite Verandas may not appeal to everyone', 'Specialty restaurants cost extra', 'Popular dining venues require reservations'
    ]

    const cecsAudience = [
        'Couples', 'Honeymooners', 'Luxury travelers', 'Families',
        'Food lovers', 'First-time Celebrity guests', 'Travelers seeking a modern premium cruise'
    ]

    const cecsWhyBook = [
        { title: 'Compare Edge Series Ships', desc: 'Compare Celebrity Edge with other Edge Series ships.', icon: 'FileSearch' },
        { title: 'Select the Best Cabin or Suite', desc: 'Choose the best cabin or suite for your travel style.', icon: 'BedDouble' },
        { title: 'Find Exclusive Promotions', desc: 'Find exclusive cruise promotions unavailable when booking direct.', icon: 'BadgePercent' },
        { title: 'Arrange Flights & Hotels', desc: 'Arrange flights and hotels around your sailing dates.', icon: 'Plane' },
        { title: 'Plan Pre- & Post-Cruise Stays', desc: 'Plan pre- and post-cruise stays around your itinerary.', icon: 'Calendar' },
        { title: 'Coordinate Private Transfers', desc: 'Coordinate private transfers to and from the ship.', icon: 'Sliders' },
       
    ]

    return (
        <>
            <Helmet>
                <title>Celebrity Edge Cruise Ship Guide : Cabins, Infinite Verandas & Expert Review</title>
                <meta name="title" content="Celebrity Edge Cruise Ship Guide | Infinite Verandas & Magic Carpet" />
                <meta
                    name="description"
                    content="Discover everything about Celebrity Edge including Infinite Veranda cabins, Magic Carpet, accommodations, dining, entertainment, destinations, deck highlights, and expert cruise planning advice."
                />
                <script type="application/ld+json">
                    {JSON.stringify(cecsSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION (MATCHED) */}
                <section className="fcel-hero-section">
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <CecsIconSparkle size={16} />
                            <span>Celebrity Edge Cruise Ship Guide</span>
                        </div>
                        <h1 className="fcel-hero-title">Celebrity Edge <br /> Cruise Ship Guide</h1>
                        <p className="fcel-hero-subtitle">
                            Discover the Revolutionary Ship That Changed Modern Cruising
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <CecsIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <CecsIconList size={18} />
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
                                <h2 className="fcel-section-heading">Discover Celebrity Edge</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Edge introduced an entirely new way to experience cruising. As the first ship in Celebrity Cruises' groundbreaking Edge Series, it redefined ship design with innovative features like the Magic Carpet, Infinite Veranda staterooms, and immersive public spaces that blur the line between indoors and outdoors.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Whether you're planning a Mediterranean voyage, Caribbean escape, or your very first Celebrity cruise, Celebrity Edge offers a premium vacation with award-winning dining, exceptional service, elegant accommodations, and unforgettable destinations. This guide covers everything you need to know before booking your Celebrity Edge cruise.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <CecsPlaceholder label="Celebrity Edge Cruise Ship" />
                                <div className="fcel-intro-badge-float">
                                    <CecsIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Edge Series Review Summary</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="cecs-quick-answer-section">
                    <div className="cecs-quick-answer-container">
                        <div className="cecs-quick-answer-card">
                            <h3 className="cecs-quick-answer-title">Is Celebrity Edge Worth It?</h3>
                            <p className="cecs-quick-answer-text">
                                Absolutely. Celebrity Edge remains one of the world's highest-rated premium cruise ships thanks to its innovative design, spacious accommodations, exceptional restaurants, luxurious Retreat suites, and destination-focused itineraries. It is ideal for couples, luxury travelers, food lovers, and anyone looking for a sophisticated cruise experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="cecs-inline-cta-section">
                    <div className="cecs-inline-cta-container">
                        <span className="cecs-inline-cta-tag">Expert Planning</span>
                        <p className="cecs-inline-cta-text">Ready to sail on the ship that redefined modern cruising?</p>
                        <div className="cecs-inline-cta-btn-row">
                            <Link to="/contact" className="cecs-btn-primary">
                                <CecsIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="cecs-btn-outline">
                                <CecsIconList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="cecs-glance-section">
                    <div className="cecs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHIP OVERVIEW</span>
                            <h2 className="fcel-section-heading">Celebrity Edge at a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cecs-glance-table">
                            {cecsGlance.map((row, idx) => (
                                <div key={idx} className="cecs-glance-row">
                                    <div className="cecs-glance-feature">{row.feature}</div>
                                    <div className="cecs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY SAIL */}
                <section className="cecs-tag-section cecs-bg-white">
                    <div className="cecs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">HIGHLIGHTS</span>
                            <h2 className="fcel-section-heading">Why Sail on Celebrity Edge?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Edge transformed modern cruising with features that have since become the standard across the Edge Series. Highlights include:
                            </p>
                        </div>
                        <div className="cecs-tag-grid">
                            {cecsWhySail.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cecs-tag-card">
                                        <div className="cecs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CecsIconDot size={20} />}
                                        </div>
                                        <span className="cecs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            Every space has been thoughtfully designed to maximize natural light, ocean views, and guest comfort.
                        </p>
                    </div>
                </section>

                {/* CELEBRITY EDGE ACCOMMODATIONS */}
                <section className="cecs-feature-section cecs-bg-soft">
                    <div className="cecs-feature-container">
                        <div className="cecs-feature-grid cecs-reverse">
                            <div className="cecs-feature-copy-col">
                                <span className="fcel-eyebrow-label">ACCOMMODATIONS</span>
                                <h2 className="cecs-feature-title" style={{ textAlign: 'left' }}>Celebrity Edge Accommodations</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Edge offers accommodations for every style of traveler.
                                </p>
                                <div className="cecs-feature-desc-list">
                                    {cecsAccommodations.map((cabin, idx) => {
                                        const IconComponent = iconMap[cabin.icon];
                                        return (
                                            <div key={idx} className="cecs-feature-desc-card">
                                                <div className="cecs-feature-card-header">
                                                    {IconComponent && <IconComponent size={20} className="cecs-feature-card-icon-inline" />}
                                                    <h4 className="cecs-feature-desc-title">{cabin.name}</h4>
                                                </div>
                                                <p className="cecs-feature-desc-text">{cabin.desc}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="cecs-feature-image-col">
                                <div className="cecs-badge-overlay">
                                    <CecsIconSparkle size={14} />
                                    <span>Cabins & Suites</span>
                                </div>
                                <CecsPlaceholder label="Celebrity Edge Stateroom Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* INFINITE VERANDA CALLOUT */}
                <section className="cecs-veranda-section">
                    <div className="cecs-veranda-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SIGNATURE INNOVATION</span>
                            <h2 className="fcel-section-heading">Infinite Veranda Cabins</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cecs-veranda-card">
                            <p className="fcel-lead-paragraph">
                                One of Celebrity Edge's most talked-about innovations is the Infinite Veranda. Unlike traditional balconies, these cabins feature movable floor-to-ceiling glass windows that extend your living area while still providing fresh ocean air and uninterrupted views.
                            </p>
                            <p className="fcel-lead-paragraph">
                                Many guests appreciate the additional interior space, while others prefer traditional balconies, making this one of the ship's most discussed features.
                            </p>
                        </div>
                    </div>
                </section>

                {/* THE RETREAT (DARK, ALTERNATING IMAGE) */}
                <section className="cecs-feature-section cecs-dark-section cecs-retreat-section">
                    <div className="cecs-feature-container">
                        <div className="cecs-feature-grid">
                            <div className="cecs-feature-image-col">
                                <div className="cecs-badge-overlay">
                                    <CecsIconSparkle size={14} />
                                    <span>The Retreat</span>
                                </div>
                                <CecsPlaceholder label="Celebrity Edge The Retreat Suite" />
                            </div>
                            <div className="cecs-feature-copy-col">
                                <span className="cecs-retreat-eyebrow">MOST LUXURIOUS EXPERIENCE</span>
                                <h2 className="cecs-retreat-title">The Retreat</h2>
                                <p className="cecs-retreat-lead">
                                    The Retreat offers Celebrity's most luxurious onboard experience. Guests enjoy:
                                </p>
                                <div className="cecs-retreat-grid">
                                    {cecsRetreatFeatures.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cecs-retreat-card">
                                                <div className="cecs-retreat-card-icon">
                                                    {IconComponent ? <IconComponent size={20} /> : <CecsIconCheck size={18} />}
                                                </div>
                                                <span className="cecs-retreat-card-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cecs-retreat-footer-text">
                                    The Retreat creates a private luxury experience within the ship.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESTAURANTS & DINING */}
                <section className="cecs-feature-section cecs-bg-white">
                    <div className="cecs-feature-container">
                        <div className="cecs-feature-grid">
                            <div className="cecs-feature-image-col">
                                <div className="cecs-badge-overlay">
                                    <CecsIconDot size={14} />
                                    <span>Restaurants & Dining</span>
                                </div>
                                <CecsPlaceholder label="Celebrity Edge Dining Experience" />
                            </div>
                            <div className="cecs-feature-copy-col">
                                <span className="fcel-eyebrow-label">CULINARY EXCELLENCE</span>
                                <h2 className="cecs-feature-title">Restaurants & Dining</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Edge features one of the strongest dining programs in premium cruising. Popular venues include:
                                </p>
                                <div className="cecs-feature-desc-list">
                                    {cecsDining.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cecs-feature-desc-card">
                                                <div className="cecs-feature-card-header">
                                                    {IconComponent && <IconComponent size={20} className="cecs-feature-card-icon-inline" />}
                                                    <h4 className="cecs-feature-desc-title">{item.name}</h4>
                                                </div>
                                                <p className="cecs-feature-desc-text">{item.desc}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAGIC CARPET */}
                <section className="cecs-feature-section cecs-bg-soft">
                    <div className="cecs-feature-container">
                        <div className="cecs-feature-grid cecs-reverse">
                            <div className="cecs-feature-copy-col">
                                <span className="fcel-eyebrow-label">SIGNATURE FEATURE</span>
                                <h2 className="cecs-feature-title" style={{ textAlign: 'left' }}>Magic Carpet</h2>
                                <p className="fcel-lead-paragraph">
                                    The Magic Carpet is Celebrity Edge's signature feature and one of the most recognizable innovations in the cruise industry. It transforms into:
                                </p>
                                <div className="cecs-feature-list">
                                    {cecsMagicCarpet.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cecs-feature-item-card">
                                                <div className="cecs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CecsIconCheck size={18} />}
                                                </div>
                                                <span className="cecs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Offering spectacular panoramic ocean views, the Magic Carpet creates unique experiences on multiple decks throughout your voyage.
                                </p>
                            </div>
                            <div className="cecs-feature-image-col">
                                <div className="cecs-badge-overlay">
                                    <CecsIconSparkle size={14} />
                                    <span>Magic Carpet</span>
                                </div>
                                <CecsPlaceholder label="Celebrity Edge Magic Carpet" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* EDEN (DARK) */}
                <section className="cecs-feature-section cecs-dark-section">
                    <div className="cecs-feature-container">
                        <div className="cecs-feature-grid">
                            <div className="cecs-feature-image-col">
                                <div className="cecs-badge-overlay">
                                    <CecsIconDot size={14} />
                                    <span>Eden</span>
                                </div>
                                <CecsPlaceholder label="Celebrity Edge Eden Venue" />
                            </div>
                            <div className="cecs-feature-copy-col">
                                <span className="fcel-eyebrow-label">IMMERSIVE VENUE</span>
                                <h2 className="cecs-feature-title">Eden</h2>
                                <p className="fcel-lead-paragraph">
                                    Eden is unlike any other venue at sea. Guests can enjoy:
                                </p>
                                <div className="cecs-feature-list">
                                    {cecsEden.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cecs-feature-item-card">
                                                <div className="cecs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CecsIconCheck size={18} />}
                                                </div>
                                                <span className="cecs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    During the day, Eden provides a peaceful retreat, while evenings feature immersive entertainment and fine dining.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* POOLS, SPA & WELLNESS */}
                <section className="cecs-tag-section cecs-bg-white">
                    <div className="cecs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RELAX & RECHARGE</span>
                            <h2 className="fcel-section-heading">Pools, Spa & Wellness</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Edge offers exceptional wellness facilities including:
                            </p>
                        </div>
                        <div className="cecs-tag-grid">
                            {cecsWellness.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cecs-tag-card">
                                        <div className="cecs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CecsIconDot size={20} />}
                                        </div>
                                        <span className="cecs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            These spaces are designed for both relaxation and rejuvenation.
                        </p>
                    </div>
                </section>

                {/* ENTERTAINMENT */}
                <section className="cecs-tag-section cecs-bg-soft">
                    <div className="cecs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ONBOARD FUN</span>
                            <h2 className="fcel-section-heading">Entertainment</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}>
                                Celebrity Edge features entertainment throughout the day and evening. Guests enjoy:
                            </p>
                        </div>
                        <div className="cecs-entertainment-gallery-grid">
                            {cecsEntertainment.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cecs-entertainment-gallery-card">
                                        <div className="cecs-entertainment-card-image">
                                            <CecsPlaceholder label={item.label} />
                                        </div>
                                        <div className="cecs-entertainment-card-info">
                                            <div className="cecs-entertainment-card-icon">
                                                {IconComponent ? <IconComponent size={20} /> : <CecsIconDot size={20} />}
                                            </div>
                                            <span className="cecs-entertainment-card-label">{item.label}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            Its innovative theater technology creates immersive performances unlike traditional cruise productions.
                        </p>
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="cecs-itinerary-section">
                    <div className="cecs-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHERE TO SAIL</span>
                            <h2 className="fcel-section-heading">Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Edge sails to some of the world's most popular cruise destinations.
                            </p>
                        </div>
                        <div className="cecs-itinerary-grid">
                            <div className="cecs-itinerary-card">
                                <h3 className="cecs-itinerary-region">
                                    <Compass size={20} />
                                    Mediterranean
                                </h3>
                                <ul className="cecs-itinerary-list">
                                    <li><Utensils size={16} className="cecs-included-icon" />Italy</li>
                                    <li><Compass size={16} className="cecs-included-icon" />Greece</li>
                                    <li><Wine size={16} className="cecs-included-icon" />France</li>
                                    <li><Music size={16} className="cecs-included-icon" />Spain</li>
                                    <li><Waves size={16} className="cecs-included-icon" />Croatia</li>
                                </ul>
                            </div>
                            <div className="cecs-itinerary-card">
                                <h3 className="cecs-itinerary-region">
                                    <Palmtree size={20} />
                                    Caribbean
                                </h3>
                                <ul className="cecs-itinerary-list">
                                    <li><Sun size={16} className="cecs-included-icon" />Eastern Caribbean</li>
                                    <li><Anchor size={16} className="cecs-included-icon" />Western Caribbean</li>
                                    <li><Waves size={16} className="cecs-included-icon" />Southern Caribbean</li>
                                </ul>
                            </div>
                        </div>
                        <p className="cecs-itinerary-note">Seasonal sailings also visit select European destinations.</p>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="cecs-included-section">
                    <div className="cecs-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ALL-INCLUSIVE BASICS</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Your Celebrity Edge cruise fare generally includes:
                            </p>
                        </div>
                        <div className="cecs-included-grid">
                            {cecsIncluded.map((item, idx) => (
                                <div key={idx} className="cecs-included-item">
                                    <CecsIconCheck size={18} className="cecs-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cecs-included-note">
                            Additional purchases include specialty dining, beverages, Wi-Fi, shore excursions, and spa treatments.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="cecs-pros-section cecs-bg-white">
                    <div className="cecs-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label cecs-eyebrow-white">PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="cecs-comparison-board">
                            <div className="cecs-pros-panel">
                                <h3 className="cecs-panel-title cecs-pros-title">
                                    <CecsIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="cecs-panel-list">
                                    {cecsPros.map((pro, idx) => (
                                        <div key={idx} className="cecs-list-item">
                                            <div className="cecs-item-icon-wrap cecs-pro-icon">
                                                <CecsIconCheck size={16} />
                                            </div>
                                            <div className="cecs-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cecs-cons-panel">
                                <h3 className="cecs-panel-title cecs-cons-title">
                                    <CecsIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="cecs-panel-list">
                                    {cecsCons.map((con, idx) => (
                                        <div key={idx} className="cecs-list-item">
                                            <div className="cecs-item-icon-wrap cecs-con-icon">
                                                <CecsIconX size={16} />
                                            </div>
                                            <div className="cecs-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD SAIL */}
                <section className="cecs-audience-section">
                    <div className="cecs-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Sail on Celebrity Edge?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Celebrity Edge is perfect for:
                            </p>
                        </div>
                        <div className="cecs-audience-column">
                            <ul className="cecs-audience-list">
                                {cecsAudience.map((item, idx) => (
                                    <li key={idx} className="cecs-audience-item">
                                        <CecsIconCheck size={18} className="cecs-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* IS CELEBRITY EDGE WORTH THE MONEY */}
                <section className="cecs-worth-section cecs-bg-white">
                    <div className="cecs-worth-container">
                        <span className="fcel-eyebrow-label">INVESTMENT & VALUE</span>
                        <h2 className="fcel-section-heading">Is Celebrity Edge Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Celebrity Edge continues to set the standard for premium cruising. Its innovative design, exceptional accommodations, world-class restaurants, and personalized service make it one of the best values in premium cruise travel.
                        </p>
                        <p className="fcel-lead-paragraph">
                            For travelers seeking a contemporary luxury vacation across Europe or the Caribbean, Celebrity Edge remains an outstanding choice.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="cecs-why-book-section">
                    <div className="cecs-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Our luxury cruise specialists help you:
                            </p>
                        </div>
                        <div className="cecs-why-book-grid">
                            {cecsWhyBook.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cecs-why-book-card">
                                        <div className="cecs-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CecsIconDot size={20} />}
                                        </div>
                                        <h4 className="cecs-why-book-title">{item.title}</h4>
                                        <p className="cecs-why-book-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* EXPERT INSIGHT (MATCHED — medi- classes) */}
                <section id="celebrity-edge-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
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
                                            'Edge Series ship design',
                                            'Retreat & suite experiences',
                                            'Mediterranean & Caribbean itineraries',
                                            'Concierge-level cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <CecsIconDot size={14} />
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
                                        <CecsIconAward size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why I Recommend <br className="medi-growth-title-break" />Celebrity Edge
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    With more than four decades of luxury travel experience, I've seen many cruise ships introduce new ideas, but few have transformed the guest experience the way Celebrity Edge has. From the moment you step onboard, you'll notice how every space has been designed to connect you with the ocean while maintaining an atmosphere of relaxed sophistication.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        I frequently recommend Celebrity Edge to travelers who appreciate exceptional dining, innovative ship design, and personalized service without the formality of traditional luxury cruising. The Infinite Veranda cabins, Magic Carpet, and Eden create experiences you simply won't find on most other ships.
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'First-time Celebrity cruisers',
                                            'Travelers who love innovative design',
                                            'Relaxed, sophisticated atmosphere',
                                            'Mediterranean & Caribbean voyages',
                                            'Returning Celebrity guests'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <CecsIconCheck size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <div className="medi-editorial-full-width-footer">
                                <p className="medi-editorial-body-para">
                                    Whether you're planning your first Celebrity cruise or returning to explore another destination, Celebrity Edge consistently delivers an elegant, memorable vacation.
                                </p>
                                <p className="medi-editorial-signature">
                                    — Angela Hughes<br />
                                    Founder &amp; CEO, Trips &amp; Ships Luxury Travel
                                </p>
                            </div>

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
                            {cecsFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => cecsToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {cecsActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {cecsActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Plan Your Celebrity Edge Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to compare cabins, secure exclusive promotions, and plan pre- and post-cruise stays. We handle every detail so you can enjoy the journey.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <CecsIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <CecsIconList size={18} />
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

export default CelebrityEdgeCruiseShipGuide