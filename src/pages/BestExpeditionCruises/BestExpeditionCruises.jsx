import Navbar from '../../components/Navbar/Navbar'
import './BestExpeditionCruises.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import hero1 from '../../assets/BestLuxuryExpeditionCruises/expedition-antarctica-icebergs.jpg'
import hero2 from '../../assets/BestLuxuryExpeditionCruises/galapagos-expedition.jpg'
import hero3 from '../../assets/BestLuxuryExpeditionCruises/arctic-expedition.jpg'

import expDifferentImg   from '../../assets/BestLuxuryExpeditionCruises/zodiac-excursion.jpg'
import expLineScenic     from '../../assets/BestLuxuryExpeditionCruises/scenic-eclipse-ship.jpg'
import expLineSilversea  from '../../assets/BestLuxuryExpeditionCruises/antarctica-expedition.jpg'
import expLineSeabourn   from '../../assets/BestLuxuryExpeditionCruises/kimberley-expedition.jpg'
import expLinePonant     from '../../assets/BestLuxuryExpeditionCruises/expedition-galapagos-adventure.jpg'
import expEclipseImg     from '../../assets/BestLuxuryExpeditionCruises/scenic-eclipse-ship.jpg'
import expOnboardImg     from '../../assets/BestLuxuryExpeditionCruises/luxury-suite-view.jpg'
import expLineLindblad   from '../../assets/BestLuxuryExpeditionCruises/wildlife-expedition.jpg'
import expLineHX         from '../../assets/BestLuxuryExpeditionCruises/expedition-arctic-polar-wildlife.jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Globe, MessageSquare, TrendingUp, Eye,
    Leaf, BookOpen, DollarSign, Camera, Mountain, Wind,
    Snowflake, Zap, Navigation, Info
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function BestExpeditionCruises() {
    const [expCurrentHero, setExpCurrentHero] = useState(0)
    const expHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const timer = setInterval(() => {
            setExpCurrentHero(prev => (prev + 1) % expHeroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [expHeroImages.length])

    const [expActiveFaq, setExpActiveFaq] = useState(null)
    const expToggleFaq = i => setExpActiveFaq(expActiveFaq === i ? null : i)

    const expFaqs = [
        { question: 'What is an expedition cruise?', answer: 'An expedition cruise is a voyage focused on exploring remote destinations, wildlife, and natural environments using small, purpose-built ships.' },
        { question: 'Which is the best expedition cruise line?', answer: 'Top choices include Scenic Cruises, Silversea Expeditions, Seabourn Expeditions, Ponant, Lindblad Expeditions, and HX, depending on your travel preferences.' },
        { question: 'Where do expedition cruises go?', answer: 'Popular destinations include Antarctica, the Arctic, Greenland, Galápagos, Alaska, Iceland, Kimberley, Patagonia, and the South Pacific.' },
        { question: 'Are expedition cruises luxurious?', answer: 'Yes. Many modern expedition ships offer spacious suites, gourmet dining, premium beverages, spas, and personalized service.' },
        { question: 'What wildlife can I see?', answer: 'Depending on the destination, you may encounter penguins, whales, polar bears, seals, sea lions, dolphins, seabirds, and other native wildlife.' },
        { question: 'Are Zodiac excursions included?', answer: 'Many luxury expedition cruises include Zodiac cruises and guided shore landings as part of the voyage.' },
        { question: 'Do I need to be physically fit?', answer: 'Most guests can participate, although some excursions may involve walking on uneven terrain or boarding Zodiac boats.' },
        { question: 'When is the best time for an expedition cruise?', answer: 'The best season depends on the destination. Polar regions are generally visited during their summer months, while destinations like the Galápagos welcome visitors year-round.' },
        { question: 'Are expedition cruises suitable for first-time cruisers?', answer: 'Yes. Luxury expedition cruises are suitable for both experienced cruisers and first-time travelers seeking adventure with premium comfort.' },
        { question: 'What should I pack?', answer: 'Pack weather-appropriate clothing, waterproof outerwear, comfortable footwear, binoculars, sunscreen, and a camera for wildlife and scenic photography.' },
        { question: 'Is Scenic Eclipse one of the best expedition ships?', answer: 'Yes. Scenic Eclipse is widely regarded as one of the world\'s premier luxury expedition yachts thanks to its all-inclusive experience, Discovery Team, helicopter, and submarine capabilities.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Our luxury travel experts provide personalized recommendations, exclusive offers, concierge-level planning, and ongoing support to help you choose the perfect expedition cruise.' }
    ]

    const expSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/best-expedition-cruises",
                "name": "Best Expedition Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/best-expedition-cruises",
                "description": "Explore the best expedition cruises worldwide, comparing luxury expedition cruise lines, destinations, ships, wildlife experiences, and expert travel advice.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/best-expedition-cruises#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, yacht cruises, river cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/best-expedition-cruises#article",
                "headline": "Best Expedition Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/best-expedition-cruises",
                "description": "Expert guide to the world's best expedition cruises, featuring luxury cruise lines, destinations, ships, wildlife encounters, and planning advice.",
                "image": "https://www.tripsshipsluxurytravel.com/images/best-expedition-cruises.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/best-expedition-cruises" }
            },
            {
                "@type": "Service",
                "name": "Luxury Expedition Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Expedition Cruise Consulting",
                "description": "Expert advice and personalized planning for luxury expedition cruises around the world."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Expedition Cruises", "item": "https://www.tripsshipsluxurytravel.com/expedition-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Best Expedition Cruises", "item": "https://www.tripsshipsluxurytravel.com/best-expedition-cruises" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is an expedition cruise?", "acceptedAnswer": { "@type": "Answer", "text": "An expedition cruise is a voyage focused on exploring remote destinations, wildlife, and natural environments using purpose-built ships and expert-led excursions." } },
                    { "@type": "Question", "name": "Which is the best expedition cruise line?", "acceptedAnswer": { "@type": "Answer", "text": "Leading luxury expedition cruise lines include Scenic Cruises, Silversea Expeditions, Seabourn Expeditions, Ponant, Lindblad Expeditions, and HX." } },
                    { "@type": "Question", "name": "Are expedition cruises worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Expedition cruises provide exceptional access to remote destinations, wildlife encounters, expert-guided exploration, and luxury accommodations, making them a rewarding travel experience." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Best Expedition Cruises | Top Luxury Expedition Cruises Around the World</title>
                <meta name="title" content="Best Expedition Cruises | Our Expert Guide &amp; Reviews" />
                <meta name="description" content="Discover the best expedition cruises to Antarctica, the Arctic, Galápagos, Kimberley, Alaska, and beyond. Compare luxury expedition cruise lines, destinations, ships, and expert travel advice." />
                <meta name="keywords" content="Best Expedition Cruises, luxury expedition cruises, top expedition cruises, expedition cruise destinations, best expedition cruise lines, Scenic Eclipse, Silversea Expeditions, Seabourn Venture, luxury adventure cruises, expedition travel" />
                <script type="application/ld+json">{JSON.stringify(expSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {expHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${expCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Expedition Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Best Expedition Cruises
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Which Are the Best Expedition Cruises? Explore the world's finest expedition cruise lines, remote destinations, and extraordinary wildlife adventures — from Antarctica to the Galápagos and beyond.
                    </p>
                </div>
            </section>

            {/* ── WHICH ARE THE BEST EXPEDITION CRUISES? ── */}
            <section className="expg-intro-section">
                <div className="expg-intro-container">
                    <div className="expg-intro-grid">

                        <div className="expg-intro-text-col">
                            <span className="expg-eyebrow">EXPEDITION CRUISING EXPLAINED</span>
                            <h2 className="medi-section-heading">Which Are the Best Expedition Cruises?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="expg-intro-lead">Expedition cruises combine the comfort of luxury cruising with the excitement of exploring some of the world's most remote and breathtaking destinations.</p>
                            <p className="expg-intro-body">Unlike traditional ocean cruises that focus on large ports and entertainment, expedition voyages are designed for discovery, adventure, wildlife encounters, and immersive cultural experiences.</p>
                            <p className="expg-intro-body">Today's luxury expedition ships feature elegant suites, world-class dining, expert expedition teams, Zodiac excursions, and advanced technology that allows guests to access places larger ships simply cannot reach.</p>
                            <p className="expg-intro-body">Whether you dream of standing among Antarctica's towering icebergs, exploring the Galápagos Islands, discovering Greenland's dramatic fjords, or witnessing Australia's remote Kimberley coastline, the best expedition cruises deliver unforgettable once-in-a-lifetime experiences.</p>
                        </div>

                        <div className="expg-intro-image-col">
                            <div className="expg-image-frame">
                                <img src={expDifferentImg} alt="Expedition Zodiac shore landing" className="expg-frame-img" />
                                <div className="expg-frame-overlay"></div>
                                <div className="expg-image-badge">
                                    <Compass size={13} />
                                    <span>Adventure &amp; Discovery</span>
                                </div>
                            </div>
                            <div className="expg-intro-statement-box">
                                <div className="expg-intro-statement-accent"></div>
                                <div className="expg-intro-statement-text">
                                    <p className="expg-intro-statement-primary">Expedition cruising combines:</p>
                                    <p className="expg-intro-statement-bold">Luxury, adventure, and discovery in one extraordinary journey.</p>
                                    <p className="expg-intro-statement-primary">The best expedition cruises deliver experiences no other vacation can match.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES AN EXPEDITION CRUISE DIFFERENT? ── */}
            <section className="expg-different-section">
                <div className="expg-different-container">
                    <div className="expg-different-grid">

                        <div className="expg-different-image-col">
                            <div className="expg-image-frame">
                                <img src={expOnboardImg} alt="Luxury expedition cruise experience" className="expg-frame-img" />
                                <div className="expg-frame-overlay expg-overlay-soft"></div>
                            </div>
                            <div className="expg-different-pivot-box">
                                <p className="expg-different-pivot-text">Every voyage focuses on experiencing nature and unique destinations.</p>
                                <p className="expg-different-pivot-sub">All while maintaining the highest standards of luxury and comfort.</p>
                            </div>
                        </div>

                        <div className="expg-different-text-col">
                            <span className="expg-eyebrow">WHAT MAKES IT DIFFERENT</span>
                            <h2 className="medi-section-heading">What Makes an Expedition Cruise Different?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="expg-different-lead">Expedition cruises are designed for travelers who want more than a traditional vacation.</p>

                            <div className="expg-different-items">
                                {[
                                    { Icon: Navigation, text: 'Daily Zodiac landings' },
                                    { Icon: Eye, text: 'Wildlife encounters' },
                                    { Icon: Users, text: 'Expert naturalist guides' },
                                    { Icon: MapPin, text: 'Remote destinations' },
                                    { Icon: BookOpen, text: 'Educational lectures' },
                                    { Icon: Ship, text: 'Small luxury ships' },
                                    { Icon: Crown, text: 'Personalized service' },
                                    { Icon: Star, text: 'Flexible itineraries' },
                                    { Icon: Compass, text: 'Adventure activities' },
                                    { Icon: Globe, text: 'Cultural exploration' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="expg-different-item">
                                        <div className="expg-different-item-icon"><Icon size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ── TOP EXPEDITION CRUISE DESTINATIONS ── */}
            <section className="expg-destinations-section">
                <div className="expg-destinations-container">
                    <div className="expg-destinations-header">
                        <span className="expg-eyebrow">TOP DESTINATIONS</span>
                        <h2 className="medi-section-heading">Top Expedition Cruise Destinations</h2>
                        <div className="medi-heading-separator-bar"></div>
                        <p className="expg-destinations-intro">Some destinations consistently rank among the world's finest expedition experiences. Each destination offers its own unique landscapes, wildlife, and unforgettable adventures.</p>
                    </div>

                    <div className="expg-destinations-grid">
                        <div className="expg-destinations-list-col">
                            <div className="expg-destinations-items">
                                {[
                                    { Icon: Snowflake, name: 'Antarctica' },
                                    { Icon: Wind,      name: 'Arctic & Svalbard' },
                                    { Icon: Mountain,  name: 'Greenland' },
                                    { Icon: Zap,       name: 'Iceland' },
                                    { Icon: Sun,       name: 'Galápagos Islands' },
                                    { Icon: MapPin,    name: 'Alaska' },
                                    { Icon: Anchor,    name: 'Norwegian Fjords' },
                                    { Icon: Leaf,      name: 'Kimberley, Australia' },
                                    { Icon: Star,      name: 'South Pacific' },
                                    { Icon: Compass,   name: 'Patagonia' },
                                    { Icon: Globe,     name: 'Amazon River' },
                                    { Icon: Navigation,name: 'Canadian Arctic' }
                                ].map(({ Icon, name }, idx) => (
                                    <div key={idx} className="expg-destinations-item">
                                        <div className="expg-destinations-item-icon"><Icon size={17} /></div>
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="expg-destinations-image-col">
                            <div className="expg-image-frame">
                                <img src={expDifferentImg} alt="Top expedition cruise destinations" className="expg-frame-img" />
                                <div className="expg-frame-overlay"></div>
                                <div className="expg-image-badge">
                                    <Compass size={13} />
                                    <span>12 Extraordinary Destinations</span>
                                </div>
                            </div>
                            <div className="expg-destinations-conclusion-box">
                                <p>Each destination offers its own unique landscapes, wildlife, and unforgettable adventures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST LUXURY EXPEDITION CRUISE LINES ── */}
            <section className="expg-lines-section">
                <div className="expg-lines-bg-glow"></div>
                <div className="expg-lines-container">
                    <div className="expg-lines-header">
                        <span className="expg-eyebrow expg-eyebrow-light">LEADING CRUISE LINES</span>
                        <h2 className="medi-section-heading expg-white-heading" style={{ textAlign: 'center' }}>Best Luxury Expedition Cruise Lines</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered expg-separator-white"></div>
                        <p className="expg-lines-intro">Several cruise lines are recognized for exceptional expedition experiences around the world.</p>
                    </div>

                    <div className="expg-lines-grid">
                        {[
                            {
                                name: 'Scenic Cruises',
                                img: expLineScenic,
                                Icon: Crown,
                                desc: 'Known for Scenic Eclipse and Scenic Eclipse II, offering helicopters, submarine experiences, luxurious suites, butler service, and Discovery Excursions.',
                                highlights: ['Helicopter experiences', 'Submarine dives', 'Butler service', 'Discovery Excursions']
                            },
                            {
                                name: 'Silversea Expeditions',
                                img: expLineSilversea,
                                Icon: Star,
                                desc: 'Offers immersive expedition voyages with personalized service, spacious accommodations, and experienced expedition teams.',
                                highlights: ['Personalized service', 'Spacious suites', 'Expert expedition teams', 'Immersive itineraries']
                            },
                            {
                                name: 'Seabourn Expeditions',
                                img: expLineSeabourn,
                                Icon: Anchor,
                                desc: 'Features purpose-built expedition ships with luxury amenities, expert guides, and exceptional dining experiences at sea.',
                                highlights: ['Purpose-built ships', 'Expert naturalist guides', 'Exceptional dining', 'Luxury amenities']
                            },
                            {
                                name: 'Ponant Explorations',
                                img: expLinePonant,
                                Icon: Globe,
                                desc: 'Specializes in elegant French luxury expedition cruising with small ships and unique worldwide itineraries.',
                                highlights: ['French elegance', 'Intimate small ships', 'Unique itineraries', 'Cultural focus']
                            },
                            {
                                name: 'Lindblad Expeditions',
                                img: expLineLindblad,
                                Icon: Compass,
                                desc: 'Offers nature-focused exploration in partnership with National Geographic, emphasizing education and conservation.',
                                highlights: ['National Geographic partnership', 'Nature-focused', 'Education & conservation', 'Expert naturalists']
                            },
                            {
                                name: 'HX (Hurtigruten Expeditions)',
                                img: expLineHX,
                                Icon: Ship,
                                desc: 'Well known for polar exploration, sustainability, and scientific expedition programs aboard purpose-built ships.',
                                highlights: ['Polar exploration', 'Sustainability focus', 'Scientific programs', 'Purpose-built ships']
                            }
                        ].map(({ name, img, Icon, desc, highlights }, idx) => (
                            <div key={idx} className="expg-line-card">
                                <div className="expg-line-card-img-wrap">
                                    <img src={img} alt={`${name} expedition cruise`} className="expg-line-card-img" />
                                    <div className="expg-line-card-img-overlay">
                                        <div className="expg-line-card-icon-circle"><Icon size={22} /></div>
                                    </div>
                                </div>
                                <div className="expg-line-card-content">
                                    <h3 className="expg-line-card-title">{name}</h3>
                                    <p className="expg-line-card-desc">{desc}</p>
                                    <div className="expg-line-card-pills">
                                        {highlights.map((item, iIdx) => (
                                            <span key={iIdx} className="expg-line-card-pill">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="expg-lines-footer">
                        <p>Additional leading expedition lines include <strong>Lindblad Expeditions</strong> (in partnership with National Geographic) and <strong>HX (Hurtigruten Expeditions)</strong>, well known for polar exploration, sustainability initiatives, and scientific expedition programs.</p>
                    </div>
                </div>
            </section>

            {/* ── SCENIC ECLIPSE FEATURE ── */}
            <section className="expg-eclipse-section">
                <div className="expg-eclipse-container">
                    <div className="expg-eclipse-grid">

                        <div className="expg-eclipse-image-col">
                            <div className="expg-image-frame">
                                <img src={expEclipseImg} alt="Scenic Eclipse luxury expedition yacht" className="expg-frame-img" />
                                <div className="expg-frame-overlay"></div>
                                <div className="expg-image-badge">
                                    <Crown size={13} />
                                    <span>World's Best Expedition Ship</span>
                                </div>
                            </div>
                            <div className="expg-eclipse-note-box">
                                <p>Widely regarded as the most luxurious expedition yacht ever built.</p>
                            </div>
                        </div>

                        <div className="expg-eclipse-text-col">
                            <span className="expg-eyebrow">FEATURED EXPEDITION SHIP</span>
                            <h2 className="medi-section-heading">Scenic Eclipse — One of the World's Best Expedition Ships</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="expg-eclipse-body">For travelers seeking expedition adventure without sacrificing comfort, Scenic Eclipse is among the industry's premier choices — a benchmark of ultra-luxury at sea.</p>
                            <div className="expg-eclipse-points">
                                {[
                                    { Icon: Crown,      text: 'Ultra-luxury suites' },
                                    { Icon: Utensils,   text: 'Multiple fine dining restaurants' },
                                    { Icon: Crown,      text: 'Personal butler service' },
                                    { Icon: Zap,        text: 'Helicopter experiences' },
                                    { Icon: Navigation, text: 'Scenic Neptune™ submarine' },
                                    { Icon: Users,      text: 'Discovery Team experts' },
                                    { Icon: Compass,    text: 'Zodiac excursions' },
                                    { Icon: Heart,      text: 'Spa and wellness facilities' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="expg-eclipse-point">
                                        <div className="expg-eclipse-point-icon"><Icon size={17} /></div>
                                        <p>{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WILDLIFE ENCOUNTERS ── */}
            <section className="expg-wildlife-section">
                <div className="expg-wildlife-container">
                    <div className="expg-wildlife-grid">

                        <div className="expg-wildlife-text-col">
                            <span className="expg-eyebrow expg-eyebrow-light">IN THE WILD</span>
                            <h2 className="medi-section-heading expg-white-heading">Wildlife Encounters</h2>
                            <div className="medi-heading-separator-bar expg-separator-white"></div>
                            <p className="expg-wildlife-intro">One of the greatest attractions of expedition cruising is the opportunity to observe wildlife in its natural habitat.</p>
                            <p className="expg-wildlife-sub">Depending on your destination, you may see:</p>

                            <div className="expg-wildlife-items">
                                {[
                                    { Icon: Snowflake, label: 'Penguins' },
                                    { Icon: Wind,      label: 'Polar Bears' },
                                    { Icon: Anchor,    label: 'Whales' },
                                    { Icon: Navigation,label: 'Dolphins' },
                                    { Icon: Sun,       label: 'Seals & Sea Lions' },
                                    { Icon: Mountain,  label: 'Puffins' },
                                    { Icon: Globe,     label: 'Albatross' },
                                    { Icon: Leaf,      label: 'Tropical Birds' },
                                    { Icon: Compass,   label: 'Sea Turtles' },
                                    { Icon: Eye,       label: 'Unique Reptiles' }
                                ].map(({ Icon, label }, idx) => (
                                    <div key={idx} className="expg-wildlife-item">
                                        <div className="expg-wildlife-item-icon"><Icon size={16} /></div>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="expg-wildlife-image-col">
                            <div className="expg-image-frame">
                                <img src={expLineLindblad} alt="Wildlife encounters on expedition cruises" className="expg-frame-img" />
                                <div className="expg-frame-overlay"></div>
                                <div className="expg-image-badge">
                                    <Eye size={13} />
                                    <span>Incredible Wildlife Encounters</span>
                                </div>
                            </div>
                            <div className="expg-wildlife-footer">
                                <p>Wildlife sightings vary by season and destination, making every expedition unique.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ADVENTURE ACTIVITIES ── */}
            <section className="expg-activities-section">
                <div className="expg-activities-container">
                    <div className="expg-activities-header">
                        <span className="expg-eyebrow">ONSHORE ADVENTURES</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Adventure Activities</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="expg-activities-intro">Luxury expedition cruises offer a variety of optional activities designed to bring guests closer to nature.</p>
                        <p className="expg-activities-sub">Experiences are led by experienced expedition teams who prioritize safety and environmental responsibility.</p>
                    </div>

                    <div className="expg-activities-grid">
                        {[
                            { Icon: Navigation, label: 'Zodiac Cruising',    desc: 'Get up close to icebergs, glaciers, wildlife, and remote coastlines.' },
                            { Icon: MapPin,     label: 'Shore Landings',     desc: 'Expert-guided walks on pristine beaches and Antarctic shores.' },
                            { Icon: Anchor,     label: 'Kayaking',           desc: 'Paddle silently among icebergs for an unforgettable experience.' },
                            { Icon: Mountain,   label: 'Hiking & Snowshoeing',desc: 'Trek across dramatic wilderness with naturalist guides.' },
                            { Icon: Camera,     label: 'Photography',        desc: 'Dedicated photo excursions with expert guidance for extraordinary shots.' },
                            { Icon: Wind,       label: 'Snorkeling',         desc: 'Explore vibrant marine life in clear polar and tropical waters.' },
                            { Icon: Zap,        label: 'Helicopter Flights', desc: 'Aerial views of glaciers, volcanoes, and remote landscapes.' },
                            { Icon: Navigation, label: 'Submarine Dives',    desc: 'Descend beneath the surface aboard the Scenic Neptune submarine.' },
                            { Icon: Snowflake,  label: 'Polar Plunge',       desc: 'The iconic leap into polar waters — a true expedition milestone.' },
                            { Icon: Star,       label: 'Snowshoeing',        desc: 'Explore untouched Arctic and Antarctic landscapes on foot.' }
                        ].map(({ Icon, label, desc }, idx) => (
                            <div key={idx} className="expg-activity-card">
                                <div className="expg-activity-num">{String(idx + 1).padStart(2, '0')}</div>
                                <div className="expg-activity-icon"><Icon size={22} /></div>
                                <h3 className="expg-activity-label">{label}</h3>
                                <p className="expg-activity-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="expg-activities-conclusion">
                        <p>These experiences are led by experienced expedition teams who prioritize safety and environmental responsibility.</p>
                    </div>
                </div>
            </section>

            {/* ── LUXURY ONBOARD EXPERIENCE ── */}
            <section className="expg-onboard-section">
                <div className="expg-onboard-container">
                    <div className="expg-onboard-grid">

                        <div className="expg-onboard-text-col">
                            <span className="expg-eyebrow">ONBOARD EXPERIENCE</span>
                            <h2 className="medi-section-heading">Luxury Onboard Experience</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="expg-onboard-lead">Modern expedition ships combine adventure with five-star luxury. This balance of comfort and exploration makes luxury expedition cruising increasingly popular.</p>

                            <div className="expg-onboard-amenities">
                                {[
                                    { Icon: Crown,    text: 'Spacious suites' },
                                    { Icon: Utensils, text: 'Fine dining' },
                                    { Icon: Star,     text: 'Premium beverages' },
                                    { Icon: Crown,    text: 'Butler service' },
                                    { Icon: Heart,    text: 'Spa facilities' },
                                    { Icon: Compass,  text: 'Fitness centers' },
                                    { Icon: Eye,      text: 'Observation lounges' },
                                    { Icon: BookOpen, text: 'Educational presentations' },
                                    { Icon: Users,    text: 'Personalized concierge service' },
                                    { Icon: Gem,      text: 'Elegant public spaces' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="expg-onboard-amenity">
                                        <div className="expg-onboard-amenity-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="expg-onboard-image-col">
                            <div className="expg-image-frame">
                                <img src={expOnboardImg} alt="Luxury expedition suite" className="expg-frame-img" />
                                <div className="expg-frame-overlay expg-overlay-soft"></div>
                                <div className="expg-image-badge">
                                    <Crown size={13} />
                                    <span>Five-Star Luxury at Sea</span>
                                </div>
                            </div>
                            <div className="expg-onboard-stat-badge">
                                <Star size={14} />
                                <span>Luxury Meets Adventure</span>
                            </div>
                            <div className="expg-onboard-conclusion">
                                <p>This balance of comfort and exploration makes luxury expedition cruising increasingly popular.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BEST TIME TO TAKE AN EXPEDITION CRUISE ── */}
            <section className="expg-seasons-section">
                <div className="expg-seasons-container">
                    <div className="expg-seasons-header">
                        <span className="expg-eyebrow expg-eyebrow-light">WHEN TO GO</span>
                        <h2 className="medi-section-heading expg-white-heading" style={{ textAlign: 'center' }}>Best Time to Take an Expedition Cruise</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered expg-separator-white"></div>
                        <p className="expg-seasons-intro">The ideal travel season depends on your destination. Choosing the right season helps maximize wildlife viewing and favorable weather conditions.</p>
                    </div>

                    <div className="expg-seasons-grid">
                        {[
                            { dest: 'Antarctica',         season: 'November – March', Icon: Snowflake },
                            { dest: 'Arctic',             season: 'May – September',  Icon: Wind },
                            { dest: 'Alaska',             season: 'May – September',  Icon: Mountain },
                            { dest: 'Galápagos',          season: 'Year-Round',       Icon: Sun },
                            { dest: 'Kimberley',          season: 'May – September',  Icon: Leaf },
                            { dest: 'Iceland',            season: 'June – August',    Icon: Zap },
                            { dest: 'Norwegian Fjords',   season: 'May – September',  Icon: Globe },
                            { dest: 'Patagonia',          season: 'October – March',  Icon: Compass }
                        ].map(({ dest, season, Icon }, idx) => (
                            <div key={idx} className="expg-season-card">
                                <div className="expg-season-card-icon"><Icon size={22} /></div>
                                <h3 className="expg-season-card-dest">{dest}</h3>
                                <div className="expg-season-divider"></div>
                                <div className="expg-season-date">
                                    <Calendar size={13} />
                                    <span>{season}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW TO CHOOSE THE RIGHT EXPEDITION CRUISE ── */}
            <section className="expg-choose-section">
                <div className="expg-choose-container">
                    <div className="expg-choose-header">
                        <span className="expg-eyebrow">PLANNING YOUR VOYAGE</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>How to Choose the Right Expedition Cruise</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="expg-choose-intro">When selecting an expedition voyage, consider the following factors.</p>
                        <p className="expg-choose-sub">Working with an experienced luxury travel advisor can help you find the itinerary that best matches your travel goals.</p>
                    </div>

                    <div className="expg-choose-grid">
                        {[
                            { Icon: MapPin,     title: 'Destination',     desc: 'Antarctica, Arctic, Galápagos, Alaska, Kimberley, or beyond.' },
                            { Icon: Ship,       title: 'Ship Size',        desc: 'Small ships provide more intimate and exclusive access to remote areas.' },
                            { Icon: Crown,      title: 'Luxury Level',     desc: 'Ultra-luxury, premium, and expedition-focused options are available.' },
                            { Icon: Eye,        title: 'Expedition Activities', desc: 'Zodiac, helicopter, submarine, kayaking, and snowshoeing availability.' },
                            { Icon: Heart,      title: 'Wildlife Interests',desc: 'Match the destination to the specific wildlife you want to encounter.' },
                            { Icon: DollarSign, title: 'Budget',           desc: 'All-inclusive pricing varies significantly by cruise line and ship.' },
                            { Icon: Calendar,   title: 'Cruise Duration',  desc: 'Expedition voyages typically range from 7 to 21 days depending on route.' },
                            { Icon: Mountain,   title: 'Activity Level',   desc: 'Physical requirements vary from gentle shore walks to more active adventures.' },
                            { Icon: BookOpen,   title: 'Included Excursions', desc: 'Review what Zodiac landings, shore excursions, and activities are included.' },
                            { Icon: Sun,        title: 'Seasonal Conditions',desc: 'Polar summers, year-round tropical options, and weather windows.' },
                            { Icon: Compass,    title: 'Itinerary Style',  desc: 'Choose between wildlife-focused, expedition-heavy, or culturally immersive.' },
                            { Icon: Star,       title: 'Onboard Experience',desc: 'Consider dining, spa, suites, and service level preferences.' }
                        ].map(({ Icon, title, desc }, idx) => (
                            <div key={idx} className="expg-choose-card">
                                <div className="expg-choose-card-icon"><Icon size={22} /></div>
                                <h3 className="expg-choose-card-title">{title}</h3>
                                <p className="expg-choose-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="expg-choose-footer">
                        <p>Working with an experienced luxury travel advisor can help you find the itinerary that best matches your travel goals.</p>
                    </div>
                </div>
            </section>

            {/* ── ARE LUXURY EXPEDITION CRUISES WORTH IT? ── */}
            <section className="expg-value-section">
                <div className="expg-value-bg"></div>
                <div className="expg-value-container">

                    <div className="expg-value-eyebrow-row">
                        <Gem size={18} />
                        <span className="expg-value-eyebrow-text">WORTH EVERY MOMENT</span>
                    </div>

                    <h2 className="expg-value-heading">Are Luxury Expedition Cruises <br /> Worth It?</h2>
                    <div className="expg-value-separator"></div>

                    <div className="expg-value-card">
                        <p className="expg-value-body">For many travelers, expedition cruises represent the ultimate travel experience.</p>
                        <p className="expg-value-body expg-value-emphasis">Benefits include extraordinary access to remote destinations.</p>
                        <p className="expg-value-body">Expert-led exploration, small-group experiences, exceptional service, luxury accommodations, incredible wildlife encounters, and educational experiences all combine to create once-in-a-lifetime adventures.</p>
                        <p className="expg-value-body">Although they typically cost more than traditional cruises, the experiences offered are unlike any other style of travel.</p>
                    </div>

                    <div className="expg-value-conclusion">
                        <div className="expg-value-conclusion-line"></div>
                        <p className="expg-value-stmt">Luxury expedition cruising offers some of the most rewarding travel experiences available.</p>
                        <div className="expg-value-conclusion-line"></div>
                    </div>

                </div>
            </section>

            {/* ── OUR EXPERT REVIEW ── */}
            <section className="expg-review-section">
                <div className="expg-review-container">

                    <div className="expg-review-badge">
                        <Star size={14} />
                        Our Expert Review
                    </div>

                    <h2 className="expg-review-title">Our Expert Review of the Best Expedition Cruises</h2>
                    <div className="expg-review-bar"></div>

                    <div className="expg-review-layout">

                        <div className="expg-review-left">
                            <div className="expg-review-profile">
                                <div className="expg-review-image-frame">
                                    <img src={Profile_Picture_AH} alt="Angela Hughes — Luxury Expedition Cruise Expert" />
                                </div>
                                <div className="expg-review-author-info">
                                    <span className="expg-review-author-name">Angela Hughes</span>
                                    <span className="expg-review-author-title">Luxury Travel Consultant</span>
                                </div>
                            </div>

                            <div className="expg-review-stats">
                                <div className="expg-review-stat-item">
                                    <span className="expg-review-stat-number">40+</span>
                                    <span className="expg-review-stat-label">Years</span>
                                </div>
                                <div className="expg-review-stat-dot"></div>
                                <div className="expg-review-stat-item">
                                    <span className="expg-review-stat-number">100+</span>
                                    <span className="expg-review-stat-label">Countries</span>
                                </div>
                                <div className="expg-review-stat-dot"></div>
                                <div className="expg-review-stat-item">
                                    <span className="expg-review-stat-number">5★</span>
                                    <span className="expg-review-stat-label">Service</span>
                                </div>
                            </div>

                            <p className="expg-review-text">After evaluating the world's leading expedition cruise lines and destinations, we believe luxury expedition cruising offers some of the most rewarding travel experiences available.</p>
                        </div>

                        <div className="expg-review-right">
                            <span className="expg-review-services-label">What We Love</span>
                            <div className="expg-review-services-list">
                                {[
                                    'Extraordinary destinations',
                                    'Small luxury ships',
                                    'Expert expedition teams',
                                    'Zodiac adventures',
                                    'Incredible wildlife',
                                    'Personalized service',
                                    'Luxury accommodations',
                                    'Educational experiences',
                                    'Exclusive excursions',
                                    'Exceptional onboard dining'
                                ].map((item, i) => (
                                    <span key={i} className="expg-review-pill">
                                        <CheckCircle size={13} />
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <span className="expg-review-services-label">Areas to Consider</span>
                            <div className="expg-review-expertise-strip">
                                {[
                                    'Expedition itineraries depend on weather and sea conditions',
                                    'Some activities require moderate mobility',
                                    'Remote destinations often involve longer travel times',
                                    'Luxury expedition cruises are typically more expensive than traditional cruises'
                                ].map((item, i) => (
                                    <span key={i} className="expg-review-expertise-pill">
                                        <Info size={11} />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="expg-faq-section">
                <div className="expg-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="expg-faq-list-wrapper">
                        {expFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="expg-faq-item"
                                onClick={() => expToggleFaq(index)}
                            >
                                <div className="expg-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="expg-faq-toggle-icon">{expActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {expActiveFaq === index && (
                                    <p className="expg-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            {/* ── CTA ── */}
            <section className="expg-cta-section">
                <div className="expg-cta-aurora-glow"></div>
                <div className="expg-cta-crystal expg-cta-crystal-1"></div>
                <div className="expg-cta-crystal expg-cta-crystal-2"></div>
                <div className="expg-cta-crystal expg-cta-crystal-3"></div>
                <div className="expg-cta-grid-lines"></div>

                <div className="expg-cta-content">
                    <div className="expg-cta-compass-ring">
                        <Compass size={28} />
                    </div>

                    <span className="expg-cta-eyebrow">YOUR EXPEDITION AWAITS</span>
                    <h2 className="expg-cta-title">Ready to Plan Your Expedition Cruise?</h2>
                    <div className="expg-cta-bar"></div>
                    <p className="expg-cta-subtitle">
                        A well-planned luxury expedition cruise delivers extraordinary wildlife encounters, breathtaking remote landscapes, and once-in-a-lifetime experiences that no other vacation can match.
                    </p>

                    <div className="expg-cta-cards-grid">
                        {[
                            { icon: MapPin, text: 'Antarctica expedition cruises' },
                            { icon: Wind,   text: 'Arctic & Svalbard polar voyages' },
                            { icon: Sun,    text: 'Galápagos expedition cruises' },
                            { icon: Ship,   text: 'Kimberley & Australia expeditions' },
                            { icon: Mountain, text: 'Alaska & Norwegian Fjord cruises' },
                            { icon: Crown,  text: 'Luxury expedition planning' }
                        ].map(({ icon: Icon, text }, i) => (
                            <div key={i} className="expg-cta-card">
                                <div className="expg-cta-card-icon"><Icon size={20} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="expg-cta-closing">
                        Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury expedition experience.
                    </p>

                    <div className="expg-cta-actions">
                        <Link to="/contact" className="expg-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="expg-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BestExpeditionCruises