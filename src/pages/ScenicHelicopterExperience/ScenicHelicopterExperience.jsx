import ProfilePictureAH from "../../assets/Media (2).jpg"
import Navbar from '../../components/Navbar/Navbar'
import './ScenicHelicopterExperience.css'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle, ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem, ChevronRight, Crown, Phone, LayoutList, Heart, Utensils, Sun, Award, Moon, Music, Mic, FileText, GraduationCap, Globe, MessageSquare, Briefcase, TrendingUp, Eye, Smile, Leaf, BookOpen, DollarSign, Wind, Camera, Shield, Navigation, Zap, Mountain
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Dummy variables to prevent ReferenceErrors since images are missing
const hero1 = null;
const hero2 = null;
const hero3 = null;
const helAirbus = null;
const helAntarctica = null;
const helGreenland = null;
const helIceland = null;
const helNorway = null;
const helAerial = null;
const helSafety = null;
const helKimberley = null;
const Profile_Picture_AH = null;

function ScenicHelicopterExperience() {
    const [helCurrentHero, setHelCurrentHero] = useState(0)
    const helHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        // Prevent setting interval if no images
        if (helHeroImages.every(img => img === null)) return
        const helTimer = setInterval(() => {
            setHelCurrentHero(prev => (prev + 1) % helHeroImages.length)
        }, 5000)
        return () => clearInterval(helTimer)
    }, [helHeroImages.length])

    const [helActiveFaq, setHelActiveFaq] = useState(null)
    const helToggleFaq = i => setHelActiveFaq(helActiveFaq === i ? null : i)

    const helFaqs = [
        { question: 'Does Scenic Eclipse have helicopters?', answer: 'Yes. Scenic Eclipse carries helicopters on select voyages where operationally permitted.' },
        { question: 'Are helicopter flights included in the cruise fare?', answer: 'No. Helicopter excursions are typically optional experiences available for an additional cost.' },
        { question: 'Can anyone take a helicopter excursion?', answer: 'Most guests can participate, although certain health, mobility, age, or safety requirements may apply.' },
        { question: 'Which destinations offer helicopter experiences?', answer: 'Popular destinations include Antarctica, Greenland, Iceland, Norway, Patagonia, Kimberley, and selected expedition itineraries.' },
        { question: 'Are helicopter flights safe?', answer: 'Yes. Scenic operates under strict aviation regulations with experienced commercial pilots and comprehensive safety procedures.' },
        { question: 'What happens if bad weather prevents flying?', answer: 'Flights may be delayed or cancelled if conditions are unsafe. Guest safety is always the highest priority.' },
        { question: 'Can I take photographs during the flight?', answer: 'Yes. Scenic helicopter tours offer exceptional opportunities for photography through large panoramic windows.' },
        { question: 'How long do helicopter excursions last?', answer: 'Flight duration varies depending on the itinerary, destination, and excursion selected.' },
        { question: 'Should I reserve before sailing?', answer: 'Yes. Due to limited capacity, booking as early as possible is recommended.' },
        { question: 'Is the Scenic Helicopter Experience worth it?', answer: 'For travelers seeking extraordinary views and exclusive expedition adventures, it is widely considered one of the most memorable experiences available aboard Scenic Eclipse.' },
        { question: 'Which Scenic ships offer helicopter experiences?', answer: 'Helicopter operations are available aboard Scenic Eclipse and Scenic Eclipse II on eligible itineraries.' },
        { question: 'Why choose Trips & Ships Luxury Travel for a Scenic expedition?', answer: 'Our experts help you choose the right itinerary, understand optional experiences like helicopter excursions, secure exclusive offers, and provide personalized concierge service.' }
    ]

    const helDestinations = [
        {
            name: 'Antarctica',
            img: helAntarctica,
            Icon: Mountain,
            items: ['Endless ice field overflights', 'Glacier landings', 'Wildlife viewing from above']
        },
        {
            name: 'Greenland',
            img: helGreenland,
            Icon: Wind,
            items: ['Dramatic fjord exploration', 'Ancient ice cap flightseeing', 'Remote coastal access']
        },
        {
            name: 'Iceland',
            img: helIceland,
            Icon: Zap,
            items: ['Volcanic landscape tours', 'Hidden waterfall discovery', 'Lava field overflights']
        },
        {
            name: 'Kimberley',
            img: helKimberley,
            Icon: Sun,
            items: ['Gorge and waterfall landings', 'Remote outback overflights', 'Ancient rock art access']
        }
    ]

    const helSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-helicopter-experience",
                "name": "Scenic Helicopter Experience",
                "url": "https://www.tripsandships.com/scenic-helicopter-experience",
                "description": "Discover Scenic Helicopter Experience aboard Scenic Eclipse, including helicopter tours, destinations, safety, optional excursions, and expert review.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/scenic-helicopter-experience#article" }
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
                "description": "Luxury travel agency specializing in Scenic Eclipse expeditions, helicopter excursions, and world-class cruise programs."
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
                "@id": "https://www.tripsandships.com/scenic-helicopter-experience#article",
                "headline": "Scenic Helicopter Experience",
                "url": "https://www.tripsandships.com/scenic-helicopter-experience",
                "description": "Expert review of Scenic Helicopter Experience aboard Scenic Eclipse, including flightseeing tours, safety, destinations, and overall value.",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/scenic-helicopter-experience" }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsandships.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic Helicopter Experience", "item": "https://www.tripsandships.com/scenic-helicopter-experience" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Does Scenic Eclipse have helicopters?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse carries helicopters on select voyages where operationally permitted." } },
                    { "@type": "Question", "name": "Are helicopter flights included in the cruise fare?", "acceptedAnswer": { "@type": "Answer", "text": "No. Helicopter excursions are typically optional experiences available for an additional cost." } },
                    { "@type": "Question", "name": "Is the Scenic Helicopter Experience worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Many travelers consider it one of the most unforgettable luxury expedition experiences available aboard Scenic Eclipse." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Helicopter Experience | Scenic Eclipse Helicopter Excursions &amp; Review</title>
                <meta name="title" content="Scenic Helicopter Experience | Is It Worth It?" />
                <meta name="description" content="Experience Scenic Helicopter Experience aboard Scenic Eclipse and Scenic Eclipse II. Discover helicopter tours, included excursions, safety, destinations, pricing, and our expert review to see if it's worth it." />
                <meta name="keywords" content="Scenic Helicopter Experience, Scenic helicopter tours, Scenic Eclipse helicopter, Scenic helicopter excursions, Scenic Eclipse flightseeing, Scenic luxury expedition, Scenic helicopter review, Scenic Discovery excursions" />
                <script type="application/ld+json">{JSON.stringify(helSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {helHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${helCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Scenic Eclipse · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Scenic Helicopter Experience
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Discover the world from above aboard Scenic Eclipse &mdash; breathtaking flightseeing adventures over glaciers, fjords, and remote wilderness.
                    </p>
                </div>
            </section>

            {/* ── INTRO: WHAT IS THE SCENIC HELICOPTER EXPERIENCE ── */}
            <section className="hel-intro-section">
                <div className="hel-intro-container">
                    <div className="hel-intro-grid">

                        <div className="hel-intro-text-col">
                            <span className="hel-eyebrow">EXPEDITION ADVANTAGE</span>
                            <h2 className="medi-section-heading">A Perspective Only Scenic Can Offer</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="hel-intro-lead">One of the most extraordinary features that sets Scenic Eclipse apart from other luxury expedition ships is the opportunity to explore the world from above.</p>
                            <p className="hel-intro-body">The Scenic Helicopter Experience gives guests an unforgettable perspective of glaciers, fjords, remote islands, waterfalls, deserts, and pristine coastlines that simply cannot be appreciated from sea level.</p>
                            <p className="hel-intro-body">Available on select itineraries and subject to weather and operational conditions, Scenic&apos;s twin-engine helicopters offer breathtaking flightseeing adventures led by experienced pilots.</p>
                        </div>

                        <div className="hel-intro-image-col">
                            <div className="hel-image-frame">
                                {helAerial && <img src={helAerial} alt="Scenic Eclipse helicopter aerial view" className="hel-frame-img" />}
                                <div className="hel-frame-overlay"></div>
                                <div className="hel-image-badge">
                                    <Navigation size={13} />
                                    <span>Aerial Expedition Experiences</span>
                                </div>
                            </div>
                            <div className="hel-intro-statement-box">
                                <div className="hel-intro-statement-accent"></div>
                                <div className="hel-intro-statement-text">
                                    <p className="hel-intro-statement-primary">For travelers seeking the ultimate luxury expedition experience,</p>
                                    <p className="hel-intro-statement-bold">&ldquo;Scenic&apos;s helicopter excursions represent one of the most unique adventures available at sea.&rdquo;</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── AIRBUS H130 HELICOPTER ── */}
            <section className="hel-aircraft-section">
                <div className="hel-aircraft-container">
                    <div className="hel-aircraft-grid">

                        <div className="hel-aircraft-image-col">
                            <div className="hel-image-frame hel-image-frame-full">
                                {helAirbus && <img src={helAirbus} alt="Airbus H130 helicopter aboard Scenic Eclipse" className="hel-frame-img" />}
                                <div className="hel-frame-overlay hel-overlay-soft"></div>
                                <div className="hel-image-badge">
                                    <Award size={13} />
                                    <span>Airbus H130 Aircraft</span>
                                </div>
                            </div>
                            <div className="hel-aircraft-insight-box" style={{ marginTop: '20px' }}>
                                <p>These helicopters are designed to provide exceptional visibility while maintaining the highest standards of passenger comfort and safety.</p>
                            </div>
                        </div>

                        <div className="hel-aircraft-text-col">
                            <span className="hel-eyebrow">STATE-OF-THE-ART AIRCRAFT</span>
                            <h2 className="medi-section-heading">Scenic&apos;s State-of-the-Art Helicopters</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="hel-aircraft-lead">Scenic Eclipse carries specially designed Airbus H130 helicopters (or equivalent, depending on regulations and itinerary) built for sightseeing and expedition travel.</p>
                            <p className="hel-aircraft-body">Guests benefit from:</p>

                            <div className="hel-aircraft-features-grid">
                                {[
                                    'Panoramic viewing windows',
                                    'Comfortable leather seating',
                                    'Noise-reduction headsets',
                                    'Excellent visibility from every seat',
                                    'Experienced commercial pilots',
                                    'Advanced aviation safety systems',
                                    'Smooth and stable flight performance'
                                ].map((text, idx) => (
                                    <div key={idx} className="hel-aircraft-feature-item">
                                        <div className="hel-feature-icon"><CheckCircle size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHAT YOU SEE FROM THE AIR ── */}
            <section className="hel-views-section">
                <div className="hel-views-container">
                    <div className="hel-views-header">
                        <span className="hel-eyebrow hel-eyebrow-light">AERIAL PERSPECTIVES</span>
                        <h2 className="medi-section-heading hel-white-heading">What You&apos;ll See From the Air</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered hel-separator-white"></div>
                        <p className="hel-views-intro">Flying above remote landscapes offers a perspective unavailable to traditional shore excursions.</p>
                        <p className="hel-views-sub">Highlights may include:</p>
                    </div>

                    <div className="hel-views-cards">
                        {[
                            { Icon: Mountain, label: 'Massive glaciers', desc: 'Witness vast ice fields stretching to the horizon.' },
                            { Icon: Gem, label: 'Icebergs', desc: 'Marvel at ancient ice formations from above.' },
                            { Icon: Sun, label: 'Snow-capped mountains', desc: 'Soar over dramatic mountain ranges draped in snow.' },
                            { Icon: Sparkles, label: 'Hidden waterfalls', desc: 'Discover remote cascades invisible from sea level.' },
                            { Icon: Zap, label: 'Volcanic landscapes', desc: 'Fly over dramatic lava fields and volcanic craters.' }
                        ].map(({ Icon, label, desc }, idx) => (
                            <div key={idx} className="hel-view-card">
                                <div className="hel-view-num">0{idx + 1}</div>
                                <div className="hel-view-icon"><Icon size={22} /></div>
                                <h3 className="hel-view-label">{label}</h3>
                                <p className="hel-view-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="hel-views-footer-box">
                        <p>Every destination offers dramatically different scenery, making each helicopter excursion completely unique.</p>
                        <p>The aerial views often become the highlight of an entire Scenic expedition.</p>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="hel-destinations-section">
                <div className="hel-destinations-container">
                    <div className="hel-destinations-header">
                        <span className="hel-eyebrow">EXPEDITION DESTINATIONS</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Best Destinations for Scenic Helicopter Flights</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="hel-destinations-intro">Helicopter operations are available on selected Scenic Eclipse voyages, depending on destination, regulations, and weather.</p>
                        <p className="hel-destinations-sub">Top destinations include:</p>
                    </div>

                    <div className="hel-destinations-grid">
                        {helDestinations.map(({ name, img, Icon, items }, idx) => (
                            <div key={idx} className="hel-destination-card">
                                <div className="hel-destination-card-img-wrap">
                                    {img && <img src={img} alt={`Scenic helicopter ${name}`} className="hel-destination-card-img" />}
                                </div>
                                <div className="hel-destination-card-icon-box"><Icon size={22} /></div>
                                <h3 className="hel-destination-card-title">{name}</h3>
                                <div className="hel-destination-card-body">
                                    <ul className="hel-destination-card-list">
                                        {items.map((item, iIdx) => (
                                            <li key={iIdx} className="hel-destination-card-item">
                                                <ChevronRight size={13} className="hel-destination-chevron" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hel-destinations-footer">
                        <p>Additional destinations include Patagonia, Norwegian Fjords, New Zealand, and South Pacific Islands.</p>
                    </div>
                </div>
            </section>

            {/* ── DISCOVERY EXCURSIONS ── */}
            <section className="hel-discovery-section">
                {helNorway && <div className="hel-discovery-bg" style={{ backgroundImage: `url(${helNorway})` }}></div>}
                <div className="hel-discovery-overlay"></div>
                <div className="hel-discovery-content">
                    <span className="hel-discovery-eyebrow">EXCLUSIVE ACCESS</span>
                    <h2 className="hel-discovery-heading">Scenic Discovery Excursions by Helicopter</h2>
                    <div className="hel-discovery-separator"></div>
                    <p className="hel-discovery-note">Scenic refers to many of these experiences as Scenic Discovery Excursions.</p>
                    <p className="hel-discovery-body">These carefully planned experiences allow guests to reach places inaccessible by ship or Zodiac, providing exclusive access to some of the world&apos;s most untouched environments.</p>
                    <div className="hel-discovery-points">
                        {[
                            { Icon: Navigation, text: 'Scenic flightseeing over remote landscapes.' },
                            { Icon: Mountain, text: 'Glacier landings in otherwise unreachable terrain.' },
                            { Icon: Camera, text: 'Remote photography opportunities with unobstructed views.' },
                            { Icon: Globe, text: 'Mountain overflights and coastal exploration.' }
                        ].map(({ Icon, text }, idx) => (
                            <div key={idx} className="hel-discovery-point">
                                <div className="hel-discovery-point-icon"><Icon size={18} /></div>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SAFETY ── */}
            <section className="hel-safety-section">
                <div className="hel-safety-container">
                    <div className="hel-safety-grid">

                        <div className="hel-safety-text-col">
                            <span className="hel-eyebrow">GUEST PROTECTION</span>
                            <h2 className="medi-section-heading">Scenic&apos;s Uncompromising Safety Standards</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="hel-safety-lead">Safety remains Scenic&apos;s highest priority for every helicopter operation.</p>
                            <p className="hel-safety-body">Guests can expect:</p>

                            <div className="hel-safety-benefits">
                                {[
                                    { Icon: Award, text: 'Certified commercial pilots' },
                                    { Icon: FileText, text: 'Comprehensive safety briefings' },
                                    { Icon: Shield, text: 'Modern aviation equipment' },
                                    { Icon: CheckCircle, text: 'Regular aircraft inspections' },
                                    { Icon: Eye, text: 'Strict operational procedures' },
                                    { Icon: Wind, text: 'Weather monitoring before every flight' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="hel-safety-benefit">
                                        <div className="hel-safety-benefit-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hel-safety-image-col">
                            <div className="hel-image-frame hel-image-frame-full">
                                {helSafety && <img src={helSafety} alt="Scenic helicopter safety standards" className="hel-frame-img" />}
                            </div>
                            <div className="hel-safety-stat-badge">
                                <Shield size={16} />
                                <span>International Aviation Compliance</span>
                            </div>
                            <div className="hel-safety-conclusion">
                                <p>Flights only operate when conditions meet Scenic&apos;s rigorous safety requirements.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── OUR EXPERT REVIEW ── */}
            <section className="hel-review-section">
                <div className="hel-review-container">
                    <div className="hel-review-header">
                        <span className="hel-eyebrow hel-eyebrow-light">OUR EXPERT REVIEW</span>
                        <h2 className="medi-section-heading hel-white-heading">Is the Scenic Helicopter Experience Worth It?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered hel-separator-white"></div>
                        <p className="hel-review-intro">For many guests, the answer is a definite yes.</p>
                        <p className="hel-review-sub">Here is what we love, and what to consider:</p>
                    </div>

                    <div className="hel-review-two-col">
                        <div className="hel-review-col hel-review-col-love">
                            <div className="hel-review-col-header">
                                <Star size={20} />
                                <h3>What We Love</h3>
                            </div>
                            <div className="hel-review-items">
                                {[
                                    'Incredible panoramic aerial views',
                                    'Luxury sightseeing Airbus aircraft',
                                    'Experienced commercial pilots',
                                    'Exclusive expedition opportunities',
                                    'Outstanding photography from above',
                                    'Access to remote, untouched landscapes',
                                    'Exceptional international safety standards',
                                    'Truly unforgettable adventure moments'
                                ].map((item, idx) => (
                                    <div key={idx} className="hel-review-item">
                                        <CheckCircle size={16} className="hel-review-check" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hel-review-col hel-review-col-consider">
                            <div className="hel-review-col-header hel-review-col-header-alt">
                                <Eye size={20} />
                                <h3>Areas to Consider</h3>
                            </div>
                            <div className="hel-review-items">
                                {[
                                    'Additional cost applies beyond the cruise fare',
                                    'Flights depend on weather and local regulations',
                                    'Limited seating means early booking is essential',
                                    'Some itineraries may not offer helicopter operations'
                                ].map((item, idx) => (
                                    <div key={idx} className="hel-review-item hel-review-item-alt">
                                        <ChevronRight size={16} className="hel-review-chevron" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="hel-review-verdict">
                                <p>Overall, the Scenic Helicopter Experience is among the most exciting luxury expedition activities available and adds a remarkable dimension to any Scenic Eclipse voyage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HELICOPTER VS SHORE EXCURSIONS ── */}
            <section className="hel-compare-section">
                <div className="hel-compare-container">
                    <div className="hel-compare-header">
                        <span className="hel-eyebrow">VALUE COMPARISON</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Scenic Helicopter vs. Traditional Shore Excursions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="hel-compare-intro">While traditional shore excursions provide immersive experiences on land, helicopter flights reveal landscapes from an entirely different perspective.</p>
                    </div>

                    <div className="hel-compare-grid">
                        {[
                            { Icon: Navigation, title: 'Faster access to remote areas', desc: 'Reach destinations in minutes that would otherwise take hours of travel.' },
                            { Icon: Camera, title: 'Spectacular aerial photography', desc: 'Capture once-in-a-lifetime images unavailable from any other vantage point.' },
                            { Icon: Eye, title: 'Unique viewpoints by land', desc: 'Experience landscapes from angles that simply cannot be replicated on the ground.' },
                            { Icon: Users, title: 'Smaller group experiences', desc: 'Intimate helicopter flights offer a more exclusive and personal expedition moment.' },
                            { Icon: Compass, title: 'Greater sense of exploration', desc: 'The thrill of true discovery as you fly over untouched wilderness.' },
                            { Icon: Sparkles, title: 'Luxury adventure unlike cruising', desc: 'Combine the best of luxury travel with the raw excitement of expedition.' }
                        ].map(({ Icon, title, desc }, idx) => (
                            <div key={idx} className="hel-compare-card">
                                <div className="hel-compare-card-icon"><Icon size={22} /></div>
                                <h3 className="hel-compare-card-title">{title}</h3>
                                <p className="hel-compare-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="hel-compare-footer">
                        <p>For adventure travelers, combining both helicopter excursions and shore landings creates the ultimate expedition itinerary.</p>
                    </div>
                </div>
            </section>

            {/* ── WHY TRIPS & SHIPS ── */}
            
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


            {/* ── FINAL THOUGHTS ── */}
            <section className="hel-final-section">
                <div className="hel-final-bg"></div>
                <div className="hel-final-container">

                    <div className="hel-final-eyebrow-row">
                        <Gem size={18} />
                        <span className="hel-final-eyebrow-text">FINAL THOUGHTS</span>
                    </div>

                    <h2 className="hel-final-heading">The Scenic Helicopter Experience Is<br />Far More Than a Flight</h2>
                    <div className="hel-final-separator"></div>

                    <div className="hel-final-card">
                        <p className="hel-final-body">The Scenic Helicopter Experience is far more than an optional add-on.</p>
                        <p className="hel-final-body hel-final-emphasis">It is the defining moment of a luxury expedition.</p>
                        <p className="hel-final-body">When thoughtfully designed and perfectly executed, a helicopter excursion aboard Scenic Eclipse delivers the kind of raw, unfiltered connection with the natural world that stays with guests for a lifetime.</p>
                        <p className="hel-final-body">For expedition travelers who believe the journey should exceed every expectation, few experiences deliver more powerfully than rising above the ice.</p>
                    </div>

                    <div className="hel-final-conclusion">
                        <div className="hel-final-conclusion-line"></div>
                        <p className="hel-final-stmt">And few ships in the world make that possible the way Scenic Eclipse does.</p>
                        <div className="hel-final-conclusion-line"></div>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="hel-faq-section">
                <div className="hel-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="hel-faq-list">
                        {helFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="hel-faq-item"
                                onClick={() => helToggleFaq(index)}
                            >
                                <div className="hel-faq-question">
                                    <span>{faq.question}</span>
                                    <span className="hel-faq-toggle">{helActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {helActiveFaq === index && (
                                    <p className="hel-faq-answer">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="hel-cta-section">
                {/* Decorative background elements */}
                <div className="hel-cta-aurora-glow"></div>
                <div className="hel-cta-ice-crystal hel-cta-crystal-1"></div>
                <div className="hel-cta-ice-crystal hel-cta-crystal-2"></div>
                <div className="hel-cta-ice-crystal hel-cta-crystal-3"></div>
                <div className="hel-cta-grid-lines"></div>

                <div className="hel-cta-content">
                    {/* Floating compass decoration */}
                    <div className="hel-cta-compass-ring">
                        <Compass size={28} />
                    </div>

                    <span className="hel-cta-eyebrow">YOUR EXPEDITION STORY STARTS HERE</span>
                    <h2 className="hel-cta-title">Ready to Plan Your <br /> Scenic Helicopter Experience?</h2>
                    <div className="hel-cta-bar"></div>
                    <p className="hel-cta-subtitle">
                        A well-planned Scenic Eclipse voyage &mdash; with helicopter excursions reserved in advance &mdash; can deliver experiences that redefine what luxury travel means.
                    </p>

                    <div className="hel-cta-cards-grid">
                        {[
                            { icon: Ship, text: 'Scenic Eclipse expeditions' },
                            { icon: Navigation, text: 'Helicopter excursion guidance' },
                            { icon: Crown, text: 'Scenic Eclipse Discovery Yacht' },
                            { icon: Gem, text: 'Custom luxury cruise packages' }
                        ].map(({ icon: Icon, text }, i) => (
                            <div key={i} className="hel-cta-card">
                                <div className="hel-cta-card-icon"><Icon size={20} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="hel-cta-closing">
                        Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                    </p>

                    <div className="hel-cta-actions">
                        <Link to="/contact" className="hel-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="hel-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ScenicHelicopterExperience