import Navbar from '../../components/Navbar/Navbar'
import './CelebrityCruisesDining.css'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem, ArrowRight,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Wifi, Wine, Bed, Bath, Tv,
    Globe, MessageSquare, Eye, Smile,
    Landmark, Palette, Music, ShieldCheck, Gift,
    UserCheck, Bike, Camera, Calendar, DollarSign, Info,
    Image as ImageIcon, Coffee, Salad, Fish, Soup, PartyPopper,
    Leaf, Shirt, ListChecks
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CcdPlaceholder({ label, className = '' }) {
    return (
        <div className={`ccd-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityCruisesDining() {
    const [ccdActiveFaq, setCcdActiveFaq] = useState(null)
    const ccdToggleFaq = i => setCcdActiveFaq(ccdActiveFaq === i ? null : i)
    const [ccdActiveVenueTab, setCcdActiveVenueTab] = useState(0)
    const [ccdActiveSpecialtyTab, setCcdActiveSpecialtyTab] = useState(0)

    const ccdDiningTypesTable = [
        { type: 'Main dining', examples: 'Main Restaurant / ship-specific main dining rooms', included: 'Yes' },
        { type: 'Casual dining', examples: 'Oceanview Café, Mast Grill', included: 'Yes' },
        { type: 'Wellness dining', examples: 'Spa Café', included: 'Yes, where available' },
        { type: 'Exclusive dining', examples: 'Blu, Luminae', included: 'Included for eligible guests' },
        { type: 'Specialty dining', examples: 'Murano, Tuscan Grille, Sushi on Five, Le Petit Chef and others', included: 'Usually extra' },
        { type: 'Room service', examples: 'In-stateroom dining', included: 'Some charges may apply' },
        { type: 'Cafés', examples: 'Café al Bacio and similar venues', included: 'Depends on item' }
    ]

    const ccdIncludedVenues = [
        { Icon: Utensils, label: 'Main Restaurant' },
        { Icon: Globe, label: 'Oceanview Café' },
        { Icon: Sun, label: 'Mast Grill' },
        { Icon: Leaf, label: 'Spa Café' },
        { Icon: Coffee, label: 'Eden Café on Edge Series ships' },
        { Icon: Crown, label: 'Luminae for The Retreat guests' },
        { Icon: Gem, label: 'Blu for AquaClass guests' }
    ]

    const ccdMainDiningExpect = [
        'Breakfast on selected schedules',
        'Lunch on selected schedules',
        'Dinner',
        'Multi-course meals',
        'Appetizers and soups',
        'Main courses',
        'Desserts',
        'Vegetarian and alternative choices',
        'Destination-inspired dishes'
    ]

    const ccdSelectDiningUseful = [
        { Icon: Clock, text: 'Prefer flexible evening schedules' },
        { Icon: Music, text: 'Want to attend shows without rushing' },
        { Icon: MapPin, text: 'Spend different amounts of time ashore' },
        { Icon: Calendar, text: 'Prefer dining at different times each night' }
    ]

    const ccdVenues = [
        {
            name: 'Oceanview Café',
            Icon: Globe,
            tag: 'Casual · Complimentary',
            imageLabel: 'Oceanview Café buffet and seating',
            description: 'Celebrity describes it as a marketplace-style restaurant offering food from around the world. Depending on the ship and service period, guests can find choices such as breakfast foods, salads, pasta, pizza, international dishes, appetizers, desserts and made-to-order selections. Celebrity\'s current ship information describes Oceanview Café as a marketplace-inspired venue with global flavors.',
            usefulHeading: 'When is Oceanview Café useful?',
            useful: ['A quick breakfast', 'A casual lunch', 'Food between activities', 'A relaxed dinner', 'More choice without a formal restaurant setting'],
            note: 'Because menus and operating hours vary, check the daily schedule on your specific sailing.'
        },
        {
            name: 'Mast Grill',
            Icon: Sun,
            tag: 'Casual · Poolside · Complimentary',
            imageLabel: 'Poolside meal at Mast Grill',
            description: 'Mast Grill is Celebrity\'s relaxed poolside dining option on ships where it is available. Celebrity describes the venue as serving hearty casual food such as burgers, sandwiches, salads and grilled items. It is designed for guests who want something informal without leaving the pool-deck environment.',
            usefulHeading: 'Why guests choose Mast Grill',
            useful: ['Especially convenient on sea days', 'Lunch without changing for a restaurant', 'Informal, pool-deck atmosphere'],
            note: 'Mast Grill is especially convenient on sea days when guests want lunch without changing for a restaurant.'
        },
        {
            name: 'Spa Café',
            Icon: Leaf,
            tag: 'Wellness · Complimentary where available',
            imageLabel: 'Spa Café fresh and light dishes',
            description: 'The Spa Café provides lighter, wellness-focused food and beverages. Celebrity describes Spa Café as a complimentary venue on applicable ships offering fresh and nourishing choices. Depending on the ship, options can include fresh juices, smoothies, salads, light breakfast items and healthy snacks.',
            usefulHeading: 'Good to know',
            useful: ['Fresh juices', 'Smoothies', 'Salads', 'Light breakfast items', 'Healthy snacks'],
            note: 'Availability varies by ship, so do not assume every Celebrity vessel has exactly the same Spa Café menu.'
        },
        {
            name: 'Eden Café',
            Icon: Coffee,
            tag: 'Edge Series ships',
            imageLabel: 'Eden Café on Edge Series ships',
            description: 'Celebrity Edge Series ships have additional dining concepts, including Eden Café. Celebrity describes Eden Café as offering morning beverages and casual culinary bites, with breakfast and lunch choices and outdoor seating on either side of the café.',
            usefulHeading: 'Why it matters',
            useful: ['Morning beverages', 'Casual culinary bites', 'Breakfast and lunch choices', 'Outdoor seating on either side of the café'],
            note: 'This is one reason why checking your specific ship is important when researching Celebrity Cruises dining.'
        }
    ]

    const ccdSpecialtyList = [
        'Murano — French-inspired cuisine',
        'Tuscan Grille — Italian dining',
        'Sushi on Five — Japanese cuisine',
        'Le Petit Chef — interactive dining and entertainment',
        'Fine Cut Steakhouse — steakhouse dining',
        'Other ship-specific concepts'
    ]

    const ccdSpecialtyWhy = [
        { Icon: PartyPopper, text: 'Celebrating a birthday or anniversary' },
        { Icon: Utensils, text: 'Enjoying a more focused cuisine' },
        { Icon: Calendar, text: 'Booking a special evening' },
        { Icon: Fish, text: 'Trying premium steak or seafood' },
        { Icon: Sparkles, text: "Experiencing Celebrity's entertainment-focused dining concepts" }
    ]

    const ccdSpecialtyDetails = [
        {
            name: 'Murano',
            Icon: Wine,
            imageLabel: 'Celebrity Cruises specialty dining restaurant',
            tag: 'French-Inspired',
            description: 'Murano is a specialty restaurant centered on French-inspired cuisine and an elegant dining atmosphere. It is available on selected Celebrity ships rather than across the entire fleet.',
            tip: 'If Murano is important to your cruise plans, verify that your particular ship offers it before booking.'
        },
        {
            name: 'Tuscan Grille',
            Icon: Landmark,
            imageLabel: 'Tuscan Grille dining room',
            tag: 'Italian',
            description: 'Tuscan Grille is Celebrity\'s Italian specialty restaurant. Celebrity describes it as an Italian ristorante and enoteca with a contemporary interpretation of Italian dining.',
            tip: 'It can be a good choice when you want a slower, sit-down specialty dinner rather than a casual meal.'
        },
        {
            name: 'Sushi on Five',
            Icon: Fish,
            imageLabel: 'Sushi on Five dishes',
            tag: 'Japanese',
            description: 'Sushi on Five focuses on Japanese cuisine. Celebrity describes the venue as offering sushi and Japanese specialties, with selections that can include sashimi, sushi rolls and desserts.',
            tip: 'Because Sushi on Five is a specialty venue, pricing and package applicability should be checked for the specific sailing.'
        },
        {
            name: 'Le Petit Chef',
            Icon: Sparkles,
            imageLabel: 'Le Petit Chef interactive dining experience',
            tag: 'Interactive Entertainment',
            description: 'Le Petit Chef combines dining with an animated entertainment experience. Celebrity describes it as a dining concept where a small animated chef appears to prepare the meal on the tabletop, creating a visual component alongside the food.',
            tip: 'This is particularly suited to travelers looking for an experience rather than simply another restaurant.'
        }
    ]

    const ccdEdgeVenues = ['Cosmopolitan', 'Cyprus', 'Normandie', 'Oceanview Café', 'Eden Café', 'Spa Café', 'Mast Grill']

    const ccdSolsticeVenues = ['Main Restaurant', 'Oceanview Café', 'Mast Grill', 'Spa Café', 'Specialty restaurants', 'Blu', 'Luminae']

    const ccdCostFactors = ['Restaurant', 'Ship', 'Sailing', 'Date', 'Promotional offer', 'Dining package', 'Pre-cruise versus onboard purchase']

    const ccdDietaryConsiderations = [
        { Icon: ShieldCheck, text: 'Food allergies' },
        { Icon: Leaf, text: 'Vegetarian meals' },
        { Icon: Salad, text: 'Vegan preferences' },
        { Icon: CheckCircle, text: 'Gluten-free requirements' },
        { Icon: Info, text: 'Religious or medical dietary restrictions' },
        { Icon: ShieldCheck, text: 'Cross-contamination concerns' }
    ]

    const ccdPacking = ['Smart-casual outfits', 'Comfortable daytime clothing', 'At least one dressier outfit', 'Appropriate shoes for evening dining']

    const ccdDayTable = [
        { time: 'Breakfast', choice: 'Main Restaurant or Oceanview Café' },
        { time: 'Mid-morning', choice: 'Café or casual snack' },
        { time: 'Lunch', choice: 'Oceanview Café or Mast Grill' },
        { time: 'Afternoon', choice: 'Café or light snack' },
        { time: 'Dinner', choice: 'Main Restaurant' },
        { time: 'Later evening', choice: 'Specialty dining, casual food or another onboard option' }
    ]

    const ccdFirstTimeTips = [
        'Check your ship before booking — dining differs significantly between ships. Restaurant names, specialty venues and complimentary options are not identical across the fleet.',
        'Reserve specialty restaurants early — popular specialty restaurants and dining times can fill up, particularly on shorter cruises.',
        'Compare dining packages — if you want several specialty meals, compare a dining package against individual restaurant pricing.',
        'Use complimentary venues strategically — you do not need to pay for specialty dining every night. Celebrity provides substantial complimentary dining options.',
        'Check menus before making reservations — look at the cuisine and menu style before using a specialty dining reservation.',
        'Plan around shore excursions — on port days, a flexible dining option can be more convenient than booking a fixed dinner time.',
        'Remember that ships differ — a restaurant available on Celebrity Eclipse may not be available on Celebrity Solstice or Celebrity Infinity.'
    ]

    const ccdGuestCategoryTable = [
        { guest: 'Standard stateroom', benefit: 'Access to complimentary dining venues' },
        { guest: 'AquaClass', benefit: 'Access to Blu' },
        { guest: 'The Retreat', benefit: 'Access to Luminae and its associated elevated dining benefits' },
        { guest: 'Any guest', benefit: 'Specialty dining available where offered, generally for an additional charge' },
        { guest: 'Any guest', benefit: 'Casual complimentary venues vary by ship' }
    ]

    const ccdChoiceGuide = [
        { Icon: Utensils, label: 'For everyday meals', value: 'Use the Main Restaurant and Oceanview Café.' },
        { Icon: Sun, label: 'For casual poolside food', value: 'Try Mast Grill where available.' },
        { Icon: Leaf, label: 'For healthier options', value: 'Look at Spa Café and, where applicable, AquaClass dining at Blu.' },
        { Icon: PartyPopper, label: 'For a premium occasion', value: 'Consider a specialty restaurant.' },
        { Icon: Sparkles, label: 'For an interactive experience', value: 'Le Petit Chef can combine dinner with entertainment.' },
        { Icon: Crown, label: 'For an elevated suite experience', value: "The Retreat's Luminae provides an exclusive dining venue." }
    ]

    const ccdKeyTakeaways = [
        'Celebrity Cruises offers extensive complimentary dining, so specialty restaurants are not required for a satisfying cruise.',
        'The Main Restaurant provides full-service dining with classic, modern and destination-inspired dishes.',
        'Oceanview Café is the primary casual marketplace-style dining option on many ships.',
        'Mast Grill provides relaxed poolside food on applicable vessels.',
        'Spa Café offers lighter, wellness-focused choices.',
        'Edge Series ships have multiple complimentary restaurants with different culinary themes.',
        'Specialty restaurants such as Murano, Tuscan Grille, Sushi on Five and Le Petit Chef generally cost extra.',
        'Blu is associated with AquaClass.',
        'Luminae is exclusive to The Retreat.',
        'Room service can involve additional charges.',
        'Specialty dining packages may be useful for guests planning several specialty meals.',
        'Restaurant availability varies by ship, so always check your specific Celebrity vessel.'
    ]

    const ccdInternalLinks = [
        { text: 'Celebrity Cruises Complete Guide', url: '/celebrity-cruises' },
        { text: 'What Is Included on a Celebrity Cruise?', url: '/celebrity-cruises/whats-included' },
        { text: 'Celebrity Food and Dining Guide', url: '/celebrity-cruises/food-dining' },
        { text: 'Celebrity Cruises Drink Packages', url: '/celebrity-cruises/drink-packages' },
        { text: 'Celebrity All Included Explained', url: '/celebrity-cruises/all-included' },
        { text: 'Celebrity The Retreat', url: '/celebrity-cruises/the-retreat' },
        { text: 'Celebrity Staterooms and Suites', url: '/celebrity-cruises/staterooms-suites' },
        { text: 'Celebrity First-Time Cruise Guide', url: '/celebrity-cruises/first-time-guide' }
    ]

    const ccdFaqs = [
        { question: 'Is food included on Celebrity Cruises?', answer: 'Yes. Celebrity Cruises includes breakfast, lunch and dinner at several complimentary dining venues. Specialty restaurants and some other dining services can cost extra.' },
        { question: 'What restaurants are included on Celebrity Cruises?', answer: 'Complimentary options vary by ship but can include the Main Restaurant, Oceanview Café, Mast Grill, Spa Café and, on selected ships, Eden Café. Blu and Luminae are complimentary for eligible AquaClass and The Retreat guests respectively.' },
        { question: 'Is the main dining room free on Celebrity Cruises?', answer: 'Yes. The Main Restaurant is a complimentary dining venue included in the cruise fare.' },
        { question: 'Is Oceanview Café included on Celebrity Cruises?', answer: 'Yes. Oceanview Café is a complimentary casual dining venue on applicable Celebrity ships. It offers marketplace-style dining with a variety of international dishes.' },
        { question: 'Are Celebrity Cruises specialty restaurants included?', answer: 'Generally, no. Specialty restaurants such as Tuscan Grille, Murano, Sushi on Five and Le Petit Chef generally require an additional charge, although dining packages and promotional offers may apply.' },
        { question: 'How much does specialty dining cost on Celebrity Cruises?', answer: 'Specialty dining prices vary by restaurant, ship, sailing and promotion. Celebrity also offers specialty dining packages on applicable cruises, so there is no single price that applies across the fleet.' },
        { question: 'Is room service free on Celebrity Cruises?', answer: 'Room service is available, but Celebrity identifies 24-hour room service as an extra-cost option. Check the current menu and applicable charges for your sailing.' },
        { question: 'What is Luminae on Celebrity Cruises?', answer: 'Luminae is an exclusive restaurant for guests staying in The Retreat. Celebrity describes it as globally inspired and cutting-edge dining with signature dishes associated with chef Daniel Boulud.' },
        { question: 'What is Blu on Celebrity Cruises?', answer: 'Blu is a restaurant exclusive to AquaClass guests. It focuses on fresh, contemporary flavors and a wellness-oriented dining experience.' },
        { question: 'Is Sushi on Five included on Celebrity Cruises?', answer: 'Sushi on Five is generally a specialty dining venue rather than a complimentary restaurant. Availability and pricing depend on the specific ship and sailing.' },
        { question: 'Is Tuscan Grille included on Celebrity Cruises?', answer: 'No, Tuscan Grille is generally classified as specialty dining and carries an additional charge unless a relevant package or promotion covers the meal.' },
        { question: 'What is Le Petit Chef on Celebrity Cruises?', answer: 'Le Petit Chef is an interactive specialty dining experience combining a meal with animated tabletop entertainment. Celebrity describes it as a unique dining concept featuring a small animated chef.' },
        { question: 'Does Celebrity Cruises have vegetarian and healthy food options?', answer: 'Yes. Vegetarian choices are available, and venues such as Spa Café focus on fresh and lighter options. Travelers with allergies or strict dietary requirements should communicate their needs before and during the cruise.' },
        { question: 'Do Celebrity Edge ships have different dining options?', answer: 'Yes. Edge Series ships introduced multiple complimentary restaurants with distinct culinary themes. Celebrity Edge, for example, has venues including Cosmopolitan, Cyprus, Normandie and Oceanview Café, along with other complimentary options.' },
        { question: 'Do I need specialty dining on a Celebrity cruise?', answer: 'No. Celebrity provides several complimentary restaurants, so you can complete a cruise without purchasing specialty dining. Specialty restaurants are an optional way to add different cuisines, premium experiences or special-occasion meals.' }
    ]

    const ccdSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com#organization",
                "name": "Trips and Ships",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/dining#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises/dining",
                "name": "Celebrity Cruises Dining Guide",
                "description": "Explore Celebrity Cruises dining, from included main restaurants and cafés to specialty dining, AquaClass, The Retreat, room service and tips.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/dining" },
                "isPartOf": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/dining#article",
                "headline": "Celebrity Cruises Dining Guide",
                "description": "A complete guide to Celebrity Cruises dining, including complimentary restaurants, specialty dining, AquaClass, The Retreat, room service and dining tips.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/dining" },
                "author": { "@type": "Organization", "name": "Trips and Ships", "url": "https://www.tripsandships.com" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/dining#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Cruises Dining Guide", "item": "https://www.tripsandships.com/celebrity-cruises/dining" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/dining#faq",
                "mainEntity": [
                    { "@type": "Question", "name": "Is food included on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity Cruises includes breakfast, lunch and dinner at several complimentary dining venues. Specialty restaurants and some other dining services can cost extra." } },
                    { "@type": "Question", "name": "What restaurants are included on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Complimentary options vary by ship but can include the Main Restaurant, Oceanview Café, Mast Grill, Spa Café and, on selected ships, Eden Café. Blu and Luminae are complimentary for eligible AquaClass and The Retreat guests respectively." } },
                    { "@type": "Question", "name": "Is the main dining room free on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Main Restaurant is a complimentary dining venue included in the cruise fare." } },
                    { "@type": "Question", "name": "Is Oceanview Café included on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Oceanview Café is a complimentary casual dining venue on applicable Celebrity ships. It offers marketplace-style dining with a variety of international dishes." } },
                    { "@type": "Question", "name": "Are Celebrity Cruises specialty restaurants included?", "acceptedAnswer": { "@type": "Answer", "text": "Generally, no. Specialty restaurants such as Tuscan Grille, Murano, Sushi on Five and Le Petit Chef generally require an additional charge, although dining packages and promotional offers may apply." } },
                    { "@type": "Question", "name": "How much does specialty dining cost on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Specialty dining prices vary by restaurant, ship, sailing and promotion. Celebrity also offers specialty dining packages on applicable cruises, so there is no single price that applies across the fleet." } },
                    { "@type": "Question", "name": "Is room service free on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Room service is available, but Celebrity identifies 24-hour room service as an extra-cost option. Check the current menu and applicable charges for your sailing." } },
                    { "@type": "Question", "name": "What is Luminae on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Luminae is an exclusive restaurant for guests staying in The Retreat. Celebrity describes it as globally inspired and cutting-edge dining with signature dishes associated with chef Daniel Boulud." } },
                    { "@type": "Question", "name": "What is Blu on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Blu is a restaurant exclusive to AquaClass guests. It focuses on fresh, contemporary flavors and a wellness-oriented dining experience." } },
                    { "@type": "Question", "name": "Is Sushi on Five included on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Sushi on Five is generally a specialty dining venue rather than a complimentary restaurant. Availability and pricing depend on the specific ship and sailing." } },
                    { "@type": "Question", "name": "Is Tuscan Grille included on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "No, Tuscan Grille is generally classified as specialty dining and carries an additional charge unless a relevant package or promotion covers the meal." } },
                    { "@type": "Question", "name": "What is Le Petit Chef on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Le Petit Chef is an interactive specialty dining experience combining a meal with animated tabletop entertainment. Celebrity describes it as a unique dining concept featuring a small animated chef." } },
                    { "@type": "Question", "name": "Does Celebrity Cruises have vegetarian and healthy food options?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Vegetarian choices are available, and venues such as Spa Café focus on fresh and lighter options. Travelers with allergies or strict dietary requirements should communicate their needs before and during the cruise." } },
                    { "@type": "Question", "name": "Do Celebrity Edge ships have different dining options?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Edge Series ships introduced multiple complimentary restaurants with distinct culinary themes. Celebrity Edge, for example, has venues including Cosmopolitan, Cyprus, Normandie and Oceanview Café, along with other complimentary options." } },
                    { "@type": "Question", "name": "Do I need specialty dining on a Celebrity cruise?", "acceptedAnswer": { "@type": "Answer", "text": "No. Celebrity provides several complimentary restaurants, so you can complete a cruise without purchasing specialty dining. Specialty restaurants are an optional way to add different cuisines, premium experiences or special-occasion meals." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity Cruises Dining Guide</title>
                <meta name="title" content="Celebrity Cruises Dining Guide" />
                <meta name="description" content="Explore Celebrity Cruises dining, from included main restaurants and cafés to specialty dining, AquaClass, The Retreat, room service and tips." />
                <meta name="keywords" content="Celebrity Cruises dining, Celebrity Cruises restaurants, Celebrity cruise food, Celebrity main dining room, Celebrity specialty dining, Oceanview Café, Celebrity Luminae, Celebrity Blu restaurant, Celebrity dining packages, Celebrity room service, Celebrity Select Dining" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/dining" />
                <script type="application/ld+json">{JSON.stringify(ccdSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="ccd-page">

                {/* ── HERO ── */}
                <section className="ccd-hero-section">
                    <CcdPlaceholder label="Elegant Celebrity main dining room" className="ccd-hero-bg-placeholder" />
                    <div className="ccd-hero-overlay-layer"></div>
                    <div className="ccd-hero-content-wrapper">
                        <div className="ccd-hero-eyebrow-tag">
                            <Utensils size={16} />
                            <span>Onboard Dining · Trips &amp; Ships Luxury Travel</span>
                        </div>
                        <h1 className="ccd-hero-main-title">Celebrity Cruises <br /> Dining Guide</h1>
                        <p className="ccd-hero-subtitle-text">
                            Celebrity Cruises dining combines complimentary restaurants, specialty venues, casual cafés, destination-inspired menus and exclusive restaurants for certain accommodation categories. Depending on the ship, guests may have access to a main restaurant, Oceanview Café, poolside dining, specialty restaurants and exclusive venues such as Blu for AquaClass guests and Luminae for guests staying in The Retreat.
                        </p>
                    </div>
                </section>

                {/* ── INTRO / HOW DINING WORKS ── */}
                <section className="ccd-intro-section">
                    <div className="ccd-intro-container">
                        <span className="ccd-eyebrow ccd-eyebrow-center">GETTING STARTED</span>
                        <h2 className="ccd-section-heading" style={{ textAlign: 'center' }}>How Dining Works on Celebrity Cruises</h2>
                        <div className="ccd-heading-separator-bar ccd-bar-centered"></div>
                        <p className="ccd-intro-lead">
                            The exact restaurant lineup varies by ship and class, so a dining venue available on Celebrity Edge may not be available on an older Solstice- or Millennium-Series ship. Celebrity also regularly updates restaurants and dining concepts, making it important to check the individual ship's current dining page before booking.
                        </p>
                        <p className="ccd-intro-lead">
                            This guide explains how Celebrity Cruises dining works, what is included, which restaurants cost extra, how specialty dining differs from complimentary dining, and what first-time guests should know.
                        </p>
                        <p className="ccd-intro-lead">
                            Celebrity divides its onboard dining into several broad categories:
                        </p>

                        <div className="ccd-table-wrapper">
                            <div className="ccd-table-row ccd-table-head">
                                <span>Dining Type</span>
                                <span>Typical Examples</span>
                                <span>Usually Included?</span>
                            </div>
                            {ccdDiningTypesTable.map((row, idx) => (
                                <div key={idx} className="ccd-table-row">
                                    <span data-label="Dining Type">{row.type}</span>
                                    <span data-label="Typical Examples">{row.examples}</span>
                                    <span data-label="Usually Included?">{row.included}</span>
                                </div>
                            ))}
                        </div>

                        <div className="ccd-intro-statement-box">
                            <Info className="ccd-intro-statement-icon" size={24} />
                            <p className="ccd-intro-statement-text">
                                Celebrity says complimentary breakfast, lunch and dinner are available in a variety of restaurants, while specialty dining and 24-hour room service can involve additional charges. The most important point is that you do not need to buy a specialty dining package to have meals on a Celebrity cruise. There are complimentary restaurants available throughout the day.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── WHICH OPTIONS ARE INCLUDED ── */}
                <section className="ccd-included-section">
                    <div className="ccd-included-container">
                        <div className="ccd-included-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'center' }}>
                            <div className="ccd-included-header" style={{ textAlign: 'left', margin: 0 }}>
                                <span className="ccd-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>ALL-INCLUSIVE VALUE</span>
                                <h2 className="ccd-section-heading" style={{ color: '#ffffff', marginBottom: '16px' }}>Which Celebrity Dining Options Are Included?</h2>
                                <div className="ccd-heading-separator-bar" style={{ background: 'rgba(255, 255, 255, 0.3)', margin: '0 0 20px 0' }}></div>
                                <p className="ccd-included-intro" style={{ color: '#ffffff', marginBottom: '24px' }}>Celebrity's complimentary dining varies by ship, but commonly includes several of the following. Celebrity's official ship pages identify these venues as complimentary or category-exclusive dining options, with availability depending on the ship.</p>
                                <div className="ccd-included-footer" style={{ margin: 0 }}>
                                    <Info size={16} className="ccd-included-footer-icon" style={{ marginTop: '2px' }} />
                                    <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>Included dining generally means the food itself is covered by the cruise fare. Certain beverages, premium items or specialty experiences can still carry additional charges.</p>
                                </div>
                            </div>

                            <div className="ccd-included-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                                {ccdIncludedVenues.map((item, idx) => (
                                    <div key={idx} className="ccd-included-card" style={{ padding: '16px 14px', flexDirection: 'row', gap: '14px', alignItems: 'center', textAlign: 'left' }}>
                                        <div className="ccd-included-icon-wrap" style={{ flexShrink: 0 }}>
                                            <item.Icon size={18} />
                                        </div>
                                        <span className="ccd-included-label">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MAIN DINING ROOM ── */}
                <section className="ccd-main-section">
                    <div className="ccd-main-container">
                        <div className="ccd-main-grid">
                            <div className="ccd-main-text-col">
                                <span className="ccd-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>TRADITIONAL DINING</span>
                                <h2 className="ccd-section-heading">Celebrity Main Dining Room</h2>
                                <div className="ccd-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="ccd-main-lead">The Main Restaurant is the traditional full-service dining option on Celebrity Cruises.</p>
                                <p className="ccd-main-sub">
                                    Celebrity describes its main dining room as offering classic and modern dishes with regional influences. Menus are designed around the destinations visited during the cruise, giving the main dining experience a mixture of familiar favorites and destination-inspired choices. Depending on the ship, the restaurant may have a ship-specific name or be one of several complementary main restaurants.
                                </p>
                                <p className="ccd-main-sub-label">What can you expect?</p>
                                <p className="ccd-main-sub" style={{ marginBottom: '14px' }}>A typical main dining experience includes:</p>
                                <div className="ccd-main-list">
                                    {ccdMainDiningExpect.map((item, idx) => (
                                        <div key={idx} className="ccd-main-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="ccd-main-image-col" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div className="ccd-image-frame" style={{ minHeight: '340px' }}>
                                    <CcdPlaceholder label="Celebrity Cruises main dining restaurant" />
                                    <div className="ccd-frame-overlay"></div>
                                </div>
                                <div className="ccd-left-footnote-card" style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', background: 'var(--ccd-bg-soft)', borderLeft: '4px solid var(--ccd-navy)', borderRadius: '0 12px 12px 0' }}>
                                    <Info size={16} style={{ color: 'var(--ccd-navy)', flexShrink: 0 }} />
                                    <p className="ccd-main-note" style={{ fontStyle: 'italic', fontSize: '13.5px', color: 'var(--ccd-text-dark)', margin: 0 }}>The exact menu and opening hours vary by sailing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SELECT DINING ── */}
                <section className="ccd-select-section">
                    <div className="ccd-select-container">
                        <div className="ccd-select-header">
                            <span className="ccd-eyebrow ccd-eyebrow-center">FLEXIBLE SCHEDULING</span>
                            <h2 className="ccd-section-heading" style={{ textAlign: 'center' }}>Celebrity Select Dining and Dinner Times</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered"></div>
                            <p className="ccd-select-intro">Celebrity offers different ways of managing dinner reservations depending on the sailing and dining arrangement. Celebrity Select Dining allows guests to choose when they would like to dine rather than being assigned a single fixed dinner time.</p>
                            <p className="ccd-select-sub">This can be particularly useful for travelers who:</p>
                        </div>

                        <div className="ccd-select-grid">
                            {ccdSelectDiningUseful.map((item, idx) => (
                                <div key={idx} className="ccd-select-card">
                                    <div className="ccd-select-icon"><item.Icon size={20} /></div>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="ccd-select-footer">
                            <div className="ccd-select-footer-icon"><Info size={16} /></div>
                            <p>Availability and dining arrangements can vary by ship and cruise, so check the dining options associated with your booking.</p>
                        </div>
                    </div>
                </section>

                {/* ── CASUAL COMPLIMENTARY VENUES ── */}
                <section className="ccd-venues-section">
                    <div className="ccd-venues-container">
                        <div className="ccd-venues-header">
                            <span className="ccd-eyebrow ccd-eyebrow-light ccd-eyebrow-center">CASUAL DINING</span>
                            <h2 className="ccd-section-heading ccd-white-heading" style={{ textAlign: 'center' }}>Complimentary Casual <br /> Dining Venues</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered ccd-separator-white"></div>
                            <p className="ccd-venues-intro" style={{ color: '#ffffff' }}>From marketplace-style buffets to poolside grills, Celebrity's casual venues make it easy to eat well without a formal reservation.</p>
                        </div>

                        <div className="ccd-tabs-wrapper">
                            <div className="ccd-tabs-sidebar">
                                <div className="ccd-tabs-header">
                                    {ccdVenues.map((venue, idx) => (
                                        <button
                                            key={idx}
                                            className={`ccd-tab-btn ${ccdActiveVenueTab === idx ? 'active' : ''}`}
                                            onClick={() => setCcdActiveVenueTab(idx)}
                                            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                        >
                                            <venue.Icon size={16} />
                                            {venue.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="ccd-tabs-content">
                                {ccdVenues.map((venue, idx) => (
                                    <div key={idx} className={`ccd-tab-panel ${ccdActiveVenueTab === idx ? 'active' : ''}`}>
                                        <div className="ccd-tab-dest-layout">
                                            <div className="ccd-tab-dest-image">
                                                <CcdPlaceholder label={venue.imageLabel} />
                                                <div className="ccd-dest-card-overlay"></div>
                                                <div className="ccd-dest-card-tag">{venue.tag}</div>
                                            </div>
                                            <div className="ccd-tab-dest-content">
                                                <h3 className="ccd-tab-dest-title">{venue.name}</h3>
                                                <p className="ccd-tab-dest-desc">{venue.description}</p>
                                                <p className="ccd-tab-dest-sublabel">{venue.usefulHeading}</p>
                                                <div className="ccd-tab-dest-details">
                                                    {venue.useful.map((point, pIdx) => (
                                                        <div key={pIdx} className="ccd-tab-detail-item">
                                                            <CheckCircle size={16} />
                                                            <span>{point}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="ccd-tab-dest-note">{venue.note}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SPECIALTY DINING OVERVIEW ── */}
                <section className="ccd-specialty-section">
                    <div className="ccd-specialty-container">
                        <div className="ccd-specialty-header">
                            <span className="ccd-eyebrow ccd-eyebrow-center">PREMIUM EXPERIENCES</span>
                            <h2 className="ccd-section-heading" style={{ textAlign: 'center' }}>Celebrity Specialty Dining</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered"></div>
                            <p className="ccd-specialty-intro">Specialty restaurants provide more focused culinary experiences and generally involve an additional charge. Depending on the ship, specialty dining can include restaurants such as:</p>
                        </div>

                        <div className="ccd-specialty-list-grid">
                            {ccdSpecialtyList.map((item, idx) => (
                                <div key={idx} className="ccd-specialty-list-item">
                                    <Utensils size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="ccd-specialty-note">Celebrity's restaurant lineup differs considerably between ships.</p>
                        <p className="ccd-specialty-sub-label">Why choose specialty dining?</p>

                        <div className="ccd-specialty-why-grid">
                            {ccdSpecialtyWhy.map((item, idx) => (
                                <div key={idx} className="ccd-specialty-why-card">
                                    <div className="ccd-specialty-why-icon"><item.Icon size={18} /></div>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SPECIALTY RESTAURANT DETAILS ── */}
                <section className="ccd-specialty-detail-section">
                    <div className="ccd-specialty-detail-container">
                        <div className="ccd-specialty-detail-header">
                            <span className="ccd-eyebrow ccd-eyebrow-light ccd-eyebrow-center">SIGNATURE VENUES</span>
                            <h2 className="ccd-section-heading ccd-white-heading" style={{ textAlign: 'center' }}>Featured Specialty Restaurants</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered ccd-separator-white"></div>
                        </div>

                        <div className="ccd-tabs-wrapper">
                            <div className="ccd-tabs-sidebar">
                                <div className="ccd-tabs-header">
                                    {ccdSpecialtyDetails.map((item, idx) => (
                                        <button
                                            key={idx}
                                            className={`ccd-tab-btn ${ccdActiveSpecialtyTab === idx ? 'active' : ''}`}
                                            onClick={() => setCcdActiveSpecialtyTab(idx)}
                                            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                        >
                                            <item.Icon size={16} />
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="ccd-tabs-content">
                                {ccdSpecialtyDetails.map((item, idx) => (
                                    <div key={idx} className={`ccd-tab-panel ${ccdActiveSpecialtyTab === idx ? 'active' : ''}`}>
                                        <div className="ccd-tab-dest-layout">
                                            <div className="ccd-tab-dest-image">
                                                <CcdPlaceholder label={item.imageLabel} />
                                                <div className="ccd-dest-card-overlay"></div>
                                                <div className="ccd-dest-card-tag">{item.tag}</div>
                                            </div>
                                            <div className="ccd-tab-dest-content">
                                                <h3 className="ccd-tab-dest-title">{item.name}</h3>
                                                <p className="ccd-tab-dest-desc">{item.description}</p>
                                                <div className="ccd-tab-dest-details">
                                                    <div className="ccd-tab-detail-item">
                                                        <Info size={16} />
                                                        <span>{item.tip}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── EDGE SERIES DINING ── */}
                <section className="ccd-edge-section">
                    <div className="ccd-edge-container">
                        <div className="ccd-edge-grid">
                            <div className="ccd-edge-image-col" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div className="ccd-image-frame">
                                    <CcdPlaceholder label="Celebrity Edge complimentary dining restaurants" />
                                    <div className="ccd-frame-overlay"></div>
                                    <div className="ccd-image-badge">
                                        <Ship size={13} />
                                        <span>A New Approach to Complimentary Dining</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 18px', background: 'var(--ccd-bg-soft)', borderLeft: '4px solid var(--ccd-navy)', borderRadius: '0 12px 12px 0' }}>
                                    <Sparkles size={16} style={{ color: 'var(--ccd-navy)', flexShrink: 0, marginTop: '2px' }} />
                                    <p className="ccd-edge-note" style={{ margin: 0, fontSize: '13.5px', fontStyle: 'italic', color: 'var(--ccd-text-dark)', lineHeight: '1.55' }}>This means an Edge Series cruise can offer more variety within the complimentary dining program.</p>
                                </div>
                            </div>
                            <div className="ccd-edge-text-col">
                                <span className="ccd-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>SHIP-SPECIFIC DINING</span>
                                <h2 className="ccd-section-heading">Celebrity Edge Series Dining</h2>
                                <div className="ccd-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="ccd-edge-lead">Celebrity's Edge Series ships introduced a different approach to complimentary dining. Celebrity Edge, for example, features multiple complimentary restaurants with distinct culinary themes rather than relying solely on one traditional main dining room. Celebrity identifies venues such as:</p>
                                <div className="ccd-edge-pills">
                                    {ccdEdgeVenues.map((venue, idx) => (
                                        <span key={idx} className="ccd-edge-pill">
                                            <Utensils size={12} />
                                            {venue}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SOLSTICE / MILLENNIUM DINING ── */}
                <section className="ccd-solstice-section">
                    <div className="ccd-solstice-container">
                        <div className="ccd-solstice-split-grid">
                            <div className="ccd-solstice-text-col">
                                <span className="ccd-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>CLASSIC FLEET</span>
                                <h2 className="ccd-section-heading">Celebrity Dining on Solstice and Millennium Series Ships</h2>
                                <div className="ccd-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="ccd-solstice-intro" style={{ marginBottom: '20px' }}>Solstice- and Millennium-Series ships have their own combinations of dining venues, each offering a distinctive set of complimentary and specialty options.</p>
                                <div className="ccd-solstice-footer" style={{ margin: 0 }}>
                                    <Info size={16} className="ccd-solstice-footer-icon" />
                                    <p>The exact selection varies between ships. For example, Celebrity Infinity lists Luminae, Blu, its Main Restaurant, Oceanview Café, Mast Grill and Spa Café, alongside specialty restaurants including Tuscan Grille, Sushi on Five and Le Petit Chef.</p>
                                </div>
                            </div>

                            <div className="ccd-solstice-grid-col">
                                <p className="ccd-solstice-intro" style={{ marginBottom: '16px', fontWeight: 600, color: 'var(--ccd-navy)' }}>Common venues on these ships include:</p>
                                <div className="ccd-solstice-grid">
                                    {ccdSolsticeVenues.map((venue, idx) => (
                                        <div key={idx} className="ccd-solstice-card">
                                            <Utensils size={18} />
                                            <span>{venue}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── BLU ── */}
                <section className="ccd-blu-section">
                    <div className="ccd-blu-container">
                        <div className="ccd-blu-grid">
                            <div className="ccd-blu-image-col">
                                <div className="ccd-image-frame">
                                    <CcdPlaceholder label="Celebrity Cruises Blu restaurant for AquaClass guests" />
                                    <div className="ccd-frame-overlay"></div>
                                </div>
                            </div>
                            <div className="ccd-blu-text-col">
                                <span className="ccd-eyebrow">EXCLUSIVE DINING</span>
                                <h2 className="ccd-section-heading">Blu: Dining for AquaClass Guests</h2>
                                <div className="ccd-heading-separator-bar"></div>
                                <p className="ccd-blu-lead">Blu is an exclusive restaurant for AquaClass guests. Celebrity describes Blu as offering fresh, contemporary flavors with a wellness-oriented approach. AquaClass guests can therefore have a dining experience that differs from the standard main restaurant.</p>
                                <p className="ccd-blu-sub-label">Who can dine at Blu?</p>
                                <p className="ccd-blu-sub">Access is primarily associated with AquaClass accommodations. Availability and access rules should be confirmed for the specific ship and booking.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── LUMINAE ── */}
                <section className="ccd-luminae-section">
                    <div className="ccd-luminae-container">
                        <div className="ccd-luminae-grid">
                            <div className="ccd-luminae-text-col">
                                <span className="ccd-eyebrow ccd-eyebrow-light">THE RETREAT</span>
                                <h2 className="ccd-section-heading ccd-white-heading">Luminae: Dining for The Retreat</h2>
                                <div className="ccd-heading-separator-bar ccd-separator-white"></div>
                                <p className="ccd-luminae-lead">Luminae is Celebrity's exclusive restaurant for guests staying in The Retreat. Celebrity describes Luminae as globally inspired and cutting-edge dining, with signature dishes associated with Global Culinary Ambassador Daniel Boulud.</p>
                                <p className="ccd-luminae-sub">Luminae is therefore not simply another specialty restaurant that any guest can book independently. It is part of the elevated dining experience associated with The Retreat.</p>
                            </div>
                            <div className="ccd-luminae-image-col">
                                <div className="ccd-image-frame">
                                    <CcdPlaceholder label="Celebrity Cruises Luminae restaurant for The Retreat" />
                                    <div className="ccd-frame-overlay ccd-overlay-soft"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SPECIALTY DINING COST ── */}
                <section className="ccd-cost-section">
                    <div className="ccd-cost-container">
                        <div className="ccd-cost-split-grid">
                            <div className="ccd-cost-text-col">
                                <span className="ccd-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>VALUE &amp; PRICING</span>
                                <h2 className="ccd-section-heading">How Much Does Celebrity Specialty Dining Cost?</h2>
                                <div className="ccd-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ccd-cost-intro" style={{ marginBottom: '20px', textAlign: 'left' }}>Specialty dining prices vary by:</p>
                                <div className="ccd-cost-factors-grid" style={{ justifyContent: 'flex-start' }}>
                                    {ccdCostFactors.map((factor, idx) => (
                                        <div key={idx} className="ccd-cost-factor-pill">
                                            <DollarSign size={14} />
                                            <span>{factor}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="ccd-cost-cards-col" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div className="ccd-cost-card">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                                        <div className="ccd-cost-card-icon" style={{ margin: 0, flexShrink: 0 }}>
                                            <DollarSign size={22} />
                                        </div>
                                        <p className="ccd-cost-card-title" style={{ margin: 0 }}>Should you buy a specialty dining package?</p>
                                    </div>
                                    <p className="ccd-cost-card-text">It can make sense if you expect to eat at several specialty restaurants. Compare individual restaurant prices multiplied by number of meals against the specialty dining package price.</p>
                                    <p className="ccd-cost-card-sub">Also consider whether you actually want to replace complimentary meals with specialty dining throughout the cruise.</p>
                                </div>
                                <div className="ccd-cost-note-card">
                                    <Info size={16} style={{ color: 'var(--ccd-navy)', flexShrink: 0, marginTop: '2px' }} />
                                    <p style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.6' }}>For that reason, there is no single reliable price that applies to every Celebrity specialty restaurant. Celebrity offers specialty dining packages on applicable sailings, which can make multiple specialty meals more economical than purchasing each experience individually.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ROOM SERVICE ── */}
                <section className="ccd-room-section">
                    <div className="ccd-room-container">
                        <div className="ccd-room-grid">
                            <div className="ccd-room-image-col" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div className="ccd-image-frame">
                                    <CcdPlaceholder label="In-stateroom room service dining" />
                                    <div className="ccd-frame-overlay"></div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 18px', background: 'var(--ccd-bg-soft)', borderLeft: '4px solid var(--ccd-navy)', borderRadius: '0 12px 12px 0' }}>
                                    <Info size={15} style={{ color: 'var(--ccd-navy)', flexShrink: 0, marginTop: '2px' }} />
                                    <p className="ccd-room-note" style={{ margin: 0, fontSize: '13.5px', fontStyle: 'italic', color: 'var(--ccd-text-dark)', lineHeight: '1.55' }}>Before ordering, check the current menu and applicable delivery or item charges.</p>
                                </div>
                            </div>
                            <div className="ccd-room-text-col">
                                <span className="ccd-eyebrow">IN-STATEROOM DINING</span>
                                <h2 className="ccd-section-heading">Is Room Service Included on Celebrity Cruises?</h2>
                                <div className="ccd-heading-separator-bar"></div>
                                <p className="ccd-room-lead">Room service availability and charges depend on the type of service and order. Celebrity's general "What's Included" information identifies 24-hour room service as an extra-cost option, while dining in complimentary restaurants is included.</p>
                                <p className="ccd-room-sub">Celebrity's ship dining pages describe room service as an alternative dining option where guests can order breakfast, lunch, dinner or snacks to their stateroom.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DIETARY REQUIREMENTS ── */}
                <section className="ccd-dietary-section">
                    <div className="ccd-dietary-container">
                        <div className="ccd-dietary-header">
                            <span className="ccd-eyebrow ccd-eyebrow-light ccd-eyebrow-center">SPECIAL REQUIREMENTS</span>
                            <h2 className="ccd-section-heading ccd-white-heading" style={{ textAlign: 'center' }}>Celebrity Dining and Dietary Requirements</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered ccd-separator-white"></div>
                            <p className="ccd-dietary-intro" style={{ color: '#ffffff' }}>Celebrity dining can accommodate many dietary preferences, but travelers with allergies or strict dietary requirements should notify the cruise line in advance. When planning your cruise, consider:</p>
                        </div>

                        <div className="ccd-dietary-grid">
                            {ccdDietaryConsiderations.map((item, idx) => (
                                <div key={idx} className="ccd-dietary-card">
                                    <div className="ccd-dietary-icon"><item.Icon size={20} /></div>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="ccd-dietary-footer">
                            <Info size={16} className="ccd-dietary-footer-icon" />
                            <p>For serious allergies, communicate requirements before sailing and speak with restaurant staff onboard rather than relying solely on menu descriptions.</p>
                        </div>
                    </div>
                </section>

                {/* ── VEGETARIAN / VEGAN ── */}
                <section className="ccd-veg-section">
                    <div className="ccd-veg-container">
                        <span className="ccd-eyebrow ccd-eyebrow-center">PLANT-FORWARD DINING</span>
                        <h2 className="ccd-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruise Food for Vegetarians and Vegans</h2>
                        <div className="ccd-heading-separator-bar ccd-bar-centered"></div>
                        <p className="ccd-veg-text">Vegetarian choices are available across Celebrity's dining venues, although the selection varies by restaurant and ship. For more restrictive diets, the main dining restaurant can be useful because staff can discuss menu alternatives and dietary requirements. Specialty restaurants may also have suitable choices, but travelers should confirm options before booking.</p>
                    </div>
                </section>

                {/* ── DRESS CODE ── */}
                <section className="ccd-dress-section">
                    <div className="ccd-dress-container">
                        <div className="ccd-dress-grid">
                            <div className="ccd-dress-text-col">
                                <span className="ccd-eyebrow">WHAT TO WEAR</span>
                                <h2 className="ccd-section-heading">Celebrity Dining Dress Code</h2>
                                <div className="ccd-heading-separator-bar"></div>
                                <p className="ccd-dress-lead">Dining dress expectations vary by venue and evening. The main dining experience can feel more formal than casual venues such as Oceanview Café or Mast Grill. Celebrity also schedules designated Evening Chic occasions on applicable cruises. These are intended to provide an opportunity for guests to dress up without requiring traditional formalwear.</p>
                                <p className="ccd-dress-sub-label">A practical packing approach is to bring:</p>
                                <div className="ccd-dress-list">
                                    {ccdPacking.map((item, idx) => (
                                        <div key={idx} className="ccd-dress-list-item">
                                            <Shirt size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="ccd-dress-image-col" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div className="ccd-image-frame">
                                    <CcdPlaceholder label="Celebrity Cruises Evening Chic dining attire" />
                                    <div className="ccd-frame-overlay"></div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 18px', background: 'var(--ccd-bg-soft)', borderLeft: '4px solid var(--ccd-navy)', borderRadius: '0 12px 12px 0' }}>
                                    <Info size={15} style={{ color: 'var(--ccd-navy)', flexShrink: 0, marginTop: '2px' }} />
                                    <p className="ccd-dress-note" style={{ margin: 0, fontSize: '13.5px', fontStyle: 'italic', color: 'var(--ccd-text-dark)', lineHeight: '1.55' }}>Check the dress guidance for your exact itinerary before departure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MULTIPLE RESTAURANTS IN A DAY ── */}
                <section className="ccd-day-section">
                    <div className="ccd-day-container">
                        <div className="ccd-day-header">
                            <span className="ccd-eyebrow ccd-eyebrow-light ccd-eyebrow-center">A DAY OF DINING</span>
                            <h2 className="ccd-section-heading ccd-white-heading" style={{ textAlign: 'center' }}>Can You Eat at Multiple Restaurants in One Day?</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered ccd-separator-white"></div>
                            <p className="ccd-day-intro">Yes. Celebrity's dining structure allows guests to move between different included venues throughout the day. A typical day might look like:</p>
                        </div>

                        <div className="ccd-day-timeline">
                            {ccdDayTable.map((row, idx) => (
                                <div key={idx} className="ccd-day-timeline-item">
                                    <div className="ccd-day-timeline-time">
                                        <Clock size={15} />
                                        <span>{row.time}</span>
                                    </div>
                                    <div className="ccd-day-timeline-line">
                                        <span className="ccd-day-timeline-dot"></span>
                                        {idx < ccdDayTable.length - 1 && <span className="ccd-day-timeline-rail"></span>}
                                    </div>
                                    <div className="ccd-day-timeline-choice">{row.choice}</div>
                                </div>
                            ))}
                        </div>

                        <p className="ccd-day-note">Your actual choices depend on restaurant opening hours and the ship.</p>
                    </div>
                </section>

                {/* ── FIRST-TIME TIPS ── */}
                <section className="ccd-tips-section">
                    <div className="ccd-tips-container">
                        <div className="ccd-tips-header">
                            <span className="ccd-eyebrow ccd-eyebrow-light ccd-eyebrow-center">EXPERT PLANNING</span>
                            <h2 className="ccd-section-heading ccd-white-heading" style={{ textAlign: 'center' }}>Celebrity Dining Tips for <br /> First-Time Cruisers</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered ccd-separator-white"></div>
                        </div>

                        <div className="ccd-tips-grid">
                            {ccdFirstTimeTips.map((item, idx) => (
                                <div key={idx} className="ccd-tips-card">
                                    <div className="ccd-tips-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <span className="ccd-tips-label">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── DINING BY GUEST CATEGORY ── */}
                <section className="ccd-category-section">
                    <div className="ccd-category-container">
                        <div className="ccd-category-header">
                            <span className="ccd-eyebrow ccd-eyebrow-center">ACCESS BY CABIN TYPE</span>
                            <h2 className="ccd-section-heading" style={{ textAlign: 'center' }}>Celebrity Dining by Guest Category</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered"></div>
                        </div>

                        <div className="ccd-table-wrapper">
                            <div className="ccd-table-row ccd-table-head ccd-table-two-col">
                                <span>Guest Type</span>
                                <span>Dining Benefit</span>
                            </div>
                            {ccdGuestCategoryTable.map((row, idx) => (
                                <div key={idx} className="ccd-table-row ccd-table-two-col">
                                    <span data-label="Guest Type">{row.guest}</span>
                                    <span data-label="Dining Benefit">{row.benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="ccd-category-footer">
                            <Info size={16} className="ccd-category-footer-icon" />
                            <p>Celebrity confirms that Blu is exclusive to AquaClass and Luminae is exclusive to The Retreat.</p>
                        </div>
                    </div>
                </section>

                {/* ── WHICH OPTION SHOULD YOU CHOOSE ── */}
                <section className="ccd-choice-section">
                    <div className="ccd-choice-container">
                        <div className="ccd-choice-header">
                            <span className="ccd-eyebrow ccd-eyebrow-center">DECISION GUIDE</span>
                            <h2 className="ccd-section-heading" style={{ textAlign: 'center' }}>Which Celebrity Dining Option Should You Choose?</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered"></div>
                            <p className="ccd-choice-intro">The best choice depends on what you value.</p>
                        </div>

                        <div className="ccd-choice-grid">
                            {ccdChoiceGuide.map((item, idx) => (
                                <div key={idx} className="ccd-choice-card">
                                    <div className="ccd-choice-icon"><item.Icon size={22} /></div>
                                    <h4 className="ccd-choice-label">{item.label}</h4>
                                    <p className="ccd-choice-value">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── KEY TAKEAWAYS ── */}
                <section className="ccd-takeaway-section">
                    <div className="ccd-takeaway-container">
                        <div className="ccd-takeaway-header">
                            <span className="ccd-eyebrow ccd-eyebrow-center">SUMMARY</span>
                            <h2 className="ccd-section-heading">Key Takeaways</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered"></div>
                        </div>

                        <div className="ccd-takeaway-grid">
                            {ccdKeyTakeaways.map((item, idx) => (
                                <div key={idx} className="ccd-takeaway-card">
                                    <div className="ccd-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <span className="ccd-takeaway-label">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CONCLUSION ── */}
                <section className="ccd-review-section">
                    <div className="ccd-review-container">
                        <div className="ccd-review-header">
                            <span className="ccd-eyebrow ccd-eyebrow-center">FINAL THOUGHTS</span>
                            <h2 className="ccd-section-heading">Conclusion</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered"></div>
                            <p className="ccd-review-intro">
                                Celebrity Cruises dining is designed around variety rather than a single restaurant experience. Guests can use complimentary venues such as the Main Restaurant and Oceanview Café for everyday meals, while specialty restaurants provide additional cuisine and experiences for an extra charge. The exact choices depend heavily on the ship.
                            </p>
                            <p className="ccd-review-intro">
                                For travelers booking AquaClass, The Retreat, or a particular Celebrity ship, dining access can be an important part of the decision. AquaClass brings access to Blu, while The Retreat includes Luminae, creating dining experiences that differ from standard stateroom bookings.
                            </p>
                            <p className="ccd-review-intro">
                                Before sailing, check the restaurant lineup for your exact ship, review specialty dining prices and packages, and consider making reservations for popular specialty venues. This approach lets you enjoy Celebrity's included dining while adding premium experiences where they provide the most value.
                            </p>
                        </div>

                        <div className="ccd-review-cta">
                            <div className="ccd-review-cta-icon">
                                <Phone size={20} />
                            </div>
                            <p>
                                Planning a Celebrity cruise? Check the dining lineup for your specific ship before booking. Compare complimentary restaurants with specialty dining, review available dining packages, and reserve popular specialty venues early if you want a particular restaurant or dinner time.
                            </p>
                        </div>
                    </div>
                </section>



                {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
                <section className="ccd-expert-section">
                    <div className="ccd-expert-container">

                        <div className="ccd-expert-portrait-panel">
                            <div className="ccd-expert-img-container">
                                <img src={Profile_AH} alt="Angela Hughes - Luxury Travel Designer" />
                            </div>
                            <div className="ccd-expert-stats-strip">
                                <div className="ccd-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="ccd-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>

                        <div className="ccd-expert-content-panel">
                            <span className="ccd-eyebrow ccd-expert-eyebrow">MEET THE CEO</span>
                            <h2 className="ccd-section-heading">Insight from Angela Hughes</h2>
                            <div className="ccd-heading-separator-bar"></div>

                            <p className="ccd-expert-quote">
                                &ldquo;Dining is where a cruise stops feeling like transportation and starts feeling like a destination. On Celebrity, the difference between a good trip and an unforgettable one often comes down to knowing which restaurant to book, and when.&rdquo;
                            </p>

                            <div className="ccd-expert-priorities">
                                <h5>Dining Prioritization Matrix:</h5>
                                <div className="ccd-expert-pills">
                                    {['Reserve Specialty Early', 'Balance Included & Extra', 'AquaClass Blu Access', 'The Retreat Luminae', 'Flexible Select Dining', 'Confirm Ship-Specific Menus'].map(pill => (
                                        <span key={pill} className="ccd-expert-pill">
                                            <Utensils size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="ccd-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom dining and itinerary planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="ccd-faq-section">
                    <div className="ccd-faq-container">
                        <div className="ccd-faq-header">
                            <span className="ccd-eyebrow ccd-eyebrow-center">QUESTIONS BEFORE YOU SAIL</span>
                            <h2 className="ccd-section-heading">Frequently Asked Questions</h2>
                            <div className="ccd-heading-separator-bar ccd-bar-centered"></div>
                        </div>
                        <div className="ccd-faq-list-wrapper">
                            {ccdFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="ccd-faq-item"
                                    onClick={() => ccdToggleFaq(index)}
                                >
                                    <div className="ccd-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="ccd-faq-toggle-icon">{ccdActiveFaq === index ? '\u2212' : '+'}</span>
                                    </div>
                                    {ccdActiveFaq === index && (
                                        <p className="ccd-faq-answer-text">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="ccd-cta-section">
                    <div className="ccd-cta-aurora-glow"></div>
                    <div className="ccd-cta-crystal ccd-cta-crystal-1"></div>
                    <div className="ccd-cta-crystal ccd-cta-crystal-2"></div>
                    <div className="ccd-cta-crystal ccd-cta-crystal-3"></div>
                    <div className="ccd-cta-grid-lines"></div>

                    <div className="ccd-cta-content">
                        <div className="ccd-cta-compass-ring">
                            <Utensils size={28} />
                        </div>
                        <span className="ccd-cta-eyebrow">RESERVE YOUR TABLE</span>
                        <h2 className="ccd-cta-title">Ready to Plan Your <br /> Celebrity Dining Experience?</h2>
                        <div className="ccd-cta-bar"></div>
                        <p className="ccd-cta-subtitle">
                            Compare complimentary restaurants, specialty venues, and exclusive dining for AquaClass and The Retreat, then let our specialists help you book the perfect Celebrity cruise.
                        </p>
                        <div className="ccd-cta-actions">
                            <Link to="/contact" className="ccd-cta-primary-btn">
                                <span>Speak with a Celebrity Cruises dining specialist</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CelebrityCruisesDining