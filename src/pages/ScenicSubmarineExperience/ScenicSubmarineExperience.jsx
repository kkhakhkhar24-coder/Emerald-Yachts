import ProfilePictureAH from "../../assets/Media (2).jpg"
import Navbar from '../../components/Navbar/Navbar'
import './ScenicSubmarineExperience.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import subGreatBarrier from "../../assets/ScenicSubmarineExperience/zakynthos-greece-navagio-beach-shipwreck-cove-turquoise-water-cliffs.webp"
import subCaribbean from "../../assets/ScenicSubmarineExperience/porto-timoni-twin-bays-corfu-greece-turquoise-water-pink-flowers-scenic-coastal-view.webp"
import subMarine from "../../assets/ScenicSubmarineExperience/amalfi-coast-italy-scenic-coastal-village-sea-view-travel-vacation.webp"
import subKelp from "../../assets/ScenicSubmarineExperience/santorini-greece-oia-blue-domed-churches-whitewashed-village-caldera-sea-view.webp"
// import hero1 from '../../assets/ScenicSubmarineExperience/scenic-neptune-coral-dive.png'
// import hero2 from '../../assets/ScenicSubmarineExperience/scenic-submarine-underwater-view.png'
// import hero3 from '../../assets/ScenicSubmarineExperience/scenic-eclipse-submarine-deck.png'
// import subNeptune from '../../assets/ScenicSubmarineExperience/scenic-neptune-submersible-interior.png'
// import subCoral from '../../assets/ScenicSubmarineExperience/scenic-submarine-coral-reef.png'
// import subTropical from '../../assets/ScenicSubmarineExperience/scenic-submarine-tropical-fish.png'
// import subGreatBarrier from '../../assets/ScenicSubmarineExperience/scenic-submarine-great-barrier-reef.png'
// import subCaribbean from '../../assets/ScenicSubmarineExperience/scenic-submarine-caribbean-dive.png'
// import subMarine from '../../assets/ScenicSubmarineExperience/scenic-submarine-marine-life.png'
// import subSafety from '../../assets/ScenicSubmarineExperience/scenic-submarine-safety-systems.png'
// import subKelp from '../../assets/ScenicSubmarineExperience/scenic-submarine-kelp-forest.png'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle, ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem, ChevronRight, Crown, Phone, LayoutList, Heart, Utensils, Sun, Award, Moon, Music, Mic, FileText, GraduationCap, Globe, MessageSquare, Briefcase, TrendingUp, Eye, Smile, Leaf, BookOpen, DollarSign, Wind, Camera, Shield, Waves, Zap, Droplets, Fish, Mountain
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function ScenicSubmarineExperience() {
    const hero1 = '';
    const hero2 = '';
    const hero3 = '';
    const subNeptune = '';
    const subCoral = '';
    const subSafety = '';
    const [subCurrentHero, setSubCurrentHero] = useState(0)
    const subHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const subTimer = setInterval(() => {
            setSubCurrentHero(prev => (prev + 1) % subHeroImages.length)
        }, 5000)
        return () => clearInterval(subTimer)
    }, [subHeroImages.length])

    const [subActiveFaq, setSubActiveFaq] = useState(null)
    const subToggleFaq = i => setSubActiveFaq(subActiveFaq === i ? null : i)

    const subFaqs = [
        { question: 'Does Scenic Eclipse have a submarine?', answer: 'Yes. Scenic Eclipse features the Scenic Neptune™ submersible on select voyages and itineraries.' },
        { question: 'Are submarine excursions included?', answer: 'No. Submarine experiences are generally optional Discovery Excursions available for an additional charge.' },
        { question: 'How many guests can join a submarine dive?', answer: 'Capacity is limited, so only a small number of guests can participate during each excursion.' },
        { question: 'What can I see during a submarine excursion?', answer: 'Depending on the destination, you may observe coral reefs, tropical fish, marine life, underwater rock formations, and other natural wonders.' },
        { question: 'Is the Scenic submarine safe?', answer: 'Yes. Scenic Neptune operates with certified pilots, advanced safety systems, and strict operational procedures.' },
        { question: 'Can children participate?', answer: 'Eligibility may vary depending on the itinerary and operational requirements. Scenic will provide age and safety guidelines before departure.' },
        { question: 'What happens if weather conditions are poor?', answer: 'Excursions may be postponed or cancelled if conditions are unsuitable. Safety always comes first.' },
        { question: 'Do I need scuba diving experience?', answer: 'No. The submarine experience requires no diving certification or prior experience.' },
        { question: 'Should I reserve before sailing?', answer: 'Yes. Because spaces are limited, early reservations are strongly recommended.' },
        { question: 'Which Scenic ships offer submarine experiences?', answer: 'Submarine excursions are available aboard Scenic Eclipse and Scenic Eclipse II on eligible itineraries.' },
        { question: 'Is the Scenic Submarine Experience worth it?', answer: 'For travelers interested in marine life and luxury exploration, it is considered one of the most memorable optional experiences offered by Scenic.' },
        { question: 'Why choose Trips & Ships Luxury Travel for a Scenic expedition?', answer: 'Our experts help you select the right itinerary, reserve Discovery Experiences, secure exclusive offers, and provide personalized planning from start to finish.' }
    ]

    const subDestinations = [
        {
            name: 'Great Barrier Reef',
            img: subGreatBarrier,
            Icon: Droplets,
            items: ['Vibrant coral ecosystems', 'Tropical fish viewing', 'Reef exploration from above and below']
        },
        {
            name: 'Caribbean',
            img: subCaribbean,
            Icon: Sun,
            items: ['Tropical reef dives', 'Colorful marine life', 'Crystal-clear waters']
        },
        {
            name: 'South Pacific Islands',
            img: subMarine,
            Icon: Waves,
            items: ['Unique island ecosystems', 'Remote marine discoveries', 'Pristine underwater landscapes']
        },
        {
            name: 'Mediterranean',
            img: subKelp,
            Icon: Fish,
            items: ['Historic underwater sites', 'Mediterranean marine life', 'Geological formations']
        }
    ]

    const subSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-submarine-experience",
                "name": "Scenic Submarine Experience",
                "url": "https://www.tripsandships.com/scenic-submarine-experience",
                "description": "Discover the Scenic Submarine Experience aboard Scenic Eclipse, including Scenic Neptune™ submersible dives, marine life, destinations, safety, and expert review.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/scenic-submarine-experience#article" }
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
                "description": "Luxury travel agency specializing in Scenic Eclipse expeditions, submarine excursions, and world-class cruise programs."
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
                "@id": "https://www.tripsandships.com/scenic-submarine-experience#article",
                "headline": "Scenic Submarine Experience",
                "url": "https://www.tripsandships.com/scenic-submarine-experience",
                "description": "Expert review of the Scenic Submarine Experience aboard Scenic Eclipse, including Scenic Neptune™ dives, destinations, marine life, safety, and overall value.",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/scenic-submarine-experience" }
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
                    { "@type": "ListItem", "position": 3, "name": "Scenic Submarine Experience", "item": "https://www.tripsandships.com/scenic-submarine-experience" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Does Scenic Eclipse have a submarine?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse features the Scenic Neptune™ submersible on select voyages and itineraries." } },
                    { "@type": "Question", "name": "Are submarine excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "No. Submarine experiences are generally optional Discovery Excursions available for an additional charge." } },
                    { "@type": "Question", "name": "Is the Scenic Submarine Experience worth it?", "acceptedAnswer": { "@type": "Answer", "text": "For travelers interested in marine life and luxury exploration, it is considered one of the most memorable optional experiences offered by Scenic." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Submarine Experience | Scenic Eclipse Submersible Excursions &amp; Review</title>
                <meta name="title" content="Scenic Submarine Experience | Is It Worth It?" />
                <meta name="description" content="Discover the Scenic Submarine Experience aboard Scenic Eclipse and Scenic Eclipse II. Learn about Scenic Neptune submersible dives, destinations, safety, pricing, marine life, and our expert review." />
                <meta name="keywords" content="Scenic Submarine Experience, Scenic submarine, Scenic Neptune submersible, Scenic Eclipse submarine, Scenic submarine excursion, Scenic Discovery Experience, Scenic luxury expedition, Scenic underwater experience" />
                <script type="application/ld+json">{JSON.stringify(subSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="sub-hero-section">
                {subHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`sub-hero-background ${subCurrentHero === idx ? 'sub-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="sub-hero-overlay-layer"></div>
                <div className="sub-hero-content-wrapper">
                    <div className="sub-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Scenic Eclipse · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="sub-hero-main-title">
                        Scenic Submarine Experience
                    </h1>
                    <p className="sub-hero-subtitle-text">
                        Explore the ocean depths in Scenic Neptune™ &mdash; an exclusive underwater adventure revealing marine worlds few travelers ever witness.
                    </p>
                </div>
            </section>

            {/* ── INTRO: WHAT IS THE SCENIC SUBMARINE EXPERIENCE ── */}
            <section className="sub-intro-section">
                <div className="sub-intro-container">
                    <div className="sub-intro-grid">

                        <div className="sub-intro-text-col">
                            <span className="sub-eyebrow">UNDERWATER ADVENTURE</span>
                            <h2 className="sub-section-heading">Is the Scenic Submarine Experience Worth It?</h2>
                            <div className="sub-heading-separator-bar"></div>
                            <p className="sub-intro-lead">The Scenic Submarine Experience is one of the most extraordinary adventures available aboard Scenic Eclipse and Scenic Eclipse II.</p>
                            <p className="sub-intro-body">Unlike traditional cruise excursions, this optional Discovery Experience allows guests to explore the underwater world in a state-of-the-art submersible, revealing marine environments few travelers ever have the opportunity to witness.</p>
                            <p className="sub-intro-body">From vibrant coral reefs and underwater volcanic formations to fascinating marine life, Scenic's submarine excursions provide a completely different perspective of the destinations visited.</p>
                        </div>

                        <div className="sub-intro-image-col">
                            <div className="sub-image-frame">
                                {/* <img src={subMarine} alt="Scenic Neptune submarine marine life viewing" className="sub-frame-img" /> */}
                                <div className="sub-frame-overlay"></div>
                                <div className="sub-image-badge">
                                    <Waves size={13} />
                                    <span>Underwater Exploration</span>
                                </div>
                            </div>
                            <div className="sub-intro-statement-box">
                                <div className="sub-intro-statement-accent"></div>
                                <div className="sub-intro-statement-text">
                                    <p className="sub-intro-statement-primary">For travelers seeking unforgettable expedition experiences,</p>
                                    <p className="sub-intro-statement-bold">&ldquo;Scenic&apos;s submarine adventure is among the most exclusive excursions available at sea.&rdquo;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC NEPTUNE SUBMERSIBLE ── */}
            <section className="sub-neptune-section-refined">
                <div className="sub-neptune-container">
                    <div className="sub-neptune-grid-refined">

                        <div className="sub-neptune-image-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
                            <div className="sub-image-frame sub-image-frame-full">
                                {/* <img src={subNeptune} alt="Scenic Neptune submersible interior" className="sub-frame-img" /> */}
                                <div className="sub-frame-overlay sub-overlay-soft"></div>
                                <div className="sub-image-badge">
                                    <Award size={13} />
                                    <span>Scenic Neptune™ Submersible</span>
                                </div>
                            </div>
                            <p className="sub-neptune-lead" style={{ marginTop: '1.5rem' }}>Scenic Eclipse features the custom-designed Scenic Neptune™, a cutting-edge submersible built specifically for underwater exploration.</p>
                        </div>

                        <div className="sub-neptune-text-col-refined">
                            <span className="sub-eyebrow">Luxury Submersible</span>
                            <h2 className="sub-section-heading">Meet Scenic Neptune™</h2>
                            <div className="sub-heading-separator-bar"></div>

                            <p className="sub-neptune-body">
                                Designed for both comfort and safety, Scenic Neptune allows guests to experience the underwater world while enjoying the same luxury found throughout the ship. Guests enjoy:
                            </p>

                            <div className="sub-neptune-features-grid">
                                {[
                                    { Icon: Eye, text: 'Panoramic acrylic viewing sphere' },
                                    { Icon: Crown, text: 'Comfortable seating for guests' },
                                    { Icon: Wind, text: 'Climate-controlled cabin' },
                                    { Icon: Zap, text: 'Quiet electric propulsion' },
                                    { Icon: Droplets, text: 'Exceptional underwater visibility' },
                                    { Icon: Award, text: 'Advanced navigation technology' },
                                    { Icon: Shield, text: 'Experienced and certified pilots' }
                                ].map(({ Icon, text }, idx, arr) => (
                                    <div key={idx} className="sub-neptune-feature-item" style={idx === arr.length - 1 ? { gridColumn: '1 / -1' } : {}}>
                                        <div className="sub-feature-icon-refined"><Icon size={20} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHAT YOU'LL SEE BENEATH THE SURFACE ── */}
            <section className="sub-views-section">
                <div className="sub-views-container">
                    <div className="sub-views-header">
                        <span className="sub-eyebrow sub-eyebrow-light">UNDERWATER WONDERS</span>
                        <h2 className="sub-section-heading sub-white-heading">What You'll See Beneath the Surface</h2>
                        <div className="sub-heading-separator-bar sub-bar-centered sub-separator-white"></div>
                        <p className="sub-views-intro">Every submarine excursion offers the opportunity to observe incredible underwater scenery.</p>
                        <p className="sub-views-sub">Depending on your destination, you may encounter:</p>
                    </div>

                    <div className="sub-views-cards">
                        {[
                            { Icon: Droplets, label: 'Coral reefs', desc: 'Witness vibrant ecosystems thriving beneath the waves.' },
                            { Icon: Fish, label: 'Tropical fish', desc: 'Marvel at colorful species in their natural habitats.' },
                            { Icon: Heart, label: 'Sea turtles', desc: 'Observe these magnificent creatures gracefully swimming.' },
                            { Icon: Sparkles, label: 'Marine ecosystems', desc: 'Experience the complexity of ocean life up close.' },
                            { Icon: Mountain, label: 'Underwater formations', desc: 'Explore dramatic cliffs and rock structures beneath the surface.' }
                        ].map(({ Icon, label, desc }, idx) => (
                            <div key={idx} className="sub-view-card">
                                <div className="sub-view-num">0{idx + 1}</div>
                                <div className="sub-view-icon"><Icon size={22} /></div>
                                <h3 className="sub-view-label">{label}</h3>
                                <p className="sub-view-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="sub-views-footer-box">
                        <p>No two dives are exactly alike, making every excursion a memorable adventure.</p>
                        <p>Each destination offers unique underwater landscapes and marine ecosystems impossible to witness from above.</p>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="sub-destinations-section">
                <div className="sub-destinations-container">
                    <div className="sub-destinations-header">
                        <span className="sub-eyebrow">EXPEDITION DESTINATIONS</span>
                        <h2 className="sub-section-heading" style={{ textAlign: 'center' }}>Best Destinations for Scenic Submarine Adventures</h2>
                        <div className="sub-heading-separator-bar sub-bar-centered"></div>
                        <p className="sub-destinations-intro">Submarine operations are available on select Scenic Eclipse voyages, depending on destination, weather, and local regulations.</p>
                        <p className="sub-destinations-sub">Top destinations include:</p>
                    </div>

                    <div className="sub-destinations-grid">
                        {subDestinations.map(({ name, img, Icon, items }, idx) => (
                            <div key={idx} className="sub-destination-card">
                                <div className="sub-destination-card-img-wrap">
                                    <img src={img} alt={`Scenic submarine ${name}`} className="sub-destination-card-img" />
                                </div>
                                <div className="sub-destination-card-icon-box"><Icon size={22} /></div>
                                <h3 className="sub-destination-card-title">{name}</h3>
                                <div className="sub-destination-card-body">
                                    <ul className="sub-destination-card-list">
                                        {items.map((item, iIdx) => (
                                            <li key={iIdx} className="sub-destination-card-item">
                                                <ChevronRight size={13} className="sub-destination-chevron" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="sub-destinations-footer">
                        <p>Additional destinations include Antarctic, Mediterranean, Iceland, and selected expedition cruises.</p>
                    </div>
                </div>
            </section>

            {/* ── DISCOVERY EXCURSIONS ── */}
            <section className="sub-discovery-section">
                <div className="sub-discovery-bg" style={{ backgroundImage: `url(${subCoral})` }}></div>
                <div className="sub-discovery-overlay"></div>
                <div className="sub-discovery-content">
                    <span className="sub-discovery-eyebrow">EXCLUSIVE EXPLORATION</span>
                    <h2 className="sub-discovery-heading">Scenic Discovery Excursions Underwater</h2>
                    <div className="sub-discovery-separator"></div>
                    <p className="sub-discovery-note">The submarine experience is part of Scenic's exclusive Discovery Excursions.</p>
                    <p className="sub-discovery-body">Designed to provide access to places beyond the reach of traditional cruise experiences, these carefully planned underwater journeys combine luxury travel with scientific exploration and environmental appreciation.</p>
                    <div className="sub-discovery-points">
                        {[
                            { Icon: Waves, text: 'Guided underwater sightseeing through pristine marine environments.' },
                            { Icon: Fish, text: 'Marine life observation with expert educational commentary.' },
                            { Icon: Globe, text: 'Geological exploration of underwater formations and ecosystems.' },
                            { Icon: Camera, text: 'Exclusive photography opportunities of rare underwater moments.' }
                        ].map(({ Icon, text }, idx) => (
                            <div key={idx} className="sub-discovery-point">
                                <div className="sub-discovery-point-icon"><Icon size={18} /></div>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SAFETY & TECHNOLOGY ── */}
            <section className="sub-safety-section">
                <div className="sub-safety-container">
                    <div className="sub-safety-grid">

                        <div className="sub-safety-text-col">
                            <span className="sub-eyebrow">GUEST PROTECTION</span>
                            <h2 className="sub-section-heading">Safety and Technology</h2>
                            <div className="sub-heading-separator-bar"></div>
                            <p className="sub-safety-lead">Scenic places the highest priority on guest safety during every submarine excursion.</p>
                            <p className="sub-safety-body">Each dive is carefully planned and conducted only when environmental conditions are suitable. Safety features include:</p>

                            <div className="sub-safety-benefits">
                                {[
                                    { Icon: Award, text: 'Certified professional pilots' },
                                    { Icon: FileText, text: 'Comprehensive pre-dive briefings' },
                                    { Icon: Shield, text: 'Advanced life-support systems' },
                                    { Icon: CheckCircle, text: 'Continuous communication with Scenic Eclipse' },
                                    { Icon: Eye, text: 'Regular maintenance and inspections' },
                                    { Icon: Zap, text: 'Emergency backup systems' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="sub-safety-benefit">
                                        <div className="sub-safety-benefit-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sub-safety-image-col">
                            <div className="sub-image-frame sub-image-frame-full">
                                {/* <img src={subSafety} alt="Scenic submarine safety systems" className="sub-frame-img" /> */}
                            </div>
                            <div className="sub-safety-stat-badge">
                                <Shield size={16} />
                                <span>International Aviation Standards</span>
                            </div>
                            <div className="sub-safety-conclusion">
                                <p>Strict international operational standards apply to every dive.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHY TRAVELERS LOVE IT ── */}
            <section className="sub-love-section">
                <div className="sub-love-container">
                    <div className="sub-love-header">
                        <span className="sub-eyebrow">GUEST PERSPECTIVES</span>
                        <h2 className="sub-section-heading" style={{ textAlign: 'center' }}>Why Travelers Love the Scenic Submarine Experience</h2>
                        <div className="sub-heading-separator-bar sub-bar-centered"></div>
                        <p className="sub-love-intro">Guests consistently describe the submarine excursion as one of the highlights of their Scenic expedition.</p>
                    </div>

                    <div className="sub-love-grid">
                        {[
                            { Icon: Sparkles, title: 'Rare underwater access', desc: 'Few travelers experience the ocean depths this way.' },
                            { Icon: Crown, title: 'Luxury expedition experience', desc: 'Combine exploration with premium comfort.' },
                            { Icon: Fish, title: 'Incredible marine life encounters', desc: 'Witness creatures in their natural habitat.' },
                            { Icon: Award, title: 'Professional expedition team', desc: 'Expert guidance from certified specialists.' },
                            { Icon: Eye, title: 'Comfortable viewing environment', desc: 'Panoramic windows, climate control, dry cabin.' },
                            { Icon: GraduationCap, title: 'Educational insights', desc: 'Learn from experienced marine experts.' },
                            { Icon: Camera, title: 'Unforgettable photography', desc: 'Capture memories from an exclusive vantage point.' },
                            { Icon: Heart, title: 'Once-in-a-lifetime opportunity', desc: 'For many travelers, this is a defining moment.' }
                        ].map(({ Icon, title, desc }, idx) => (
                            <div key={idx} className="sub-love-card">
                                <div className="sub-love-card-icon"><Icon size={24} /></div>
                                <h3 className="sub-love-card-title">{title}</h3>
                                <p className="sub-love-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SUBMARINE VS SNORKELING/DIVING ── */}
            <section className="sub-compare-section">
                <div className="sub-compare-container">
                    <div className="sub-compare-header">
                        <span className="sub-eyebrow">VALUE COMPARISON</span>
                        <h2 className="sub-section-heading" style={{ textAlign: 'center' }}>Scenic Submarine Experience vs <br /> Traditional Snorkeling and Diving</h2>
                        <div className="sub-heading-separator-bar sub-bar-centered"></div>
                        <p className="sub-compare-intro">While snorkeling and scuba diving allow guests to enter the water, Scenic's submarine experience offers a completely different level of comfort and accessibility.</p>
                    </div>

                    <div className="sub-compare-grid">
                        {[
                            { Icon: CheckCircle, title: 'No diving certification required', desc: 'Experience the depths without special training.' },
                            { Icon: Wind, title: 'Climate-controlled cabin', desc: 'Comfortable environment maintained throughout.' },
                            { Icon: Heart, title: 'Dry experience without getting wet', desc: 'Explore oceans while staying perfectly dry.' },
                            { Icon: Users, title: 'Suitable for a wider range of travelers', desc: 'From children to seniors can participate safely.' },
                            { Icon: Eye, title: 'Panoramic underwater views', desc: 'Unobstructed 360-degree perspectives of marine life.' },
                            { Icon: Award, title: 'Professional pilot and expert commentary', desc: 'Learn as you explore from certified specialists.' }
                        ].map(({ Icon, title, desc }, idx) => (
                            <div key={idx} className="sub-compare-card">
                                <div className="sub-compare-card-icon"><Icon size={22} /></div>
                                <h3 className="sub-compare-card-title">{title}</h3>
                                <p className="sub-compare-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="sub-compare-footer">
                        <p>The submarine experience is ideal for guests who want to explore underwater environments without the physical demands of diving.</p>
                    </div>
                </div>
            </section>

            {/* ── OUR EXPERT REVIEW ── */}
            <section className="sub-review-section">
                <div className="sub-review-container">
                    <div className="sub-review-header">
                        <span className="sub-eyebrow sub-eyebrow-light">OUR EXPERT REVIEW</span>
                        <h2 className="sub-section-heading sub-white-heading">Our Expert Review</h2>
                        <div className="sub-heading-separator-bar sub-bar-centered sub-separator-white"></div>
                        <p className="sub-review-intro">After evaluating Scenic's submarine program, we believe it is one of the most unique luxury expedition experiences available anywhere in the cruise industry.</p>
                    </div>

                    <div className="sub-review-two-col">
                        <div className="sub-review-col sub-review-col-love">
                            <div className="sub-review-col-header">
                                <Star size={20} />
                                <h3>What We Love</h3>
                            </div>
                            <div className="sub-review-items">
                                {[
                                    'Exclusive underwater exploration access',
                                    'Scenic Neptune™ luxury submersible',
                                    'Exceptional marine life viewing opportunities',
                                    'Comfortable panoramic acrylic cabin',
                                    'Expert pilots and expedition team guidance',
                                    'Outstanding educational marine experience',
                                    'Memorable photography opportunities',
                                    'Truly once-in-a-lifetime adventure moments'
                                ].map((item, idx) => (
                                    <div key={idx} className="sub-review-item">
                                        <CheckCircle size={16} className="sub-review-check" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sub-review-col sub-review-col-consider">
                            <div className="sub-review-col-header sub-review-col-header-alt">
                                <Eye size={20} />
                                <h3>Areas to Consider</h3>
                            </div>
                            <div className="sub-review-items">
                                {[
                                    'Additional charges apply beyond cruise fare',
                                    'Availability depends on itinerary and destination',
                                    'Weather and sea conditions may affect operations',
                                    'Very limited seating means advance reservations are essential'
                                ].map((item, idx) => (
                                    <div key={idx} className="sub-review-item sub-review-item-alt">
                                        <ChevronRight size={16} className="sub-review-chevron" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="sub-review-verdict">
                                <p>Overall, the Scenic Submarine Experience is an extraordinary addition to any Scenic Eclipse voyage and offers guests an unforgettable perspective beneath the ocean's surface.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY TRIPS & SHIPS ── */}

            {/* EXPERT INSIGHT — sub- isolated, tight, Celebrity ref */}
            <section id="sub-growth-insight" className="sub-expert-insight-section">
                <div className="sub-expert-insight-container">
                    <div className="sub-expert-portrait-panel">
                        <div className="sub-expert-img-frame">
                            <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="sub-expert-img" />
                            <div className="sub-expert-img-overlay"></div>
                            <span className="sub-expert-badge">EXPERT ADVISOR</span>
                        </div>
                        <div className="sub-expert-stats-strip">
                            <div className="sub-expert-stat-box">
                                <div className="sub-expert-stat-num">40+</div>
                                <div className="sub-expert-stat-lbl">Years Experience</div>
                            </div>
                            <div className="sub-expert-stat-box">
                                <div className="sub-expert-stat-num">121+</div>
                                <div className="sub-expert-stat-lbl">Countries Visited</div>
                            </div>
                        </div>
                    </div>

                    <div className="sub-expert-content-panel">
                        <div className="sub-expert-eyebrow-row">
                            <Award size={14} />
                            <span className="sub-eyebrow">Expert Insight from Angela Hughes</span>
                        </div>
                        <h2 className="sub-editorial-title">
                            Why Modern Luxury Travelers Are Choosing Scenic
                        </h2>
                        <div className="sub-heading-separator-bar"></div>

                        <div className="sub-expert-quote-card">
                            <span className="sub-expert-quote-mark">"</span>
                            <p className="sub-expert-quote-text sub-expert-quote">
                                According to Angela Hughes, many travelers are initially attracted to Scenic because of its ultra-luxury discovery yachts — but ultimately fall in love with the all-inclusive onboard expedition experience.
                            </p>
                        </div>

                        <div className="sub-expert-priorities">
                            <h5 className="sub-priorities-title">Scenic travelers consistently prioritize:</h5>
                            <div className="sub-expert-pills">
                                {[
                                    'Polar discovery yachting',
                                    'Truly all-inclusive luxury',
                                    'Butler service for every suite',
                                    'Helicopter & submarine features',
                                    'Up to 10 dining experiences',
                                    'Immersive Zodiac excursions'
                                ].map((pill) => (
                                    <span key={pill} className="sub-expert-pill">
                                        <CheckCircle size={12} />
                                        <span>{pill}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="sub-editorial-text sub-expert-quote">
                            As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers compare luxury cruise experiences realistically — based on real-world expertise rather than generic online recommendations.
                        </p>

                        <div className="sub-expert-footer-bio">
                            <p className="sub-expert-bio">Her expertise spans ultra-luxury yachting, polar expeditions, butler services, luxury cruise planning and custom expedition travel — backed by 40+ years and 121+ countries visited.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── FINAL THOUGHTS ── */}
            <section className="sub-final-section">
                <div className="sub-final-bg"></div>
                <div className="sub-final-container">

                    <div className="sub-final-eyebrow-row">
                        <Gem size={18} />
                        <span className="sub-final-eyebrow-text">FINAL THOUGHTS</span>
                    </div>

                    <h2 className="sub-final-heading">Descend Into Wonder<br />In Scenic Neptune™</h2>
                    <div className="sub-final-separator"></div>

                    <div className="sub-final-card">
                        <p className="sub-final-body">The Scenic Submarine Experience is far more than an optional add-on — it is a transformation.</p>
                        <p className="sub-final-body sub-final-emphasis">When you descend beneath the waves, you leave the familiar world behind.</p>
                        <p className="sub-final-body">What unfolds is a journey into ecosystems most people will never experience. Coral gardens. Kelp forests. Ancient shipwrecks. Marine life that has existed for millions of years in an environment few humans ever visit.</p>
                        <p className="sub-final-body">For expedition travelers who believe the journey should exceed every expectation, few experiences deliver more powerfully than the moment you truly understand how vast and beautiful the ocean is.</p>
                    </div>

                    <div className="sub-final-conclusion">
                        <div className="sub-final-conclusion-line"></div>
                        <p className="sub-final-stmt">And few ships in the world make that possible the way Scenic Eclipse does.</p>
                        <div className="sub-final-conclusion-line"></div>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="sub-faq-main-section">
                <div className="sub-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="sub-section-heading">Frequently Asked Questions</h2>
                        <div className="sub-heading-separator-bar sub-bar-centered"></div>
                    </div>
                    <div className="sub-faq-list-wrapper">
                        {subFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="sub-faq-individual-item"
                                onClick={() => subToggleFaq(index)}
                            >
                                <div className="sub-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="sub-faq-toggle-icon">{subActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {subActiveFaq === index && (
                                    <p className="sub-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="sub-cta-section">
                <div className="sub-cta-aurora-glow"></div>
                <div className="sub-cta-ice-crystal sub-cta-crystal-1"></div>
                <div className="sub-cta-ice-crystal sub-cta-crystal-2"></div>
                <div className="sub-cta-ice-crystal sub-cta-crystal-3"></div>
                <div className="sub-cta-grid-lines"></div>

                <div className="sub-cta-content">
                    <div className="sub-cta-compass-ring">
                        <Waves size={28} />
                    </div>

                    <span className="sub-cta-eyebrow">YOUR UNDERWATER EXPEDITION STARTS HERE</span>
                    <h2 className="sub-cta-title">Ready to Explore the Depths Aboard Scenic Eclipse?</h2>
                    <div className="sub-cta-bar"></div>
                    <p className="sub-cta-subtitle">
                        A well-planned Scenic Eclipse voyage &mdash; with submarine Discovery Experiences reserved in advance &mdash; can deliver perspectives that redefine what luxury expedition travel means.
                    </p>

                    <div className="sub-cta-cards-grid">
                        {[
                            { icon: Ship, text: 'Scenic Eclipse expeditions' },
                            { icon: Waves, text: 'Submarine excursion guidance' },
                            { icon: Crown, text: 'Luxury expedition planning' },
                            { icon: Gem, text: 'Custom cruise packages' }
                        ].map(({ icon: Icon, text }, i) => (
                            <div key={i} className="sub-cta-card">
                                <div className="sub-cta-card-icon"><Icon size={20} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="sub-cta-closing">
                        Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury expedition expertise.
                    </p>

                    <div className="sub-cta-actions">
                        <Link to="/contact" className="sub-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="sub-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ScenicSubmarineExperience