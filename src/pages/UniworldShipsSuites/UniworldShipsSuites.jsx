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
    const [uniCurrentHero, setUniCurrentHero] = useState(0)
    const uniHeroImages = [1, 2, 3]

    useEffect(() => {
        const uniTimer = setInterval(() => {
            setUniCurrentHero(prev => (prev + 1) % uniHeroImages.length)
        }, 5000)
        return () => clearInterval(uniTimer)
    }, [uniHeroImages.length])

    const [uniActiveFaq, setUniActiveFaq] = useState(null)
    const uniToggleFaq = i => setUniActiveFaq(uniActiveFaq === i ? null : i)

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
            <section className="uni-hero-section">
                {uniHeroImages.map((num, idx) => (
                    <div
                        key={idx}
                        className={`uni-hero-background uni-hero-placeholder-bg ${uniCurrentHero === idx ? 'uni-active' : ''}`}
                    >
                        <div className="uni-hero-placeholder-overlay">
                            <Image size={40} className="uni-placeholder-icon" />
                            <span>Uniworld River Cruise Scene {num}</span>
                        </div>
                    </div>
                ))}
                <div className="uni-hero-overlay-layer"></div>
                <div className="uni-hero-content-wrapper">
                    <div className="uni-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Uniworld Boutique River Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uni-hero-main-title">
                        Uniworld Ships &amp; Suites: Complete Guide
                    </h1>
                    <p className="uni-hero-subtitle-text">
                        Explore every Uniworld River Cruise ship and suite category, including staterooms, luxury suites, amenities, layouts, and tips for choosing the best cabin.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="uni-intro-section">
                <div className="uni-intro-container">
                    <div className="uni-intro-grid">

                        <div className="uni-intro-text-col">
                            <span className="uni-eyebrow">A BOUTIQUE HOTEL ON THE WATER</span>
                            <h2 className="uni-section-heading">Uniworld Ships and Suites: Complete Guide</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-intro-lead">Uniworld Boutique River Cruises is renowned for combining luxury hospitality with intimate river cruising.</p>
                            <p className="uni-intro-body">Unlike many cruise lines that use standardized ship designs, each Uniworld vessel features its own distinctive décor, inspired by the destinations it sails. From elegant staterooms to lavish suites with butler service, every accommodation is designed to deliver a boutique hotel experience on the water.</p>
                            <p className="uni-intro-body">Whether you're deciding which ship to book or choosing between a classic stateroom and a luxury suite, this guide explains everything you need to know about the Uniworld fleet, cabin categories, onboard amenities, and how to select the best accommodation for your travel style.</p>
                        </div>

                        <div className="uni-intro-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-image-placeholder-box">
                                    <Image size={32} className="uni-placeholder-icon" />
                                    <span>Uniworld Ship Exterior</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                                <div className="uni-image-badge">
                                    <Gem size={13} />
                                    <span>Boutique River Cruising, Reimagined</span>
                                </div>
                            </div>
                            <div className="uni-statement-box">
                                <div className="uni-statement-accent"></div>
                                <div className="uni-statement-text">
                                    <p className="uni-statement-primary">Design matters on a boutique river ship.</p>
                                    <p className="uni-statement-bold">No two Uniworld ships are identical.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FLEET ── */}
            <section className="uni-fleet-section">
                <div className="uni-fleet-container">
                    <div className="uni-fleet-header">
                        <span className="uni-eyebrow">THE FLEET</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Explore the Uniworld Fleet</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-fleet-intro">Uniworld operates a collection of boutique river ships across Europe, Egypt, India, and select international destinations. Most vessels accommodate between <strong>120 and 160 guests</strong>, creating a relaxed atmosphere with personalized service.</p>
                    </div>
                    <div className="uni-fleet-stats-bar">
                        <div className="uni-fleet-stat">
                            <span className="uni-fleet-stat-num">10+</span>
                            <span className="uni-fleet-stat-label">Signature Ships</span>
                        </div>
                        <div className="uni-fleet-stat-divider"></div>
                        <div className="uni-fleet-stat">
                            <span className="uni-fleet-stat-num">120–160</span>
                            <span className="uni-fleet-stat-label">Guests Per Ship</span>
                        </div>
                        <div className="uni-fleet-stat-divider"></div>
                        <div className="uni-fleet-stat">
                            <span className="uni-fleet-stat-num">5+</span>
                            <span className="uni-fleet-stat-label">Regions Worldwide</span>
                        </div>
                        <div className="uni-fleet-stat-divider"></div>
                        <div className="uni-fleet-stat">
                            <span className="uni-fleet-stat-num">100%</span>
                            <span className="uni-fleet-stat-label">Boutique Design</span>
                        </div>
                    </div>
                    <div className="uni-fleet-super-badge">
                        <Ship size={17} />
                        <strong>Signature Super Ships</strong>
                        <span>Several vessels belong to Uniworld&apos;s &ldquo;Super Ship&rdquo; collection, offering upgraded interiors and modern amenities.</span>
                    </div>
                    <div className="uni-fleet-cards-grid">
                        {fleet.map(({ ship, region }, idx) => (
                            <div key={ship} className="uni-fleet-card">
                                <div className="uni-fleet-card-index">0{idx + 1}</div>
                                <div className="uni-fleet-card-icon"><Ship size={20} /></div>
                                <h3 className="uni-fleet-card-name">{ship}</h3>
                                <div className="uni-fleet-card-region">
                                    <MapPin size={12} />
                                    <span>{region}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="uni-fleet-footer-note">
                        <Compass size={16} />
                        <span>Each vessel reflects regional architecture, art, and culture — ensuring no two ships feel alike.</span>
                    </div>
                </div>
            </section>

            {/* ── BOUTIQUE DESIGN ── */}
            <section className="uni-boutique-section">
                <div className="uni-boutique-container">
                    <div className="uni-boutique-grid">

                        <div className="uni-boutique-text-col">
                            <span className="uni-eyebrow">SIGNATURE DESIGN</span>
                            <h2 className="uni-section-heading">Boutique Design Sets Every Ship Apart</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-boutique-lead">One of Uniworld's defining features is its commitment to unique interior design.</p>

                            <div className="uni-boutique-pills">
                                {boutiqueItems.map((item, idx) => (
                                    <div key={idx} className="uni-boutique-pill">
                                        <CheckCircle size={16} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uni-boutique-conclusion-box">
                                <p>Instead of mass-produced interiors, each ship is curated to create an immersive luxury environment.</p>
                            </div>
                        </div>

                        <div className="uni-boutique-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-image-placeholder-box">
                                    <Image size={32} className="uni-placeholder-icon" />
                                    <span>Boutique Lounge Interior</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                            </div>
                            <div className="uni-boutique-icon-box">
                                <Sparkles size={22} />
                                <p>Distinctive décor inspired by each destination.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── STATEROOM CATEGORIES ── */}
            <section className="uni-cabins-section">
                <div className="uni-cabins-container">
                    <div className="uni-cabins-header">
                        <span className="uni-eyebrow">ROOM CATEGORIES</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Understanding Stateroom Categories</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-cabins-grid">
                        {cabinSections.map(({ id, Icon, title, body, items, note }) => (
                            <article key={id} className="uni-cabin-card">
                                <div className="uni-cabin-card-icon"><Icon size={22} /></div>
                                <h3 className="uni-cabin-card-title">{title}</h3>
                                <p className="uni-cabin-card-body">{body}</p>
                                <ul className="uni-cabin-card-list">
                                    {items.map((item, iIdx) => (
                                        <li key={iIdx}>
                                            <ChevronRight size={13} className="uni-cabin-chevron" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {note && <p className="uni-cabin-card-note">{note}</p>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LUXURY SUITES ── */}
            <section className="uni-suites-section">
                <div className="uni-suites-container">
                    <div className="uni-suites-grid">

                        <div className="uni-suites-text-col">
                            <span className="uni-eyebrow">TOP-TIER ACCOMMODATION</span>
                            <h2 className="uni-section-heading">Luxury Suites</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-suites-lead">Suites represent the highest level of onboard accommodation.</p>
                            <p className="uni-suites-body">Depending on the ship, guests may enjoy:</p>

                            <ul className="uni-suites-list">
                                {suiteItems.map((item, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={15} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="uni-suites-body">Many suites feature elegant furnishings comparable to luxury boutique hotels.</p>
                        </div>

                        <div className="uni-suites-side-col">
                            <div className="uni-image-frame">
                                <div className="uni-image-placeholder-box">
                                    <Image size={32} className="uni-placeholder-icon" />
                                    <span>Luxury Suite Layout</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                            </div>
                            <div className="uni-navy-callout">
                                <Crown size={26} />
                                <h3>Luxury, tailored to you</h3>
                                <p>Suite categories vary by vessel, so compare the deck plan and included services before upgrading.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BUTLER SERVICE ── */}
            <section className="uni-butler-section">
                <div className="uni-butler-container">
                    <div className="uni-butler-side-by-side">
                        <div className="uni-butler-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-image-placeholder-box">
                                    <Image size={32} className="uni-placeholder-icon" />
                                    <span>Personalized Butler Service</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                                <div className="uni-butler-img-badge">
                                    <ConciergeBell size={13} />
                                    <span>Personalized Suite Service</span>
                                </div>
                            </div>
                            <div className="uni-butler-distinction-strip">
                                <div className="uni-butler-distinction-icon"><Crown size={22} /></div>
                                <div className="uni-butler-distinction-text">
                                    <strong>What sets Uniworld apart</strong>
                                    <span>Personalized butler service in qualifying suites creates a truly bespoke experience — confirm your suite category and exact service inclusions when booking.</span>
                                </div>
                            </div>
                        </div>
                        <div className="uni-butler-content-col">
                            <span className="uni-eyebrow uni-eyebrow-light">PERSONALIZED SERVICE</span>
                            <h2 className="uni-section-heading uni-white-heading">Butler Service Explained</h2>
                            <div className="uni-heading-separator-bar uni-separator-white"></div>
                            <p className="uni-butler-intro">One of Uniworld&apos;s signature luxury benefits is butler service for qualifying suites. This level of personalized attention distinguishes Uniworld from many premium river cruise lines.</p>
                            <div className="uni-butler-cards-grid">
                                {butlerItems.map((item, idx) => (
                                    <div key={idx} className="uni-butler-card">
                                        <div className="uni-butler-card-icon">
                                            <ConciergeBell size={18} />
                                        </div>
                                        <p className="uni-butler-card-text">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ONBOARD AMENITIES ── */}
            <section className="uni-amenities-section">
                <div className="uni-amenities-container">
                    <div className="uni-amenities-header">
                        <span className="uni-eyebrow">INCLUDED ON BOARD</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Onboard Amenities Available to Every Guest</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-amenities-grid">
                        {amenityItems.map(({ label, Icon }, idx) => (
                            <div key={label} className="uni-amenity-card">
                                <div className="uni-amenity-num">0{idx + 1}</div>
                                <div className="uni-amenity-icon"><Icon size={22} /></div>
                                <h3 className="uni-amenity-label">{label}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="uni-amenities-footer">
                        <p>Many ships also feature unique lounges inspired by the destinations they visit.</p>
                    </div>
                </div>
            </section>

            {/* ── CABIN COMPARISON ── */}
            <section className="uni-compare-section">
                <div className="uni-compare-container">
                    <div className="uni-compare-header">
                        <span className="uni-eyebrow">AT A GLANCE</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Comparing Cabin Categories</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-compare-table-wrap">
                        <table className="uni-table uni-comparison-table">
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
            <section className="uni-choose-section">
                <div className="uni-choose-container">
                    <div className="uni-choose-header">
                        <span className="uni-eyebrow uni-eyebrow-light">BOOKING GUIDANCE</span>
                        <h2 className="uni-section-heading uni-white-heading" style={{ textAlign: 'center' }}>Choosing the Best Cabin</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    </div>

                    <div className="uni-choose-grid">
                        {chooseBlocks.map(({ Icon, label, title, intro, items }, idx) => (
                            <article key={idx} className="uni-choose-card">
                                <div className="uni-choose-label"><Icon size={13} /> <span>{label}</span></div>
                                <h3 className="uni-choose-title">{title}</h3>
                                <p className="uni-choose-intro">{intro}</p>
                                <ul className="uni-choose-list">
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

                    <div className="uni-choose-footer">
                        <p>Selecting the right category comes down to how you prefer to spend your time on board.</p>
                    </div>
                </div>
            </section>

            {/* ── ACCESSIBILITY ── */}
            <section className="uni-access-section">
                <div className="uni-access-container">
                    <div className="uni-access-grid">

                        <div className="uni-access-text-col">
                            <span className="uni-eyebrow">PLAN AHEAD</span>
                            <h2 className="uni-section-heading">Accessibility Considerations</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-access-lead">Some Uniworld ships include accessible accommodations designed for guests with mobility needs.</p>
                            <p className="uni-access-body">Accessibility features may include:</p>

                            <div className="uni-access-pillars">
                                {accessibilityItems.map((item, idx) => (
                                    <div key={idx} className="uni-access-pillar">
                                        <div className="uni-access-pillar-icon"><CheckCircle size={18} /></div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="uni-access-body">Availability varies by ship and itinerary, so early booking is recommended.</p>
                        </div>

                        <div className="uni-access-side-col">
                            <div className="uni-image-frame">
                                <div className="uni-image-placeholder-box">
                                    <Image size={32} className="uni-placeholder-icon" />
                                    <span>Accessible Room Cabin View</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                            </div>
                            <div className="uni-access-callout">
                                <Accessibility size={28} />
                                <h3>Ask before booking</h3>
                                <p>Accessibility can vary by vessel, deck, and itinerary. Confirm the details with your travel advisor.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SHIP AMENITIES ── */}
            <section className="uni-shipamen-section">
                <div className="uni-shipamen-container">
                    <div className="uni-shipamen-grid">

                        <div className="uni-shipamen-text-col">
                            <span className="uni-eyebrow">BEYOND THE CABIN</span>
                            <h2 className="uni-section-heading">Ship Amenities That Enhance the Experience</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-shipamen-lead">Beyond accommodations, guests benefit from numerous premium services.</p>

                            <div className="uni-shipamen-pillars">
                                {shipAmenityItems.map((item, idx) => (
                                    <div key={idx} className="uni-shipamen-pillar">
                                        <CheckCircle size={16} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uni-shipamen-conclusion-box">
                                <p>These amenities contribute to Uniworld's reputation as a luxury all-inclusive river cruise operator.</p>
                            </div>
                        </div>

                        <div className="uni-shipamen-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-image-placeholder-box">
                                    <Image size={32} className="uni-placeholder-icon" />
                                    <span>Onboard Dining &amp; Lounge Scene</span>
                                </div>
                                <div className="uni-frame-overlay uni-overlay-soft"></div>
                            </div>
                            <div className="uni-shipamen-stat-badge">
                                <Star size={15} />
                                <span>A Luxury All-Inclusive Experience</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── TIPS ── */}
            <section className="uni-tips-section">
                <div className="uni-tips-container">
                    <div className="uni-tips-grid">

                        <div className="uni-tip-index">
                            <span className="uni-tip-num">01</span>
                            <p>Research the vessel, not just the itinerary.</p>
                        </div>

                        <div className="uni-tips-content">
                            <span className="uni-eyebrow">BEFORE YOU BOOK</span>
                            <h2 className="uni-section-heading">Tips for Selecting the Right Ship</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-tips-lead">Before booking, consider:</p>

                            <ul className="uni-tips-list">
                                {tipsItems.map((item, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={15} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="uni-tips-conclusion">
                                <p>Because each vessel has a unique design, researching individual ships helps ensure the best experience.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SEMANTIC KEYWORDS ── */}
            <section className="uni-keywords-section">
                <div className="uni-keywords-container">
                    <div className="uni-keywords-header">
                        <span className="uni-eyebrow">SEO OPTIMIZATION</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Semantic Keywords</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-keyword-chips">
                        {keywordChips.map((chip, idx) => (
                            <span key={idx} className="uni-keyword-chip">{chip}</span>
                        ))}
                    </div>

                    <div className="uni-eeat-card">
                        <div className="uni-eeat-icon"><Search size={22} /></div>
                        <h3 className="uni-eeat-title">EEAT Signals</h3>
                        <ul className="uni-eeat-list">
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
            <section className="uni-linking-section">
                <div className="uni-linking-container">
                    <div className="uni-linking-header">
                        <span className="uni-eyebrow">SEO STRATEGY</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Internal Linking Suggestions</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-linking-table-wrap">
                        <table className="uni-table">
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
            <section className="uni-references-section">
                <div className="uni-references-container">
                    <div className="uni-references-header">
                        <span className="uni-eyebrow">TRUSTED RESEARCH</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>External Authority References</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-references-list">
                        {externalRefs.map((ref, idx) => (
                            <div key={idx} className="uni-reference-item">
                                <div className="uni-reference-icon"><Globe size={17} /></div>
                                <span>{ref}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── IMAGE RECOMMENDATIONS ── */}
            <section className="uni-imageplan-section">
                <div className="uni-imageplan-container">
                    <div className="uni-imageplan-header">
                        <span className="uni-eyebrow">CONTENT PRODUCTION</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Image Recommendations</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-imageplan-grid">
                        {imageRecs.map(({ suggestion, alt, img }, idx) => (
                            <figure key={idx} className="uni-imageplan-card">
                                <div className="uni-imageplan-media">
                                    {img
                                        ? <img src={img} alt={alt} />
                                        : <div className="uni-imageplan-placeholder"><Eye size={24} /><span>Recommended Image</span></div>}
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
                        <h2 className="uni-section-heading">Insight from Angela Hughes</h2>
                        <div className="uni-heading-separator-bar"></div>
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
            <section className="uni-takeaways-section">
                <div className="uni-takeaways-container">
                    <div className="uni-takeaways-header">
                        <span className="uni-eyebrow">THE ESSENTIALS</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-takeaways-list">
                        {takeaways.map((item, idx) => (
                            <div key={idx} className="uni-takeaway-item">
                                <div className="uni-takeaway-icon"><CheckCircle size={18} /></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uni-faq-main-section uni-faq-section">
                <div className="uni-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uni-eyebrow">QUESTIONS TRAVELERS ASK</span>
                        <h2 className="uni-section-heading">Frequently Asked Questions</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>
                    <div className="uni-faq-list-wrapper">
                        {faqs.map(([question, answer], index) => (
                            <div
                                key={question}
                                className="uni-faq-individual-item"
                                onClick={() => uniToggleFaq(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault()
                                        uniToggleFaq(index)
                                    }
                                }}
                                aria-expanded={uniActiveFaq === index}
                            >
                                <div className="uni-faq-question-row">
                                    <span>{question}</span>
                                    <span className="uni-faq-toggle-icon">{uniActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {uniActiveFaq === index && (
                                    <p className="uni-faq-answer-text">{answer}</p>
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