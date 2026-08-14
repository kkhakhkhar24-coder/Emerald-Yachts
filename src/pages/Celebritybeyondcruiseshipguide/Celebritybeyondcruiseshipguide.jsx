import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebritybeyondcruiseshipguide.css'
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
    Leaf,
    Waves,
    Compass,
    Trees,
    Flower2,
    Anchor,
    ShieldCheck,
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
    Palmtree,
    Globe
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
    Leaf,
    Waves,
    Compass,
    Trees,
    Flower2,
    Anchor,
    ShieldCheck,
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
    Smile
}


/* ============================================================
   INLINE SVG ICONS (no lucide-react — plain inline placeholders)
   ============================================================ */
function CbcsIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CbcsIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CbcsIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CbcsIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CbcsIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CbcsIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CbcsIconArrow({ size = 14 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

function CbcsIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CbcsIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CbcsIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CbcsPlaceholder({ label, className = '' }) {
    return (
        <div className={`cbcs-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CbcsIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityBeyondCruiseShipGuide() {
    const [cbcsActiveFaq, setCbcsActiveFaq] = useState(null)
    const cbcsToggleFaq = (index) => {
        setCbcsActiveFaq(cbcsActiveFaq === index ? null : index)
    }

    const cbcsFaqs = [
        {
            question: "1. Is Celebrity Beyond a luxury cruise ship?",
            answer: "Yes. Celebrity Beyond is considered one of the world's leading premium luxury cruise ships. It offers upscale accommodations, award-winning dining, personalized service, innovative venues like the Magic Carpet, and exclusive suite experiences through The Retreat. While it isn't classified as an ultra-luxury cruise line, it provides a luxury experience that rivals many high-end competitors."
        },
        {
            question: "2. What is included on Celebrity Beyond?",
            answer: "Your cruise fare typically includes comfortable accommodations, main dining restaurants, buffet dining, theater productions, live entertainment, Resort Pool and Solarium, Fitness Center, youth programs, and ocean transportation between ports. Additional purchases such as specialty restaurants, alcoholic beverages, Wi-Fi, spa treatments, and shore excursions may require an extra fee unless included in your fare package."
        },
        {
            question: "3. Is The Retreat worth the upgrade?",
            answer: "For travelers seeking a more exclusive experience, absolutely. The Retreat offers luxury suite accommodations, a private restaurant, exclusive lounge, sundeck, butler service, concierge assistance, premium amenities, and priority embarkation. Guests enjoy enhanced privacy and personalized service throughout their cruise."
        },
        {
            question: "4. Does Celebrity Beyond have a casino?",
            answer: "Yes. Celebrity Beyond features a full-service casino with slot machines, blackjack, roulette, poker, baccarat, craps, and other table games. The casino also hosts tournaments and offers rewards through Celebrity Cruises' casino program."
        },
        {
            question: "5. How many restaurants are onboard Celebrity Beyond?",
            answer: "Celebrity Beyond offers more than 30 restaurants, cafés, bars, and lounges, including complimentary dining venues and specialty restaurants. Popular dining options include Fine Cut Steakhouse, Le Voyage, Eden Restaurant, Raw on 5, Le Grand Bistro, Rooftop Garden Grill, Oceanview Café, and Four Main Dining Restaurants. This variety allows guests to enjoy everything from casual meals to fine dining throughout their voyage."
        },
        {
            question: "6. What is the Magic Carpet on Celebrity Beyond?",
            answer: "The Magic Carpet is Celebrity Cruises' signature floating platform attached to the side of the ship. Depending on its location, it transforms into a specialty restaurant, outdoor bar, tender boarding platform, observation lounge, or entertainment venue. It provides spectacular ocean views and is one of the most recognizable features of the Edge Series ships."
        },
        {
            question: "7. Does Celebrity Beyond have Infinite Veranda cabins?",
            answer: "Yes. Celebrity Beyond introduced the Infinite Veranda concept, where the balcony becomes part of your living space using floor-to-ceiling windows. Guests can enjoy panoramic ocean views while increasing interior cabin space. These cabins have become one of Celebrity's signature accommodation styles."
        },
        {
            question: "8. Is Wi-Fi included on Celebrity Beyond?",
            answer: "Wi-Fi is available throughout the ship. Depending on the fare you book, Wi-Fi may be included as part of an \"All Included\" package or purchased separately before or during your cruise. Premium internet packages are also available for guests needing faster connectivity."
        },
        {
            question: "9. Which itineraries does Celebrity Beyond sail?",
            answer: "Celebrity Beyond primarily sails Eastern Caribbean, Western Caribbean, Southern Caribbean, Mediterranean, Greek Isles, Italy, France, and Spain. Most itineraries range between 7 and 12 nights, with seasonal repositioning cruises offering additional destinations."
        },
        {
            question: "10. Is Celebrity Beyond good for families?",
            answer: "Yes. Although Celebrity Cruises is known for appealing to couples and adults, Celebrity Beyond is also an excellent option for families. Families enjoy the Camp at Sea youth program, family-friendly dining, spacious staterooms, multiple pools, interactive activities, and entertainment suitable for all ages. Multi-generational families especially appreciate the ship's spacious public areas and suite accommodations."
        },
        {
            question: "11. What makes Celebrity Beyond different from Celebrity Edge?",
            answer: "Celebrity Beyond builds upon the success of Celebrity Edge with several enhancements, including a larger Resort Deck, expanded Sunset Bar, bigger Rooftop Garden, additional suite accommodations, larger public spaces, more restaurants and lounges, and an enhanced Retreat experience. Many guests consider Beyond to be the most refined ship in the Edge Series."
        },
        {
            question: "12. Is Celebrity Beyond worth the money?",
            answer: "For travelers looking for premium accommodations, exceptional dining, elegant design, and outstanding service, Celebrity Beyond offers excellent value. Its modern amenities, luxurious public spaces, and destination-focused itineraries make it one of the highest-rated premium cruise ships available today."
        },
        {
            question: "13. Which cabin is best on Celebrity Beyond?",
            answer: "The best cabin depends on your travel style. Inside Stateroom offers the best value, Ocean View provides great natural light, Infinite Veranda is the most popular choice, Concierge Class adds extra amenities, AquaClass suits spa-focused travelers, and Retreat Suites offer the ultimate luxury experience with butler service and exclusive access. For the most luxurious vacation, The Retreat suites are widely considered the best accommodations onboard."
        },
        {
            question: "14. Does Celebrity Beyond have butler service?",
            answer: "Yes. Guests staying in The Retreat Suites receive dedicated butler service, including assistance with unpacking, in-suite dining, reservations, special requests, and personalized attention throughout the cruise. Butler service is one of the signature benefits of Celebrity's luxury suite experience."
        },
        {
            question: "15. Why book Celebrity Beyond with Trips & Ships Luxury Travel?",
            answer: "Booking through Trips & Ships Luxury Travel gives you access to expert cruise advisors who help you compare cabin categories, choose the best itinerary, find exclusive promotions, arrange flights and hotels, plan pre- and post-cruise stays, coordinate shore experiences, and receive personalized concierge service before, during, and after your vacation. Our goal is to make your Celebrity Beyond vacation seamless, personalized, and unforgettable."
        }
    ]

    const cbcsSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-beyond",
                "name": "Celebrity Beyond Cruise Ship Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-beyond",
                "description": "Discover everything you need to know about Celebrity Beyond including deck plans, cabins, The Retreat, restaurants, Sunset Bar, entertainment, itineraries, and expert tips before booking.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-beyond#article"
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-beyond#article",
                "headline": "Celebrity Beyond Cruise Ship Guide",
                "url": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-beyond",
                "description": "Expert guide to Celebrity Beyond featuring deck plans, cabins, The Retreat, dining, Sunset Bar, entertainment, itineraries, accommodations, and expert travel advice.",
                "image": "https://www.tripsandships.com/images/celebrity-beyond-cruise-ship-guide.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-beyond"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Cruise Planning Services",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Celebrity Cruises planning services helping travelers choose the best ship, cabin, itinerary, and exclusive promotions."
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
                        "name": "Celebrity Beyond Cruise Ship Guide",
                        "item": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-beyond"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Celebrity Beyond a luxury cruise ship?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Beyond is considered one of the world's leading premium luxury cruise ships. It offers upscale accommodations, award-winning dining, personalized service, innovative venues like the Magic Carpet, and exclusive suite experiences through The Retreat. While it isn't classified as an ultra-luxury cruise line, it provides a luxury experience that rivals many high-end competitors."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on Celebrity Beyond?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your cruise fare typically includes comfortable accommodations, main dining restaurants, buffet dining, theater productions, live entertainment, Resort Pool and Solarium, Fitness Center, youth programs, and ocean transportation between ports. Specialty restaurants, alcoholic beverages, Wi-Fi, spa treatments, and shore excursions may require an additional fee unless included in your fare package."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is The Retreat worth the upgrade?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For travelers seeking a more exclusive experience, absolutely. The Retreat offers luxury suite accommodations, a private restaurant, exclusive lounge, sundeck, butler service, concierge assistance, premium amenities, and priority embarkation, providing enhanced privacy and personalized service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Celebrity Beyond have a casino?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Beyond features a full-service casino with slot machines, blackjack, roulette, poker, baccarat, craps, and other table games. The casino also hosts tournaments and offers rewards through Celebrity Cruises' casino program."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many restaurants are onboard Celebrity Beyond?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Beyond offers more than 30 restaurants, cafés, bars, and lounges, including complimentary dining venues and specialty restaurants such as Fine Cut Steakhouse, Le Voyage, Eden Restaurant, Raw on 5, Le Grand Bistro, Rooftop Garden Grill, Oceanview Café, and four Main Dining Restaurants."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the Magic Carpet on Celebrity Beyond?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Magic Carpet is Celebrity Cruises' signature floating platform attached to the side of the ship. Depending on its location, it transforms into a specialty restaurant, outdoor bar, tender boarding platform, observation lounge, or entertainment venue while providing spectacular ocean views."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Celebrity Beyond have Infinite Veranda cabins?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Beyond introduced the Infinite Veranda concept, where the balcony becomes part of your living space using floor-to-ceiling windows, providing panoramic ocean views while increasing interior cabin space."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included on Celebrity Beyond?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Wi-Fi is available throughout the ship. Depending on the fare you book, Wi-Fi may be included as part of an All Included package or purchased separately before or during your cruise. Premium internet packages are also available."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which itineraries does Celebrity Beyond sail?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Beyond primarily sails Eastern Caribbean, Western Caribbean, Southern Caribbean, Mediterranean, Greek Isles, Italy, France, and Spain itineraries. Most cruises range between 7 and 12 nights."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Celebrity Beyond good for families?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Celebrity Beyond is an excellent option for families, offering the Camp at Sea youth program, family-friendly dining, spacious staterooms, multiple pools, interactive activities, and entertainment suitable for all ages."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What makes Celebrity Beyond different from Celebrity Edge?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Celebrity Beyond builds upon the success of Celebrity Edge with a larger Resort Deck, expanded Sunset Bar, bigger Rooftop Garden, additional suite accommodations, larger public spaces, more restaurants and lounges, and an enhanced Retreat experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Celebrity Beyond worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For travelers looking for premium accommodations, exceptional dining, elegant design, and outstanding service, Celebrity Beyond offers excellent value. Its modern amenities and destination-focused itineraries make it one of the highest-rated premium cruise ships available."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cabin is best on Celebrity Beyond?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The best cabin depends on your travel style. Inside Staterooms offer the best value, Ocean View cabins provide natural light, Infinite Veranda cabins are the most popular, Concierge Class includes additional amenities, AquaClass is ideal for spa-focused travelers, and Retreat Suites provide the ultimate luxury experience with butler service and exclusive access."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Celebrity Beyond have butler service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Guests staying in The Retreat Suites receive dedicated butler service, including assistance with unpacking, in-suite dining, reservations, special requests, and personalized attention throughout the cruise."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book Celebrity Beyond with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert Celebrity Cruises planning, personalized cabin and itinerary recommendations, exclusive promotions, flight and hotel arrangements, pre- and post-cruise planning, shore experience coordination, and concierge-level service before, during, and after your vacation."
                        }
                    }
                ]
            }
        ]
    }

    const cbcsGlance = [
        { feature: 'Cruise Line', detail: 'Celebrity Cruises' },
        { feature: 'Ship Class', detail: 'Edge Class' },
        { feature: 'Guest Capacity', detail: 'Approx. 3,260' },
        { feature: 'Crew Members', detail: 'Approx. 1,400' },
        { feature: 'Maiden Voyage', detail: '2022' },
        { feature: 'Best For', detail: 'Couples, Adults, Luxury Travelers, Families' },
        { feature: 'Popular Destinations', detail: 'Caribbean, Mediterranean, Europe' }
    ]

    const cbcsWhySail = [
        { label: 'Spacious open-air decks', icon: 'Wind' },
        { label: 'Contemporary luxury design', icon: 'Gem' },
        { label: 'Award-winning restaurants', icon: 'UtensilsCrossed' },
        { label: 'The Retreat luxury suites', icon: 'Crown' },
        { label: 'Infinite Veranda staterooms', icon: 'DoorOpen' },
        { label: 'Magic Carpet floating platform', icon: 'Ship' },
        { label: 'Redesigned Sunset Bar', icon: 'Wine' },
        { label: 'Eden entertainment venue', icon: 'Sparkles' },
        { label: 'Rooftop Garden', icon: 'Leaf' },
        { label: 'Resort Deck', icon: 'Waves' }
    ]

    const cbcsNeighborhoods = [
        { label: 'Resort Deck', icon: 'Compass' },
        { label: 'Rooftop Garden', icon: 'Trees' },
        { label: 'Eden', icon: 'Flower2' },
        { label: 'Grand Plaza', icon: 'Sparkles' },
        { label: 'Magic Carpet', icon: 'Anchor' },
        { label: 'The Retreat', icon: 'ShieldCheck' },
        { label: 'Solarium', icon: 'Sun' },
        { label: 'Resort Pool', icon: 'Waves' }
    ]

    const cbcsRetreatFeatures = [
        { label: 'Private restaurant', icon: 'Utensils' },
        { label: 'Exclusive lounge', icon: 'Sofa' },
        { label: 'Retreat Sundeck', icon: 'Sun' },
        { label: 'Butler service', icon: 'ConciergeBell' },
        { label: 'Premium beverages', icon: 'GlassWater' },
        { label: 'Priority boarding', icon: 'ArrowUpRight' },
        { label: 'Concierge service', icon: 'HeartHandshake' }
    ]

    const cbcsCabins = [
        { name: 'Inside Staterooms', desc: 'Perfect for budget-conscious travelers.', icon: 'BedDouble' },
        { name: 'Ocean View', desc: 'Natural light and ocean views.', icon: 'Eye' },
        { name: 'Infinite Veranda', desc: "Celebrity's signature balcony concept where the veranda becomes part of your room.", icon: 'DoorOpen' },
        { name: 'Concierge Class', desc: 'Additional amenities and priority services.', icon: 'Award' },
        { name: 'AquaClass', desc: 'Includes spa access and Blu specialty restaurant.', icon: 'Droplet' },
        { name: 'Suites', desc: 'Luxury accommodations with exclusive Retreat benefits.', icon: 'Gem' }
    ]

    const cbcsDining = [
        { name: 'Main Dining Restaurants', desc: 'Four complimentary restaurants with rotating menus.', icon: 'UtensilsCrossed' },
        { name: 'Fine Cut Steakhouse', desc: 'Premium steaks and seafood.', icon: 'ChefHat' },
        { name: 'Le Voyage', desc: "Celebrity's signature fine dining restaurant.", icon: 'Compass' },
        { name: 'Raw on 5', desc: 'Fresh sushi and seafood.', icon: 'Fish' },
        { name: 'Eden Restaurant', desc: 'Unique immersive dining experience.', icon: 'Flower2' },
        { name: 'Le Grand Bistro', desc: 'French-inspired café.', icon: 'Coffee' }
    ]

    const cbcsSunsetBar = [
        { label: 'Ocean views', icon: 'Waves' },
        { label: 'Signature cocktails', icon: 'Wine' },
        { label: 'Live music', icon: 'Music' },
        { label: 'Relaxed atmosphere', icon: 'Smile' },
        { label: 'Beautiful sunset viewing', icon: 'Sun' }
    ]

    const cbcsMagicCarpet = [
        { label: 'Specialty restaurant', icon: 'Utensils' },
        { label: 'Bar', icon: 'GlassWater' },
        { label: 'Tender platform', icon: 'Anchor' },
        { label: 'Lounge', icon: 'Sofa' },
        { label: 'Outdoor venue', icon: 'Wind' }
    ]

    const cbcsEden = [
        { label: 'Restaurant', icon: 'ChefHat' },
        { label: 'Lounge', icon: 'Sofa' },
        { label: 'Live performances', icon: 'Theater' },
        { label: 'Cocktail bar', icon: 'Wine' },
        { label: 'Observation venue', icon: 'Eye' }
    ]

    const cbcsWellness = [
        { label: 'Resort Pool', icon: 'Droplet' },
        { label: 'Adults-only Solarium', icon: 'Sun' },
        { label: 'Rooftop Garden', icon: 'TreeDeciduous' },
        { label: 'SEA Thermal Suite', icon: 'Thermometer' },
        { label: 'Fitness Center', icon: 'Dumbbell' },
        { label: 'Spa', icon: 'Flower' }
    ]

    const cbcsEntertainment = [
        { label: 'Theater productions', icon: 'Theater' },
        { label: 'Live music', icon: 'Music' },
        { label: 'Guest performers', icon: 'Users' },
        { label: 'Silent discos', icon: 'Headphones' },
        { label: 'Casino', icon: 'Dices' },
        { label: 'Interactive shows', icon: 'Tv' }
    ]

    const cbcsIncluded = [
        'Accommodations', 'Main dining', 'Entertainment', 'Pools',
        'Fitness center', 'Youth programs', 'Ocean transportation'
    ]

    const cbcsPros = [
        'Beautiful modern design', 'Outstanding dining', 'Spacious public areas', 'Excellent service',
        'Luxurious Retreat suites', 'Innovative Magic Carpet', 'Fantastic Sunset Bar'
    ]

    const cbcsCons = [
        'Specialty dining costs extra', "Infinite Veranda isn't for everyone", 'Popular restaurants require reservations'
    ]

    const cbcsAudience = [
        'Couples', 'Honeymooners', 'Luxury travelers', 'Adults seeking a premium cruise',
        'Food lovers', 'Multi-generational families', 'First-time Celebrity guests'
    ]

    const cbcsWhyBook = [
        { title: 'Compare Celebrity Ships', desc: 'Compare Celebrity ships to find your ideal sailing.', icon: 'FileSearch' },
        { title: 'Select the Best Cabin', desc: 'Select the best cabin for your travel style and budget.', icon: 'BedDouble' },
        { title: 'Find Exclusive Promotions', desc: 'Find exclusive promotions unavailable when booking direct.', icon: 'BadgePercent' },
        { title: 'Plan Pre- & Post-Cruise Stays', desc: 'Plan pre- and post-cruise stays around your sailing.', icon: 'Calendar' },
        { title: 'Arrange Flights & Transfers', desc: 'Arrange flights and transfers to and from the ship.', icon: 'Plane' },
        { title: 'Customize Your Vacation', desc: 'Customize your vacation to match your travel style.', icon: 'Sliders' },
        { title: 'Concierge-Level Service', desc: 'Provide concierge-level service before and after your cruise.', icon: 'HeartHandshake' }
    ]

    return (
        <>
            <Helmet>
                <title>Celebrity Beyond Cruise Ship Guide : Deck Plans, Cabins, Dining & Expert Review</title>
                <meta name="title" content="Celebrity Beyond Cruise Ship Guide | Deck Plans, The Retreat & Dining" />
                <meta
                    name="description"
                    content="Discover everything you need to know about Celebrity Beyond including deck plans, cabins, The Retreat, restaurants, Sunset Bar, entertainment, itineraries, and expert tips before booking."
                />
                <script type="application/ld+json">
                    {JSON.stringify(cbcsSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION (MATCHED) */}
                <section className="fcel-hero-section">
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <CbcsIconSparkle size={16} />
                            <span>Celebrity Beyond Cruise Ship Guide</span>
                        </div>
                        <h1 className="fcel-hero-title">Celebrity Beyond <br /> Cruise Ship Guide</h1>
                        <p className="fcel-hero-subtitle">
                            Celebrity Cruises' Award-Winning Edge Series Ship
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <CbcsIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <CbcsIconList size={18} />
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
                                <h2 className="fcel-section-heading">Discover Celebrity Beyond</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Beyond is one of the most innovative luxury cruise ships sailing today. As the third ship in Celebrity Cruises' revolutionary Edge Series, it combines contemporary design, elevated dining, luxurious accommodations, and destination-focused experiences to create one of the finest premium cruise vacations available.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Whether you're interested in relaxing in The Retreat, enjoying cocktails at the redesigned Sunset Bar, dining at world-class restaurants, or exploring Europe and the Caribbean, Celebrity Beyond offers an experience designed around modern luxury. This guide covers everything you need to know before booking your Celebrity Beyond cruise.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <CbcsPlaceholder label="Celebrity Beyond Cruise Ship" />
                                <div className="fcel-intro-badge-float">
                                    <CbcsIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Edge Series Review Summary</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="cbcs-quick-answer-section">
                    <div className="cbcs-quick-answer-container">
                        <div className="cbcs-quick-answer-card">
                            <h3 className="cbcs-quick-answer-title">Is Celebrity Beyond Worth It?</h3>
                            <p className="cbcs-quick-answer-text">
                                Yes. Celebrity Beyond is widely considered one of the best premium cruise ships in the world thanks to its spacious design, exceptional dining, luxurious accommodations, innovative venues like the Magic Carpet and Eden, and the exclusive Retreat suite experience. It is especially ideal for couples, luxury travelers, and guests seeking a modern premium cruise experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="cbcs-inline-cta-section">
                    <div className="cbcs-inline-cta-container">
                        <span className="cbcs-inline-cta-tag">Expert Planning</span>
                        <p className="cbcs-inline-cta-text">Ready to sail on Celebrity's award-winning Edge Series ship?</p>
                        <div className="cbcs-inline-cta-btn-row">
                            <Link to="/contact" className="cbcs-btn-primary">
                                <CbcsIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="cbcs-btn-outline">
                                <CbcsIconList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="cbcs-glance-section">
                    <div className="cbcs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHIP OVERVIEW</span>
                            <h2 className="fcel-section-heading">Celebrity Beyond At a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-glance-table">
                            {cbcsGlance.map((row, idx) => (
                                <div key={idx} className="cbcs-glance-row">
                                    <div className="cbcs-glance-feature">{row.feature}</div>
                                    <div className="cbcs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY SAIL */}
                <section className="cbcs-tag-section cbcs-bg-white">
                    <div className="cbcs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">HIGHLIGHTS</span>
                            <h2 className="fcel-section-heading">Why Sail on Celebrity Beyond?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Beyond offers a completely different cruising experience compared to traditional mega-ships. Highlights include:
                            </p>
                        </div>
                        <div className="cbcs-tag-grid">
                            {cbcsWhySail.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-tag-card">
                                        <div className="cbcs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CbcsIconDot size={20} />}
                                        </div>
                                        <span className="cbcs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* SHIP LAYOUT / NEIGHBORHOODS */}
                <section className="cbcs-tag-section cbcs-bg-soft">
                    <div className="cbcs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ONBOARD NEIGHBORHOODS</span>
                            <h2 className="fcel-section-heading">Celebrity Beyond Ship Layout</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Beyond was designed to blur the line between indoor and outdoor living. Guests will find multiple neighborhoods throughout the ship including:
                            </p>
                        </div>
                        <div className="cbcs-tag-grid">
                            {cbcsNeighborhoods.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-tag-card">
                                        <div className="cbcs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CbcsIconDot size={20} />}
                                        </div>
                                        <span className="cbcs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            The layout feels spacious and uncrowded even on fully booked sailings.
                        </p>
                    </div>
                </section>

                {/* THE RETREAT (DARK, ALTERNATING IMAGE) */}
                <section className="cbcs-feature-section cbcs-dark-section cbcs-retreat-section">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CbcsIconSparkle size={14} />
                                    <span>The Retreat</span>
                                </div>
                                <CbcsPlaceholder label="Celebrity Beyond The Retreat Suite" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="cbcs-retreat-eyebrow">SHIP-WITHIN-A-SHIP</span>
                                <h2 className="cbcs-retreat-title">The Retreat</h2>
                                <p className="cbcs-retreat-lead">
                                    The Retreat is Celebrity's exclusive ship-within-a-ship experience. Guests enjoy:
                                </p>
                                <div className="cbcs-retreat-grid">
                                    {cbcsRetreatFeatures.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-retreat-card">
                                                <div className="cbcs-retreat-card-icon">
                                                    {IconComponent ? <IconComponent size={20} /> : <CbcsIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-retreat-card-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cbcs-retreat-footer-text">
                                    For travelers seeking the highest level of luxury, The Retreat is one of the best suite experiences at sea.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY BEYOND CABINS */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">ACCOMMODATIONS</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Celebrity Beyond Cabins</h2>
                                <p className="fcel-lead-paragraph">
                                    Accommodation choices include:
                                </p>
                                <div className="cbcs-feature-desc-list">
                                    {cbcsCabins.map((cabin, idx) => {
                                        const IconComponent = iconMap[cabin.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-desc-card">
                                                <div className="cbcs-feature-card-header">
                                                    {IconComponent && <IconComponent size={20} className="cbcs-feature-card-icon-inline" />}
                                                    <h4 className="cbcs-feature-desc-title">{cabin.name}</h4>
                                                </div>
                                                <p className="cbcs-feature-desc-text">{cabin.desc}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CbcsIconSparkle size={14} />
                                    <span>Cabins & Suites</span>
                                </div>
                                <CbcsPlaceholder label="Celebrity Beyond Cabin Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING GUIDE */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CbcsIconDot size={14} />
                                    <span>Dining Guide</span>
                                </div>
                                <CbcsPlaceholder label="Celebrity Beyond Dining Experience" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">CULINARY EXCELLENCE</span>
                                <h2 className="cbcs-feature-title">Dining Guide</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Beyond features one of the strongest dining programs in premium cruising. Highlights include:
                                </p>
                                <div className="cbcs-feature-desc-list">
                                    {cbcsDining.map((item, idx) => {
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

                {/* SUNSET BAR */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">ICONIC VENUE</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Sunset Bar</h2>
                                <p className="fcel-lead-paragraph">
                                    One of Celebrity Beyond's most iconic venues. Located at the aft of the ship, Sunset Bar offers:
                                </p>
                                <div className="cbcs-feature-list">
                                    {cbcsSunsetBar.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CbcsIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    It's consistently rated one of the best outdoor bars at sea.
                                </p>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CbcsIconSparkle size={14} />
                                    <span>Sunset Bar</span>
                                </div>
                                <CbcsPlaceholder label="Celebrity Beyond Sunset Bar" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAGIC CARPET */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CbcsIconDot size={14} />
                                    <span>Magic Carpet</span>
                                </div>
                                <CbcsPlaceholder label="Celebrity Beyond Magic Carpet" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">SIGNATURE FEATURE</span>
                                <h2 className="cbcs-feature-title">Magic Carpet</h2>
                                <p className="fcel-lead-paragraph">
                                    The Magic Carpet is Celebrity's signature floating platform. Depending on the deck, it becomes:
                                </p>
                                <div className="cbcs-feature-list">
                                    {cbcsMagicCarpet.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CbcsIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    No other cruise line offers anything similar.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EDEN (DARK) */}
                <section className="cbcs-feature-section cbcs-dark-section">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">IMMERSIVE VENUE</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Eden</h2>
                                <p className="fcel-lead-paragraph">
                                    Eden combines:
                                </p>
                                <div className="cbcs-feature-list">
                                    {cbcsEden.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CbcsIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Its floor-to-ceiling windows create one of the most beautiful public spaces onboard.
                                </p>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <CbcsIconSparkle size={14} />
                                    <span>Eden</span>
                                </div>
                                <CbcsPlaceholder label="Celebrity Beyond Eden Venue" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* POOLS & WELLNESS */}
                <section className="cbcs-tag-section cbcs-bg-white">
                    <div className="cbcs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RELAX & RECHARGE</span>
                            <h2 className="fcel-section-heading">Pools & Wellness</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Guests can enjoy:
                            </p>
                        </div>
                        <div className="cbcs-tag-grid">
                            {cbcsWellness.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-tag-card">
                                        <div className="cbcs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CbcsIconDot size={20} />}
                                        </div>
                                        <span className="cbcs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ENTERTAINMENT */}
                <section className="cbcs-tag-section cbcs-bg-soft">
                    <div className="cbcs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ONBOARD FUN</span>
                            <h2 className="fcel-section-heading">Entertainment</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}>
                                Nightly entertainment includes:
                            </p>
                        </div>
                        <div className="cbcs-entertainment-gallery-grid">
                            {cbcsEntertainment.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-entertainment-gallery-card">
                                        <div className="cbcs-entertainment-card-image">
                                            <CbcsPlaceholder label={item.label} />
                                        </div>
                                        <div className="cbcs-entertainment-card-info">
                                            <div className="cbcs-entertainment-card-icon">
                                                {IconComponent ? <IconComponent size={20} /> : <CbcsIconDot size={20} />}
                                            </div>
                                            <span className="cbcs-entertainment-card-label">{item.label}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ITINERARIES */}
                <section className="cbcs-itinerary-section">
                    <div className="cbcs-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHERE TO SAIL</span>
                            <h2 className="fcel-section-heading">Celebrity Beyond Itineraries</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Popular cruises include:
                            </p>
                        </div>
                        <div className="cbcs-itinerary-grid">
                            <div className="cbcs-itinerary-card">
                                <h3 className="cbcs-itinerary-region">
                                    <Palmtree size={20} />
                                    Caribbean
                                </h3>
                                <ul className="cbcs-itinerary-list">
                                    <li><Sun size={16} className="cbcs-included-icon" />Eastern Caribbean</li>
                                    <li><Anchor size={16} className="cbcs-included-icon" />Western Caribbean</li>
                                    <li><Waves size={16} className="cbcs-included-icon" />Southern Caribbean</li>
                                </ul>
                            </div>
                            <div className="cbcs-itinerary-card">
                                <h3 className="cbcs-itinerary-region">
                                    <Globe size={20} />
                                    Europe
                                </h3>
                                <ul className="cbcs-itinerary-list">
                                    <li><Compass size={16} className="cbcs-included-icon" />Mediterranean</li>
                                    <li><Waves size={16} className="cbcs-included-icon" />Greek Isles</li>
                                    <li><Utensils size={16} className="cbcs-included-icon" />Italy</li>
                                    <li><Wine size={16} className="cbcs-included-icon" />France</li>
                                    <li><Music size={16} className="cbcs-included-icon" />Spain</li>
                                </ul>
                            </div>
                        </div>
                        <p className="cbcs-itinerary-note">Many itineraries range from 7 to 12 nights.</p>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="cbcs-included-section">
                    <div className="cbcs-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ALL-INCLUSIVE BASICS</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Your Celebrity Beyond cruise fare includes:
                            </p>
                        </div>
                        <div className="cbcs-included-grid">
                            {cbcsIncluded.map((item, idx) => (
                                <div key={idx} className="cbcs-included-item">
                                    <CbcsIconCheck size={18} className="cbcs-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            Additional purchases include specialty dining, alcoholic beverages, spa treatments, shore excursions, and Wi-Fi (unless included in your fare).
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="cbcs-pros-section cbcs-bg-white">
                    <div className="cbcs-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label cbcs-eyebrow-white">PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="cbcs-comparison-board">
                            <div className="cbcs-pros-panel">
                                <h3 className="cbcs-panel-title cbcs-pros-title">
                                    <CbcsIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="cbcs-panel-list">
                                    {cbcsPros.map((pro, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-pro-icon">
                                                <CbcsIconCheck size={16} />
                                            </div>
                                            <div className="cbcs-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cbcs-cons-panel">
                                <h3 className="cbcs-panel-title cbcs-cons-title">
                                    <CbcsIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="cbcs-panel-list">
                                    {cbcsCons.map((con, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-con-icon">
                                                <CbcsIconX size={16} />
                                            </div>
                                            <div className="cbcs-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD SAIL */}
                <section className="cbcs-audience-section">
                    <div className="cbcs-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Sail on Celebrity Beyond?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Celebrity Beyond is ideal for:
                            </p>
                        </div>
                        <div className="cbcs-audience-column">
                            <ul className="cbcs-audience-list">
                                {cbcsAudience.map((item, idx) => (
                                    <li key={idx} className="cbcs-audience-item">
                                        <CbcsIconCheck size={18} className="cbcs-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* IS CELEBRITY BEYOND WORTH THE MONEY */}
                <section className="cbcs-worth-section cbcs-bg-white">
                    <div className="cbcs-worth-container">
                        <span className="fcel-eyebrow-label">INVESTMENT & VALUE</span>
                        <h2 className="fcel-section-heading">Is Celebrity Beyond Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            For travelers seeking premium accommodations, excellent cuisine, sophisticated entertainment, and beautifully designed public spaces, Celebrity Beyond delivers exceptional value. It consistently ranks among the highest-rated premium cruise ships and remains one of the best options for Caribbean and Mediterranean vacations.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="cbcs-why-book-section">
                    <div className="cbcs-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Our luxury cruise specialists help you:
                            </p>
                        </div>
                        <div className="cbcs-why-book-grid">
                            {cbcsWhyBook.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-why-book-card">
                                        <div className="cbcs-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CbcsIconDot size={20} />}
                                        </div>
                                        <h4 className="cbcs-why-book-title">{item.title}</h4>
                                        <p className="cbcs-why-book-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* EXPERT INSIGHT (MATCHED — medi- classes) */}
                <section id="celebrity-beyond-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
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
                                            'Family & multi-generational travel',
                                            'Concierge-level cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <CbcsIconDot size={14} />
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
                                        <CbcsIconAward size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why I Recommend <br className="medi-growth-title-break" />Celebrity Beyond
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    With more than 40 years of luxury travel experience and visits to over 120 countries, I've had the opportunity to sail on many of the world's finest cruise ships. Celebrity Beyond stands out because it combines modern luxury with thoughtful design in a way that appeals to a wide range of travelers.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        What impresses me most is how the ship balances elegant public spaces with exceptional service. Whether you're relaxing at the beautifully redesigned Sunset Bar, enjoying dinner in one of the specialty restaurants, or staying in The Retreat, every detail has been carefully designed to create a sophisticated yet welcoming atmosphere.
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'Anniversaries & couples travel',
                                            'Premium family cruise experiences',
                                            'Sophisticated, welcoming atmosphere',
                                            'Iconic Caribbean & Europe itineraries',
                                            'Relaxing days at sea'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <CbcsIconCheck size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <div className="medi-editorial-full-width-footer">
                                <p className="medi-editorial-body-para">
                                    I often recommend Celebrity Beyond to couples celebrating anniversaries, families looking for a premium cruise experience, and travelers who want a ship that feels luxurious without being overly formal. The itineraries throughout the Caribbean and Europe also provide an excellent mix of iconic destinations and relaxing days at sea. If you're unsure which cabin category, itinerary, or suite experience is right for you, my team and I are happy to provide personalized guidance based on your travel style, preferences, and budget.
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
                            {cbcsFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => cbcsToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {cbcsActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {cbcsActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Plan Your Celebrity Beyond Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to compare cabins, secure exclusive promotions, and plan pre- and post-cruise stays. We handle every detail so you can enjoy the journey.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <CbcsIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <CbcsIconList size={18} />
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

export default CelebrityBeyondCruiseShipGuide