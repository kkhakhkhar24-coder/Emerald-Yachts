import './IsScenicWorthIt.css'
import {
    Ship, Anchor, CheckCircle, ChevronRight, Compass, Sparkles,
    Star, Users, Heart, Utensils, Wine, Wifi, BedDouble, Globe,
    Snowflake, Waves, DollarSign, Award, Phone, LayoutList,
    Image as ImageIcon, XCircle, Gem, MapPin, Bath, Shirt, Coffee,
    ConciergeBell, Sailboat, Mountain, Fish
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'

/* ── Placeholder used everywhere an image would normally sit ── */
function ScnPlaceholder({ label, className = '' }) {
    return (
        <div className={`scn-img-placeholder ${className}`}>
            <ImageIcon size={30} strokeWidth={1.5} />
            <span>{label}</span>
        </div>
    )
}

function IsScenicWorthIt() {

    /* Hero rotating placeholder "images" */
    const scnHeroSlides = [
        'Scenic Eclipse sailing at sunset',
        'Luxury suite with private veranda',
        'Guests on a European river cruise excursion'
    ]
    const [scnCurrentHero, setScnCurrentHero] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setScnCurrentHero(prev => (prev + 1) % scnHeroSlides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [scnHeroSlides.length])

    /* FAQ accordion */
    const [scnActiveFaq, setScnActiveFaq] = useState(null)
    const scnToggleFaq = i => setScnActiveFaq(scnActiveFaq === i ? null : i)

    const scnFaqs = [
        { q: 'Is Scenic worth the money?', a: 'Yes. Many travelers believe Scenic offers excellent value because the fare includes butler service, premium beverages, dining, gratuities, Wi-Fi, and numerous other luxury amenities.' },
        { q: 'What makes Scenic different from other cruise lines?', a: 'Scenic is known for its truly all-inclusive approach, personalized butler service in every suite, and luxury expedition ships.' },
        { q: 'Does Scenic include gratuities?', a: 'Yes. Gratuities are included in the cruise fare.' },
        { q: 'Are drinks included on Scenic cruises?', a: 'Yes. Complimentary premium beverages are included throughout your cruise.' },
        { q: 'Is Scenic good for river cruises?', a: "Absolutely. Scenic's river cruises are highly regarded for their luxury accommodations, included excursions, and exceptional service." },
        { q: 'What destinations does Scenic visit?', a: 'Scenic offers river cruises throughout Europe and Southeast Asia, along with ocean and expedition cruises to Antarctica, the Arctic, the Mediterranean, Australia, and many other destinations.' },
        { q: 'Does Scenic provide butler service?', a: 'Yes. Every Scenic suite includes personalized butler service.' },
        { q: 'Is Wi-Fi included?', a: 'Yes. Complimentary Wi-Fi is included on Scenic cruises.' },
        { q: 'Are shore excursions included?', a: 'Many Scenic itineraries include a variety of shore excursions and Scenic Freechoice experiences.' },
        { q: 'Is Scenic suitable for families?', a: 'Scenic primarily caters to adults seeking luxury travel and cultural enrichment. It is not designed as a family-focused cruise line.' },
        { q: 'What is Scenic Eclipse?', a: "Scenic Eclipse is Scenic's ultra-luxury Discovery Yacht, designed for expedition cruising while offering six-star accommodations and innovative exploration experiences." },
        { q: 'Is Scenic better than mainstream cruise lines?', a: 'For travelers seeking luxury, personalized service, and all-inclusive value, Scenic offers a significantly different experience than mainstream cruise lines.' },
        { q: 'What should I pack for a Scenic cruise?', a: 'Packing depends on your destination, but comfortable clothing, smart-casual evening attire, and weather-appropriate outerwear are recommended.' },
        { q: 'Does Scenic offer expedition cruises?', a: 'Yes. Scenic operates luxury expedition cruises to Antarctica, the Arctic, Iceland, Greenland, and other remote destinations.' },
        { q: 'Who should book a Scenic cruise?', a: 'Scenic is ideal for travelers seeking luxury accommodations, personalized service, all-inclusive value, and immersive destination experiences.' }
    ]

    const scnSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/is-scenic-worth-it",
                "name": "Is Scenic Worth It?",
                "url": "https://www.tripsandships.com/is-scenic-worth-it",
                "description": "Learn whether Scenic Luxury Cruises are worth the investment with our comprehensive review of Scenic's all-inclusive amenities, river cruises, expedition voyages, dining, and service."
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel advisors specializing in river cruises, ocean cruises, expedition cruises, and customized luxury vacations."
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Scenic worth the money?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic offers excellent value through its all-inclusive pricing, including butler service, premium beverages, fine dining, gratuities, Wi-Fi, and luxury accommodations." } },
                    { "@type": "Question", "name": "What makes Scenic different from other cruise lines?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic stands out for its truly all-inclusive luxury experience, butler service in every suite, and innovative Scenic Eclipse Discovery Yachts." } },
                    { "@type": "Question", "name": "Does Scenic include gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gratuities are included in the cruise fare." } },
                    { "@type": "Question", "name": "Is Scenic good for river cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic's river cruises are widely recognized for their luxury accommodations, included excursions, gourmet dining, and exceptional service." } },
                    { "@type": "Question", "name": "Does Scenic offer expedition cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic operates luxury expedition cruises to Antarctica, the Arctic, Greenland, Iceland, and other remote destinations aboard Scenic Eclipse." } }
                ]
            }
        ]
    }

    const scnInclusions = [
        { Icon: BedDouble, text: 'Luxury suite accommodations' },
        { Icon: ConciergeBell, text: 'Butler service' },
        { Icon: Wine, text: 'Premium beverages' },
        { Icon: Utensils, text: 'Multiple dining venues' },
        { Icon: Star, text: 'Specialty restaurants' },
        { Icon: DollarSign, text: 'Gratuities' },
        { Icon: Wifi, text: 'Complimentary Wi-Fi' },
        { Icon: Coffee, text: 'In-suite minibar' },
        { Icon: Ship, text: 'Room service' },
        { Icon: MapPin, text: 'Airport transfers on many itineraries' },
        { Icon: Compass, text: 'Expert-led enrichment programs' },
        { Icon: CheckCircle, text: 'Selected shore excursions' }
    ]

    const scnEclipseHighlights = [
        { Icon: Sailboat, title: 'Discovery Yachts', desc: 'Purpose-built vessels designed for exploration in remote destinations.' },
        { Icon: Snowflake, title: 'Polar expeditions', desc: 'Immersive voyages to Antarctica and the Arctic with expert guides.' },
        { Icon: Waves, title: 'Helicopter experiences', desc: 'Available on select voyages for unmatched aerial perspectives.' },
        { Icon: Fish, title: 'Submarine excursions', desc: 'Available on select voyages for a rare underwater vantage point.' },
        { Icon: Mountain, title: 'Observation lounges', desc: 'Panoramic spaces designed for taking in dramatic landscapes.' },
        { Icon: Sparkles, title: 'Luxury spa', desc: 'Wellness treatments and relaxation spaces onboard every voyage.' },
        { Icon: ConciergeBell, title: 'Butler for every suite', desc: 'Personalized service extended to every guest, not just top suites.' }
    ]

    const scnAccommodationFeatures = [
        { Icon: BedDouble, text: 'Private veranda' },
        { Icon: ConciergeBell, text: 'Butler service' },
        { Icon: Users, text: 'Spacious living areas' },
        { Icon: Shirt, text: 'Luxury linens' },
        { Icon: Coffee, text: 'Premium minibar' },
        { Icon: Bath, text: 'Marble bathroom' },
        { Icon: Sparkles, text: 'High-end bath amenities' }
    ]

    const scnButlerServices = [
        { Icon: Coffee, title: 'Morning coffee service', desc: 'Your day starts exactly the way you like it.' },
        { Icon: Shirt, title: 'Packing and unpacking', desc: 'Arrive and depart each destination without the hassle.' },
        { Icon: Bath, title: 'Laundry arrangements', desc: 'Your wardrobe is cared for throughout the voyage.' },
        { Icon: Utensils, title: 'In-suite dining', desc: 'Restaurant-quality meals delivered to your suite.' },
        { Icon: CheckCircle, title: 'Reservations', desc: 'Dining and excursion bookings handled on your behalf.' },
        { Icon: Sparkles, title: 'Special requests', desc: 'Personal touches that make each voyage feel tailor-made.' }
    ]

    const scnDestinations = [
        { Icon: Snowflake, name: 'Antarctica' },
        { Icon: Snowflake, name: 'Arctic' },
        { Icon: Mountain, name: 'Greenland' },
        { Icon: Waves, name: 'Iceland' },
        { Icon: Mountain, name: 'Norwegian Fjords' },
        { Icon: Globe, name: 'South Pacific' },
        { Icon: Sailboat, name: 'Australia' },
        { Icon: Globe, name: 'New Zealand' }
    ]

    const scnValueFor = [
        'Prefer luxury over mass-market cruising',
        'Appreciate all-inclusive pricing',
        'Want exceptional service',
        'Enjoy cultural enrichment',
        'Value destination-focused itineraries',
        'Prefer smaller ships',
        'Seek expedition adventures without sacrificing comfort'
    ]

    const scnDrawbacks = [
        { Icon: DollarSign, title: 'Premium pricing', desc: "Scenic's fares are higher than mainstream cruise lines, though the comprehensive inclusions often reduce overall vacation costs." },
        { Icon: Waves, title: 'Relaxed atmosphere', desc: 'Scenic emphasizes elegant relaxation rather than high-energy entertainment, casinos, or water parks.' },
        { Icon: Ship, title: 'Smaller ships', desc: "Guests who enjoy the excitement of mega-ships may find Scenic's intimate vessels quieter." }
    ]

    const scnEditorialPills = [
        'Expert Scenic cruise advice',
        'Personalized itinerary recommendations',
        'Access to exclusive promotions',
        'Flight, hotel & transfer assistance',
        'Support before, during & after your cruise'
    ]

    return (
        <div className="scn-page">
            <Helmet>
                <title>Is Scenic Worth It? Honest Review of Scenic Luxury Cruises (2026)</title>
                <meta name="title" content="Is Scenic Worth It? Honest Review of Scenic Luxury Cruises (2026)" />
                <meta name="description" content="Wondering if Scenic Cruises are worth the price? Explore Scenic's ships, all-inclusive amenities, expedition cruises, river cruises, dining, service, and value in our expert review." />
                <meta name="keywords" content="Is Scenic Worth It, Is Scenic Cruises Worth It, Scenic Cruise Reviews, Scenic Luxury Cruises Review, Scenic Eclipse Review, Scenic River Cruises Review, Scenic Cruise Value, Scenic All-Inclusive Cruises, Scenic Luxury Cruise Guide" />
                <script type="application/ld+json">{JSON.stringify(scnSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="scn-hero">
                {scnHeroSlides.map((label, idx) => (
                    <div key={idx} className={`scn-hero-bg ${scnCurrentHero === idx ? 'scn-active' : ''}`}>
                        <ScnPlaceholder label={label} />
                    </div>
                ))}
                <div className="scn-hero-overlay"></div>
                <div className="scn-hero-content">
                    <div className="scn-hero-tag"><Anchor size={15} /><span>Scenic Luxury Cruises · Trips &amp; Ships Luxury Travel</span></div>
                    <h1 className="scn-hero-title">Is Scenic Worth It? A Complete Guide to Scenic Luxury Cruises</h1>
                    <p className="scn-hero-subtitle">An honest look at Scenic's all-inclusive amenities, river cruises, Scenic Eclipse expedition voyages, dining, service, and overall value.</p>
                    <div className="scn-hero-dots">
                        {scnHeroSlides.map((_, idx) => (
                            <div key={idx} className={`scn-hero-dot ${scnCurrentHero === idx ? 'scn-active' : ''}`}></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INTRO: IS SCENIC REALLY WORTH IT ── */}
            <section className="scn-split-section">
                <div className="scn-container">
                    <div className="scn-split-grid">
                        <div className="scn-split-text">
                            <span className="scn-eyebrow"><Gem size={14} /> THE LUXURY QUESTION</span>
                            <h2 className="scn-section-heading">Everything You Need to Know Before Booking</h2>
                            <div className="scn-separator"></div>
                            <p className="scn-body">If you're considering a luxury cruise, you've likely come across Scenic Luxury Cruises &amp; Tours. Known for its all-inclusive philosophy, award-winning river cruises, and innovative Scenic Eclipse Discovery Yachts, Scenic has earned a reputation as one of the world's premier luxury travel companies.</p>
                            <p className="scn-body">Scenic cruises also come with premium pricing, leading many travelers to ask: is Scenic really worth the cost?</p>
                            <div className="scn-quote-box">
                                <div className="scn-quote-accent"></div>
                                <div className="scn-quote-text">
                                    <p className="scn-quote-bold">For many travelers, the answer is yes.</p>
                                    <p>Particularly if you value personalized service, exceptional dining, luxury accommodations, and an experience where nearly everything is included in the upfront price.</p>
                                </div>
                            </div>
                        </div>
                        <div className="scn-split-image scn-frame">
                            <ScnPlaceholder label="Scenic Eclipse Discovery Yacht at anchor" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES SCENIC DIFFERENT ── */}
            <section className="scn-split-section scn-alt">
                <div className="scn-container">
                    <div className="scn-split-grid scn-reverse">
                        <div className="scn-split-image scn-frame">
                            <ScnPlaceholder label="All-inclusive onboard dining experience" />
                            <div className="scn-frame-badge"><Sparkles size={13} /><span>Truly All-Inclusive</span></div>
                        </div>
                        <div className="scn-split-text">
                            <span className="scn-eyebrow"><Star size={14} /> ALL-INCLUSIVE PHILOSOPHY</span>
                            <h2 className="scn-section-heading">What Makes Scenic Different?</h2>
                            <div className="scn-separator"></div>
                            <p className="scn-lead">Scenic positions itself as a truly all-inclusive luxury travel company.</p>
                            <p className="scn-body">Unlike many cruise lines that charge extra for beverages, gratuities, Wi-Fi, or specialty dining, Scenic bundles most of these amenities into the cruise fare, allowing guests to enjoy a seamless vacation with fewer unexpected expenses.</p>
                            <p className="scn-body">Whether you're sailing on a European river or exploring Antarctica aboard Scenic Eclipse, the focus remains on luxury, convenience, and personalized service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="scn-checklist-section">
                <div className="scn-container">
                    <div className="scn-checklist-header">
                        <span className="scn-eyebrow"><CheckCircle size={14} /> COMPLETE INCLUSIONS</span>
                        <h2 className="scn-section-heading">What Is Included with Scenic Cruises?</h2>
                        <div className="scn-separator scn-separator-center"></div>
                        <p className="scn-body">One of Scenic's biggest advantages is its extensive list of inclusions. Most Scenic cruises include:</p>
                    </div>
                    <div className="scn-checklist-grid">
                        {scnInclusions.map(({ Icon, text }, idx) => (
                            <div key={idx} className="scn-check-item"><Icon size={19} /><span>{text}</span></div>
                        ))}
                    </div>
                    <div className="scn-checklist-footer">
                        Because so much is included, many travelers find the overall value to be stronger than cruise lines with lower base fares but significant onboard charges.
                    </div>
                </div>
            </section>

            {/* ── RIVER VS OCEAN CRUISES ── */}
            <section className="scn-compare-section">
                <div className="scn-container">
                    <div className="scn-compare-header">
                        <span className="scn-eyebrow"><Anchor size={14} /> TWO WAYS TO EXPLORE</span>
                        <h2 className="scn-section-heading">Scenic River Cruises vs. Scenic Ocean Cruises</h2>
                        <div className="scn-separator scn-separator-center"></div>
                        <p className="scn-body">Scenic offers two distinct luxury experiences.</p>
                    </div>
                    <div className="scn-compare-grid">
                        <div className="scn-compare-card">
                            <div className="scn-compare-card-media">
                                <ScnPlaceholder label="Scenic river cruise ship along the Danube" />
                            </div>
                            <div className="scn-compare-card-body">
                                <div className="scn-compare-card-icon"><Waves size={22} /></div>
                                <h3 className="scn-compare-card-title">Scenic River Cruises</h3>
                                <p className="scn-body" style={{ marginBottom: '14px' }}>Sailing through Europe and Southeast Asia, visiting iconic destinations along the Rhine, Danube, Seine, Douro, Mekong, and other famous waterways.</p>
                                <ul className="scn-compare-card-list">
                                    {['Intimate ships', 'Scenic Freechoice excursions', 'Butler service', 'Gourmet dining', 'Luxurious suites', 'Cultural immersion'].map((item, i) => (
                                        <li key={i}><ChevronRight size={14} />{item}</li>
                                    ))}
                                </ul>
                                <p className="scn-compare-card-foot">Ideal for travelers who want to explore multiple cities without constantly unpacking.</p>
                            </div>
                        </div>
                        <div className="scn-compare-card">
                            <div className="scn-compare-card-media">
                                <ScnPlaceholder label="Scenic Eclipse expedition in polar waters" />
                            </div>
                            <div className="scn-compare-card-body">
                                <div className="scn-compare-card-icon"><Snowflake size={22} /></div>
                                <h3 className="scn-compare-card-title">Scenic Eclipse Ocean Cruises</h3>
                                <p className="scn-body" style={{ marginBottom: '14px' }}>Unlike traditional expedition ships, Scenic Eclipse combines exploration with six-star luxury.</p>
                                <ul className="scn-compare-card-list">
                                    {['Discovery Yachts', 'Polar expeditions', 'Helicopter experiences (select voyages)', 'Submarine excursions (select voyages)', 'Observation lounges', 'Luxury spa', 'Butler service for every suite'].map((item, i) => (
                                        <li key={i}><ChevronRight size={14} />{item}</li>
                                    ))}
                                </ul>
                                <p className="scn-compare-card-foot">One of the industry's most distinctive experiences for adventure and luxury.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC ECLIPSE HIGHLIGHTS ── */}
            <section className="scn-dark-section">
                <div className="scn-container">
                    <div className="scn-dark-header">
                        <span className="scn-eyebrow scn-eyebrow-light"><Sailboat size={14} /> EXPEDITION INNOVATION</span>
                        <h2 className="scn-section-heading scn-heading-white">Outstanding Expedition Experiences</h2>
                        <div className="scn-separator scn-separator-center scn-separator-white"></div>
                        <p>Scenic Eclipse redefines expedition cruising by combining exploration with six-star luxury.</p>
                    </div>
                    <div className="scn-feature-grid">
                        {scnEclipseHighlights.map(({ Icon, title, desc }, idx) => (
                            <div key={idx} className="scn-feature-card">
                                <div className="scn-feature-icon"><Icon size={22} /></div>
                                <h3 className="scn-feature-title">{title}</h3>
                                <p className="scn-feature-desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="scn-dark-footer">Expert expedition teams provide educational presentations, Zodiac excursions, and wildlife experiences while maintaining exceptional comfort onboard.</div>
                </div>
            </section>

            {/* ── ACCOMMODATIONS ── */}
            <section className="scn-split-section">
                <div className="scn-container">
                    <div className="scn-split-grid">
                        <div className="scn-split-text">
                            <span className="scn-eyebrow"><BedDouble size={14} /> WHERE YOU'LL STAY</span>
                            <h2 className="scn-section-heading">Exceptional Accommodations</h2>
                            <div className="scn-separator"></div>
                            <p className="scn-body">Every Scenic suite is designed with comfort and elegance in mind. Features include:</p>
                            <ul className="scn-inline-list">
                                {scnAccommodationFeatures.map(({ Icon, text }, idx) => (
                                    <li key={idx}><Icon size={17} />{text}</li>
                                ))}
                            </ul>
                            <p className="scn-body" style={{ marginTop: '16px' }}>Higher-category suites provide even more space and exclusive benefits. Many guests consider Scenic's accommodations among the finest in luxury cruising.</p>
                        </div>
                        <div className="scn-split-image scn-frame">
                            <ScnPlaceholder label="Luxury suite with marble bathroom and private veranda" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="scn-split-section scn-alt">
                <div className="scn-container">
                    <div className="scn-split-grid scn-reverse">
                        <div className="scn-split-image scn-frame">
                            <ScnPlaceholder label="Chef-inspired fine dining restaurant onboard" />
                        </div>
                        <div className="scn-split-text">
                            <span className="scn-eyebrow"><Utensils size={14} /> CULINARY PROGRAM</span>
                            <h2 className="scn-section-heading">Dining That Rivals Luxury Hotels</h2>
                            <div className="scn-separator"></div>
                            <p className="scn-body">Scenic's culinary program is another reason travelers believe the cruise line is worth the investment. Guests enjoy:</p>
                            <ul className="scn-inline-list">
                                {['Fine dining restaurants', 'Casual venues', 'Specialty dining', 'Chef-inspired menus', 'Fresh regional ingredients', 'Complimentary room service'].map((item, idx) => (
                                    <li key={idx}><CheckCircle size={17} />{item}</li>
                                ))}
                            </ul>
                            <p className="scn-body" style={{ marginTop: '16px' }}>Meals are carefully crafted to reflect destinations while maintaining exceptional quality throughout each voyage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BUTLER SERVICE ── */}
            <section className="scn-dark-section">
                <div className="scn-container">
                    <div className="scn-dark-header">
                        <span className="scn-eyebrow scn-eyebrow-light"><ConciergeBell size={14} /> PERSONALIZED SERVICE</span>
                        <h2 className="scn-section-heading scn-heading-white">Personalized Butler Service</h2>
                        <div className="scn-separator scn-separator-center scn-separator-white"></div>
                        <p>Unlike many luxury cruise lines where butler service is reserved for premium suites, Scenic provides butler service for every suite. Your butler can assist with:</p>
                    </div>
                    <div className="scn-feature-grid">
                        {scnButlerServices.map(({ Icon, title, desc }, idx) => (
                            <div key={idx} className="scn-feature-card">
                                <div className="scn-feature-icon"><Icon size={22} /></div>
                                <h3 className="scn-feature-title">{title}</h3>
                                <p className="scn-feature-desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="scn-dark-footer">This personalized attention contributes significantly to the premium Scenic experience.</div>
                </div>
            </section>

            {/* ── EXPEDITION DESTINATIONS ── */}
            <section className="scn-destinations-section">
                <div className="scn-container">
                    <div className="scn-destinations-header">
                        <span className="scn-eyebrow"><Compass size={14} /> WHERE SCENIC SAILS</span>
                        <h2 className="scn-section-heading">Popular Expedition Destinations</h2>
                        <div className="scn-separator scn-separator-center"></div>
                        <p className="scn-body">Scenic is particularly well known for luxury expedition cruising.</p>
                    </div>
                    <div className="scn-destination-media">
                        <ScnPlaceholder label="Zodiac excursion near icebergs in Antarctica" />
                    </div>
                    <div className="scn-destinations-grid">
                        {scnDestinations.map(({ Icon, name }, idx) => (
                            <div key={idx} className="scn-destination-pill"><Icon size={16} /><span>{name}</span></div>
                        ))}
                    </div>
                    <div className="scn-destinations-footer">Expert expedition teams provide educational presentations, Zodiac excursions, and wildlife experiences while maintaining exceptional comfort onboard.</div>
                </div>
            </section>

            {/* ── IS SCENIC GOOD FOR RIVER CRUISES ── */}
            <section className="scn-highlight-section">
                <div className="scn-highlight-container">
                    <span className="scn-eyebrow"><Waves size={14} /> RIVER CRUISING</span>
                    <h2 className="scn-section-heading">Is Scenic Good for River Cruises?</h2>
                    <div className="scn-separator scn-separator-center"></div>
                    <p className="scn-body">Absolutely. Scenic's river cruises consistently rank among the best in Europe and Southeast Asia.</p>
                    <div className="scn-highlight-card">
                        <p>Travelers seeking a relaxed and immersive cultural experience often find Scenic river cruises to be an outstanding value, thanks to their combination of comfort and destination immersion.</p>
                        <div className="scn-highlight-badges">
                            {['Spacious suites', 'Exceptional dining', 'Included excursions', 'Luxury service', 'Small-ship atmosphere', 'Excellent itineraries'].map((item, idx) => (
                                <div key={idx} className="scn-highlight-badge"><CheckCircle size={14} /><span>{item}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO GETS THE MOST VALUE ── */}
            <section className="scn-value-section">
                <div className="scn-value-grid">
                    <div className="scn-split-image scn-frame">
                        <ScnPlaceholder label="Couple enjoying a luxury river cruise sunset reception" />
                    </div>
                    <div>
                        <span className="scn-eyebrow"><Heart size={14} /> IS SCENIC RIGHT FOR YOU</span>
                        <h2 className="scn-section-heading">Who Gets the Most Value from Scenic?</h2>
                        <div className="scn-separator"></div>
                        <p className="scn-body">Scenic is particularly well suited for travelers who:</p>
                        <ul className="scn-value-list">
                            {scnValueFor.map((item, idx) => (
                                <li key={idx}><CheckCircle size={18} />{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── POTENTIAL DRAWBACKS ── */}
            <section className="scn-drawbacks-section">
                <div className="scn-container">
                    <div className="scn-drawbacks-header">
                        <span className="scn-eyebrow"><XCircle size={14} /> HONEST CONSIDERATIONS</span>
                        <h2 className="scn-section-heading">Potential Drawbacks</h2>
                        <div className="scn-separator scn-separator-center"></div>
                        <p className="scn-body">Although Scenic receives consistently high reviews, it may not be the right fit for every traveler.</p>
                    </div>
                    <div className="scn-drawbacks-grid">
                        {scnDrawbacks.map(({ Icon, title, desc }, idx) => (
                            <div key={idx} className="scn-drawback-card">
                                <div className="scn-drawback-icon"><Icon size={20} /></div>
                                <h3 className="scn-drawback-title">{title}</h3>
                                <p className="scn-drawback-desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── IS SCENIC WORTH THE PRICE (FINAL VALUE) ── */}
            <section className="scn-highlight-section" style={{ background: 'var(--scn-soft)' }}>
                <div className="scn-highlight-container">
                    <span className="scn-eyebrow"><DollarSign size={14} /> THE BOTTOM LINE</span>
                    <h2 className="scn-section-heading">Is Scenic Worth the Price?</h2>
                    <div className="scn-separator scn-separator-center"></div>
                    <p className="scn-body">For many luxury travelers, the answer is yes. While Scenic requires a larger upfront investment, the cruise fare includes many services and amenities that other cruise lines charge extra for.</p>
                    <div className="scn-highlight-card">
                        <p>When considering the value of butler service, premium beverages, specialty dining, gratuities, luxury accommodations, included excursions, and personalized service &mdash; many travelers find Scenic to offer excellent overall value in the ultra-luxury cruise market.</p>
                    </div>
                </div>
            </section>

            {/* ── EDITORIAL: WHY BOOK WITH TRIPS & SHIPS ── */}
            <section className="scn-editorial-section">
                <div className="scn-editorial-card">
                    <div>
                        <div className="scn-editorial-image-frame">
                            <ScnPlaceholder label="Angela Hughes, Luxury Travel Expert" />
                        </div>
                        <div className="scn-editorial-stats">
                            <div>
                                <span className="scn-editorial-stat-number">40+</span>
                                <span className="scn-editorial-stat-label">Years Experience</span>
                            </div>
                            <div className="scn-editorial-stat-divider"></div>
                            <div>
                                <span className="scn-editorial-stat-number">121+</span>
                                <span className="scn-editorial-stat-label">Countries Visited</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="scn-editorial-badge"><Award size={15} /><span>Why Book with Trips &amp; Ships</span></div>
                        <h2 className="scn-editorial-title">Choosing the Right Scenic Itinerary</h2>
                        <p className="scn-editorial-text">Choosing the right Scenic itinerary involves more than selecting a destination. Our luxury travel advisors help you compare ships, suites, and itineraries to ensure you find the perfect cruise. When you book through Trips &amp; Ships Luxury Travel, you'll receive:</p>
                        <div className="scn-editorial-pills">
                            {scnEditorialPills.map((item, idx) => (
                                <div key={idx} className="scn-editorial-pill"><CheckCircle size={14} /><span>{item}</span></div>
                            ))}
                        </div>
                        <p className="scn-editorial-text" style={{ marginTop: '16px' }}>Angela Hughes has spent more than 40 years helping travelers experience the world's finest luxury vacations &mdash; as Founder of Luxury Travel University, Luxury Travel Influencer of the Year, and a Travel Leaders Network Advisory Board Member. Her extensive experience helps clients confidently choose the luxury cruise experience that best suits their interests and travel goals.</p>
                    </div>
                </div>
            </section>

            {/* ── FINAL VERDICT ── */}
            <section className="scn-final-section">
                <div className="scn-final-container">
                    <span className="scn-eyebrow scn-eyebrow-light"><Gem size={14} /> FINAL VERDICT</span>
                    <h2 className="scn-final-heading">Scenic Delivers a Level of Comfort <br /> That Justifies Its Premium Position</h2>
                    <div className="scn-final-card">
                        <p>Scenic stands among the world's premier luxury cruise companies for good reason. Its commitment to all-inclusive pricing, personalized butler service, exceptional dining, and immersive itineraries creates an experience that consistently exceeds expectations.</p>
                        <p>Whether you're sailing through Europe's iconic rivers or embarking on a once-in-a-lifetime expedition to Antarctica aboard Scenic Eclipse, Scenic delivers a level of comfort, service, and attention to detail that justifies its premium positioning.</p>
                    </div>
                    <div className="scn-final-conclusion">
                        <div className="scn-final-conclusion-line"></div>
                        <p className="scn-final-stmt">Well worth considering for your next luxury vacation.</p>
                        <div className="scn-final-conclusion-line"></div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="scn-faq-section">
                <div className="scn-container scn-text-center">
                    <h2 className="scn-section-heading">Frequently Asked Questions</h2>
                    <div className="scn-separator scn-separator-center"></div>
                </div>
                <div className="scn-faq-wrapper">
                    {scnFaqs.map((faq, idx) => (
                        <div key={idx} className="scn-faq-item" onClick={() => scnToggleFaq(idx)}>
                            <div className="scn-faq-question-row">
                                <span>{faq.q}</span>
                                <span className="scn-faq-toggle">{scnActiveFaq === idx ? '\u2212' : '+'}</span>
                            </div>
                            {scnActiveFaq === idx && <p className="scn-faq-answer">{faq.a}</p>}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="scn-cta-section">
                <div className="scn-cta-inner">
                    <h2 className="scn-cta-heading">Ready to Book Your Scenic Cruise?</h2>
                    <p className="scn-cta-paragraph">A well-planned Scenic itinerary can turn a premium price tag into an unforgettable, all-inclusive luxury experience.</p>
                    <p className="scn-cta-paragraph" style={{ opacity: 0.95 }}>With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers compare ships, suites, and itineraries to find the perfect Scenic voyage.</p>
                    <div className="scn-cta-box">
                        <span className="scn-cta-box-title">Whether you are considering:</span>
                        <ul className="scn-cta-box-list">
                            {['Scenic river cruises', 'Scenic Eclipse expedition voyages', 'Multi-country European itineraries', 'Antarctica & Arctic expeditions', 'Custom luxury cruise packages'].map((item, idx) => (
                                <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                    <p className="scn-cta-paragraph" style={{ fontWeight: 500, color: '#fff' }}>Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.</p>
                    <div className="scn-cta-buttons">
                        <a href="/contact" className="scn-cta-btn-primary"><Phone size={17} />Schedule a Consultation</a>
                        <button className="scn-cta-btn-secondary"><LayoutList size={17} />Explore Scenic Itineraries</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default IsScenicWorthIt
