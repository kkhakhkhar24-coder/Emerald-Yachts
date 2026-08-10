import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import './UniworldFamilyCruises.css'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Globe, GraduationCap, BookOpen,
    Smile, Leaf, Eye, Shield, Ticket, Briefcase, Music,
    FileText, Map
} from 'lucide-react'

export default function UniworldFamilyCruises() {
    const [ufcCurrentHero, setUfcCurrentHero] = useState(0)
    const ufcHeroImages = [
        'https://placehold.co/1920x800/162d50/ffffff?text=Family+River+Cruise',
        'https://placehold.co/1920x800/1a3a5c/ffffff?text=Generations+Collection',
        'https://placehold.co/1920x800/0f1c2e/ffffff?text=Multigenerational+Travel'
    ]

    useEffect(() => {
        const ufcTimer = setInterval(() => {
            setUfcCurrentHero(prev => (prev + 1) % ufcHeroImages.length)
        }, 5000)
        return () => clearInterval(ufcTimer)
    }, [ufcHeroImages.length])

    const [ufcActiveFaq, setUfcActiveFaq] = useState(null)
    const ufcToggleFaq = i => setUfcActiveFaq(ufcActiveFaq === i ? null : i)

    const ufcFaqs = [
        { question: 'What is the Uniworld Generations Collection?', answer: 'It is a selection of family-focused departures designed for multigenerational travelers with activities and experiences suitable for different age groups.' },
        { question: 'Are Uniworld River Cruises suitable for children?', answer: 'Yes. Selected Generations Collection sailings are designed specifically for families with children.' },
        { question: 'What is the minimum age for children?', answer: 'Minimum age requirements vary by itinerary and departure, so check your selected sailing before booking.' },
        { question: 'Which Uniworld itinerary is best for families?', answer: 'The Danube and Rhine are among the most popular family-friendly itineraries.' },
        { question: 'Are children\'s activities included?', answer: 'Selected family departures include activities designed for younger guests.' },
        { question: 'Are family cabins available?', answer: 'Suites and nearby cabins can accommodate families, but availability is limited.' },
        { question: 'Is dining suitable for children?', answer: 'Yes. Flexible dining and child-friendly meal options are generally available.' },
        { question: 'Are excursions included?', answer: 'Yes. Guided shore excursions are typically included in the cruise fare.' },
        { question: 'Is Wi-Fi available onboard?', answer: 'Yes. Complimentary Wi-Fi is generally included.' },
        { question: 'Are grandparents welcome on Generations Collection cruises?', answer: 'Yes. These sailings are specifically designed for multigenerational family travel.' },
        { question: 'Are there babysitting services?', answer: 'Babysitting services are generally not available onboard.' },
        { question: 'What should families pack?', answer: 'Pack comfortable walking shoes, weather-appropriate clothing, medications, travel documents, and a day bag.' },
        { question: 'Can dietary restrictions be accommodated?', answer: 'Yes. Most dietary requirements can be accommodated with advance notice.' },
        { question: 'When should families book?', answer: 'Booking six to twelve months in advance provides the best selection of cabins and departures.' },
        { question: 'Is the Generations Collection worth it?', answer: 'Families seeking cultural experiences, luxury accommodations, and educational travel often find it an excellent choice.' }
    ]

    const ufcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/family-cruises/",
                "name": "Uniworld Family River Cruises and Generations Collection",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/family-cruises/",
                "description": "Complete guide to Uniworld Family River Cruises and the Generations Collection, including family-friendly itineraries, activities, accommodations, and travel tips.",
                "inLanguage": "en-US"
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Article",
                "headline": "Uniworld Family River Cruises and Generations Collection",
                "author": { "@id": "https://www.tripsandships.com/#organization" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/uniworld-river-cruises/family-cruises/" },
                "datePublished": "2026-08-08",
                "dateModified": "2026-08-08"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Family Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/family-cruises/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is the Uniworld Generations Collection?", "acceptedAnswer": { "@type": "Answer", "text": "It is a selection of family-focused departures designed for multigenerational travelers with activities and experiences suitable for different age groups." } },
                    { "@type": "Question", "name": "Are Uniworld River Cruises suitable for children?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Selected Generations Collection sailings are designed specifically for families with children." } },
                    { "@type": "Question", "name": "What is the minimum age for children?", "acceptedAnswer": { "@type": "Answer", "text": "Minimum age requirements vary by itinerary and departure, so check your selected sailing before booking." } },
                    { "@type": "Question", "name": "Which Uniworld itinerary is best for families?", "acceptedAnswer": { "@type": "Answer", "text": "The Danube and Rhine are among the most popular family-friendly itineraries." } },
                    { "@type": "Question", "name": "Are children's activities included?", "acceptedAnswer": { "@type": "Answer", "text": "Selected family departures include activities designed for younger guests." } },
                    { "@type": "Question", "name": "Are family cabins available?", "acceptedAnswer": { "@type": "Answer", "text": "Suites and nearby cabins can accommodate families, but availability is limited." } },
                    { "@type": "Question", "name": "Is dining suitable for children?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Flexible dining and child-friendly meal options are generally available." } },
                    { "@type": "Question", "name": "Are excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Guided shore excursions are typically included in the cruise fare." } },
                    { "@type": "Question", "name": "Is Wi-Fi available onboard?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Complimentary Wi-Fi is generally included." } },
                    { "@type": "Question", "name": "Are grandparents welcome on Generations Collection cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. These sailings are specifically designed for multigenerational family travel." } },
                    { "@type": "Question", "name": "Are there babysitting services?", "acceptedAnswer": { "@type": "Answer", "text": "Babysitting services are generally not available onboard." } },
                    { "@type": "Question", "name": "What should families pack?", "acceptedAnswer": { "@type": "Answer", "text": "Pack comfortable walking shoes, weather-appropriate clothing, medications, travel documents, and a day bag." } },
                    { "@type": "Question", "name": "Can dietary restrictions be accommodated?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most dietary requirements can be accommodated with advance notice." } },
                    { "@type": "Question", "name": "When should families book?", "acceptedAnswer": { "@type": "Answer", "text": "Booking six to twelve months in advance provides the best selection of cabins and departures." } },
                    { "@type": "Question", "name": "Is the Generations Collection worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Families seeking cultural experiences, luxury accommodations, and educational travel often find it an excellent choice." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Family River Cruises Guide</title>
                <meta name="title" content="Uniworld Family River Cruises Guide" />
                <meta name="description" content="Discover Uniworld Family River Cruises and the Generations Collection. Learn about family-friendly itineraries, activities, cabins, dining, and travel tips." />
                <meta name="keywords" content="Uniworld Family River Cruises, Uniworld Generations Collection, family river cruises, multigenerational river cruises, Uniworld with kids, luxury family cruises, European family river cruise, Uniworld family vacations" />
                                <script type="application/ld+json">{JSON.stringify(ufcSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {ufcHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${ufcCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Uniworld River Cruises · Family Travel Guide</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Uniworld Family River Cruises and Generations Collection
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Discover how Uniworld brings families together through luxury river cruising, cultural immersion, and shared experiences across Europe's most beautiful waterways.
                    </p>
                </div>
            </section>

            {/* ── INTRO / OVERVIEW ── */}
            <section className="ufc-intro-section">
                <div className="ufc-intro-container">
                    <div className="ufc-intro-grid">
                        <div className="ufc-intro-text-col">
                            <span className="ufc-eyebrow">FAMILY RIVER CRUISING</span>
                            <h2 className="medi-section-heading">A New Way for Families to Explore Europe Together</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ufc-intro-lead">River cruising is no longer just for couples and retirees.</p>
                            <p className="ufc-intro-body">Through its Generations Collection, Uniworld Boutique River Cruises offers selected departures designed specifically for families, bringing together luxury accommodations, immersive cultural experiences, and activities that appeal to travelers of different ages.</p>
                            <p className="ufc-intro-body">Whether you're planning a multigenerational vacation with grandparents, parents, and children or simply looking for a unique family holiday in Europe, this guide explains how Uniworld Family River Cruises work, what to expect onboard, and how to choose the best itinerary.</p>
                        </div>
                        <div className="ufc-intro-image-col">
                            <div className="ufc-image-frame">
                                <img src="https://placehold.co/600x400/162d50/ffffff?text=Family+Cruise" alt="Family enjoying a Uniworld river cruise" className="ufc-frame-img" />
                                <div className="ufc-frame-overlay"></div>
                                <div className="ufc-image-badge">
                                    <Users size={13} />
                                    <span>Designed for Multigenerational Travel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS GENERATIONS COLLECTION ── */}
            <section className="ufc-generations-section">
                <div className="ufc-generations-container">
                    <div className="ufc-generations-header">
                        <span className="ufc-eyebrow ufc-eyebrow-light">THE GENERATIONS COLLECTION</span>
                        <h2 className="medi-section-heading ufc-white-heading">What Is the Uniworld Generations Collection?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered ufc-separator-white"></div>
                    </div>
                    <p className="ufc-generations-intro">The Generations Collection is a selection of family-focused departures available on certain Uniworld itineraries during school holiday periods.</p>
                    <p className="ufc-generations-sub">These sailings are designed to balance luxury travel with engaging experiences for younger guests while maintaining the high service standards Uniworld is known for.</p>

                    <div className="ufc-generations-features">
                        {[
                            { Icon: Compass, label: 'Family-friendly shore excursions' },
                            { Icon: Sparkles, label: 'Kid-focused activities' },
                            { Icon: Utensils, label: 'Flexible dining options' },
                            { Icon: Globe, label: 'Interactive cultural experiences' },
                            { Icon: Smile, label: 'Age-appropriate entertainment' },
                            { Icon: Heart, label: 'Family-oriented programming' }
                        ].map(({ Icon, label }, idx) => (
                            <div key={idx} className="ufc-generation-feature">
                                <div className="ufc-generation-feature-icon"><Icon size={20} /></div>
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>

                    <p className="ufc-generations-note">Availability varies by itinerary and departure date.</p>
                </div>
            </section>

            {/* ── WHO ARE THESE CRUISES BEST FOR ── */}
            <section className="ufc-bestfor-section">
                <div className="ufc-bestfor-container">
                    <div className="ufc-bestfor-grid">
                        <div className="ufc-bestfor-text-col">
                            <span className="ufc-eyebrow">IDEAL GUESTS</span>
                            <h2 className="medi-section-heading">Who Are These Cruises Best For?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ufc-bestfor-lead">The Generations Collection is ideal for:</p>

                            <div className="ufc-bestfor-list">
                                {[
                                    { Icon: Users, text: 'Families with school-age children' },
                                    { Icon: Heart, text: 'Grandparents traveling with grandchildren' },
                                    { Icon: BookOpen, text: 'Parents seeking educational vacations' },
                                    { Icon: Globe, text: 'Multigenerational family reunions' },
                                    { Icon: Award, text: 'Families celebrating milestones' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ufc-bestfor-item">
                                        <div className="ufc-bestfor-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="ufc-bestfor-note">Rather than offering amusement parks or water slides, these cruises emphasize cultural discovery and shared experiences.</p>
                        </div>
                        <div className="ufc-bestfor-image-col">
                            <div className="ufc-image-frame">
                                <img src="https://placehold.co/600x400/1a3a5c/ffffff?text=Family+Travel" alt="Multigenerational family on a river cruise" className="ufc-frame-img" />
                                <div className="ufc-frame-overlay"></div>
                            </div>
                            <div className="ufc-bestfor-conclusion">
                                <p>These cruises bring families together through meaningful shared experiences across Europe's most beautiful waterways.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAMILY-FRIENDLY DESTINATIONS ── */}
            <section className="ufc-destinations-section">
                <div className="ufc-destinations-container">
                    <div className="ufc-destinations-header">
                        <span className="ufc-eyebrow">POPULAR ITINERARIES</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Family-Friendly Destinations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="ufc-destinations-intro">Several European itineraries are particularly well suited for families.</p>
                    </div>

                    <div className="ufc-destinations-grid">
                        {[
                            {
                                river: 'Danube River',
                                img: 'https://placehold.co/400x260/162d50/ffffff?text=Danube+River',
                                highlights: ['Vienna', 'Budapest', 'Bratislava', 'Medieval castles', 'Interactive museums', 'Scenic cycling routes']
                            },
                            {
                                river: 'Rhine River',
                                img: 'https://placehold.co/400x260/1a3a5c/ffffff?text=Rhine+River',
                                highlights: ['Fairy-tale castles', 'Rhine Gorge', 'Historic villages', 'Chocolate museums', 'Cable cars', 'Riverfront walks']
                            },
                            {
                                river: 'Seine River',
                                img: 'https://placehold.co/400x260/0f1c2e/ffffff?text=Seine+River',
                                highlights: ['Paris', 'Impressionist art', 'Normandy', 'Gardens', 'French culture', 'History']
                            },
                            {
                                river: 'Venice Lagoon',
                                img: 'https://placehold.co/400x260/2a4a6b/ffffff?text=Venice+Lagoon',
                                highlights: ['Glass-blowing demonstrations', 'Colorful island visits', 'Gondola-filled canals', 'Historic architecture']
                            }
                        ].map(({ river, img, highlights }, idx) => (
                            <div key={idx} className="ufc-destination-card">
                                <div className="ufc-destination-img-wrap">
                                    <img src={img} alt={`${river} family cruise`} className="ufc-destination-img" />
                                    <div className="ufc-destination-img-overlay"></div>
                                    <h3 className="ufc-destination-title">{river}</h3>
                                </div>
                                <div className="ufc-destination-body">
                                    <ul className="ufc-destination-list">
                                        {highlights.map((item, iIdx) => (
                                            <li key={iIdx} className="ufc-destination-item">
                                                <ChevronRight size={13} className="ufc-destination-chevron" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EDUCATIONAL EXPERIENCES ── */}
            <section className="ufc-education-section">
                <div className="ufc-education-container">
                    <div className="ufc-education-grid">
                        <div className="ufc-education-image-col">
                            <div className="ufc-image-frame">
                                <img src="https://placehold.co/600x400/162d50/ffffff?text=Educational+Travel" alt="Children learning on a Uniworld excursion" className="ufc-frame-img" />
                                <div className="ufc-frame-overlay"></div>
                            </div>
                            <div className="ufc-education-conclusion">
                                <p>These experiences create meaningful learning opportunities outside the classroom.</p>
                            </div>
                        </div>
                        <div className="ufc-education-text-col">
                            <span className="ufc-eyebrow">LEARNING THROUGH TRAVEL</span>
                            <h2 className="medi-section-heading">Educational Experiences</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ufc-education-lead">One of the biggest advantages of family river cruising is learning through travel.</p>
                            <p className="ufc-education-body">Children can experience:</p>
                            <div className="ufc-education-pillars">
                                {[
                                    { Icon: Compass, label: 'Local history' },
                                    { Icon: BookOpen, label: 'European culture' },
                                    { Icon: Sparkles, label: 'Traditional crafts' },
                                    { Icon: Utensils, label: 'Regional cuisine' },
                                    { Icon: Map, label: 'Historical landmarks' },
                                    { Icon: Award, label: 'UNESCO World Heritage Sites' }
                                ].map(({ Icon, label }, idx) => (
                                    <div key={idx} className="ufc-education-pillar">
                                        <div className="ufc-education-pillar-icon"><Icon size={18} /></div>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ACTIVITIES FOR YOUNGER GUESTS ── */}
            <section className="ufc-activities-section">
                <div className="ufc-activities-container">
                    <div className="ufc-activities-header">
                        <span className="ufc-eyebrow ufc-eyebrow-light">YOUNG EXPLORERS</span>
                        <h2 className="medi-section-heading ufc-white-heading">Activities for Younger Guests</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered ufc-separator-white"></div>
                        <p className="ufc-activities-intro">Depending on the sailing, children may enjoy:</p>
                    </div>

                    <div className="ufc-activities-cards">
                        {[
                            { Icon: Compass, label: 'Treasure hunts', desc: 'Exciting discovery activities at each port of call.' },
                            { Icon: Utensils, label: 'Junior cooking experiences', desc: 'Hands-on culinary workshops inspired by local cuisine.' },
                            { Icon: MapPin, label: 'Interactive excursions', desc: 'Guided tours designed to engage younger travelers.' },
                            { Icon: Sparkles, label: 'Local cultural workshops', desc: 'Crafts and activities connecting children to local traditions.' },
                            { Icon: Smile, label: 'Games', desc: 'Age-appropriate entertainment and group activities.' },
                            { Icon: Users, label: 'Family activities', desc: 'Shared experiences designed for the whole family.' },
                            { Icon: Music, label: 'Destination-themed entertainment', desc: 'Cultural performances and themed evenings.' }
                        ].map(({ Icon, label, desc }, idx) => (
                            <div key={idx} className="ufc-activity-card">
                                <div className="ufc-activity-card-icon"><Icon size={22} /></div>
                                <h3 className="ufc-activity-card-title">{label}</h3>
                                <p className="ufc-activity-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="ufc-activities-note">Programs vary by itinerary and departure.</p>
                </div>
            </section>

            {/* ── DINING FOR FAMILIES ── */}
            <section className="ufc-dining-section">
                <div className="ufc-dining-container">
                    <div className="ufc-dining-grid">
                        <div className="ufc-dining-text-col">
                            <span className="ufc-eyebrow">ONBOARD DINING</span>
                            <h2 className="medi-section-heading">Dining for Families</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ufc-dining-lead">Uniworld's dining experience is designed to accommodate travelers of all ages.</p>
                            <p className="ufc-dining-body">Families can typically expect:</p>

                            <div className="ufc-dining-features">
                                {[
                                    { Icon: Users, text: 'Flexible seating' },
                                    { Icon: Heart, text: 'Child-friendly meal options' },
                                    { Icon: Utensils, text: 'Regional cuisine' },
                                    { Icon: Leaf, text: 'Fresh ingredients' },
                                    { Icon: Sparkles, text: 'Desserts' },
                                    { Icon: CheckCircle, text: 'Dietary accommodations when requested' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ufc-dining-feature">
                                        <div className="ufc-dining-feature-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ufc-dining-image-col">
                            <div className="ufc-image-frame">
                                <img src="https://placehold.co/600x400/1a3a5c/ffffff?text=Family+Dining" alt="Family enjoying dinner aboard a Uniworld River Cruise" className="ufc-frame-img" />
                                <div className="ufc-frame-overlay"></div>
                            </div>
                            <div className="ufc-dining-note">
                                <Sparkles size={16} className="ufc-dining-note-icon" />
                                <span>Parents are encouraged to notify the cruise line of dietary needs before departure.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CABINS FOR FAMILIES ── */}
            <section className="ufc-cabins-section">
                <div className="ufc-cabins-container">
                    <div className="ufc-cabins-header">
                        <span className="ufc-eyebrow">ACCOMMODATIONS</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Cabins for Families</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="ufc-cabins-intro">Accommodation options depend on the ship.</p>
                    </div>
 
                    <div className="ufc-cabins-table-wrap">
                        <table className="ufc-cabins-table">
                            <thead>
                                <tr>
                                    <th>Family Size</th>
                                    <th>Recommended Accommodation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="ufc-cabin-label">Two guests</td>
                                    <td className="ufc-cabin-value">Deluxe Stateroom</td>
                                </tr>
                                <tr>
                                    <td className="ufc-cabin-label">Parent and child</td>
                                    <td className="ufc-cabin-value">French Balcony Cabin</td>
                                </tr>
                                <tr>
                                    <td className="ufc-cabin-label">Three guests</td>
                                    <td className="ufc-cabin-value">Suite (where available)</td>
                                </tr>
                                <tr>
                                    <td className="ufc-cabin-label">Larger families</td>
                                    <td className="ufc-cabin-value">Multiple adjoining or nearby cabins</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
 
                    <div className="ufc-cabins-note">
                        <Sparkles size={16} className="ufc-cabins-note-icon" />
                        <span>Because river ships are smaller than ocean cruise ships, booking early provides the best selection.</span>
                    </div>
                </div>
            </section>

            {/* ── MINIMUM AGE ── */}
            <section className="ufc-age-section">
                <div className="ufc-age-container">
                    <div className="ufc-age-card">
                        <div className="ufc-age-icon"><Ticket size={28} /></div>
                        <h3 className="ufc-age-heading">Is There a Minimum Age?</h3>
                        <p className="ufc-age-body">Minimum age policies may vary depending on the itinerary and departure.</p>
                        <p className="ufc-age-body">Some family-focused sailings are specifically designed for younger travelers, while standard departures may have different age recommendations.</p>
                        <p className="ufc-age-highlight">Always review the age requirements for your chosen itinerary before booking.</p>
                    </div>
                </div>
            </section>

            {/* ── WHY FAMILIES CHOOSE RIVER CRUISES ── */}
            <section className="ufc-why-section">
                <div className="ufc-why-container">
                    <div className="ufc-why-grid">
                        <div className="ufc-why-text-col">
                            <span className="ufc-eyebrow">WHY RIVER CRUISING</span>
                            <h2 className="medi-section-heading">Why Families Choose River Cruises</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ufc-why-lead">Compared with large ocean cruises, river cruising offers:</p>

                            <div className="ufc-why-pillars">
                                {[
                                    { Icon: Ship, label: 'Smaller ships' },
                                    { Icon: Users, label: 'Fewer crowds' },
                                    { Icon: MapPin, label: 'Walkable destinations' },
                                    { Icon: Compass, label: 'Convenient city-center docking' },
                                    { Icon: CheckCircle, label: 'Included excursions' },
                                    { Icon: Globe, label: 'Cultural experiences' },
                                    { Icon: Award, label: 'Personalized service' }
                                ].map(({ Icon, label }, idx) => (
                                    <div key={idx} className="ufc-why-pillar">
                                        <div className="ufc-why-pillar-icon"><Icon size={18} /></div>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ufc-why-image-col">
                            <div className="ufc-image-frame">
                                <img src="https://placehold.co/600x400/162d50/ffffff?text=River+Cruise" alt="Family enjoying a Uniworld river cruise experience" className="ufc-frame-img" />
                                <div className="ufc-frame-overlay"></div>
                            </div>
                            <div className="ufc-why-conclusion">
                                <p>Parents often appreciate the relaxed pace and simplified travel logistics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="ufc-takeaways-section">
                <div className="ufc-takeaways-container">
                    <div className="ufc-takeaways-header">
                        <Gem size={18} />
                        <span className="ufc-takeaways-eyebrow">KEY TAKEAWAYS</span>
                    </div>
                    <h2 className="ufc-takeaways-heading">What to Remember</h2>
                    <div className="ufc-takeaways-separator"></div>

                    <div className="ufc-takeaways-list">
                        {[
                            'The Generations Collection offers selected family-focused departures.',
                            'Activities are designed to engage both children and adults.',
                            'Popular itineraries include the Danube, Rhine, Seine, and Venice Lagoon.',
                            'Educational excursions are a highlight of the experience.',
                            'Family accommodations are limited, making early booking important.',
                            'Dining is flexible and can accommodate many dietary requirements.',
                            'River cruising offers a relaxed alternative to traditional family vacations.'
                        ].map((item, idx) => (
                            <div key={idx} className="ufc-takeaway-item">
                                <CheckCircle size={18} className="ufc-takeaway-check" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TIPS FOR PLANNING ── */}
            <section className="ufc-tips-section">
                <div className="ufc-tips-container">
                    <div className="ufc-tips-grid">
                        <div className="ufc-tips-text-col">
                            <span className="ufc-eyebrow">PLANNING ADVICE</span>
                            <h2 className="medi-section-heading">Tips for Planning a Family Cruise</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ufc-tips-lead">Before booking:</p>

                            <div className="ufc-tips-list">
                                {[
                                    { Icon: Calendar, text: 'Travel during school holidays if possible.' },
                                    { Icon: CheckCircle, text: 'Reserve cabins early.' },
                                    { Icon: MapPin, text: 'Review excursion activity levels.' },
                                    { Icon: Sun, text: 'Pack comfortable walking shoes.' },
                                    { Icon: Compass, text: 'Bring lightweight layers.' },
                                    { Icon: FileText, text: 'Check passport validity.' },
                                    { Icon: Shield, text: 'Purchase travel insurance.' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ufc-tip-item">
                                        <div className="ufc-tip-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ufc-tips-image-col">
                            <div className="ufc-image-frame">
                                <img src="https://placehold.co/600x400/1a3a5c/ffffff?text=Planning+Tips" alt="Family planning their river cruise vacation" className="ufc-frame-img" />
                                <div className="ufc-frame-overlay"></div>
                            </div>
                            <div className="ufc-tips-note">
                                <Sparkles size={16} className="ufc-tips-note-icon" />
                                <span>Advance planning helps ensure a smooth family vacation.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS IT WORTH IT ── */}
            <section className="ufc-worth-section">
                <div className="ufc-worth-container">
                    <div className="ufc-worth-card">
                        <div className="ufc-worth-icon"><Award size={32} /></div>
                        <h2 className="ufc-worth-heading">Is the Generations Collection Worth It?</h2>
                        <div className="ufc-worth-separator"></div>
                        <p className="ufc-worth-body">Families seeking educational travel, cultural immersion, and luxury accommodations often find the Generations Collection to be an excellent alternative to traditional resort vacations.</p>
                        <p className="ufc-worth-body">Instead of spending most of the trip onboard, guests enjoy exploring multiple destinations while returning each evening to the comfort of a boutique floating hotel.</p>
                    </div>
                </div>
            </section>

            {/* ── INTERNAL LINKS ── */}
            <section className="ufc-links-section">
                <div className="ufc-links-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Explore More Uniworld Guides</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="ufc-links-grid">
                        {[
                            { text: 'First-Time Uniworld River Cruise Guide', url: '/uniworld-river-cruises/first-time-guide/' },
                            { text: 'Best Uniworld River Cruise Itineraries', url: '/uniworld-river-cruises/best-itineraries/' },
                            { text: 'What Is Included on a Uniworld River Cruise', url: '/uniworld-river-cruises/whats-included/' },
                            { text: 'Uniworld Ships and Suites', url: '/uniworld-river-cruises/ships-suites/' },
                            { text: 'Best Uniworld Cabins', url: '/uniworld-river-cruises/best-cabins/' },
                            { text: 'Uniworld Food and Dining', url: '/uniworld-river-cruises/food-dining/' }
                        ].map(({ text, url }, idx) => (
                            <Link key={idx} to={url} className="ufc-link-card">
                                <span>{text}</span>
                                <ArrowRight size={16} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="ufc-expert-insight-section">
                <div className="ufc-expert-insight-container">

                    <div className="ufc-expert-portrait-panel">
                        <div className="ufc-expert-img-container">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - Multigenerational Travel Expert" />
                        </div>
                        <div className="ufc-expert-stats-strip">
                            <div className="ufc-expert-stat-box">
                                <h4>40+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="ufc-expert-stat-box">
                                <h4>121+</h4>
                                <p>Countries Visited</p>
                            </div>
                        </div>
                    </div>

                    <div className="ufc-expert-content-panel">
                        <span className="ufc-eyebrow">MEET THE CEO</span>
                        <h2 className="ufc-section-heading">Insight from Angela Hughes</h2>
                        <div className="ufc-heading-separator-bar"></div>

                        <p className="ufc-expert-quote">
                            "River cruises are not just for couples. During select summer and holiday breaks, Uniworld's Generations Collection brings families together with dedicated kids' guides, hands-on shore activities, and specialized menus. It's the ultimate multigenerational travel experience without the massive crowds."
                        </p>

                        <div className="ufc-expert-priorities">
                            <h5>Family Cruise Priorities Matrix:</h5>
                            <div className="ufc-expert-pills">
                                {['Generations Program Sailings', 'Connecting &amp; Family Suites', 'Dedicated Family Hosts', 'Kid-Friendly Shore Tours', 'Young Travelers Menus', 'Onboard Activity Zones'].map(pill => (
                                    <span key={pill} className="ufc-expert-pill">
                                        <Anchor size={12} />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="ufc-expert-bio">
                            As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes helps multigenerational families plan luxury voyages that bridge the gap between grand-parents and grand-kids.
                        </p>
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
                        {ufcFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => ufcToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{ufcActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {ufcActiveFaq === index && (
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
                        <h2 className="medi-cta-heading-white">Plan Your Family's Next Adventure</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">
                            Plan an unforgettable family vacation with Uniworld's Generations Collection by comparing itineraries, choosing family-friendly accommodations, and booking early for the best availability.
                        </p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help families find the perfect river cruise experience.
                        </p>

                        <div className="medi-cta-button-group">
                            <Link to='/contact' className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore Family Cruises
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
