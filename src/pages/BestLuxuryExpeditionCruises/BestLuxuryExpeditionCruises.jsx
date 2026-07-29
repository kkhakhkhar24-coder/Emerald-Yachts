import Navbar from '../../components/Navbar/Navbar'
import './BestLuxuryExpeditionCruises.css'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// Hero images - placeholder paths
import hero1 from '../../assets/BestLuxuryExpeditionCruises/expedition-antarctica-icebergs.jpg'
import hero2 from '../../assets/BestLuxuryExpeditionCruises/expedition-arctic-polar-wildlife.jpg'
import hero3 from '../../assets/BestLuxuryExpeditionCruises/expedition-galapagos-adventure.jpg'

// Section images - placeholder paths
import expDestAntarctica from '../../assets/BestLuxuryExpeditionCruises/antarctica-expedition.jpg'
import expDestArctic from '../../assets/BestLuxuryExpeditionCruises/arctic-expedition.jpg'
import expDestGalapagos from '../../assets/BestLuxuryExpeditionCruises/galapagos-expedition.jpg'
import expDestKimberley from '../../assets/BestLuxuryExpeditionCruises/kimberley-expedition.jpg'
import expWildlife from '../../assets/BestLuxuryExpeditionCruises/wildlife-expedition.jpg'
import expActivities from '../../assets/BestLuxuryExpeditionCruises/zodiac-excursion.jpg'
import expOnboard from '../../assets/BestLuxuryExpeditionCruises/luxury-suite-view.jpg'
import expScenic from '../../assets/BestLuxuryExpeditionCruises/scenic-eclipse-ship.jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Binoculars, Camera, Waves,
    Leaf, BookOpen, DollarSign, Globe, Trophy, Wind,
    Mountain
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function BestLuxuryExpeditionCruises() {
    const [expCurrentHero, setExpCurrentHero] = useState(0)
    const expHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const expTimer = setInterval(() => {
            setExpCurrentHero(prev => (prev + 1) % expHeroImages.length)
        }, 5000)
        return () => clearInterval(expTimer)
    }, [expHeroImages.length])

    const [expActiveFaq, setExpActiveFaq] = useState(null)
    const expToggleFaq = i => setExpActiveFaq(expActiveFaq === i ? null : i)

    const expFaqs = [
        { question: 'What is a luxury expedition cruise?', answer: 'A luxury expedition cruise combines exploration of remote destinations with premium accommodations, personalized service, gourmet dining, and expert-led excursions.' },
        { question: 'Which cruise line offers the best luxury expedition cruises?', answer: 'Leading options include Scenic Cruises, Silversea Expeditions, Seabourn Expeditions, Ponant, Lindblad Expeditions, and HX, depending on your travel style and destination.' },
        { question: 'Where do luxury expedition cruises travel?', answer: 'Popular destinations include Antarctica, the Arctic, Greenland, Galápagos, Alaska, Kimberley, Iceland, Patagonia, and the South Pacific.' },
        { question: 'Are luxury expedition cruises all-inclusive?', answer: 'Many luxury expedition cruise lines include accommodations, dining, premium beverages, guided excursions, gratuities, and expedition equipment, although inclusions vary by cruise line.' },
        { question: 'Are Zodiac excursions included?', answer: 'Most luxury expedition cruises include Zodiac cruises and guided landings as part of the itinerary.' },
        { question: 'What wildlife can I expect to see?', answer: 'Depending on the destination, guests may see penguins, whales, polar bears, seals, dolphins, sea turtles, seabirds, and many other native species.' },
        { question: 'Is Scenic Eclipse considered a luxury expedition ship?', answer: 'Yes. Scenic Eclipse is widely recognized as one of the world\'s premier ultra-luxury expedition yachts, offering butler service, helicopters, a submersible, and all-inclusive luxury.' },
        { question: 'When is the best time for an expedition cruise?', answer: 'The best season depends on the destination. Polar regions are generally explored during their summer months, while destinations such as the Galápagos are suitable year-round.' },
        { question: 'Are luxury expedition cruises suitable for first-time cruisers?', answer: 'Yes. Many first-time cruisers choose luxury expedition cruises because they combine adventure with premium comfort and expert guidance.' },
        { question: 'What should I pack?', answer: 'Pack destination-appropriate clothing, waterproof outerwear, sturdy walking shoes, binoculars, sunscreen, and a camera for wildlife and scenic photography.' },
        { question: 'Are luxury expedition cruises worth the price?', answer: 'Many travelers believe the combination of exclusive destinations, expert-led experiences, luxury accommodations, and personalized service provides exceptional value.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Our experts provide personalized recommendations, exclusive offers, concierge-level planning, and ongoing support to help you choose the perfect luxury expedition cruise.' }
    ]

    const expCruiseLines = [
        {
            name: 'Scenic Cruises',
            img: expScenic,
            Icon: Ship,
            description: 'Ultra-luxury expedition cruises',
            features: ['Scenic Eclipse & Eclipse II', 'Helicopters & submersible', 'Butler service', 'All-inclusive luxury']
        },
        {
            name: 'Silversea Expeditions',
            img: expDestArctic,
            Icon: Crown,
            description: 'Elegant expedition voyages',
            features: ['Luxurious suites', 'Expert guides', 'Exceptional cuisine', 'Personalized service']
        },
        {
            name: 'Seabourn Expeditions',
            img: expDestAntarctica,
            Icon: Compass,
            description: 'Purpose-built expedition ships',
            features: ['Luxury accommodations', 'Fine dining', 'Specialists on board', 'Immersive experiences']
        },
        {
            name: 'Ponant Explorations',
            img: expDestGalapagos,
            Icon: Sparkles,
            description: 'French elegance meets exploration',
            features: ['Intimate ships', 'Refined cuisine', 'Unique itineraries', 'Cultural focus']
        }
    ]

    const expDestinations = [
        { name: 'Antarctica', img: expDestAntarctica, Icon: Wind, temp: '-10°C to 0°C' },
        { name: 'Arctic & Svalbard', img: expDestArctic, Icon: Binoculars, temp: '-5°C to 5°C' },
        { name: 'Galápagos Islands', img: expDestGalapagos, Icon: Leaf, temp: '20°C to 25°C' },
        { name: 'Kimberley Coast', img: expDestKimberley, Icon: Waves, temp: '18°C to 28°C' }
    ]

    const expActivities = [
        { icon: Binoculars, label: 'Wildlife Viewing', description: 'Expert-guided observation of native species' },
        { icon: Waves, label: 'Zodiac Cruising', description: 'Close encounters with remote landscapes' },
        { icon: Mountain, label: 'Shore Landings', description: 'Guided exploration of pristine destinations' },
        { icon: Camera, label: 'Photography', description: 'Professional expedition photography guidance' },
        { icon: Wind, label: 'Kayaking', description: 'Intimate access to polar waterways' },
        { icon: Trophy, label: 'Helicopter Tours', description: 'Aerial perspectives of remote regions' }
    ]

    const expBenefits = [
        { icon: CheckCircle, text: 'Access to remote destinations' },
        { icon: CheckCircle, text: 'Small-group exploration' },
        { icon: CheckCircle, text: 'Expert expedition teams' },
        { icon: CheckCircle, text: 'Luxury accommodations' },
        { icon: CheckCircle, text: 'Exceptional dining' },
        { icon: CheckCircle, text: 'Wildlife encounters' }
    ]

    const expSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises",
                "name": "Best Luxury Expedition Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises",
                "description": "Expert guide to the best luxury expedition cruises, featuring top cruise lines, remote destinations, luxury ships, and unforgettable adventure experiences.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises#article" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsshipsluxurytravel.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsshipsluxurytravel.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "description": "Luxury travel agency specializing in luxury expedition cruises, yacht cruises, river cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" }
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises#article",
                "headline": "Best Luxury Expedition Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises",
                "description": "Expert guide to the world's best luxury expedition cruises, including top cruise lines, destinations, ships, wildlife encounters, and planning advice.",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is a luxury expedition cruise?", "acceptedAnswer": { "@type": "Answer", "text": "A luxury expedition cruise combines exploration of remote destinations with premium accommodations, gourmet dining, personalized service, and expert-led excursions." } },
                    { "@type": "Question", "name": "Which are the best luxury expedition cruise lines?", "acceptedAnswer": { "@type": "Answer", "text": "Top luxury expedition cruise lines include Scenic Cruises, Silversea Expeditions, Seabourn Expeditions, Ponant, Lindblad Expeditions, and HX." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Best Luxury Expedition Cruises | Top Ultra-Luxury Adventure Cruises Worldwide</title>
                <meta name="description" content="Explore the best luxury expedition cruises to Antarctica, the Arctic, Galápagos, Alaska, Kimberley, and beyond. Compare top luxury expedition cruise lines." />
                <meta name="keywords" content="best luxury expedition cruises, luxury adventure cruises, expedition cruise lines, Scenic Eclipse, Silversea" />
                <script type="application/ld+json">{JSON.stringify(expSchemaData)}</script>
            </Helmet>

            {/* ── HERO CAROUSEL ── */}
            <section className="exp-hero-section">
                <div className="exp-hero-carousel">
                    {expHeroImages.map((image, idx) => (
                        <div
                            key={idx}
                            className={`exp-hero-slide ${idx === expCurrentHero ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                </div>
                <div className="exp-hero-overlay"></div>
                <div className="exp-hero-content">
                    <h1 className="exp-hero-title">Best Luxury Expedition Cruises</h1>
                    <p className="exp-hero-subtitle">Explore Remote Destinations in Unparalleled Comfort</p>
                </div>
                <div className="exp-hero-indicators">
                    {expHeroImages.map((_, idx) => (
                        <button
                            key={idx}
                            className={`exp-indicator ${idx === expCurrentHero ? 'active' : ''}`}
                            onClick={() => setExpCurrentHero(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* ── EXPERTISE SECTION ── */}
            <section className="exp-expertise-section">
                <div className="exp-expertise-container">
                    <div className="exp-expertise-grid">
                        <div className="exp-expertise-content">
                            <span className="exp-eyebrow">YOUR LUXURY EXPEDITION EXPERT</span>
                            <h2 className="exp-expertise-heading">Angela Hughes</h2>
                            <p className="exp-expertise-title">Luxury Travel Expert & CEO</p>
                            <p className="exp-expertise-bio">
                                With four decades of luxury travel expertise, Angela Hughes specializes in designing unforgettable expedition cruise experiences to the world's most remote and spectacular destinations. Her deep knowledge of ultra-luxury expedition cruising ensures every journey is perfectly tailored to your travel goals.
                            </p>
                            <div className="exp-expertise-credentials">
                                <div className="exp-credential-item">
                                    <Trophy size={20} />
                                    <span>Expert in Luxury Expedition Cruising</span>
                                </div>
                                <div className="exp-credential-item">
                                    <Star size={20} />
                                    <span>40+ Years of Travel Planning Experience</span>
                                </div>
                                <div className="exp-credential-item">
                                    <Globe size={20} />
                                    <span>Global Network of Premium Partners</span>
                                </div>
                            </div>
                        </div>
                        <div className="exp-expertise-image">
                            <img src={Profile_AH} alt="Angela Hughes - Luxury Travel Expert" className="exp-profile-img" />
                            <div className="exp-image-badge">Featured Expert</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS LUXURY EXPEDITION CRUISE ── */}
            <section className="exp-what-section">
                <div className="exp-what-container">
                    <span className="exp-eyebrow">LUXURY EXPEDITION CRUISING</span>
                    <h2 className="exp-section-heading">What Is a Luxury Expedition Cruise?</h2>
                    <div className="exp-section-separator"></div>

                    <div className="exp-what-grid">
                        <div className="exp-what-item">
                            <div className="exp-what-icon-box">
                                <Ship size={32} />
                            </div>
                            <h3>Ultra-Luxury Accommodations</h3>
                            <p>Spacious suites with ocean views, premium furnishings, and personalized butler service aboard small, purpose-built expedition vessels.</p>
                        </div>
                        <div className="exp-what-item">
                            <div className="exp-what-icon-box">
                                <Utensils size={32} />
                            </div>
                            <h3>Gourmet Dining</h3>
                            <p>World-class cuisine prepared by expert chefs, with multiple restaurant venues and premium beverages included throughout your voyage.</p>
                        </div>
                        <div className="exp-what-item">
                            <div className="exp-what-icon-box">
                                <Binoculars size={32} />
                            </div>
                            <h3>Expert Expedition Teams</h3>
                            <p>Naturalists, geologists, and wildlife specialists guide immersive excursions to remote destinations and unique ecosystems.</p>
                        </div>
                        <div className="exp-what-item">
                            <div className="exp-what-icon-box">
                                <Heart size={32} />
                            </div>
                            <h3>Personalized Service</h3>
                            <p>All-inclusive amenities, dedicated concierge support, and attention to every detail ensure an exceptional travel experience.</p>
                        </div>
                        <div className="exp-what-item">
                            <div className="exp-what-icon-box">
                                <Waves size={32} />
                            </div>
                            <h3>Adventure Activities</h3>
                            <p>Zodiac excursions, guided shore landings, kayaking, photography expeditions, and unique expedition experiences designed for exploration.</p>
                        </div>
                        <div className="exp-what-item">
                            <div className="exp-what-icon-box">
                                <Sun size={32} />
                            </div>
                            <h3>Wellness Facilities</h3>
                            <p>Spa services, fitness centers, observation lounges, and educational lectures complement your adventure and relaxation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TOP CRUISE LINES ── */}
            <section className="exp-cruiselines-section">
                <div className="exp-cruiselines-container">
                    <span className="exp-eyebrow">WORLD'S LEADING CRUISE LINES</span>
                    <h2 className="exp-section-heading">Top Luxury Expedition Cruise Lines</h2>
                    <div className="exp-section-separator"></div>

                    <div className="exp-cruiselines-grid">
                        {expCruiseLines.map((line, idx) => {
                            const LineIcon = line.Icon
                            return (
                                <div key={idx} className="exp-cruiseline-card">
                                    <div className="exp-cruiseline-image-wrapper">
                                        <img src={line.img} alt={line.name} className="exp-cruiseline-img" />
                                        <div className="exp-cruiseline-overlay"></div>
                                    </div>
                                    <div className="exp-cruiseline-content">
                                        <div className="exp-cruiseline-header">
                                            <LineIcon size={28} className="exp-cruiseline-icon" />
                                            <h3 className="exp-cruiseline-name">{line.name}</h3>
                                        </div>
                                        <p className="exp-cruiseline-desc">{line.description}</p>
                                        <ul className="exp-cruiseline-features">
                                            {line.features.map((feature, fidx) => (
                                                <li key={fidx}>
                                                    <CheckCircle size={16} className="exp-feature-icon" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="exp-destinations-section">
                <div className="exp-destinations-container">
                    <span className="exp-eyebrow">EXPLORE REMOTE DESTINATIONS</span>
                    <h2 className="exp-section-heading">Best Luxury Expedition Cruise Destinations</h2>
                    <div className="exp-section-separator"></div>

                    <div className="exp-destinations-grid">
                        {expDestinations.map((dest, idx) => {
                            const DestIcon = dest.Icon
                            return (
                                <div key={idx} className="exp-destination-card">
                                    <div className="exp-destination-image">
                                        <img src={dest.img} alt={dest.name} />
                                        <div className="exp-destination-overlay"></div>
                                        <div className="exp-destination-badge">
                                            <DestIcon size={20} />
                                            <span>{dest.temp}</span>
                                        </div>
                                    </div>
                                    <div className="exp-destination-content">
                                        <h3>{dest.name}</h3>
                                        <p>Unique wildlife, breathtaking scenery, and unforgettable exploration opportunities</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── WILDLIFE EXPERIENCES ── */}
            <section className="exp-wildlife-section">
                <div className="exp-wildlife-image">
                    <img src={expWildlife} alt="Wildlife expedition experience" />
                    <div className="exp-wildlife-overlay"></div>
                </div>
                <div className="exp-wildlife-content">
                    <span className="exp-eyebrow exp-eyebrow-light">EXTRAORDINARY ENCOUNTERS</span>
                    <h2 className="exp-wildlife-heading">Incredible Wildlife Experiences</h2>
                    <div className="exp-wildlife-separator"></div>

                    <p className="exp-wildlife-text">
                        Luxury expedition cruises offer extraordinary opportunities to observe wildlife in its natural habitat. Expert guides help guests better understand local ecosystems and wildlife conservation.
                    </p>

                    <div className="exp-wildlife-list">
                        {[
                            'Penguins in Antarctica',
                            'Polar bears in the Arctic',
                            'Whales and dolphins',
                            'Seals and sea lions',
                            'Puffins and seabirds',
                            'Sea turtles and tropical birds'
                        ].map((item, idx) => (
                            <div key={idx} className="exp-wildlife-item">
                                <Binoculars size={20} className="exp-wildlife-icon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ADVENTURE ACTIVITIES ── */}
            <section className="exp-activities-section">
                <div className="exp-activities-container">
                    <span className="exp-eyebrow">IMMERSIVE EXPERIENCES</span>
                    <h2 className="exp-section-heading">Adventure Activities Included</h2>
                    <div className="exp-section-separator"></div>

                    <div className="exp-activities-grid">
                        {expActivities.map((activity, idx) => {
                            const ActivityIcon = activity.icon
                            return (
                                <div key={idx} className="exp-activity-card">
                                    <div className="exp-activity-icon-wrapper">
                                        <ActivityIcon size={36} />
                                    </div>
                                    <h3>{activity.label}</h3>
                                    <p>{activity.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── LUXURY ONBOARD ── */}
            <section className="exp-onboard-section">
                <div className="exp-onboard-container">
                    <div className="exp-onboard-grid">
                        <div className="exp-onboard-image">
                            <img src={expOnboard} alt="Luxury onboard accommodations" />
                        </div>
                        <div className="exp-onboard-content">
                            <span className="exp-eyebrow">COMFORT & ELEGANCE</span>
                            <h2 className="exp-onboard-heading">Luxury Onboard Experience</h2>
                            <div className="exp-onboard-separator"></div>

                            <p className="exp-onboard-text">
                                Despite visiting remote regions, luxury expedition ships provide exceptional onboard amenities that rival five-star resorts.
                            </p>

                            <div className="exp-onboard-benefits">
                                {expBenefits.map((benefit, idx) => {
                                    const BenIcon = benefit.icon
                                    return (
                                        <div key={idx} className="exp-onboard-benefit">
                                            <BenIcon size={22} />
                                            <span>{benefit.text}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="exp-onboard-features-list">
                                <div className="exp-feature-group">
                                    <h4>Accommodations</h4>
                                    <ul>
                                        <li>Spacious ocean-view suites</li>
                                        <li>Premium furnishings</li>
                                        <li>Butler service</li>
                                    </ul>
                                </div>
                                <div className="exp-feature-group">
                                    <h4>Dining & Wellness</h4>
                                    <ul>
                                        <li>Gourmet restaurants</li>
                                        <li>Premium beverages</li>
                                        <li>Luxury spa facilities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FINAL THOUGHTS ── */}
            <section className="exp-final-section">
                <div className="exp-final-bg"></div>
                <div className="exp-final-container">

                    <div className="exp-final-eyebrow-row">
                        <Gem size={18} />
                        <span className="exp-final-eyebrow-text">FINAL THOUGHTS</span>
                    </div>

                    <h2 className="exp-final-heading">Luxury Expedition Cruising <br /> Is Travel at Its Finest</h2>
                    <div className="exp-final-separator"></div>

                    <div className="exp-final-card">
                        <p className="exp-final-body">Luxury expedition cruises represent the ultimate fusion of adventure and refinement.</p>
                        <p className="exp-final-body exp-final-emphasis">They offer exclusive access to remote destinations while maintaining the highest standards of comfort and service.</p>
                        <p className="exp-final-body">Whether exploring Antarctica's frozen wilderness, the Arctic's polar majesty, or the Galápagos' unique wildlife, luxury expedition cruising delivers experiences that few travelers ever encounter.</p>
                        <p className="exp-final-body">For those seeking meaningful exploration combined with five-star comfort, luxury expedition cruising offers exceptional value and unforgettable memories.</p>
                    </div>

                    <div className="exp-final-conclusion">
                        <div className="exp-final-conclusion-line"></div>
                        <p className="exp-final-stmt">Experience the world's most remote destinations without sacrificing luxury or comfort.</p>
                        <div className="exp-final-conclusion-line"></div>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {expFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => expToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{expActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {expActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">

                        <h2 className="medi-cta-heading-white">Ready to Book Your Luxury Expedition Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            A luxury expedition cruise is more than just a vacation—it's an unforgettable journey to some of the world's most remote and spectacular destinations.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers select and plan the perfect luxury expedition cruise experience.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are planning:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    'Antarctica expedition cruises',
                                    'Arctic polar exploration',
                                    'Galápagos wildlife cruises',
                                    'Expedition yacht experiences',
                                    'Scenic Eclipse ultra-luxury voyages'
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel delivers expert guidance backed by decades of luxury travel expertise.
                        </p>

                        <div className="medi-cta-button-group">
                            <Link to='/contact' className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore Expedition Cruises
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default BestLuxuryExpeditionCruises