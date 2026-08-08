import Navbar from '../../components/Navbar/Navbar'
import './UniworldShipsSuites.css'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Gem, Crown,
    ChevronRight, Phone, Heart, Utensils, Sun, Award,
    BookOpen, Eye, Globe, Info, BedDouble, Ruler,
    Coffee, Dumbbell, ShoppingBag, Wifi, Armchair,
    Accessibility, Search, ConciergeBell, Wallet, DoorOpen, Image
} from 'lucide-react'

const fleet = [
    { ship: 'S.S. Joie de Vivre', region: 'Seine, France' },
    { ship: 'S.S. Bon Voyage', region: 'Bordeaux' },
    { ship: 'S.S. Beatrice', region: 'Danube' },
    { ship: 'S.S. Maria Theresa', region: 'Danube' },
    { ship: 'S.S. Antoinette', region: 'Rhine' },
    { ship: 'S.S. São Gabriel', region: 'Douro' },
    { ship: 'S.S. La Venezia', region: 'Venice Lagoon' },
    { ship: 'River Queen', region: 'Rhine' },
    { ship: 'River Princess', region: 'European Rivers' },
    { ship: 'River Duchess', region: 'Rhine & Danube' }
]

const boutiqueItems = [
    'Handcrafted furniture',
    'Original artwork',
    'Antique-inspired décor',
    'Marble finishes',
    'Crystal chandeliers',
    'Designer fabrics',
    'Destination-inspired public spaces'
]

const cabinSections = [
    {
        id: 'classic',
        Icon: BedDouble,
        title: 'Classic Staterooms',
        body: 'Ideal for travelers seeking luxury without upgrading to premium suites.',
        items: ['Premium bedding', 'Marble bathroom', 'Flat-screen television', 'Climate control', 'Luxury bath amenities', 'Hair dryer', 'Safe', 'Daily housekeeping']
    },
    {
        id: 'deluxe',
        Icon: Ruler,
        title: 'Deluxe Staterooms',
        body: 'Deluxe rooms typically offer:',
        items: ['Larger floor plans', 'Better deck locations', 'Enhanced views', 'Additional seating area', 'Upgraded décor']
    },
    {
        id: 'french-balcony',
        Icon: Sun,
        title: 'French Balcony Rooms',
        body: 'Many guests prefer French Balcony accommodations because they provide expansive river views.',
        items: ['Floor-to-ceiling glass doors', 'Fresh air access', 'Panoramic scenery', 'Bright natural lighting'],
        note: 'These cabins are especially popular on European itineraries.'
    }
]

const suiteItems = [
    'Separate sitting areas',
    'Larger bathrooms',
    'Walk-in wardrobes',
    'Butler service',
    'Complimentary laundry (select categories)',
    'Fresh fruit delivery',
    'Premium minibar',
    'Priority services',
    'Enhanced room amenities'
]

const butlerItems = [
    'Unpacking and packing assistance',
    'Beverage service',
    'Shoe shining',
    'Dining reservations',
    'Laundry coordination',
    'Personalized requests',
    'Suite preparation'
]

const amenityItems = [
    { label: 'Main restaurant', Icon: Utensils },
    { label: 'Lounge and bar', Icon: Coffee },
    { label: 'Sun deck', Icon: Sun },
    { label: 'Fitness center', Icon: Dumbbell },
    { label: 'Library', Icon: BookOpen },
    { label: 'Boutique shop', Icon: ShoppingBag },
    { label: 'Complimentary Wi-Fi', Icon: Wifi },
    { label: 'Reception services', Icon: ConciergeBell },
    { label: 'Outdoor seating areas', Icon: Armchair }
]

const cabinComparison = [
    ['Premium Bedding', '✓', '✓', '✓', '✓'],
    ['Marble Bathroom', '✓', '✓', '✓', '✓'],
    ['Scenic Views', 'Good', 'Better', 'Excellent', 'Excellent'],
    ['Balcony Access', 'No', 'No', 'French Balcony', 'Varies'],
    ['Butler Service', 'No', 'No', 'No', 'Select Suites'],
    ['Largest Living Space', 'No', 'No', 'Moderate', 'Yes']
]

const chooseBlocks = [
    {
        Icon: Wallet,
        label: 'Classic Stateroom',
        title: 'Best for value',
        intro: 'Choose a Classic Stateroom if you:',
        items: ['Spend most of your time exploring destinations.', 'Prefer value over extra space.', 'Want luxury at the lowest available fare.']
    },
    {
        Icon: Eye,
        label: 'French Balcony Room',
        title: 'Best for views',
        intro: 'Choose a French Balcony Room if you:',
        items: ['Love scenic river views.', 'Enjoy natural light.', 'Spend more time relaxing in your cabin.']
    },
    {
        Icon: Crown,
        label: 'Suite',
        title: 'Best for extra service',
        intro: 'Choose a Suite if you:',
        items: ['Celebrate a honeymoon or anniversary.', 'Want additional space.', 'Appreciate personalized butler service.', 'Plan to spend significant time onboard.']
    }
]

const accessibilityItems = [
    'Wider doorways',
    'Accessible bathrooms',
    'Elevator access',
    'Assistance from onboard staff'
]

const shipAmenityItems = [
    'Gourmet dining',
    'Premium beverages',
    'Included excursions',
    'Destination lectures',
    'Local entertainment',
    'Wellness programs',
    'Cultural experiences',
    'Concierge assistance'
]

const tipsItems = [
    'Destination and itinerary',
    'Ship size',
    'Deck location',
    'Suite availability',
    'Balcony preference',
    'Travel season',
    'Included amenities',
    'Mobility requirements'
]

const keywordChips = [
    'luxury river cruise suites',
    'boutique cruise accommodations',
    'premium river cruise cabins',
    'French balcony staterooms',
    'luxury river ship interiors',
    'boutique hotel on water',
    'luxury cruise rooms',
    'European river cruise cabins',
    'butler service suites',
    'river cruise fleet'
]

const eeatItems = [
    'Explains accommodation categories objectively.',
    'Covers fleet overview and cabin selection guidance.',
    'Provides practical booking considerations.',
    'Helps travelers compare room options before booking.'
]

const internalLinks = [
    ['Uniworld River Cruises', '/uniworld-river-cruises/'],
    ['What Is Included on a Uniworld River Cruise', '/uniworld-river-cruises/whats-included/'],
    ['Is Uniworld Worth the Money', '/uniworld-river-cruises/is-uniworld-worth-it/'],
    ['Uniworld Cruise Costs', '/uniworld-river-cruises/cost-deals/'],
    ['European River Cruises', '/european-river-cruises/'],
    ['Luxury River Cruises', '/luxury-river-cruises/'],
    ['River Cruise Packing Guide', '/river-cruise-packing-guide/']
]

const externalRefs = [
    'Official Uniworld Boutique River Cruises',
    'Cruise Lines International Association (CLIA)',
    'UNESCO World Heritage Centre',
    'European tourism boards',
    'U.S. Department of State Travel Advisories'
]

const imageRecs = [
    { suggestion: 'S.S. Beatrice sailing the Danube', alt: 'Uniworld S.S. Beatrice luxury river cruise ship on the Danube', img: null },
    { suggestion: 'French Balcony cabin', alt: 'French Balcony stateroom aboard a Uniworld River Cruise', img: null },
    { suggestion: 'Luxury suite interior', alt: 'Luxury suite with butler service on a Uniworld cruise ship', img: null },
    { suggestion: 'Marble bathroom', alt: 'Premium marble bathroom in a Uniworld suite', img: null },
    { suggestion: 'Sun deck', alt: 'Guests relaxing on the sun deck of a Uniworld river ship', img: null },
    { suggestion: 'Boutique lounge', alt: 'Elegant destination-inspired lounge aboard a Uniworld river ship', img: null }
]

const takeaways = [
    'Every Uniworld ship features a unique boutique design.',
    'Accommodation ranges from Classic Staterooms to luxury suites.',
    'French Balcony rooms provide exceptional river views.',
    'Select suites include personalized butler service.',
    'Small ships create an intimate luxury experience.',
    'Premium amenities are available throughout the fleet.',
    'Choosing the right cabin depends on budget, travel style, and itinerary.'
]

const faqs = [
    ['How many ships does Uniworld have?', 'Uniworld operates a fleet of boutique river ships across Europe, Egypt, India, and other select destinations.'],
    ['Are all Uniworld ships the same?', 'No. Each ship features unique destination-inspired interior design.'],
    ['What is the best suite on a Uniworld ship?', 'Top suites offer the largest accommodations, luxury amenities, and butler service.'],
    ['What is a French Balcony cabin?', 'It features floor-to-ceiling glass doors that provide panoramic river views.'],
    ['Does every cabin include luxury amenities?', 'Yes. Premium bedding, marble bathrooms, luxury toiletries, and housekeeping are standard.'],
    ['Which ships sail the Danube?', 'Ships such as S.S. Beatrice and S.S. Maria Theresa regularly operate Danube itineraries.'],
    ['Are Uniworld suites worth upgrading?', 'Guests wanting additional space and personalized luxury service often find suites worthwhile.'],
    ['Do Uniworld suites include butler service?', 'Yes. Butler service is available in qualifying suite categories.'],
    ['Are cabins spacious?', 'Cabin sizes vary, with suites offering the most spacious accommodations.'],
    ['Which cabin is best for first-time travelers?', 'French Balcony cabins offer an excellent balance of comfort, views, and value.'],
    ['Do Uniworld ships have elevators?', 'Many ships include elevators, although access varies by vessel.'],
    ['Are accessible cabins available?', 'Some ships offer accessible accommodations, subject to availability.'],
    ['What amenities are included in every room?', 'Guests generally receive premium bedding, climate control, Wi-Fi, toiletries, television, and housekeeping.'],
    ['How many passengers are onboard?', 'Most Uniworld ships accommodate approximately 120 to 160 guests.'],
    ['What makes Uniworld ships different from other river cruise lines?', 'Their individually designed boutique interiors, luxury accommodations, and personalized service set them apart.']
]

const schema = {
    '@context': 'https://schema.org',
    '@graph': [
        { '@type': 'Organization', name: 'Your Company Name', url: 'https://www.example.com', logo: 'https://www.example.com/logo.png' },
        { '@type': 'WebPage', name: 'Uniworld Ships and Suites: Complete Guide', url: 'https://www.example.com/uniworld-river-cruises/ships-suites/', description: 'Explore Uniworld River Cruise ships, suites, staterooms, cabin categories, onboard amenities, and tips for choosing the best accommodation.', inLanguage: 'en' },
        { '@type': 'Article', headline: 'Uniworld Ships and Suites: Complete Guide', author: { '@type': 'Organization', name: 'Your Company Name' }, publisher: { '@type': 'Organization', name: 'Your Company Name' }, mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.example.com/uniworld-river-cruises/ships-suites/' }, datePublished: '2026-08-05', dateModified: '2026-08-05' },
        { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.example.com/' },
            { '@type': 'ListItem', position: 2, name: 'Uniworld River Cruises', item: 'https://www.example.com/uniworld-river-cruises/' },
            { '@type': 'ListItem', position: 3, name: 'Ships & Suites', item: 'https://www.example.com/uniworld-river-cruises/ships-suites/' }
        ] },
        { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }
    ]
}

function UniWorldShipsSuites() {
    const [ussCurrentHero, setUssCurrentHero] = useState(0)
    const ussHeroImages = [1, 2, 3]

    useEffect(() => {
        const ussTimer = setInterval(() => {
            setUssCurrentHero(prev => (prev + 1) % ussHeroImages.length)
        }, 5000)
        return () => clearInterval(ussTimer)
    }, [ussHeroImages.length])

    const [ussActiveFaq, setUssActiveFaq] = useState(null)
    const ussToggleFaq = i => setUssActiveFaq(ussActiveFaq === i ? null : i)

    return (
        <>
            <Helmet>
                <title>Uniworld Ships & Suites: Complete Guide</title>
                <meta name="title" content="Uniworld Ships & Suites: Complete Guide" />
                <meta name="description" content="Explore every Uniworld River Cruise ship and suite category, including staterooms, luxury suites, amenities, layouts, and tips for choosing the best cabin." />
                <meta name="keywords" content="Uniworld Ships and Suites, Uniworld cruise ships, Uniworld suites, Uniworld staterooms, luxury river cruise cabins, Uniworld fleet, Uniworld room categories, boutique river cruise ships" />
                <link rel="canonical" href="https://www.example.com/uniworld-river-cruises/ships-suites/" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="uss-hero-section">
                {ussHeroImages.map((num, idx) => (
                    <div
                        key={idx}
                        className={`uss-hero-background uni-hero-placeholder-bg ${ussCurrentHero === idx ? 'uni-active' : ''}`}
                    >
                        <div className="uss-hero-placeholder-overlay">
                            <Image size={40} className="uss-placeholder-icon" />
                            <span>Uniworld River Cruise Scene {num}</span>
                        </div>
                    </div>
                ))}
                <div className="uss-hero-overlay-layer"></div>
                <div className="uss-hero-content-wrapper">
                    <div className="uss-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Uniworld Boutique River Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uss-hero-main-title">
                        Uniworld Ships &amp; Suites: Complete Guide
                    </h1>
                    <p className="uss-hero-subtitle-text">
                        Explore every Uniworld River Cruise ship and suite category, including staterooms, luxury suites, amenities, layouts, and tips for choosing the best cabin.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="uss-intro-section">
                <div className="uss-intro-container">
                    <div className="uss-intro-grid">

                        <div className="uss-intro-text-col">
                            <span className="uss-eyebrow">A BOUTIQUE HOTEL ON THE WATER</span>
                            <h2 className="uss-section-heading">Uniworld Ships and Suites: Complete Guide</h2>
                            <div className="uss-heading-separator-bar"></div>
                            <p className="uss-intro-lead">Uniworld Boutique River Cruises is renowned for combining luxury hospitality with intimate river cruising.</p>
                            <p className="uss-intro-body">Unlike many cruise lines that use standardized ship designs, each Uniworld vessel features its own distinctive décor, inspired by the destinations it sails. From elegant staterooms to lavish suites with butler service, every accommodation is designed to deliver a boutique hotel experience on the water.</p>
                            <p className="uss-intro-body">Whether you're deciding which ship to book or choosing between a classic stateroom and a luxury suite, this guide explains everything you need to know about the Uniworld fleet, cabin categories, onboard amenities, and how to select the best accommodation for your travel style.</p>
                        </div>

                        <div className="uss-intro-image-col">
                            <div className="uss-image-frame">
                                <div className="uss-image-placeholder-box">
                                    <Image size={32} className="uss-placeholder-icon" />
                                    <span>Uniworld Ship Exterior</span>
                                </div>
                                <div className="uss-frame-overlay"></div>
                                <div className="uss-image-badge">
                                    <Gem size={13} />
                                    <span>Boutique River Cruising, Reimagined</span>
                                </div>
                            </div>
                            <div className="uss-statement-box">
                                <div className="uss-statement-accent"></div>
                                <div className="uss-statement-text">
                                    <p className="uss-statement-primary">Design matters on a boutique river ship.</p>
                                    <p className="uss-statement-bold">No two Uniworld ships are identical.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FLEET ── */}
            <section className="uss-fleet-section">
                <div className="uss-fleet-container">
                    <div className="uss-fleet-header">
                        <span className="uss-eyebrow">THE FLEET</span>
                        <h2 className="uss-section-heading" style={{ textAlign: 'center' }}>Explore the Uniworld Fleet</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                        <p className="uss-fleet-intro">Uniworld operates a collection of boutique river ships across Europe, Egypt, India, and select international destinations. Most vessels accommodate between <strong>120 and 160 guests</strong>, creating a relaxed atmosphere with personalized service.</p>
                    </div>
                    <div className="uss-fleet-stats-bar">
                        <div className="uss-fleet-stat">
                            <span className="uss-fleet-stat-num">10+</span>
                            <span className="uss-fleet-stat-label">Signature Ships</span>
                        </div>
                        <div className="uss-fleet-stat-divider"></div>
                        <div className="uss-fleet-stat">
                            <span className="uss-fleet-stat-num">120–160</span>
                            <span className="uss-fleet-stat-label">Guests Per Ship</span>
                        </div>
                        <div className="uss-fleet-stat-divider"></div>
                        <div className="uss-fleet-stat">
                            <span className="uss-fleet-stat-num">5+</span>
                            <span className="uss-fleet-stat-label">Regions Worldwide</span>
                        </div>
                        <div className="uss-fleet-stat-divider"></div>
                        <div className="uss-fleet-stat">
                            <span className="uss-fleet-stat-num">100%</span>
                            <span className="uss-fleet-stat-label">Boutique Design</span>
                        </div>
                    </div>
                    <div className="uss-fleet-super-badge">
                        <Ship size={17} />
                        <strong>Signature Super Ships</strong>
                        <span>Several vessels belong to Uniworld&apos;s &ldquo;Super Ship&rdquo; collection, offering upgraded interiors and modern amenities.</span>
                    </div>
                    <div className="uss-fleet-cards-grid">
                        {fleet.map(({ ship, region }, idx) => (
                            <div key={ship} className="uss-fleet-card">
                                <div className="uss-fleet-card-index">0{idx + 1}</div>
                                <div className="uss-fleet-card-icon"><Ship size={20} /></div>
                                <h3 className="uss-fleet-card-name">{ship}</h3>
                                <div className="uss-fleet-card-region">
                                    <MapPin size={12} />
                                    <span>{region}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="uss-fleet-footer-note">
                        <Compass size={16} />
                        <span>Each vessel reflects regional architecture, art, and culture — ensuring no two ships feel alike.</span>
                    </div>
                </div>
            </section>

            {/* ── BOUTIQUE DESIGN ── */}
            <section className="uss-boutique-section">
                <div className="uss-boutique-container">
                    <div className="uss-boutique-grid">

                        <div className="uss-boutique-text-col">
                            <span className="uss-eyebrow">SIGNATURE DESIGN</span>
                            <h2 className="uss-section-heading">Boutique Design Sets Every Ship Apart</h2>
                            <div className="uss-heading-separator-bar"></div>
                            <p className="uss-boutique-lead">One of Uniworld's defining features is its commitment to unique interior design.</p>

                            <div className="uss-boutique-pills">
                                {boutiqueItems.map((item, idx) => (
                                    <div key={idx} className="uss-boutique-pill">
                                        <CheckCircle size={16} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uss-boutique-conclusion-box">
                                <p>Instead of mass-produced interiors, each ship is curated to create an immersive luxury environment.</p>
                            </div>
                        </div>

                        <div className="uss-boutique-image-col">
                            <div className="uss-image-frame">
                                <div className="uss-image-placeholder-box">
                                    <Image size={32} className="uss-placeholder-icon" />
                                    <span>Boutique Lounge Interior</span>
                                </div>
                                <div className="uss-frame-overlay"></div>
                            </div>
                            <div className="uss-boutique-icon-box">
                                <Sparkles size={22} />
                                <p>Distinctive décor inspired by each destination.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── STATEROOM CATEGORIES ── */}
            <section className="uss-cabins-section">
                <div className="uss-cabins-container">
                    <div className="uss-cabins-header">
                        <span className="uss-eyebrow">ROOM CATEGORIES</span>
                        <h2 className="uss-section-heading" style={{ textAlign: 'center' }}>Understanding Stateroom Categories</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                    </div>

                    <div className="uss-cabins-grid">
                        {cabinSections.map(({ id, Icon, title, body, items, note }) => (
                            <article key={id} className="uss-cabin-card">
                                <div className="uss-cabin-card-icon"><Icon size={22} /></div>
                                <h3 className="uss-cabin-card-title">{title}</h3>
                                <p className="uss-cabin-card-body">{body}</p>
                                <ul className="uss-cabin-card-list">
                                    {items.map((item, iIdx) => (
                                        <li key={iIdx}>
                                            <ChevronRight size={13} className="uss-cabin-chevron" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {note && <p className="uss-cabin-card-note">{note}</p>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LUXURY SUITES ── */}
            <section className="uss-suites-section">
                <div className="uss-suites-container">
                    <div className="uss-suites-grid">

                        <div className="uss-suites-text-col">
                            <span className="uss-eyebrow">TOP-TIER ACCOMMODATION</span>
                            <h2 className="uss-section-heading">Luxury Suites</h2>
                            <div className="uss-heading-separator-bar"></div>
                            <p className="uss-suites-lead">Suites represent the highest level of onboard accommodation.</p>
                            <p className="uss-suites-body">Depending on the ship, guests may enjoy:</p>

                            <ul className="uss-suites-list">
                                {suiteItems.map((item, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={15} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="uss-suites-body">Many suites feature elegant furnishings comparable to luxury boutique hotels.</p>
                        </div>

                        <div className="uss-suites-side-col">
                            <div className="uss-image-frame">
                                <div className="uss-image-placeholder-box">
                                    <Image size={32} className="uss-placeholder-icon" />
                                    <span>Luxury Suite Layout</span>
                                </div>
                                <div className="uss-frame-overlay"></div>
                            </div>
                            <div className="uss-navy-callout">
                                <Crown size={26} />
                                <h3>Luxury, tailored to you</h3>
                                <p>Suite categories vary by vessel, so compare the deck plan and included services before upgrading.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BUTLER SERVICE ── */}
            <section className="uss-butler-section">
                <div className="uss-butler-container">
                    <div className="uss-butler-side-by-side">
                        <div className="uss-butler-image-col">
                            <div className="uss-image-frame">
                                <div className="uss-image-placeholder-box">
                                    <Image size={32} className="uss-placeholder-icon" />
                                    <span>Personalized Butler Service</span>
                                </div>
                                <div className="uss-frame-overlay"></div>
                                <div className="uss-butler-img-badge">
                                    <ConciergeBell size={13} />
                                    <span>Personalized Suite Service</span>
                                </div>
                            </div>
                            <div className="uss-butler-distinction-strip">
                                <div className="uss-butler-distinction-icon"><Crown size={22} /></div>
                                <div className="uss-butler-distinction-text">
                                    <strong>What sets Uniworld apart</strong>
                                    <span>Personalized butler service in qualifying suites creates a truly bespoke experience — confirm your suite category and exact service inclusions when booking.</span>
                                </div>
                            </div>
                        </div>
                        <div className="uss-butler-content-col">
                            <span className="uss-eyebrow uss-eyebrow-light">PERSONALIZED SERVICE</span>
                            <h2 className="uss-section-heading uss-white-heading">Butler Service Explained</h2>
                            <div className="uss-heading-separator-bar uss-separator-white"></div>
                            <p className="uss-butler-intro">One of Uniworld&apos;s signature luxury benefits is butler service for qualifying suites. This level of personalized attention distinguishes Uniworld from many premium river cruise lines.</p>
                            <div className="uss-butler-cards-grid">
                                {butlerItems.map((item, idx) => (
                                    <div key={idx} className="uss-butler-card">
                                        <div className="uss-butler-card-icon">
                                            <ConciergeBell size={18} />
                                        </div>
                                        <p className="uss-butler-card-text">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ONBOARD AMENITIES ── */}
            <section className="uss-amenities-section">
                <div className="uss-amenities-container">
                    <div className="uss-amenities-header">
                        <span className="uss-eyebrow">INCLUDED ON BOARD</span>
                        <h2 className="uss-section-heading" style={{ textAlign: 'center' }}>Onboard Amenities Available to Every Guest</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                    </div>

                    <div className="uss-amenities-grid">
                        {amenityItems.map(({ label, Icon }, idx) => (
                            <div key={label} className="uss-amenity-card">
                                <div className="uss-amenity-num">0{idx + 1}</div>
                                <div className="uss-amenity-icon"><Icon size={22} /></div>
                                <h3 className="uss-amenity-label">{label}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="uss-amenities-footer">
                        <p>Many ships also feature unique lounges inspired by the destinations they visit.</p>
                    </div>
                </div>
            </section>

            {/* ── CABIN COMPARISON ── */}
            <section className="uss-compare-section">
                <div className="uss-compare-container">
                    <div className="uss-compare-header">
                        <span className="uss-eyebrow">AT A GLANCE</span>
                        <h2 className="uss-section-heading" style={{ textAlign: 'center' }}>Comparing Cabin Categories</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                    </div>

                    <div className="uss-compare-table-wrap">
                        <table className="uss-table uni-comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Classic</th>
                                    <th>Deluxe</th>
                                    <th>French Balcony</th>
                                    <th>Suite</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cabinComparison.map(row => (
                                    <tr key={row[0]}>
                                        {row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={`${row[0]}-${index}`}>{cell}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── CHOOSING THE BEST CABIN ── */}
            <section className="uss-choose-section">
                <div className="uss-choose-container">
                    <div className="uss-choose-header">
                        <span className="uss-eyebrow uss-eyebrow-light">BOOKING GUIDANCE</span>
                        <h2 className="uss-section-heading uss-white-heading" style={{ textAlign: 'center' }}>Choosing the Best Cabin</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered uss-separator-white"></div>
                    </div>

                    <div className="uss-choose-grid">
                        {chooseBlocks.map(({ Icon, label, title, intro, items }, idx) => (
                            <article key={idx} className="uss-choose-card">
                                <div className="uss-choose-label"><Icon size={13} /> <span>{label}</span></div>
                                <h3 className="uss-choose-title">{title}</h3>
                                <p className="uss-choose-intro">{intro}</p>
                                <ul className="uss-choose-list">
                                    {items.map((item, iIdx) => (
                                        <li key={iIdx}>
                                            <CheckCircle size={14} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="uss-choose-footer">
                        <p>Selecting the right category comes down to how you prefer to spend your time on board.</p>
                    </div>
                </div>
            </section>

            {/* ── ACCESSIBILITY ── */}
            <section className="uss-access-section">
                <div className="uss-access-container">
                    <div className="uss-access-grid">

                        <div className="uss-access-text-col">
                            <span className="uss-eyebrow">PLAN AHEAD</span>
                            <h2 className="uss-section-heading">Accessibility Considerations</h2>
                            <div className="uss-heading-separator-bar"></div>
                            <p className="uss-access-lead">Some Uniworld ships include accessible accommodations designed for guests with mobility needs.</p>
                            <p className="uss-access-body">Accessibility features may include:</p>

                            <div className="uss-access-pillars">
                                {accessibilityItems.map((item, idx) => (
                                    <div key={idx} className="uss-access-pillar">
                                        <div className="uss-access-pillar-icon"><CheckCircle size={18} /></div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="uss-access-body">Availability varies by ship and itinerary, so early booking is recommended.</p>
                        </div>

                        <div className="uss-access-side-col">
                            <div className="uss-image-frame">
                                <div className="uss-image-placeholder-box">
                                    <Image size={32} className="uss-placeholder-icon" />
                                    <span>Accessible Room Cabin View</span>
                                </div>
                                <div className="uss-frame-overlay"></div>
                            </div>
                            <div className="uss-access-callout">
                                <Accessibility size={28} />
                                <h3>Ask before booking</h3>
                                <p>Accessibility can vary by vessel, deck, and itinerary. Confirm the details with your travel advisor.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SHIP AMENITIES ── */}
            <section className="uss-shipamen-section">
                <div className="uss-shipamen-container">
                    <div className="uss-shipamen-grid">

                        <div className="uss-shipamen-text-col">
                            <span className="uss-eyebrow">BEYOND THE CABIN</span>
                            <h2 className="uss-section-heading">Ship Amenities That Enhance the Experience</h2>
                            <div className="uss-heading-separator-bar"></div>
                            <p className="uss-shipamen-lead">Beyond accommodations, guests benefit from numerous premium services.</p>

                            <div className="uss-shipamen-pillars">
                                {shipAmenityItems.map((item, idx) => (
                                    <div key={idx} className="uss-shipamen-pillar">
                                        <CheckCircle size={16} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uss-shipamen-conclusion-box">
                                <p>These amenities contribute to Uniworld's reputation as a luxury all-inclusive river cruise operator.</p>
                            </div>
                        </div>

                        <div className="uss-shipamen-image-col">
                            <div className="uss-image-frame">
                                <div className="uss-image-placeholder-box">
                                    <Image size={32} className="uss-placeholder-icon" />
                                    <span>Onboard Dining &amp; Lounge Scene</span>
                                </div>
                                <div className="uss-frame-overlay uni-overlay-soft"></div>
                            </div>
                            <div className="uss-shipamen-stat-badge">
                                <Star size={15} />
                                <span>A Luxury All-Inclusive Experience</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── TIPS ── */}
            <section className="uss-tips-section">
                <div className="uss-tips-container">
                    <div className="uss-tips-grid">

                        <div className="uss-tip-index">
                            <span className="uss-tip-num">01</span>
                            <p>Research the vessel, not just the itinerary.</p>
                        </div>

                        <div className="uss-tips-content">
                            <span className="uss-eyebrow">BEFORE YOU BOOK</span>
                            <h2 className="uss-section-heading">Tips for Selecting the Right Ship</h2>
                            <div className="uss-heading-separator-bar"></div>
                            <p className="uss-tips-lead">Before booking, consider:</p>

                            <ul className="uss-tips-list">
                                {tipsItems.map((item, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={15} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="uss-tips-conclusion">
                                <p>Because each vessel has a unique design, researching individual ships helps ensure the best experience.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SEMANTIC KEYWORDS ── */}
            <section className="uss-keywords-section">
                <div className="uss-keywords-container">
                    <div className="uss-keywords-header">
                        <span className="uss-eyebrow">SEO OPTIMIZATION</span>
                        <h2 className="uss-section-heading" style={{ textAlign: 'center' }}>Semantic Keywords</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                    </div>

                    <div className="uss-keyword-chips">
                        {keywordChips.map((chip, idx) => (
                            <span key={idx} className="uss-keyword-chip">{chip}</span>
                        ))}
                    </div>

                    <div className="uss-eeat-card">
                        <div className="uss-eeat-icon"><Search size={22} /></div>
                        <h3 className="uss-eeat-title">EEAT Signals</h3>
                        <ul className="uss-eeat-list">
                            {eeatItems.map((item, idx) => (
                                <li key={idx}>
                                    <CheckCircle size={14} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── INTERNAL LINKING ── */}
            <section className="uss-linking-section">
                <div className="uss-linking-container">
                    <div className="uss-linking-header">
                        <span className="uss-eyebrow">SEO STRATEGY</span>
                        <h2 className="uss-section-heading" style={{ textAlign: 'center' }}>Internal Linking Suggestions</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                    </div>

                    <div className="uss-linking-table-wrap">
                        <table className="uss-table">
                            <thead>
                                <tr>
                                    <th>Suggested Anchor Text</th>
                                    <th>Suggested URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {internalLinks.map(([anchor, url]) => (
                                    <tr key={anchor}>
                                        <td><Link to={url}>{anchor}</Link></td>
                                        <td><code>{url}</code></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── EXTERNAL REFERENCES ── */}
            <section className="uss-references-section">
                <div className="uss-references-container">
                    <div className="uss-references-header">
                        <span className="uss-eyebrow">TRUSTED RESEARCH</span>
                        <h2 className="uss-section-heading" style={{ textAlign: 'center' }}>External Authority References</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                    </div>

                    <div className="uss-references-list">
                        {externalRefs.map((ref, idx) => (
                            <div key={idx} className="uss-reference-item">
                                <div className="uss-reference-icon"><Globe size={17} /></div>
                                <span>{ref}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── IMAGE RECOMMENDATIONS ── */}
            <section className="uss-imageplan-section">
                <div className="uss-imageplan-container">
                    <div className="uss-imageplan-header">
                        <span className="uss-eyebrow">CONTENT PRODUCTION</span>
                        <h2 className="uss-section-heading" style={{ textAlign: 'center' }}>Image Recommendations</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                    </div>

                    <div className="uss-imageplan-grid">
                        {imageRecs.map(({ suggestion, alt, img }, idx) => (
                            <figure key={idx} className="uss-imageplan-card">
                                <div className="uss-imageplan-media">
                                    {img
                                        ? <img src={img} alt={alt} />
                                        : <div className="uss-imageplan-placeholder"><Eye size={24} /><span>Recommended Image</span></div>}
                                </div>
                                <figcaption>
                                    <strong>{suggestion}</strong>
                                    <span>{alt}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="luxe-expert-insight-section">
                <div className="luxe-expert-insight-container">
                    <div className="luxe-expert-portrait-panel">
                        <div className="luxe-expert-img-container">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - River Cruise Expert" />
                        </div>
                        <div className="luxe-expert-stats-strip">
                            <div className="luxe-expert-stat-box">
                                <h4>40+</h4>
                                <p>Years Designing Travel</p>
                            </div>
                            <div className="luxe-expert-stat-box">
                                <h4>121+</h4>
                                <p>Countries Traveled</p>
                            </div>
                        </div>
                    </div>
                    <div className="luxe-expert-content-panel">
                        <span className="luxe-eyebrow">MEET THE CEO</span>
                        <h2 className="uss-section-heading">Insight from Angela Hughes</h2>
                        <div className="uss-heading-separator-bar"></div>
                        <p className="luxe-expert-quote">
                            "A Uniworld river cruise isn't just about traveling from destination to destination—it's about returning to a uniquely curated boutique sanctuary every single evening, experiencing local culture both on and off the ship."
                        </p>
                        <div className="luxe-expert-priorities">
                            <h5>Travel Prioritization Matrix:</h5>
                            <div className="luxe-expert-pills">
                                {['Boutique River Ships', 'Personalized Butler Service', 'All-Inclusive Value', 'Regional Shore Excursions', 'Gourmet Dining', 'Intimate Capacity'].map(pill => (
                                    <span key={pill} className="luxe-expert-pill">
                                        <Anchor size={12} />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="luxe-expert-bio">
                            As founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the river cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="uss-takeaways-section">
                <div className="uss-takeaways-container">
                    <div className="uss-takeaways-header">
                        <span className="uss-eyebrow">THE ESSENTIALS</span>
                        <h2 className="uss-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                    </div>

                    <div className="uss-takeaways-list">
                        {takeaways.map((item, idx) => (
                            <div key={idx} className="uss-takeaway-item">
                                <div className="uss-takeaway-icon"><CheckCircle size={18} /></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uss-faq-main-section uni-faq-section">
                <div className="uss-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uss-eyebrow">QUESTIONS TRAVELERS ASK</span>
                        <h2 className="uss-section-heading">Frequently Asked Questions</h2>
                        <div className="uss-heading-separator-bar uss-bar-centered"></div>
                    </div>
                    <div className="uss-faq-list-wrapper">
                        {faqs.map(([question, answer], index) => (
                            <div
                                key={question}
                                className="uss-faq-individual-item"
                                onClick={() => ussToggleFaq(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault()
                                        ussToggleFaq(index)
                                    }
                                }}
                                aria-expanded={ussActiveFaq === index}
                            >
                                <div className="uss-faq-question-row">
                                    <span>{question}</span>
                                    <span className="uss-faq-toggle-icon">{ussActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {ussActiveFaq === index && (
                                    <p className="uss-faq-answer-text">{answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="luxe-cta-section">
                <div className="luxe-cta-aurora-glow"></div>
                <div className="luxe-cta-crystal luxe-cta-crystal-1"></div>
                <div className="luxe-cta-crystal luxe-cta-crystal-2"></div>
                <div className="luxe-cta-crystal luxe-cta-crystal-3"></div>
                <div className="luxe-cta-grid-lines"></div>

                <div className="luxe-cta-content">
                    <div className="luxe-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="luxe-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="luxe-cta-title">Find Your Perfect <br /> Uniworld Ship &amp; Suite</h2>
                    <div className="luxe-cta-bar"></div>
                    <p className="luxe-cta-subtitle">
                        Let&rsquo;s compare the fleet, seasons, ships, suites, and inclusions that match your luxury river cruising preferences.
                    </p>
                    <div className="luxe-cta-actions">
                        <Link to="/contact" className="luxe-cta-primary-btn">
                            <Phone size={18} />
                            <span>Speak with a luxury river cruise specialist</span>
                            <ArrowRight size={16} className="luxe-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UniWorldShipsSuites