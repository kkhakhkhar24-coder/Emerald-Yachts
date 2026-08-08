import Navbar from '../../components/Navbar/Navbar'
import './UniworldSoloTravel.css'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, ShieldCheck, FileText, Globe, Luggage,
    Briefcase, TrendingUp, Eye, Smile, BookOpen, DollarSign,
    AlertTriangle, Camera, Bike
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function UniworldSoloTravel() {
    const [ustCurrentHero, setUstCurrentHero] = useState(0)
    const ustHeroImages = [
        'https://placehold.co/1920x800/274472/ffffff?text=Solo+River+Cruising',
        'https://placehold.co/1920x800/1a2a44/ffffff?text=Uniworld+Luxury',
        'https://placehold.co/1920x800/0f1c2e/ffffff?text=European+Rivers'
    ]

    useEffect(() => {
        const ustTimer = setInterval(() => {
            setUstCurrentHero(prev => (prev + 1) % ustHeroImages.length)
        }, 5000)
        return () => clearInterval(ustTimer)
    }, [ustHeroImages.length])

    const [ustActiveFaq, setUstActiveFaq] = useState(null)
    const ustToggleFaq = i => setUstActiveFaq(ustActiveFaq === i ? null : i)

    const ustBenefits = [
        { Icon: Ship, label: 'Boutique-sized ships', desc: 'Intimate vessels with 120-190 guests create a welcoming, relaxed atmosphere.' },
        { Icon: Users, label: 'Personalized service', desc: 'Attentive crew members learn your preferences and cater to your needs.' },
        { Icon: MapPin, label: 'Included excursions', desc: 'Guided tours at every port make exploring effortless and social.' },
        { Icon: Utensils, label: 'Open dining arrangements', desc: 'Flexible seating encourages meeting fellow travelers naturally.' },
        { Icon: Compass, label: 'Social lounges', desc: 'Elegant common areas provide comfortable spaces to relax and connect.' },
        { Icon: ShieldCheck, label: 'Safe destinations', desc: 'Well-established tourist routes with experienced crew guidance.' }
    ]

    const ustCabins = [
        {
            type: 'Classic Stateroom',
            Icon: Sun,
            image: 'https://placehold.co/600x400/274472/ffffff?text=Classic+Stateroom',
            bestFor: ['Budget-conscious travelers', 'Guests spending most of the day ashore', 'Shorter itineraries'],
            desc: 'A comfortable base for exploring, with all the luxury amenities you expect from Uniworld.'
        },
        {
            type: 'French Balcony',
            Icon: Camera,
            image: 'https://placehold.co/600x400/1a2a44/ffffff?text=French+Balcony',
            bestFor: ['Scenic views and natural light', 'Relaxing in your cabin', 'Photography enthusiasts'],
            desc: 'Floor-to-ceiling glass doors open to create an open-air balcony, perfect for watching river scenery pass by.'
        },
        {
            type: 'Suite',
            Icon: Crown,
            image: 'https://placehold.co/600x400/0f1c2e/ffffff?text=Suite',
            bestFor: ['Extended cruises', 'Luxury travelers', 'Special occasions'],
            desc: 'Generous living space with separate sitting areas, premium amenities, and priority services.'
        }
    ]

    const ustDiningFeatures = [
        'Open seating arrangements',
        'Shared dining opportunities',
        'Friendly, attentive service',
        'Relaxed atmosphere',
        'Destination-inspired cuisine'
    ]

    const ustExcursions = [
        { Icon: MapPin, text: 'Walking tours' },
        { Icon: Gem, text: 'Castle visits' },
        { Icon: BookOpen, text: 'Museums' },
        { Icon: Utensils, text: 'Wine tastings' },
        { Icon: Globe, text: 'Culinary experiences' },
        { Icon: Smile, text: 'Local markets' },
        { Icon: Bike, text: 'Bicycle tours' }
    ]

    const ustSafetyFeatures = [
        'Organized transportation at every port',
        'Guided sightseeing with expert local guides',
        'Secure ship access with key card entry',
        'Experienced crew focused on guest wellbeing',
        'Well-established tourist destinations',
        'Daily assistance from onboard staff'
    ]

    const ustSocialOpportunities = [
        { Icon: MapPin, text: 'Shore excursions' },
        { Icon: Moon, text: 'Cocktail hours' },
        { Icon: Compass, text: 'Lounge entertainment' },
        { Icon: Utensils, text: 'Shared dining' },
        { Icon: BookOpen, text: 'Cultural presentations' },
        { Icon: Sun, text: 'Sun deck gatherings' }
    ]

    const ustInclusions = [
        'Luxury accommodations',
        'All meals',
        'Premium beverages',
        'Guided excursions',
        'Wi-Fi',
        'Gratuities',
        'Entertainment'
    ]

    const ustBookingTips = [
        'Compare multiple departure dates',
        'Ask about single supplement offers',
        'Book early for the best cabin selection',
        'Review included amenities carefully',
        'Consider shoulder-season departures',
        'Compare itinerary lengths'
    ]

    const ustPackingList = [
        'Passport',
        'Travel insurance documents',
        'Comfortable walking shoes',
        'Day backpack',
        'Portable charger',
        'Lightweight layers',
        'Copies of travel documents'
    ]

    const ustKeyTakeaways = [
        'Uniworld offers a welcoming environment for solo travelers.',
        'Single supplements vary by itinerary, departure date, and cabin category.',
        'Promotional sailings may feature reduced or waived supplements.',
        'Guided excursions make exploring destinations easy and convenient.',
        'Boutique ships encourage social interaction without feeling crowded.',
        'French Balcony cabins are a popular choice for solo guests.',
        'Booking early improves cabin availability and promotional opportunities.'
    ]

    const ustFaqs = [
        { question: 'Is Uniworld good for solo travelers?', answer: 'Yes. The intimate ship size, organized excursions, and welcoming atmosphere make Uniworld a popular choice for solo travelers.' },
        { question: 'What is a single supplement?', answer: 'A single supplement is an additional charge for occupying a cabin designed for two guests.' },
        { question: 'Does Uniworld ever waive the single supplement?', answer: 'Some selected sailings may offer reduced or waived single supplements through limited-time promotions.' },
        { question: 'Which cabin is best for solo travelers?', answer: 'Classic Staterooms and French Balcony cabins are popular choices depending on budget and preferences.' },
        { question: 'Is it easy to meet people onboard?', answer: 'Yes. Open dining, guided excursions, lounges, and onboard events provide natural opportunities to socialize.' },
        { question: 'Are excursions included for solo guests?', answer: 'Yes. Included excursions are generally available to all guests regardless of whether they are traveling alone.' },
        { question: 'Is solo cruising safe?', answer: 'River cruising is generally considered one of the safest ways to travel independently due to organized transportation and guided activities.' },
        { question: 'Are drinks included?', answer: 'Most Uniworld fares include premium beverages, wines, spirits, coffee, tea, and soft drinks.' },
        { question: 'Do solo travelers pay more?', answer: 'Depending on the sailing, a single supplement may increase the overall cruise cost.' },
        { question: 'When is the best time to book?', answer: 'Booking early offers the widest cabin selection and access to promotional pricing.' },
        { question: 'Can solo travelers dine alone?', answer: 'Yes. Guests may dine independently or join other travelers through open seating arrangements.' },
        { question: 'Are there solo-only cabins?', answer: 'Most Uniworld cabins are designed for double occupancy, although promotional pricing may make select cabins more affordable for solo travelers.' },
        { question: 'Is travel insurance recommended?', answer: 'Yes. Travel insurance is recommended for all international river cruises.' },
        { question: 'Which itinerary is best for solo travelers?', answer: 'The Danube and Rhine are popular first choices due to their variety of destinations and excursions.' },
        { question: 'Is Uniworld worth the cost for solo travelers?', answer: 'Many solo travelers find the all-inclusive amenities, guided experiences, and luxury service provide excellent overall value despite any applicable single supplement.' }
    ]

    const ustInternalLinks = [
        { text: 'First-Time Uniworld River Cruise Guide', url: '/uniworld-river-cruises/first-time-guide/' },
        { text: 'Best Uniworld Cabins', url: '/uniworld-river-cruises/best-cabins/' },
        { text: 'Uniworld Cabin Categories', url: '/uniworld-river-cruises/cabin-categories/' },
        { text: 'What Is Included on a Uniworld River Cruise', url: '/uniworld-river-cruises/whats-included/' },
        { text: 'Uniworld Dress Code and Packing Guide', url: '/uniworld-river-cruises/dress-code-packing/' },
        { text: 'Best Uniworld River Cruise Itineraries', url: '/uniworld-river-cruises/best-itineraries/' }
    ]

    const ustSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "logo": "https://www.tripsshipsluxurytravel.com/logo.png"
            },
            {
                "@type": "WebPage",
                "name": "Uniworld Solo River Cruises and Single Supplement Guide",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/solo-travel/",
                "description": "Complete guide to Uniworld solo river cruises, single supplements, cabins, costs, safety, and travel planning.",
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "headline": "Uniworld Solo River Cruises and Single Supplement Guide",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/solo-travel/" },
                "datePublished": "2026-08-07",
                "dateModified": "2026-08-07"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Solo Travel", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/solo-travel/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": ustFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Solo Travel &amp; Single Supplement Guide</title>
                <meta name="title" content="Uniworld Solo Travel & Single Supplement Guide" />
                <meta name="description" content="Planning a solo Uniworld River Cruise? Learn about single supplements, solo traveler benefits, cabins, costs, safety, and expert travel tips." />
                <meta name="keywords" content="Uniworld Solo River Cruises, Uniworld single supplement, solo river cruises, solo luxury cruises, solo traveler guide, Uniworld solo cabins, river cruise for singles, luxury solo travel" />
                <script type="application/ld+json">{JSON.stringify(ustSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {ustHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${ustCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Uniworld River Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Uniworld Solo River Cruises and Single Supplement Guide
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Your complete guide to solo river cruising with Uniworld — cabins, costs, safety, and expert tips.
                    </p>
                </div>
            </section>

            {/* ── INTRO / WHY UNIWORLD FOR SOLO ── */}
            <section className="ust-intro-section">
                <div className="ust-intro-container">
                    <div className="ust-intro-top-row">
                        <span className="ust-eyebrow">SOLO TRAVEL GUIDE</span>
                        <h2 className="ust-intro-heading">Is Uniworld a Good Choice for Solo Travelers?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="ust-intro-grid">
                        <div className="ust-intro-text-col">
                            <p className="ust-intro-lead">Traveling solo has become increasingly popular, and river cruising offers one of the easiest and most rewarding ways to explore the world independently.</p>
                            <p className="ust-intro-body">Uniworld Boutique River Cruises provides a welcoming environment where solo travelers can enjoy luxury accommodations, guided excursions, fine dining, and personalized service without the complexity often associated with planning an independent international trip.</p>
                            <p className="ust-intro-body">Many solo travelers appreciate Uniworld because its smaller ships create a friendly and relaxed atmosphere.</p>
                        </div>
                        <div className="ust-intro-image-col">
                            <div className="ust-intro-image-wrapper">
                                <img src="https://placehold.co/600x420/274472/ffffff?text=Solo+Traveler+on+Deck" alt="Solo traveler enjoying a Uniworld River Cruise" className="ust-intro-img" />
                            </div>
                            <div className="ust-intro-badge-row">
                                <div className="ust-intro-stat">
                                    <Users size={16} />
                                    <span>Welcoming for Solo Guests</span>
                                </div>
                                <div className="ust-intro-stat">
                                    <Ship size={16} />
                                    <span>Boutique Ships, 120-190 Guests</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BENEFITS GRID ── */}
            <section className="ust-benefits-section">
                <div className="ust-benefits-container">
                    <div className="ust-benefits-header">
                        <span className="ust-eyebrow">WHY CHOOSE UNIWORLD</span>
                        <h2 className="ust-benefits-heading">Benefits for Solo Travelers</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="ust-benefits-grid">
                        {ustBenefits.map(({ Icon, label, desc }, idx) => (
                            <div key={idx} className="ust-benefit-card">
                                <div className="ust-benefit-img-wrap">
                                    <img
                                        src={`https://placehold.co/400x260/274472/ffffff?text=${encodeURIComponent(label)}`}
                                        alt={label}
                                        className="ust-benefit-img"
                                    />
                                    <div className="ust-benefit-icon-badge">
                                        <Icon size={16} />
                                    </div>
                                </div>
                                <div className="ust-benefit-body">
                                    <h3 className="ust-benefit-title">{label}</h3>
                                    <p className="ust-benefit-desc">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SINGLE SUPPLEMENT ── */}
            <section className="ust-supplement-section">
                <div className="ust-supplement-container">
                    <div className="ust-supplement-grid">
                        <div className="ust-supplement-text-col">
                            <span className="ust-eyebrow">UNDERSTANDING COSTS</span>
                            <h2 className="medi-section-heading">Understanding the Single Supplement</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ust-supplement-lead">A single supplement is an additional charge applied when one traveler occupies a cabin designed for two guests.</p>
                            <p className="ust-supplement-body">The supplement helps offset the revenue that would normally come from double occupancy. However, the exact supplement varies by itinerary, sailing dates, cabin category, and available promotions.</p>
                            <div className="ust-supplement-factors">
                                {[
                                    'Varies by itinerary',
                                    'Depends on sailing dates',
                                    'May differ by cabin category',
                                    'Can change based on promotions'
                                ].map((item, idx) => (
                                    <div key={idx} className="ust-supplement-factor">
                                        <span className="ust-factor-num">0{idx + 1}</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ust-supplement-highlight-col">
                            <div className="ust-highlight-box">
                                <Sparkles size={24} className="ust-highlight-icon" />
                                <h3 className="ust-highlight-title">Solo-Friendly Promotions</h3>
                                <p className="ust-highlight-text">From time to time, promotional offers may reduce or eliminate the single supplement on selected sailings. These offers are capacity controlled, available on specific departures, and subject to availability.</p>
                                <p className="ust-highlight-tip">Booking early increases the chance of finding these promotions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CABIN OPTIONS ── */}
            <section className="ust-cabins-section">
                <div className="ust-cabins-container">
                    <div className="ust-cabins-header">
                        <span className="ust-eyebrow">ACCOMMODATIONS</span>
                        <h2 className="ust-cabins-heading">Choosing the Best Cabin as a Solo Traveler</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="ust-cabins-intro">Solo travelers have several accommodation options depending on budget and preferences.</p>
                    </div>
                    <div className="ust-cabins-grid">
                        {ustCabins.map(({ type, Icon, image, bestFor, desc }, idx) => (
                            <div key={idx} className="ust-cabin-card">
                                <div className="ust-cabin-img-wrap">
                                    <img src={image} alt={type} className="ust-cabin-img" />
                                    <div className="ust-cabin-img-overlay"></div>
                                    <div className="ust-cabin-icon-badge"><Icon size={18} /></div>
                                    <h3 className="ust-cabin-card-title">{type}</h3>
                                </div>
                                <div className="ust-cabin-body">
                                    <p className="ust-cabin-card-desc">{desc}</p>
                                    <div className="ust-cabin-card-bestfor">
                                        <span className="ust-cabin-bestfor-label">Best for:</span>
                                        <div className="ust-cabin-bestfor-tags">
                                            {bestFor.map((item, iIdx) => (
                                                <span key={iIdx} className="ust-cabin-tag">{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="ust-dining-section">
                <div className="ust-dining-container">
                    <div className="ust-dining-grid">
                        <div className="ust-dining-text-col">
                            <span className="ust-eyebrow">ONBOARD EXPERIENCE</span>
                            <h2 className="medi-section-heading">Dining as a Solo Guest</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ust-dining-lead">Dining is often one of the easiest ways to meet other guests.</p>
                            <p className="ust-dining-body">Uniworld generally offers a welcoming dining environment where solo guests feel comfortable. Guests who prefer privacy can also enjoy quieter dining experiences.</p>
                            <div className="ust-dining-features">
                                {ustDiningFeatures.map((item, idx) => (
                                    <div key={idx} className="ust-dining-feature">
                                        <CheckCircle size={16} className="ust-dining-check" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ust-dining-image-col">
                            <div className="ust-image-frame">
                                <img src="https://placehold.co/600x500/274472/ffffff?text=Solo+Guest+Dining" alt="Solo guest dining aboard a Uniworld ship" className="ust-frame-img" />
                                <div className="ust-frame-overlay"></div>
                            </div>
                            <div className="ust-dining-note-box">
                                <Utensils size={16} className="ust-dining-note-icon" />
                                <span>Open seating encourages natural conversation with fellow travelers.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ── */}
            <section className="ust-excursions-section">
                <div className="ust-excursions-container">
                    <div className="ust-excursions-header">
                        <span className="ust-eyebrow">EXPLORE ASHORE</span>
                        <h2 className="ust-excursions-heading">Shore Excursions for Solo Travelers</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="ust-excursions-intro">Included excursions make independent travel much easier. Popular activities include:</p>
                    </div>
                    <div className="ust-excursions-grid">
                        {ustExcursions.slice(0, 4).map(({ Icon, text }, idx) => (
                            <div key={idx} className="ust-excursion-card">
                                <div className="ust-excursion-img-wrap">
                                    <img
                                        src={`https://placehold.co/400x280/1a2a44/ffffff?text=${encodeURIComponent(text)}`}
                                        alt={text}
                                        className="ust-excursion-img"
                                    />
                                    <div className="ust-excursion-img-overlay"></div>
                                    <div className="ust-excursion-icon-badge"><Icon size={18} /></div>
                                    <h3 className="ust-excursion-title">{text}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ust-excursions-row2">
                        {ustExcursions.slice(4).map(({ Icon, text }, idx) => (
                            <div key={idx} className="ust-excursion-card">
                                <div className="ust-excursion-img-wrap">
                                    <img
                                        src={`https://placehold.co/400x280/1a2a44/ffffff?text=${encodeURIComponent(text)}`}
                                        alt={text}
                                        className="ust-excursion-img"
                                    />
                                    <div className="ust-excursion-img-overlay"></div>
                                    <div className="ust-excursion-icon-badge"><Icon size={18} /></div>
                                    <h3 className="ust-excursion-title">{text}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ust-excursions-note">
                        <MapPin size={16} className="ust-excursions-note-icon" />
                        <span>Guided excursions provide opportunities to explore destinations while meeting fellow travelers.</span>
                    </div>
                </div>
            </section>

            {/* ── SAFETY ── */}
            <section className="ust-safety-section">
                <div className="ust-safety-container">
                    <div className="ust-safety-grid">
                        <div className="ust-safety-text-col">
                            <span className="ust-eyebrow">TRAVEL WITH CONFIDENCE</span>
                            <h2 className="medi-section-heading">Safety While Traveling Alone</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ust-safety-lead">River cruises are widely regarded as one of the safest ways to travel independently.</p>
                            <div className="ust-safety-features">
                                {ustSafetyFeatures.map((item, idx) => (
                                    <div key={idx} className="ust-safety-feature">
                                        <ShieldCheck size={18} className="ust-safety-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ust-safety-image-col">
                            <div className="ust-image-frame">
                                <img src="https://placehold.co/600x500/274472/ffffff?text=Safe+River+Cruising" alt="Safe and secure Uniworld river cruise experience" className="ust-frame-img" />
                                <div className="ust-frame-overlay"></div>
                                <div className="ust-image-badge">
                                    <ShieldCheck size={13} />
                                    <span>Secure &amp; Organized</span>
                                </div>
                            </div>
                            <div className="ust-safety-tip-box">
                                <AlertTriangle size={16} className="ust-safety-tip-icon" />
                                <span>As with any trip, normal travel precautions are recommended.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MEETING OTHER TRAVELERS ── */}
            <section className="ust-social-section">
                <div className="ust-social-container">
                    <div className="ust-social-header">
                        <span className="ust-eyebrow ust-eyebrow-light">CONNECT &amp; SOCIALIZE</span>
                        <h2 className="medi-section-heading ust-white-heading">Meeting Other Travelers</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered ust-separator-white"></div>
                        <p className="ust-social-intro">Solo guests often find it easy to socialize because of the intimate size of Uniworld ships. Natural opportunities include:</p>
                    </div>
                    <div className="ust-social-grid">
                        {ustSocialOpportunities.map(({ Icon, text }, idx) => (
                            <div key={idx} className="ust-social-card">
                                <div className="ust-social-card-icon"><Icon size={24} /></div>
                                <h3 className="ust-social-card-title">{text}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="ust-social-note-wrap">
                        <div className="ust-social-note">
                            <Smile size={14} className="ust-social-note-icon" />
                            <span>Participation is optional, allowing you to choose between social interaction and quiet relaxation.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VALUE & COST ── */}
            <section className="ust-value-section">
                <div className="ust-value-container">
                    <div className="ust-value-grid">
                        <div className="ust-value-text-col">
                            <span className="ust-eyebrow">ALL-INCLUSIVE VALUE</span>
                            <h2 className="medi-section-heading">Is Solo Travel More Expensive?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ust-value-lead">Traveling alone may cost more because of the single supplement. However, value remains strong because the cruise fare typically includes:</p>
                            <div className="ust-value-inclusions">
                                {ustInclusions.map((item, idx) => (
                                    <div key={idx} className="ust-value-inclusion">
                                        <CheckCircle size={16} className="ust-value-check" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="ust-value-tip-box">
                                <DollarSign size={16} className="ust-value-tip-icon" />
                                <span>Watching for special promotions can help reduce overall costs.</span>
                            </div>
                        </div>
                        <div className="ust-value-image-col">
                            <div className="ust-image-frame">
                                <img src="https://placehold.co/600x500/274472/ffffff?text=All+Inclusive+Luxury" alt="Uniworld all-inclusive luxury river cruise" className="ust-frame-img" />
                                <div className="ust-frame-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOOKING TIPS ── */}
            <section className="ust-tips-section">
                <div className="ust-tips-container">
                    <div className="ust-tips-grid">
                        <div className="ust-tips-image-col">
                            <div className="ust-image-frame">
                                <img src="https://placehold.co/600x500/274472/ffffff?text=Booking+Tips" alt="Tips for booking a solo Uniworld cruise" className="ust-frame-img" />
                                <div className="ust-frame-overlay"></div>
                            </div>
                            <div className="ust-tips-stat-badge">
                                <TrendingUp size={16} />
                                <span>Early Booking = Better Deals</span>
                            </div>
                            <p className="ust-tips-note">Flexibility often leads to better pricing.</p>
                        </div>
                        <div className="ust-tips-text-col">
                            <span className="ust-eyebrow">PLAN SMART</span>
                            <h2 className="medi-section-heading">Tips for Booking a Solo Cruise</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ust-tips-lead">Before reserving your cruise, consider these expert tips:</p>
                            <div className="ust-tips-list">
                                {ustBookingTips.map((item, idx) => (
                                    <div key={idx} className="ust-tip-item">
                                        <div className="ust-tip-num">0{idx + 1}</div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PACKING TIPS ── */}
            <section className="ust-packing-section">
                <div className="ust-packing-container">
                    <div className="ust-packing-header">
                        <span className="ust-eyebrow">PACKING SMART</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Packing Tips for Solo Travelers</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="ust-packing-grid">
                        {ustPackingList.map((item, idx) => (
                            <div key={idx} className="ust-packing-item">
                                <div className="ust-packing-icon"><Luggage size={20} /></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="ust-packing-note-wrap">
                        <div className="ust-packing-note">
                            <CheckCircle size={14} className="ust-packing-note-icon" />
                            <span>Packing efficiently makes transfers and excursions easier.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT WORTH IT ── */}
            <section className="ust-worth-section">
                <div className="ust-worth-bg"></div>
                <div className="ust-worth-container">
                    <div className="ust-worth-eyebrow-row">
                        <Gem size={18} />
                        <span className="ust-worth-eyebrow-text">THE VERDICT</span>
                    </div>
                    <h2 className="ust-worth-heading">Is Uniworld Worth It for Solo Travelers?</h2>
                    <div className="ust-worth-separator"></div>
                    <div className="ust-worth-card">
                        <p className="ust-worth-body">For travelers seeking comfort, cultural experiences, and personalized service, Uniworld offers an enjoyable solo travel experience.</p>
                        <p className="ust-worth-body ust-worth-emphasis">The combination of all-inclusive amenities, guided excursions, boutique ships, and welcoming public spaces creates an environment where traveling alone feels comfortable rather than isolating.</p>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="ust-takeaways-section">
                <div className="ust-takeaways-container">
                    <div className="ust-takeaways-eyebrow-row">
                        <Sparkles size={18} />
                        <span className="ust-takeaways-eyebrow-text">KEY TAKEAWAYS</span>
                    </div>
                    <h2 className="ust-takeaways-heading">Plan Ahead for a Great Solo Experience</h2>
                    <div className="ust-takeaways-separator"></div>
                    <div className="ust-takeaways-grid">
                        {ustKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="ust-takeaway-item">
                                <CheckCircle size={18} className="ust-takeaway-icon" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INTERNAL LINKS ── */}
            <section className="ust-links-section">
                <div className="ust-links-container">
                    <span className="ust-eyebrow">CONTINUE PLANNING</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Explore More Uniworld Guides</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <div className="ust-links-grid">
                        {ustInternalLinks.map((link, idx) => (
                            <Link key={idx} to={link.url} className="ust-link-card">
                                <span>{link.text}</span>
                                <ArrowRight size={16} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            {/* ── FAQ ── */}
            <section className="ust-faq-section">
                <div className="ust-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ust-eyebrow" style={{ display: 'block', textAlign: 'center' }}>QUESTIONS BEFORE YOU GO</span>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="ust-faq-list-wrapper">
                        {ustFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="ust-faq-item"
                                onClick={() => ustToggleFaq(index)}
                            >
                                <div className="ust-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="ust-faq-toggle-icon">{ustActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {ustActiveFaq === index && (
                                    <p className="ust-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="ust-cta-section">
                <div className="ust-cta-aurora-glow"></div>
                <div className="ust-cta-crystal ust-cta-crystal-1"></div>
                <div className="ust-cta-crystal ust-cta-crystal-2"></div>
                <div className="ust-cta-crystal ust-cta-crystal-3"></div>
                <div className="ust-cta-grid-lines"></div>

                <div className="ust-cta-content">
                    <div className="ust-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="ust-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="ust-cta-title">Ready to Plan Your <br /> Solo Uniworld Journey?</h2>
                    <div className="ust-cta-bar"></div>
                    <p className="ust-cta-subtitle">
                        Start planning your solo Uniworld River Cruise by comparing itineraries, checking for single supplement promotions, and choosing the cabin that best matches your travel style.
                    </p>
                    
                    <div className="ust-cta-considerations-box">
                        <span className="ust-cta-considerations-title">Whether you are considering:</span>
                        <div className="ust-cta-pills">
                            {[
                                'Danube River Cruises',
                                'Rhine River Cruises',
                                'Seine River Cruises',
                                'France & Italy Cruises',
                                'Egypt & Nile Cruises'
                            ].map((item, idx) => (
                                <span key={idx} className="ust-cta-pill">
                                    <Anchor size={12} />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="ust-cta-actions">
                        <Link to="/contact" className="ust-cta-primary-btn">
                            <Phone size={18} />
                            <span>Speak with a solo cruise specialist</span>
                            <ArrowRight size={16} className="ust-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default UniworldSoloTravel
