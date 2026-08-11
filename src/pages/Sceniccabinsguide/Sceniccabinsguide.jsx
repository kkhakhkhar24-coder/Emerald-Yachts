import ProfilePictureAH from "../../assets/Media (2).jpg"
import Navbar from '../../components/Navbar/Navbar'
import './Sceniccabinsguide.css'
import {
    Sparkles, Phone, LayoutList, CheckCircle, Bed, Crown, Wifi, Coffee, Users, Waves, Home, Compass, MapPin, Heart, Star, Award, Gem, Layers, DoorOpen, Bath, Tv, Shirt, Utensils, Briefcase, Umbrella, DollarSign, Eye, Trophy, Wind, ConciergeBell, ShieldCheck, Image as ImageIcon, Globe, Ship, Mountain
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function ScenicCabinsGuide() {

    /* Hero rotating gradient tints (no photos used) */
    const scgHeroTints = [
        'linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 60%, #274472 100%)',
        'linear-gradient(135deg, #1c2f4a 0%, #274472 60%, #0f1c2e 100%)',
        'linear-gradient(135deg, #274472 0%, #0f1c2e 60%, #1c2f4a 100%)'
    ]
    const [scgCurrentHero, setScgCurrentHero] = useState(0)
    useEffect(() => {
        const scgTimer = setInterval(() => {
            setScgCurrentHero((prev) => (prev + 1) % scgHeroTints.length)
        }, 5000)
        return () => clearInterval(scgTimer)
    }, [scgHeroTints.length])

    const [scgActiveFaq, setScgActiveFaq] = useState(null)
    const scgToggleFaq = (index) => {
        setScgActiveFaq(scgActiveFaq === index ? null : index)
    }

    /* Reusable placeholder visual block (used instead of real images) */
    const ScgPlaceholder = ({ label, dark, tall, icon: Icon = ImageIcon }) => (
        <div className={`scg-img-placeholder ${dark ? 'scg-img-placeholder-dark' : ''} ${tall ? 'scg-img-placeholder-tall' : ''}`}>
            <Icon size={tall ? 34 : 26} />
            <span>{label}</span>
        </div>
    )

    /* Why Scenic Suites Stand Out */
    const scgStandoutList = [
        { text: 'Private veranda', icon: DoorOpen },
        { text: 'Personalized butler service', icon: ConciergeBell },
        { text: 'King-size Scenic Slumber Bed', icon: Bed },
        { text: 'Pillow menu', icon: Layers },
        { text: 'Luxury linens', icon: Sparkles },
        { text: 'Spacious marble bathroom', icon: Bath },
        { text: 'Walk-in shower', icon: Waves },
        { text: 'Premium bath amenities', icon: Gem },
        { text: 'Complimentary minibar', icon: Coffee },
        { text: 'Espresso machine', icon: Coffee },
        { text: 'Flat-screen television', icon: Tv },
        { text: 'Complimentary Wi-Fi', icon: Wifi }
    ]

    /* Suite Categories */
    const scgSuites = [
        {
            name: 'Verandah Suite',
            intro: 'The Verandah Suite is the most popular accommodation aboard Scenic Eclipse.',
            features: ['Approximately 344 sq. ft.', 'Private veranda', 'Butler service', 'Sitting area', 'King-size bed', 'Luxury bathroom', 'Walk-in wardrobe', 'Complimentary minibar'],
            closing: 'Ideal for couples seeking outstanding value without compromising luxury.'
        },
        {
            name: 'Deluxe Verandah Suite',
            intro: 'Located on higher decks, these suites offer the same elegant design with enhanced views.',
            features: ['Higher deck location', 'Private veranda', 'Spacious sitting area', 'Butler service', 'Premium bathroom amenities', 'Luxury bedding'],
            closing: 'Perfect for travelers who appreciate elevated ocean views.'
        },
        {
            name: 'Grand Deluxe Verandah Suite',
            intro: 'These suites provide additional interior space and larger outdoor areas.',
            features: ['Expanded living area', 'Larger veranda', 'Butler service', 'Luxury furnishings', 'Excellent ship location', 'Beautiful ocean views'],
            closing: 'A wonderful choice for longer voyages.'
        },
        {
            name: 'Spa Suite',
            intro: "Designed for wellness-focused travelers, Spa Suites offer convenient access to Scenic's Senses Spa.",
            features: ['Spacious accommodation', 'Spa-inspired amenities', 'Priority spa access', 'Butler service', 'Private veranda', 'Luxury bathroom', 'Wellness-focused experience'],
            closing: 'Ideal for guests who plan to spend time relaxing and rejuvenating onboard.'
        },
        {
            name: 'Panorama Suite',
            intro: 'Panorama Suites feature spectacular forward-facing views.',
            features: ['Large panoramic windows', 'Expansive veranda', 'Elegant living area', 'Premium location', 'Butler service', 'Exceptional scenery'],
            closing: 'These suites are especially popular on expedition itineraries.'
        },
        {
            name: 'Grand Panorama Suite',
            intro: 'Offering even more space, these suites combine luxury accommodations with breathtaking views.',
            features: ['Separate living area', 'Large private terrace', 'Butler service', 'Premium furnishings', 'Expansive ocean views', 'Luxury bathroom'],
            closing: 'Excellent for travelers celebrating special occasions.'
        },
        {
            name: "Owner's Penthouse Suite",
            intro: 'One of the most luxurious accommodations aboard Scenic Eclipse.',
            features: ['Separate bedroom', 'Spacious living room', 'Large private terrace', 'Dining area', 'Butler service', 'Premium amenities', 'Luxury entertainment system'],
            closing: 'Ideal for guests seeking exceptional privacy and comfort.'
        },
        {
            name: 'Two-Bedroom Penthouse Suite',
            intro: 'Perfect for families or couples traveling together.',
            features: ['Two bedrooms', 'Separate living room', 'Multiple bathrooms', 'Butler service', 'Large veranda', 'Ample storage', 'Spacious layout'],
            closing: 'A fantastic option for multigenerational travel.'
        }
    ]

    /* Butler Service in Every Suite */
    const scgButlerList = [
        { text: 'Unpacking luggage', icon: Briefcase },
        { text: 'Restaurant reservations', icon: Utensils },
        { text: 'In-suite dining', icon: Coffee },
        { text: 'Laundry arrangements', icon: Shirt },
        { text: 'Beverage requests', icon: Coffee },
        { text: 'Special celebrations', icon: Sparkles },
        { text: 'Concierge assistance', icon: ConciergeBell },
        { text: 'Personalized preferences', icon: Heart }
    ]

    /* Suite Amenities */
    const scgAmenitiesList = [
        { text: 'Luxury toiletries', icon: Gem },
        { text: 'Plush bathrobes', icon: Shirt },
        { text: 'Slippers', icon: Home },
        { text: 'Hair dryer', icon: Wind },
        { text: 'Pillow menu', icon: Layers },
        { text: 'Climate control', icon: ShieldCheck },
        { text: 'Daily housekeeping', icon: Sparkles },
        { text: 'Evening turndown service', icon: Bed },
        { text: 'Complimentary minibar', icon: Coffee },
        { text: 'Espresso machine', icon: Coffee }
    ]

    /* Which Suite Should You Choose */
    const scgPicker = [
        { label: 'Best Value', suite: 'Verandah Suite', desc: 'Perfect for most travelers who want luxury without upgrading to larger accommodations.', icon: DollarSign },
        { label: 'Best for Views', suite: 'Panorama Suite', desc: 'Ideal for Arctic, Antarctica, Greenland, and Iceland expeditions.', icon: Eye },
        { label: 'Best for Wellness', suite: 'Spa Suite', desc: "Convenient access to Scenic's wellness facilities and spa.", icon: Waves },
        { label: 'Best for Families', suite: 'Two-Bedroom Penthouse Suite', desc: 'Offers extra privacy and generous living space.', icon: Users },
        { label: 'Best Luxury Experience', suite: "Owner's Penthouse Suite", desc: 'The ultimate Scenic accommodation featuring expansive living areas and premium amenities.', icon: Trophy }
    ]

    /* Tips for Choosing the Right Cabin */
    const scgTipsList = [
        { text: 'Cruise destination', icon: MapPin },
        { text: 'Length of voyage', icon: Compass },
        { text: 'Budget', icon: DollarSign },
        { text: 'Deck location', icon: Layers },
        { text: 'Mobility needs', icon: ShieldCheck },
        { text: 'Preferred views', icon: Eye },
        { text: 'Family size', icon: Users },
        { text: 'Desired level of luxury', icon: Crown }
    ]

    /* Why Book with Trips & Ships */
    const scgWhyBookList = [
        { text: 'Compare Scenic suite categories', icon: LayoutList },
        { text: 'Select the best cabin location', icon: MapPin },
        { text: 'Understand deck plans', icon: Layers },
        { text: 'Find exclusive promotions', icon: Award },
        { text: 'Coordinate airfare and hotels', icon: Compass },
        { text: 'Arrange pre- and post-cruise stays', icon: Umbrella },
        { text: 'Secure special amenities', icon: Gem },
        { text: 'Provide personalized concierge support', icon: ConciergeBell }
    ]

    /* FAQs */
    const scgFaqs = [
        { question: 'Do all Scenic Eclipse cabins have balconies?', answer: 'Yes. Every accommodation aboard Scenic Eclipse and Scenic Eclipse II is an all-veranda suite with a private outdoor space.' },
        { question: 'Does every suite include butler service?', answer: 'Yes. Butler service is included for every suite category.' },
        { question: 'What is the smallest Scenic suite?', answer: 'The Verandah Suite is the entry-level accommodation, offering approximately 344 square feet of luxurious living space.' },
        { question: 'Are Scenic suites suitable for long voyages?', answer: 'Yes. Scenic suites are spacious and thoughtfully designed, making them ideal for extended luxury cruises.' },
        { question: 'Which suite offers the best views?', answer: 'Panorama Suites and Grand Panorama Suites provide some of the most spectacular forward-facing views aboard the ship.' },
        { question: 'Are minibars included?', answer: 'Yes. Complimentary in-suite minibars are included and replenished throughout your voyage.' },
        { question: 'Can families stay together?', answer: 'Yes. Two-Bedroom Penthouse Suites are ideal for families and multigenerational travelers.' },
        { question: 'Is room service available?', answer: 'Yes. Guests can enjoy in-suite dining with assistance from their dedicated butler.' },
        { question: 'Are spa amenities included?', answer: "Spa Suites include wellness-focused features and convenient access to Scenic's Senses Spa." },
        { question: 'Which Scenic suite offers the best value?', answer: 'The Verandah Suite offers an excellent balance of luxury, space, amenities, and value.' },
        { question: 'Are all bathrooms luxurious?', answer: 'Yes. Every suite includes a spacious marble bathroom with premium amenities and a walk-in shower.' },
        { question: 'How do I choose the right Scenic cabin?', answer: 'The best cabin depends on your itinerary, budget, preferred location, and travel style. Our Scenic specialists can help you compare suite categories and recommend the ideal accommodation for your journey.' }
    ]

    const scgSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-cabins-guide",
                "name": "Scenic Cabins Guide",
                "url": "https://www.tripsandships.com/scenic-cabins-guide",
                "description": "Discover every suite category aboard Scenic Eclipse and Scenic Eclipse II. Compare cabin sizes, amenities, butler service, locations, and luxury features to find the perfect Scenic suite for your cruise.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/scenic-cabins-guide#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, yacht cruises, river cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsandships.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/scenic-cabins-guide#article",
                "headline": "Scenic Cabins Guide",
                "url": "https://www.tripsandships.com/scenic-cabins-guide",
                "description": "Expert guide to Scenic Eclipse and Scenic Eclipse II suite categories, cabin locations, amenities, butler service, deck options, and tips for choosing the perfect luxury accommodation.",
                "image": "https://www.tripsandships.com/images/scenic-cabins-guide.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/scenic-cabins-guide" }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Scenic cruise planning services helping travelers compare suite categories, cabin locations, itineraries, and luxury cruise experiences."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsandships.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic Cabins Guide", "item": "https://www.tripsandships.com/scenic-cabins-guide" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Do all Scenic Eclipse cabins have balconies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every accommodation aboard Scenic Eclipse and Scenic Eclipse II is an all-veranda suite with a private outdoor balcony." } },
                    { "@type": "Question", "name": "Does every Scenic suite include butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite category includes personalized butler service throughout your voyage." } },
                    { "@type": "Question", "name": "What is the smallest Scenic suite?", "acceptedAnswer": { "@type": "Answer", "text": "The Verandah Suite is the entry-level accommodation, offering approximately 344 square feet of luxurious living space." } },
                    { "@type": "Question", "name": "Are Scenic suites suitable for long voyages?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic suites are spacious, comfortable, and designed for extended luxury expeditions and cruises." } },
                    { "@type": "Question", "name": "Which Scenic suite offers the best views?", "acceptedAnswer": { "@type": "Answer", "text": "Panorama Suites and Grand Panorama Suites provide spectacular forward-facing ocean views, making them popular on expedition itineraries." } },
                    { "@type": "Question", "name": "Are minibars included in Scenic suites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite includes a complimentary minibar that is replenished throughout the voyage." } },
                    { "@type": "Question", "name": "Can families stay together in Scenic suites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Two-Bedroom Penthouse Suite is ideal for families and multigenerational travelers seeking additional space." } },
                    { "@type": "Question", "name": "Is room service available?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Guests can enjoy in-suite dining and room service with assistance from their dedicated butler." } },
                    { "@type": "Question", "name": "What amenities are included in every Scenic suite?", "acceptedAnswer": { "@type": "Answer", "text": "Every suite includes a private veranda, butler service, luxury bedding, marble bathroom, complimentary minibar, espresso machine, Wi-Fi, and premium bath amenities." } },
                    { "@type": "Question", "name": "Which Scenic suite offers the best value?", "acceptedAnswer": { "@type": "Answer", "text": "The Verandah Suite offers an excellent combination of luxury, generous space, premium amenities, and value." } },
                    { "@type": "Question", "name": "Are all Scenic suite bathrooms luxurious?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite features a spacious marble bathroom with a walk-in shower, premium toiletries, plush robes, and luxury finishes." } },
                    { "@type": "Question", "name": "How do I choose the best Scenic cabin?", "acceptedAnswer": { "@type": "Answer", "text": "The best Scenic cabin depends on your itinerary, preferred deck, budget, desired views, and travel style. A Scenic travel specialist can help you compare suite categories and choose the ideal accommodation." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Cabins Guide | Scenic Eclipse Suites & Cabin Categories</title>
                <meta name="title" content="Scenic Cabins Guide | Choose the Best Scenic Eclipse Suite" />
                <meta
                    name="description"
                    content="Discover every suite category aboard Scenic Eclipse and Scenic Eclipse II. Compare cabin sizes, amenities, locations, butler service, and luxury features to find the perfect Scenic suite for your voyage."
                />
                <meta name="keywords" content="Scenic Cabins Guide, Scenic Eclipse cabins, Scenic Eclipse suites, Scenic cabin guide, Scenic suite categories, Scenic Eclipse cabin reviews, Scenic cruise suites, Scenic Eclipse accommodation" />
                <script type="application/ld+json">
                    {JSON.stringify(scgSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION — rotating gradient tints, no photos */}
                <section className="fcel-hero-section">
                    {scgHeroTints.map((tint, idx) => (
                        <div
                            key={idx}
                            className={`fcel-hero-slide ${scgCurrentHero === idx ? 'fcel-slide-active' : ''}`}
                            style={{ backgroundImage: tint }}
                        />
                    ))}
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>All-Veranda Suites &amp; Butler Service</span>
                        </div>
                        <h1 className="fcel-hero-title">Scenic Cabins Guide</h1>
                        <p className="fcel-hero-subtitle">
                            Find the Perfect Suite for Your Scenic Eclipse Journey
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Compare Suite Categories
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">ALL-VERANDA LUXURY SUITES</span>
                                <h2 className="fcel-section-heading">Find the Perfect Suite for Your Scenic Eclipse Journey</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    One of the defining features of Scenic Eclipse and Scenic Eclipse II is that every accommodation is a spacious, all-veranda suite. Unlike many luxury cruise lines that offer inside or oceanview cabins, Scenic ensures every guest enjoys a private outdoor space, elegant furnishings, and personalized butler service.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Whether you're planning an expedition to Antarctica, exploring the Mediterranean, or cruising through the Arctic, choosing the right suite can make your journey even more memorable. This guide explains every Scenic suite category, highlights key amenities, and helps you decide which accommodation best fits your travel style.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <ScgPlaceholder label="Scenic Eclipse All-Veranda Suite" />
                                <div className="fcel-intro-badge-float">
                                    <Crown size={15} />
                                    <span>Every Suite. Every Veranda.</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Scenic Eclipse was designed as a six-star Discovery Yacht, blending expedition capability with luxury hotel-style accommodations.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY SCENIC SUITES STAND OUT */}
                <section className="scg-standout-section">
                    <div className="scg-standout-container">
                        <span className="fcel-eyebrow-label">
                            <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Why Scenic Suites Stand Out
                        </span>
                        <h2 className="fcel-section-heading">Every suite includes:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="scg-standout-grid">
                            {scgStandoutList.map((item, idx) => {
                                const ScgIcon = item.icon
                                return (
                                    <div key={idx} className="scg-icon-pill">
                                        <ScgIcon size={16} />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="scg-standout-note">
                            No matter which suite you choose, you'll enjoy exceptional comfort and attentive service.
                        </p>
                    </div>
                </section>

                {/* CTA BANNER #1 */}
                <section className="scg-cta-banner">
                    <div className="scg-cta-banner-inner">
                        <p className="scg-cta-banner-text">Not sure which suite fits your travel style?</p>
                        <Link to="/contact" className="scg-cta-banner-btn">
                            <Phone size={16} />
                            Speak With an Advisor
                        </Link>
                    </div>
                </section>

                {/* SCENIC SUITE CATEGORIES */}
                <section className="scg-suites-section">
                    <div className="scg-suites-container">
                        <div className="scg-suites-header">
                            <span className="fcel-eyebrow-label">
                                <Bed size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Scenic Suite Categories
                            </span>
                            <h2 className="fcel-section-heading">From spacious entry-level suites to owner-style residences.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">
                                Scenic offers a variety of suite categories ranging from spacious entry-level accommodations to expansive owner-style residences.
                            </p>
                        </div>

                        {scgSuites.map((suite, idx) => {
                            const isReverse = idx % 2 === 1
                            return (
                                <div key={idx} className={`scg-suite-row ${isReverse ? 'scg-suite-row-reverse' : ''}`}>
                                    <div className="scg-suite-visual">
                                        <ScgPlaceholder label={suite.name} tall />
                                    </div>
                                    <div className="scg-suite-copy">
                                        <span className="scg-suite-badge">Suite Category {idx + 1} of {scgSuites.length}</span>
                                        <h3 className="scg-suite-name">{suite.name}</h3>
                                        <p className="scg-suite-intro">{suite.intro}</p>
                                        <ul className="scg-suite-features">
                                            {suite.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="scg-suite-feature-item">
                                                    <CheckCircle size={15} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="scg-suite-closing">{suite.closing}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* BUTLER SERVICE IN EVERY SUITE */}
                <section className="scg-butler-section">
                    <div className="scg-butler-container">
                        <div className="scg-butler-grid">
                            <div>
                                <ScgPlaceholder label="Your Dedicated Butler" dark tall />
                            </div>
                            <div>
                                <span className="fcel-eyebrow-label">
                                    <ConciergeBell size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Butler Service in Every Suite
                                </span>
                                <h2 className="fcel-section-heading">Every Scenic suite includes dedicated butler service.</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph" style={{ color: '#cbd5e1', marginBottom: 0 }}>
                                    Your butler can assist with:
                                </p>
                                <ul className="scg-butler-list">
                                    {scgButlerList.map((item, idx) => {
                                        const ScgIcon = item.icon
                                        return (
                                            <li key={idx} className="scg-butler-list-item">
                                                <ScgIcon size={15} />
                                                <span>{item.text}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p className="scg-butler-note">
                                    This level of service is one of Scenic's most distinctive luxury features.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SUITE AMENITIES */}
                <section className="scg-amenities-section">
                    <div className="scg-amenities-container">
                        <span className="fcel-eyebrow-label">
                            <Gem size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Suite Amenities
                        </span>
                        <h2 className="fcel-section-heading">Premium amenities throughout the ship.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Regardless of category, guests enjoy premium amenities throughout the ship. Included features:</p>
                        <div className="scg-amenities-grid">
                            {scgAmenitiesList.map((item, idx) => {
                                const ScgIcon = item.icon
                                return (
                                    <div key={idx} className="scg-icon-pill">
                                        <ScgIcon size={16} />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="scg-amenities-note">
                            Everything is designed to provide maximum comfort throughout your voyage.
                        </p>
                    </div>
                </section>

                {/* WHICH SUITE SHOULD YOU CHOOSE */}
                <section className="scg-picker-section">
                    <div className="scg-picker-container">
                        <div className="scg-picker-header">
                            <span className="fcel-eyebrow-label">
                                <Trophy size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Which Suite Should You Choose?
                            </span>
                            <h2 className="fcel-section-heading">Match your travel style to the ideal suite.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="scg-picker-grid">
                            {scgPicker.map((item, idx) => {
                                const ScgIcon = item.icon
                                return (
                                    <div key={idx} className="scg-picker-card">
                                        <div className="scg-picker-icon">
                                            <ScgIcon size={22} />
                                        </div>
                                        <p className="scg-picker-label">{item.label}</p>
                                        <h4 className="scg-picker-suite">{item.suite}</h4>
                                        <p className="scg-picker-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA BANNER #2 */}
                <section className="scg-cta-banner">
                    <div className="scg-cta-banner-inner">
                        <p className="scg-cta-banner-text">Compare suite categories side-by-side with a Scenic specialist.</p>
                        <Link to="/contact" className="scg-cta-banner-btn">
                            <LayoutList size={16} />
                            Compare Suite Categories
                        </Link>
                    </div>
                </section>

                {/* TIPS FOR CHOOSING THE RIGHT CABIN */}
                <section className="scg-tips-section">
                    <div className="scg-tips-container">
                        <span className="fcel-eyebrow-label">
                            <Compass size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Tips for Choosing the Right Cabin
                        </span>
                        <h2 className="fcel-section-heading">When selecting your Scenic suite, consider:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="scg-tips-grid">
                            {scgTipsList.map((item, idx) => {
                                const ScgIcon = item.icon
                                return (
                                    <div key={idx} className="scg-icon-pill">
                                        <ScgIcon size={16} />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="scg-tips-note">
                            Our Scenic specialists can help you compare available suite categories and identify the best value for your sailing.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="scg-whybook-section">
                    <div className="scg-whybook-container">
                        <span className="fcel-eyebrow-label">
                            <Award size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Why Book with Trips & Ships Luxury Travel?
                        </span>
                        <h2 className="fcel-section-heading">We help travelers:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <ul className="scg-whybook-list">
                            {scgWhyBookList.map((item, idx) => {
                                const ScgIcon = item.icon
                                return (
                                    <li key={idx} className="scg-whybook-item">
                                        <ScgIcon size={16} />
                                        <span>{item.text}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className="fcel-lead-paragraph">
                            We'll help you choose the perfect suite for your Scenic adventure.
                        </p>
                        <div className="scg-whybook-cta-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>
                </section>


                {/* EXPERT INSIGHT */}
                <section id="explora-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                    <div className="medi-expert-editorial-container">
                        <div className="medi-expert-editorial-card">

                            {/* Left Side: Portrait and Floating Stat Badge */}
                            <div className="medi-editorial-portrait-block">
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
                                        <span className="medi-stat-number">121+</span>
                                        <span className="medi-stat-label">Countries Visited</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Editorial Text */}
                            <div className="medi-editorial-content-block">
                                <div className="medi-editorial-header">
                                    <div className="medi-editorial-eyebrow-container">
                                        <Award size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why Modern Luxury Travelers <br className="medi-growth-title-break" />Are Choosing Scenic
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    According to Angela Hughes, many travelers are initially attracted to Scenic because of its ultra-luxury discovery yachts — but ultimately fall in love with the all-inclusive onboard expedition experience.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees Scenic travelers prioritizing:
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'Polar discovery yachting',
                                            'Truly all-inclusive luxury',
                                            'Butler service for every suite',
                                            'Helicopter & submarine features',
                                            'Up to 10 dining experiences',
                                            'Immersive Zodiac excursions'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <CheckCircle size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="medi-editorial-body-para">
                                    As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers compare luxury cruise experiences realistically — based on real-world expertise rather than generic online recommendations.
                                </p>

                                <div className="medi-expertise-section-box">
                                    <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                    <div className="medi-expertise-horizontal-strip">
                                        {[
                                            { title: 'Ultra-luxury yachting', icon: Ship },
                                            { title: 'Polar expeditions', icon: Mountain },
                                            { title: 'Butler services', icon: Users },
                                            { title: 'Luxury cruise planning', icon: Compass },
                                            { title: 'Custom expedition travel', icon: Sparkles }
                                        ].map((item, idx) => {
                                            const IconComponent = item.icon
                                            return (
                                                <div key={idx} className="medi-expertise-pills-row">
                                                    <div className="medi-expertise-pill-icon-box">
                                                        <IconComponent size={14} />
                                                    </div>
                                                    <span className="medi-expertise-pill-text">{item.title}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* FAQ SECTION */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {scgFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => scgToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {scgActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {scgActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Choose Your Scenic Eclipse Suite?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            We help travelers compare Scenic suite categories, select the best cabin location, understand deck plans, find exclusive promotions, coordinate airfare and hotels, arrange pre- and post-cruise stays, secure special amenities, and provide personalized concierge support.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Compare Suite Categories
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ScenicCabinsGuide